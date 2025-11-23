// --- AYARLAR ---
const ADMIN_SIFRE = "babahepsikerekgecer";    // Yönetici (Panel + Veri Güncelleme)
const USER_SIFRE = "3131";     // Kullanıcı (Sadece Premium)
const OTURUM_SURESI = 30000;   // 30 Saniye (İşlem yapılmazsa atar)

// --- YETKİ KONTROLÜ (Her sayfanın başında çalışır) ---
function checkAuth(requiredLevel) {
    const bitisZamani = localStorage.getItem('oturum_bitis');
    const userRole = localStorage.getItem('kullanici_rolu'); // 'admin' veya 'user'

    // 1. Oturum yoksa veya süre dolmuşsa -> LOGIN'E AT
    if (!bitisZamani || !userRole || Date.now() > parseInt(bitisZamani)) {
        doLogout(); 
        return;
    }

    // 2. Yetki Kontrolü (Sadece Admin sayfaları için)
    if (requiredLevel === 'admin' && userRole !== 'admin') {
        alert("Bu sayfaya erişim yetkiniz yok!");
        window.location.href = "premium.html"; // Yetkisiz ise kullanıcı sayfasına at
        return;
    }

    // 3. Süreyi Uzat (Kalp Atışı)
    suteyiYenile();
    if (!window.authInterval) {
        window.authInterval = setInterval(suteyiYenile, 5000);
    }
}

// --- SÜREYİ GÜNCELLEME ---
function suteyiYenile() {
    localStorage.setItem('oturum_bitis', Date.now() + OTURUM_SURESI);
}

// --- GİRİŞ İŞLEMİ (Login Sayfasından Çağrılır) ---
function performLogin(password) {
    if (password === ADMIN_SIFRE) {
        // ADMIN GİRİŞİ
        localStorage.setItem('kullanici_rolu', 'admin');
        suteyiYenile();
        return { success: true, redirect: 'dashboard.html' }; // Yönetici paneline git
    } 
    else if (password === USER_SIFRE) {
        // KULLANICI GİRİŞİ (3131)
        localStorage.setItem('kullanici_rolu', 'user');
        suteyiYenile();
        // DEĞİŞİKLİK BURADA YAPILDI:
        return { success: true, redirect: 'premium.html' }; // Premium sayfasına git
    } 
    else {
        // HATALI ŞİFRE
        return { success: false };
    }
}

// --- ÇIKIŞ YAPMA ---
function doLogout() {
    localStorage.removeItem('oturum_bitis');
    localStorage.removeItem('kullanici_rolu');
    
    if (!window.location.href.includes('login.html')) {
        window.location.href = "login.html";
    }
}