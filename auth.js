// auth.js
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// --- AYARLAR ---
const OTURUM_SURESI = 30000;  
const DENEME_OTURUM_SURESI = 10800000; // YENİ: 1 dakika = 60.000 ms
// KRİTİK: Yalnızca bu email adresine sahip kullanıcı 'admin' rolü alacak.
const ADMIN_EMAIL = "admin@filmoloji.com"; 
const DEFAULT_DOMAIN = "@filmoloji.com"; 
const DENEME_YAPILDI_KEY = 'trial_used'; // YENİ: Deneme hakkı kontrolü için

// --- SÜRE YENİLEME ---
export function suteyiYenile() {
    // Normal ve Admin kullanıcılar için oturum süresini 30 saniye uzatır (keep-alive)
    localStorage.setItem('oturum_bitis', Date.now() + OTURUM_SURESI);
}

// --- ÇIKIŞ YAPMA ---
export function doLogout() {
    localStorage.removeItem('oturum_bitis');
    localStorage.removeItem('kullanici_rolu');
    
    // Oturum yenileme intervalini temizle
    if (window.authInterval) {
        clearInterval(window.authInterval);
        window.authInterval = null;
    }
    
    if (window.auth) {
        signOut(window.auth); 
    }
    
    if (!window.location.href.includes('login.html')) {
        window.location.href = "login.html";
    }
}

// --- YETKİ KONTROLÜ ---
export function checkAuth(requiredLevel) {
    const bitisZamani = localStorage.getItem('oturum_bitis');
    const userRole = localStorage.getItem('kullanici_rolu'); 

    // 1. Oturum yoksa veya süre dolmuşsa -> LOGOUT yap
    if (!bitisZamani || !userRole || Date.now() > parseInt(bitisZamani)) {
        window.doLogout(); 
        return;
    }

    // 2. KRİTİK KONTROL: Admin Sayfasına (requiredLevel='admin') admin olmayan biri girmeye çalışıyorsa
    if (requiredLevel === 'admin' && userRole !== 'admin') {
        alert("Bu sayfaya erişim yetkiniz yok! Yönlendiriliyorsunuz.");
        window.location.href = "premium.html"; // Yetkisiz ise kullanıcı sayfasına at
        return;
    }

    // 3. Oturum süresini yenile
    // Deneme kullanıcılarının oturumu YENİLENMEZ.
    if (userRole !== 'trial_user') {
        suteyiYenile();
        if (!window.authInterval) {
            window.authInterval = setInterval(suteyiYenile, 5000);
        }
    } 
}

// --- GİRİŞ İŞLEMİ (Firebase Doğrulaması) ---
export async function performLogin(username, password) { 
    if (!username || !password) {
        return { success: false };
    }
    
    const finalEmail = username.toLowerCase() + DEFAULT_DOMAIN; 
    
    try {
        const auth = window.auth; 
        
        await signInWithEmailAndPassword(auth, finalEmail, password);
        
        let userRole = 'user';
        
        // KRİTİK ROL ATAMASI
        if (finalEmail === ADMIN_EMAIL.toLowerCase()) {
            userRole = 'admin';
        }
        
        localStorage.setItem('kullanici_rolu', userRole);
        suteyiYenile(); 
        
        const redirectPage = (userRole === 'admin') ? 'dashboard.html' : 'premium.html';
        return { success: true, redirect: redirectPage }; 
        
    } catch (error) {
        console.error("Firebase Giriş Hatası:", error.code, error.message);
        return { success: false };
    }
}

// --- DENEME HESABI YÖNETİMİ ---

// Rastgele bir kullanıcı adı ve şifre oluşturur
function createTrialCredentials() {
    const randomString = Math.random().toString(36).substring(2, 8); 
    const email = `trial_${randomString}${DEFAULT_DOMAIN}`; 
    const password = `deneme${randomString}123`; 
    return { email, password };
}

// Deneme hesabı oluşturur ve giriş yapar
export async function performTrialLogin() {
    
    // YENİ KONTROL: Eğer deneme hakkı daha önce kullanılmışsa, girişi engelle.
    if (localStorage.getItem(DENEME_YAPILDI_KEY) === 'true') {
        return { success: false, message: "Deneme hakkınız dolmuştur." };
    }

    const { email, password } = createTrialCredentials();
    const auth = window.auth; 
    const trialRole = 'trial_user'; 

    try {
        // Yeni deneme kullanıcısını oluştur
        await createUserWithEmailAndPassword(auth, email, password);
        
        // Başarılı giriş ve rol ataması
        localStorage.setItem('kullanici_rolu', trialRole);
        
        // Deneme bitişini 1 dakika sonraya ayarla (YENİ SÜRE)
        localStorage.setItem('oturum_bitis', Date.now() + DENEME_OTURUM_SURESI);
        
        // KRİTİK: Deneme hakkının kullanıldığını işaretle
        localStorage.setItem(DENEME_YAPILDI_KEY, 'true');
        
        const redirectPage = 'premium.html';
        return { success: true, redirect: redirectPage }; 
        
    } catch (error) {
        console.error("Deneme Giriş/Kayıt Hatası:", error.code, error.message);
        return { success: false, message: "Deneme hesabı oluşturulamadı. Lütfen tekrar deneyin." };
    }
}