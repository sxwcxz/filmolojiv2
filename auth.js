// auth.js
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// --- AYARLAR ---
const OTURUM_SURESI = 30000;  
// KRİTİK: Yalnızca bu email adresine sahip kullanıcı 'admin' rolü alacak.
const ADMIN_EMAIL = "admin@filmoloji.com"; 
const DEFAULT_DOMAIN = "@filmoloji.com"; 

// --- SÜRE YENİLEME ---
export function suteyiYenile() {
    localStorage.setItem('oturum_bitis', Date.now() + OTURUM_SURESI);
}

// --- ÇIKIŞ YAPMA ---
export function doLogout() {
    localStorage.removeItem('oturum_bitis');
    localStorage.removeItem('kullanici_rolu');
    
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
    suteyiYenile();
    if (!window.authInterval) {
        window.authInterval = setInterval(suteyiYenile, 5000);
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