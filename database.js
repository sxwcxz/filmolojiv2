const DATABASE = [
    // --- 1. DİZİ: BREAKING BAD ---
    {
        id: "ser_breaking_bad",
        type: "series",
        title: "Breaking Bad",
        year: 2008,
        genre: "Suç, Dram, Gerilim",
        poster: "https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg",
        backdrop: "https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg",
        description: "Kimya öğretmeni Walter White, akciğer kanseri teşhisi konduktan sonra ailesinin geleceğini güvence altına almak için eski öğrencisi Jesse Pinkman ile birlikte metamfetamin üretip satmaya başlar.",
        seasons: [
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drinkfromwisdomwell.top/hls/videos/15885/master.m3u8", desc: "Walter White teşhis konulduktan sonra karavanla çöle gider." },
                    { name: "2. Bölüm: Yazı Tura", source: "https://drinkfromwisdomwell.top/hls/videos/15881/master.m3u8", desc: "Walter ve Jesse ilk işlerinin sonuçlarıyla uğraşmak zorundadır." },
                    { name: "3. Bölüm: Eksik Parça", source: "https://drinkfromwisdomwell.top/hls/videos/15880/master.m3u8", desc: "Krazy-8 ile ilgili zor bir karar verilmesi gerekir." },
                    { name: "4. Bölüm: Hasta Adam", source: "https://drinkfromwisdomwell.top/hls/videos/15883/master.m3u8", desc: "Walter ailesine gerçeği söylemekte zorlanır." },
                    { name: "5. Bölüm: Yastık", source: "https://drinkfromwisdomwell.top/hls/videos/15884/master.m3u8", desc: "Walter tedavi masrafları için eski bir arkadaşından yardım ister." },
                    { name: "6. Bölüm: Heisenberg", source: "https://drinkfromwisdomwell.top/hls/videos/15882/master.m3u8", desc: "Walter kel ve kötü bir imajla uyuşturucu dünyasına adım atar." },
                    { name: "7. Bölüm: Yasa Dışı (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15886/master.m3u8", desc: "Walter ve Jesse, Tuco ile tehlikeli bir anlaşma yapar." }
                ]
            },
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yedi Yüz Otuz Yedi", source: "https://drinkfromwisdomwell.top/hls/videos/15873/master.m3u8" },
                    { name: "2. Bölüm: Zil", source: "https://drinkfromwisdomwell.top/hls/videos/15876/master.m3u8" },
                    { name: "3. Bölüm: Ölü Arının İğnesi", source: "https://drinkfromwisdomwell.top/hls/videos/15872/master.m3u8" },
                    { name: "4. Bölüm: Özür", source: "https://drinkfromwisdomwell.top/hls/videos/15870/master.m3u8" },
                    { name: "5. Bölüm: Hamamböcekleri", source: "https://drinkfromwisdomwell.top/hls/videos/15868/master.m3u8" },
                    { name: "6. Bölüm: ATM", source: "https://drinkfromwisdomwell.top/hls/videos/15877/master.m3u8" },
                    { name: "7. Bölüm: Siyah ve Mavi", source: "https://drinkfromwisdomwell.top/hls/videos/15871/master.m3u8" },
                    { name: "8. Bölüm: Saul Goodman", source: "https://drinkfromwisdomwell.top/hls/videos/15878/master.m3u8" },
                    { name: "9. Bölüm: Dört Uzun Gün", source: "https://drinkfromwisdomwell.top/hls/videos/15874/master.m3u8" },
                    { name: "10. Bölüm: Kutlama", source: "https://drinkfromwisdomwell.top/hls/videos/15875/master.m3u8" },
                    { name: "11. Bölüm: Yaşam Döngüsü", source: "https://drinkfromwisdomwell.top/hls/videos/15867/master.m3u8" },
                    { name: "12. Bölüm: Phoneix", source: "https://drinkfromwisdomwell.top/hls/videos/15879/master.m3u8" },
                    { name: "13. Bölüm: ABQ (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15869/master.m3u8" }
                ]
            },
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Terk", source: "https://drinkfromwisdomwell.top/hls/videos/15863/master.m3u8" },
                    { name: "2. Bölüm: Çatıdaki Pizza", source: "https://drinkfromwisdomwell.top/hls/videos/15862/master.m3u8" },
                    { name: "3. Bölüm: İhanet", source: "https://drinkfromwisdomwell.top/hls/videos/15859/master.m3u8" },
                    { name: "4. Bölüm: Yeşil Işık", source: "https://drinkfromwisdomwell.top/hls/videos/15864/master.m3u8" },
                    { name: "5. Bölüm: Devam", source: "https://drinkfromwisdomwell.top/hls/videos/15861/master.m3u8" },
                    { name: "6. Bölüm: Gün Batımı", source: "https://drinkfromwisdomwell.top/hls/videos/15855/master.m3u8" },
                    { name: "7. Bölüm: Bir Dakika", source: "https://drinkfromwisdomwell.top/hls/videos/15858/master.m3u8" },
                    { name: "8. Bölüm: Yoğun Bakım", source: "https://drinkfromwisdomwell.top/hls/videos/15860/master.m3u8" },
                    { name: "9. Bölüm: Kafka", source: "https://drinkfromwisdomwell.top/hls/videos/15854/master.m3u8" },
                    { name: "10. Bölüm: Sinek", source: "https://drinkfromwisdomwell.top/hls/videos/15857/master.m3u8" },
                    { name: "11. Bölüm: Son Kapı", source: "https://drinkfromwisdomwell.top/hls/videos/15856/master.m3u8" },
                    { name: "12. Bölüm: Yetersiz Önlem", source: "https://drinkfromwisdomwell.top/hls/videos/15866/master.m3u8" },
                    { name: "13. Bölüm: Yeterli Önlem (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15865/master.m3u8" }
                ]
            },
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Maket Bıçağı", source: "https://drinkfromwisdomwell.top/hls/videos/15898/master.m3u8" },
                    { name: "2. Bölüm: Otuzsekizlik", source: "https://drinkfromwisdomwell.top/hls/videos/15887/master.m3u8" },
                    { name: "3. Bölüm: Açık Ev", source: "https://drinkfromwisdomwell.top/hls/videos/15888/master.m3u8" },
                    { name: "4. Bölüm: Kurşun Delikleri", source: "https://drinkfromwisdomwell.top/hls/videos/15896/master.m3u8" },
                    { name: "5. Bölüm: Kahraman", source: "https://drinkfromwisdomwell.top/hls/videos/15893/master.m3u8" },
                    { name: "6. Bölüm: Köşeye Sıkışmak", source: "https://drinkfromwisdomwell.top/hls/videos/15889/master.m3u8" },
                    { name: "7. Bölüm: Sorun Çıkaran Köpek", source: "https://drinkfromwisdomwell.top/hls/videos/15892/master.m3u8" },
                    { name: "8. Bölüm: Hermanos", source: "https://drinkfromwisdomwell.top/hls/videos/15897/master.m3u8" },
                    { name: "9. Bölüm: Böcek", source: "https://drinkfromwisdomwell.top/hls/videos/15899/master.m3u8" },
                    { name: "10. Bölüm: Şerefe", source: "https://drinkfromwisdomwell.top/hls/videos/15895/master.m3u8" },
                    { name: "11. Bölüm: Yaklaşan Tehlike", source: "https://drinkfromwisdomwell.top/hls/videos/15890/master.m3u8" },
                    { name: "12. Bölüm: Son Zamanlar", source: "https://drinkfromwisdomwell.top/hls/videos/15894/master.m3u8" },
                    { name: "13. Bölüm: Yüzleşme (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15891/master.m3u8" }
                ]
            },
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ya Özgürlük Ya Ölüm", source: "https://drinkfromwisdomwell.top/hls/videos/15841/master.m3u8" },
                    { name: "2. Bölüm: Madrigal", source: "https://drinkfromwisdomwell.top/hls/videos/15842/master.m3u8" },
                    { name: "3. Bölüm: Ödeme", source: "https://drinkfromwisdomwell.top/hls/videos/15847/master.m3u8" },
                    { name: "4. Bölüm: Elli Bir", source: "https://drinkfromwisdomwell.top/hls/videos/15848/master.m3u8" },
                    { name: "5. Bölüm: Ölü Navlun", source: "https://drinkfromwisdomwell.top/hls/videos/15838/master.m3u8" },
                    { name: "6. Bölüm: Satınalma", source: "https://drinkfromwisdomwell.top/hls/videos/15844/master.m3u8" },
                    { name: "7. Bölüm: Adımı Söyle", source: "https://drinkfromwisdomwell.top/hls/videos/15846/master.m3u8" },
                    { name: "8. Bölüm: Kitaptaki Gerçek", source: "https://drinkfromwisdomwell.top/hls/videos/15852/master.m3u8" },
                    { name: "9. Bölüm: Kanlı Para", source: "https://drinkfromwisdomwell.top/hls/videos/15839/master.m3u8" },
                    { name: "10. Bölüm: Gömülü", source: "https://drinkfromwisdomwell.top/hls/videos/15843/master.m3u8" },
                    { name: "11. Bölüm: İtiraflar", source: "https://drinkfromwisdomwell.top/hls/videos/15851/master.m3u8" },
                    { name: "12. Bölüm: Kuduz Köpek", source: "https://drinkfromwisdomwell.top/hls/videos/15849/master.m3u8" },
                    { name: "13. Bölüm: Korkak", source: "https://drinkfromwisdomwell.top/hls/videos/15853/master.m3u8" },
                    { name: "14. Bölüm: Kaçınılmaz Son", source: "https://drinkfromwisdomwell.top/hls/videos/15845/master.m3u8" },
                    { name: "15. Bölüm: Yarım Kalan Bir İş", source: "https://drinkfromwisdomwell.top/hls/videos/15840/master.m3u8" },
                    { name: "16. Bölüm: Elveda (Final)", source: "https://drinkfromwisdomwell.top/hls/videos/15850/master.m3u8" }
                ]
            }
        ]
    },

    // --- 2. DİZİ: STRANGER THINGS ---
    {
        id: "ser_stranger_things",
        type: "series",
        title: "Stranger Things",
        year: 2016,
        genre: "Bilim Kurgu, Korku, Gizem",
        // YENİ POSTER BURADA GÜNCELLENDİ
        poster: "https://media-cache.cinematerial.com/p/500x/o8q4k25c/stranger-things-movie-poster.jpg?v=1653505842",
        backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYkJu64COjr.jpg",
        description: "Ufak bir kasabada küçük bir çocuk kaybolunca, gizli deneyler, korkutucu doğaüstü güçler ve tuhaf bir küçük kızın da dahil olduğu bir gizem ortaya çıkar.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Will Byers'ın Ortadan Kayboluşu", source: "https://drakkarhls6.icu/hls/videos/15789/master.m3u8" },
                    { name: "2. Bölüm: Maple Sokağındaki Ucube", source: "https://drakkarhls4.icu/hls/videos/15788/master.m3u8" },
                    { name: "3. Bölüm: Mutlu Noeller", source: "https://drakkarhls8.icu/hls/videos/15786/master.m3u8" },
                    { name: "4. Bölüm: Ceset", source: "https://drakkarhls4.icu/hls/videos/15784/master.m3u8" },
                    { name: "5. Bölüm: Pire ve Cambaz", source: "https://drakkarhls9.icu/hls/videos/15783/master.m3u8" },
                    { name: "6. Bölüm: Canavar", source: "https://drakkarhls6.icu/hls/videos/15782/master.m3u8" },
                    { name: "7. Bölüm: Küvet", source: "https://drakkarhls4.icu/hls/videos/15785/master.m3u8" },
                    { name: "8. Bölüm: Alt Üst", source: "https://drakkarhls9.icu/hls/videos/15787/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: ÇILGIN MAX", source: "https://drakkarhls4.icu/hls/videos/15798/master.m3u8" },
                    { name: "2. Bölüm: Şeker mi Şaka mı Ucube", source: "https://drakkarhls6.icu/hls/videos/15796/master.m3u8" },
                    { name: "3. Bölüm: İribaş", source: "https://drakkarhls8.icu/hls/videos/15795/master.m3u8" },
                    { name: "4. Bölüm: Bilge Will", source: "https://drakkarhls9.icu/hls/videos/15794/master.m3u8" },
                    { name: "5. Bölüm: Dig Dug", source: "https://drakkarhls4.icu/hls/videos/15790/master.m3u8" },
                    { name: "6. Bölüm: Casus", source: "https://drakkarhls8.icu/hls/videos/15797/master.m3u8" },
                    { name: "7. Bölüm: Kayıp Kız Kardeş", source: "https://drakkarhls8.icu/hls/videos/15791/master.m3u8" },
                    { name: "8. Bölüm: Zihin Hırsızı", source: "https://drakkarhls8.icu/hls/videos/15792/master.m3u8" },
                    { name: "9. Bölüm: Kapı", source: "https://drakkarhls9.icu/hls/videos/15793/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Suzie Duyuyor musun", source: "https://drakkarhls9.icu/hls/videos/15776/master.m3u8" },
                    { name: "2. Bölüm: AVM Fareleri", source: "https://drakkarhls8.icu/hls/videos/15779/master.m3u8" },
                    { name: "3. Bölüm: Kayıp Cankurtaran Vakası", source: "https://drakkarhls6.icu/hls/videos/15774/master.m3u8" },
                    { name: "4. Bölüm: Sauna Testi", source: "https://drakkarhls6.icu/hls/videos/15777/master.m3u8" },
                    { name: "5. Bölüm: Ordu", source: "https://drakkarhls6.icu/hls/videos/15778/master.m3u8" },
                    { name: "6. Bölüm: Çokluktan Birliğe", source: "https://drakkarhls9.icu/hls/videos/15775/master.m3u8" },
                    { name: "7. Bölüm: Isırık", source: "https://drakkarhls8.icu/hls/videos/15780/master.m3u8" },
                    { name: "8. Bölüm: Starcourt Savaşı", source: "https://drakkarhls9.icu/hls/videos/15781/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Hellfire Kulübü", source: "https://drakkarhls8.icu/hls/videos/15803/master.m3u8" },
                    { name: "2. Bölüm: Vecnanın Laneti", source: "https://drakkarhls8.icu/hls/videos/15805/master.m3u8" },
                    { name: "3. Bölüm: Canavar mı Süper Kahraman mı", source: "https://drakkarhls8.icu/hls/videos/15807/master.m3u8" },
                    { name: "4. Bölüm: Sevgili Billy", source: "https://drakkarhls6.icu/hls/videos/15799/master.m3u8" },
                    { name: "5. Bölüm: Nina Projesi", source: "https://drakkarhls4.icu/hls/videos/15806/master.m3u8" },
                    { name: "6. Bölüm: Derinlere Dalış", source: "https://drakkarhls8.icu/hls/videos/15800/master.m3u8" },
                    { name: "7. Bölüm: Hawkins Laboratuvarında Katliam", source: "https://drakkarhls6.icu/hls/videos/15802/master.m3u8" },
                    { name: "8. Bölüm: Baba", source: "https://drakkarhls9.icu/hls/videos/15801/master.m3u8" },
                    { name: "9. Bölüm: Kaçak Yolcu", source: "https://drakkarhls6.icu/hls/videos/15804/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_squid_game",
        type: "series",
        title: "Squid Game",
        year: 2021,
        genre: "Gerilim, Dram, Gizem",
        poster: "https://upload.wikimedia.org/wikipedia/tr/6/68/Squid_Game_2._sezon_posteri.png",
        backdrop: "http://www.impawards.com/intl/south_korea/tv/posters/squid_game_xlg.jpg",
        description: "Para sıkıntısı çeken yüzlerce oyuncu, tuhaf bir daveti kabul eder. Ödül büyüktür ancak oyunlar ölümcüldür.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kırmızı Işık, Yeşil Işık", source: "https://vidrame.pro/vr/get/9135f495/master.m3u8", desc: "Borç batağındaki yüzlerce kişi gizemli bir daveti kabul eder." },
                    { name: "2. Bölüm: Cehennem", source: "https://vidrame.pro/vr/get/1aead900/master.m3u8", desc: "Oyunun ölümcül gerçeğiyle yüzleşen oyuncular oylama yapar." },
                    { name: "3. Bölüm: Şemsiyeli Adam", source: "https://vidrame.pro/vr/get/7d8e96ad/master.m3u8", desc: "İkinci oyun başlar. Şeker kalıbını kırmadan şekli çıkarmak zorundadırlar." },
                    { name: "4. Bölüm: Takıma Sadık Kal", source: "https://vidrame.pro/vr/get/24319d52/master.m3u8", desc: "Oyuncular gruplaşmaya başlar. Işıklar söndüğünde tehlike artar." },
                    { name: "5. Bölüm: Adil Bir Dünya", source: "https://vidrame.pro/vr/get/7b08e85e/master.m3u8", desc: "Gi-hun ve ekibi nöbetleşe uyuyarak birbirlerini korumaya çalışır." },
                    { name: "6. Bölüm: Gganbu", source: "https://vidrame.pro/vr/get/b48fca12/master.m3u8", desc: "Oyuncular partnerlerini seçer ancak oyunun kuralı acımasızdır." },
                    { name: "7. Bölüm: VIPS", source: "https://vidrame.pro/vr/get/db8a08ad/master.m3u8", desc: "VIP konuklar gelir ve cam köprü oyunu başlar." },
                    { name: "8. Bölüm: Lider", source: "https://vidrame.pro/vr/get/e2842670/master.m3u8", desc: "Finale kalan üç oyuncu arasında gerilim zirveye ulaşır." },
                    { name: "9. Bölüm: Şanslı Gün (Sezon Finali)", source: "https://vidrame.pro/vr/get/e8481d47/master.m3u8", desc: "Son oyun başlar. Kazanan her şeyi alır." }
                ]
            },
            // --- 2. SEZON (Yayınlanmamış / Sızdırılmış Bölümler) ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yeni Başlangıç", source: "https://vidrame.pro/vr/get/21085483/master.m3u8" },
                    { name: "2. Bölüm: İntikam Yemini", source: "https://vidrame.pro/vr/get/a3fcb3b7/master.m3u8" },
                    { name: "3. Bölüm: Gizli İttifak", source: "https://vidrame.pro/vr/get/07e71c61/master.m3u8" },
                    { name: "4. Bölüm: Oyunun Kuralı", source: "https://vidrame.pro/vr/get/99eb2d6e/master.m3u8" },
                    { name: "5. Bölüm: Maskenin Ardı", source: "https://vidrame.pro/vr/get/5ae44899/master.m3u8" },
                    { name: "6. Bölüm: Kırılma Noktası", source: "https://vidrame.pro/vr/get/60976e45/master.m3u8" },
                    { name: "7. Bölüm: Son Zar", source: "https://vidrame.pro/vr/get/27183a96/master.m3u8" }
                ]
            },
            // --- 3. SEZON (Yayınlanmamış / Sızdırılmış Bölümler) ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Diriliş", source: "https://vidrame.pro/vr/get/64a1034a/master.m3u8" },
                    { name: "2. Bölüm: Kaos", source: "https://vidrame.pro/vr/get/1c267413/master.m3u8" },
                    { name: "3. Bölüm: Hesaplaşma", source: "https://vidrame.pro/vr/get/28cb0ad5/master.m3u8" },
                    { name: "4. Bölüm: Sınır", source: "https://vidrame.pro/vr/get/d30ae148/master.m3u8" },
                    { name: "5. Bölüm: Çöküş", source: "https://vidrame.pro/vr/get/cf9d271d/master.m3u8" },
                    { name: "6. Bölüm: Final Oyunu", source: "https://vidrame.pro/vr/get/d5699c55/master.m3u8" }
                ]
            }
        ]
    }
, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_wednesday",
        type: "series",
        title: "Wednesday",
        year: 2022,
        genre: "Fantastik, Komedi, Gizem",
        poster: "https://dizipal27.plus/uploads/series/original/wednesday-6980.webp",
        backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        description: "Zeki, alaycı ve azıcık içi geçmiş bir kız olan Wednesday Addams, Nevermore Akademisinde yeni dostlar ve düşmanlar edinirken art arda gerçekleşen cinayetleri araştırmaya başlar.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Çarşamba Günü Doğanlar Dertli Olurlar", source: "https://drakkarhls9.icu/hls/videos/20636/master.m3u8" },
                    { name: "2. Bölüm: Dert En Yalnız Sayıdır", source: "https://drakkarhls8.icu/hls/videos/20634/master.m3u8" },
                    { name: "3. Bölüm: Dost mu Dert mi", source: "https://drakkarhls8.icu/hls/videos/21119/master.m3u8" },
                    { name: "4. Bölüm: Ne Dertli Bir Gece", source: "https://drakkarhls9.icu/hls/videos/21116/master.m3u8" },
                    { name: "5. Bölüm: Neye Dertlenirsen Onu Biçersin", source: "https://drakkarhls6.icu/hls/videos/20637/master.m3u8" },
                    { name: "6. Bölüm: İyiliğe Karşı Dert", source: "https://drakkarhls6.icu/hls/videos/21120/master.m3u8" },
                    { name: "7. Bölüm: Henüz Bana Dertlenmediysen", source: "https://drakkarhls9.icu/hls/videos/20638/master.m3u8" },
                    { name: "8. Bölüm: Dert Sürüsü (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/20635/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Here We Woe Again", source: "https://drakkarhls9.icu/hls/videos/20925/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls4.icu/hls/videos/20928/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls4.icu/hls/videos/20929/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls9.icu/hls/videos/20930/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24064/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24063/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24062/master.m3u8" },
                    { name: "8. Bölüm", source: "https://drakkarhls6.icu/hls/videos/24045/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_black_mirror",
        type: "series",
        title: "Black Mirror",
        year: 2011,
        genre: "Bilim Kurgu, Dram, Gerilim",
        poster: "https://dizipal27.plus/uploads/series/original/black-mirror-8649.webp",
        backdrop: "https://image.tmdb.org/t/p/original/57vVjteucIF3bGnZj6Pimp-tO2A.jpg",
        description: "Modern dünyanın kolektif huzursuzluğuna dair, her biri farklı bir hikaye anlatan ve teknolojinin getirdiği paranoyayı ele alan bir antoloji dizisi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Milli Marş", source: "https://drakkarhls10.icu/hls/videos/18048/master.m3u8" },
                    { name: "2. Bölüm: 15 Milyon Hak", source: "https://drakkarhls10.icu/hls/videos/18046/master.m3u8" },
                    { name: "3. Bölüm: Senin Tüm Geçmişin", source: "https://drakkarhls10.icu/hls/videos/18047/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Hemen Döneceğim", source: "https://drakkarhls10.icu/hls/videos/18376/master.m3u8" },
                    { name: "2. Bölüm: Beyaz Ayı", source: "https://drakkarhls10.icu/hls/videos/18375/master.m3u8" },
                    { name: "3. Bölüm: Waldo Zamanı", source: "https://drakkarhls10.icu/hls/videos/18374/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Dibe Vuruş", source: "https://drakkarhls10.icu/hls/videos/18040/master.m3u8" },
                    { name: "2. Bölüm: Artırılmış Gerçeklik", source: "https://drakkarhls10.icu/hls/videos/18042/master.m3u8" },
                    { name: "3. Bölüm: Sus ve Dans Et", source: "https://drakkarhls10.icu/hls/videos/18041/master.m3u8" },
                    { name: "4. Bölüm: San Junipero", source: "https://drakkarhls10.icu/hls/videos/18043/master.m3u8" },
                    { name: "5. Bölüm: Acımadan Öldürmek", source: "https://drakkarhls10.icu/hls/videos/18045/master.m3u8" },
                    { name: "6. Bölüm: Sosyal Linç", source: "https://drakkarhls10.icu/hls/videos/18044/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: USS Callister", source: "https://drakkarhls10.icu/hls/videos/18381/master.m3u8" },
                    { name: "2. Bölüm: Arkangel", source: "https://drakkarhls10.icu/hls/videos/18380/master.m3u8" },
                    { name: "3. Bölüm: Timsah", source: "https://drakkarhls10.icu/hls/videos/18379/master.m3u8" },
                    { name: "4. Bölüm: Hang the DJ", source: "https://drakkarhls10.icu/hls/videos/18382/master.m3u8" },
                    { name: "5. Bölüm: Metal Kafa", source: "https://drakkarhls10.icu/hls/videos/18378/master.m3u8" },
                    { name: "6. Bölüm: Black Museum", source: "https://drakkarhls10.icu/hls/videos/18377/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Striking Vipers", source: "https://drakkarhls10.icu/hls/videos/18373/master.m3u8" },
                    { name: "2. Bölüm: Smithereens", source: "https://drakkarhls10.icu/hls/videos/18372/master.m3u8" },
                    { name: "3. Bölüm: Rachel, Jack ve Ashley Too", source: "https://drakkarhls10.icu/hls/videos/18371/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Joan İğrenç Biri", source: "https://drakkarhls10.icu/hls/videos/18387/master.m3u8" },
                    { name: "2. Bölüm: Loch Henry", source: "https://drakkarhls10.icu/hls/videos/18386/master.m3u8" },
                    { name: "3. Bölüm: Denizin Ötesinde", source: "https://drakkarhls10.icu/hls/videos/18383/master.m3u8" },
                    { name: "4. Bölüm: Mazey Day", source: "https://drakkarhls10.icu/hls/videos/18385/master.m3u8" },
                    { name: "5. Bölüm: Şeytan 79", source: "https://drakkarhls10.icu/hls/videos/18384/master.m3u8" }
                ]
            },
            // --- 7. SEZON (GÜNCEL - 2025) ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sıradan İnsanlar (Common People)", source: "https://drakkarhls10.icu/hls/videos/18038/master.m3u8" },
                    { name: "2. Bölüm: Bête Noire", source: "https://drakkarhls10.icu/hls/videos/18039/master.m3u8" },
                    { name: "3. Bölüm: Methiye (Eulogy)", source: "https://drakkarhls10.icu/hls/videos/18034/master.m3u8" },
                    { name: "4. Bölüm: Oyuncak (Plaything)", source: "https://drakkarhls10.icu/hls/videos/18036/master.m3u8" },
                    { name: "5. Bölüm: Hotel Reverie", source: "https://drakkarhls10.icu/hls/videos/18037/master.m3u8" },
                    { name: "6. Bölüm: USS Callister: Sonsuzluğa Doğru", source: "https://drakkarhls10.icu/hls/videos/18035/master.m3u8" }
                ]
            }
        ]
    }
, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_la_casa_de_papel",
        type: "series",
        title: "La Casa de Papel",
        year: 2017,
        genre: "Suç, Gerilim, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/la-casa-de-papel-8798.webp",
        backdrop: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        description: "Bir suç dehası planını gerçekleştirmek üzere polisi ustalıkla yönlendirirken sekiz hırsız, rehinelerle birlikte kendilerini İspanya Kraliyet Darphanesine kilitler.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Planlandığı Gibi", source: "https://drakkarhls10.icu/hls/videos/20344/master.m3u8" },
                    { name: "2. Bölüm: Ölümcül İhmal", source: "https://drakkarhls10.icu/hls/videos/20345/master.m3u8" },
                    { name: "3. Bölüm: Hatalı Atış", source: "https://drakkarhls10.icu/hls/videos/20350/master.m3u8" },
                    { name: "4. Bölüm: Truva Atı", source: "https://drakkarhls10.icu/hls/videos/20348/master.m3u8" },
                    { name: "5. Bölüm: Köstebek Günü", source: "https://drakkarhls10.icu/hls/videos/20352/master.m3u8" },
                    { name: "6. Bölüm: Sıcak Soğuk Savaş", source: "https://drakkarhls10.icu/hls/videos/20343/master.m3u8" },
                    { name: "7. Bölüm: Soğuk İstikrarsızlık", source: "https://drakkarhls10.icu/hls/videos/20346/master.m3u8" },
                    { name: "8. Bölüm: Bunu Sen İstedin", source: "https://drakkarhls10.icu/hls/videos/20342/master.m3u8" },
                    { name: "9. Bölüm: Israr Eden Kazanır", source: "https://drakkarhls10.icu/hls/videos/20341/master.m3u8" },
                    { name: "10. Bölüm: Maskeler Düştü", source: "https://drakkarhls10.icu/hls/videos/20347/master.m3u8" },
                    { name: "11. Bölüm: Soruların Başlığı", source: "https://drakkarhls10.icu/hls/videos/20353/master.m3u8" },
                    { name: "12. Bölüm: Verimlilik Meselesi", source: "https://drakkarhls10.icu/hls/videos/20351/master.m3u8" },
                    { name: "13. Bölüm: Ne Yaptık Biz? (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/20349/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Geri Döndük", source: "https://drakkarhls10.icu/hls/videos/20375/master.m3u8" },
                    { name: "2. Bölüm: Aikido", source: "https://drakkarhls10.icu/hls/videos/20380/master.m3u8" },
                    { name: "3. Bölüm: Yerin 48 Metre Altında", source: "https://drakkarhls10.icu/hls/videos/20373/master.m3u8" },
                    { name: "4. Bölüm: Flipper Planı", source: "https://drakkarhls10.icu/hls/videos/20374/master.m3u8" },
                    { name: "5. Bölüm: Güm Güm Ciao", source: "https://drakkarhls10.icu/hls/videos/20378/master.m3u8" },
                    { name: "6. Bölüm: Her Şey Önemsiz Göründü", source: "https://drakkarhls10.icu/hls/videos/20376/master.m3u8" },
                    { name: "7. Bölüm: Kısa Bir Tatil", source: "https://drakkarhls10.icu/hls/videos/20372/master.m3u8" },
                    { name: "8. Bölüm: Sapma", source: "https://drakkarhls10.icu/hls/videos/20379/master.m3u8" },
                    { name: "9. Bölüm: Oyun Bitti (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/20377/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yolun Sonu", source: "https://drakkarhls10.icu/hls/videos/20368/master.m3u8" },
                    { name: "2. Bölüm: Reenkarnasyona İnanır mısın", source: "https://drakkarhls10.icu/hls/videos/20364/master.m3u8" },
                    { name: "3. Bölüm: Hayat Dizisine Hoş Geldiniz", source: "https://drakkarhls10.icu/hls/videos/20369/master.m3u8" },
                    { name: "4. Bölüm: Cennette Bir Yer", source: "https://drakkarhls10.icu/hls/videos/20365/master.m3u8" },
                    { name: "5. Bölüm: Yaşanacak Hayatlar", source: "https://drakkarhls10.icu/hls/videos/20370/master.m3u8" },
                    { name: "6. Bölüm: Kaçış", source: "https://drakkarhls10.icu/hls/videos/20371/master.m3u8" },
                    { name: "7. Bölüm: Gerçekleşen Hayaller", source: "https://drakkarhls10.icu/hls/videos/20366/master.m3u8" },
                    { name: "8. Bölüm: Zarafet Teorisi", source: "https://drakkarhls10.icu/hls/videos/20367/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Oyun Bitti", source: "https://storage.diziyou.to/episodes/10531_tr/play.m3u8" },
                    { name: "2. Bölüm: Berlin'in Düğünü", source: "https://storage.diziyou.to/episodes/10532_tr/play.m3u8" },
                    { name: "3. Bölüm: Anatomi Dersi", source: "https://storage.diziyou.to/episodes/10533_tr/play.m3u8" },
                    { name: "4. Bölüm: Paso Doble", source: "https://storage.diziyou.to/episodes/10534_tr/play.m3u8" },
                    { name: "5. Bölüm: 5 Dakika Önce", source: "https://storage.diziyou.to/episodes/10535_tr/play.m3u8" },
                    { name: "6. Bölüm: Teknik Nakavt", source: "https://storage.diziyou.to/episodes/10536_tr/play.m3u8" },
                    { name: "7. Bölüm: Çadırı Vurmak", source: "https://storage.diziyou.to/episodes/10537_tr/play.m3u8" },
                    { name: "8. Bölüm: Paris Planı", source: "https://storage.diziyou.to/episodes/10538_tr/play.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yolun Sonu", source: "https://storage.diziyou.to/episodes/10539_tr/play.m3u8" },
                    { name: "2. Bölüm: Reenkarnasyona İnanır mısın?", source: "https://storage.diziyou.to/episodes/10540_tr/play.m3u8" },
                    { name: "3. Bölüm: Hayat Gösterisine Hoş Geldiniz", source: "https://storage.diziyou.to/episodes/10541_tr/play.m3u8" },
                    { name: "4. Bölüm: Cennette Bir Yer", source: "https://storage.diziyou.to/episodes/10542_tr/play.m3u8" },
                    { name: "5. Bölüm: Birçok Hayat Yaşamak", source: "https://storage.diziyou.to/episodes/10543_tr/play.m3u8" },
                    { name: "6. Bölüm: Egzoz Valfleri", source: "https://storage.diziyou.to/episodes/10544_tr/play.m3u8" },
                    { name: "7. Bölüm: Dilek Kutusu", source: "https://storage.diziyou.to/episodes/10545_tr/play.m3u8" },
                    { name: "8. Bölüm: Zarafet Teorisi", source: "https://storage.diziyou.to/episodes/10546_tr/play.m3u8" },
                    { name: "9. Bölüm: Yastık Sohbeti", source: "https://storage.diziyou.to/episodes/10547_tr/play.m3u8" },
                    { name: "10. Bölüm: Bir Aile Geleneği", source: "https://storage.diziyou.to/episodes/10548_tr/play.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_the_witcher",
        type: "series",
        title: "The Witcher",
        year: 2019,
        genre: "Fantastik, Aksiyon, Macera",
        poster: "https://dizipal27.plus/uploads/series/original/the-witcher-1933.webp",
        backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        description: "Yalnız bir canavar avcısı olan Rivialı Geralt, insanların canavarlardan daha kötü olabildiği bir dünyada yerini bulmaya çalışıyor.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sonun Başlangıcı", source: "https://drakkarhls10.icu/hls/videos/19731/master.m3u8" },
                    { name: "2. Bölüm: Dört Altın", source: "https://drakkarhls10.icu/hls/videos/19736/master.m3u8" },
                    { name: "3. Bölüm: Hain Dolunay", source: "https://drakkarhls10.icu/hls/videos/19747/master.m3u8" },
                    { name: "4. Bölüm: Şölenler, Piçler ve Cenazeler", source: "https://drakkarhls10.icu/hls/videos/19742/master.m3u8" },
                    { name: "5. Bölüm: Bastırılmış İstekler", source: "https://drakkarhls10.icu/hls/videos/19744/master.m3u8" },
                    { name: "6. Bölüm: Nadir Türler", source: "https://drakkarhls10.icu/hls/videos/19740/master.m3u8" },
                    { name: "7. Bölüm: Düşüşten Önce", source: "https://drakkarhls10.icu/hls/videos/19738/master.m3u8" },
                    { name: "8. Bölüm: Çok Daha Fazlası (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19734/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ufak Bir Gerçeklik Payı", source: "https://drakkarhls10.icu/hls/videos/19721/master.m3u8" },
                    { name: "2. Bölüm: Kaer Morhen", source: "https://drakkarhls10.icu/hls/videos/19725/master.m3u8" },
                    { name: "3. Bölüm: Kaybedilenler", source: "https://drakkarhls10.icu/hls/videos/19715/master.m3u8" },
                    { name: "4. Bölüm: Redanyalı Casuslar", source: "https://drakkarhls10.icu/hls/videos/19723/master.m3u8" },
                    { name: "5. Bölüm: Sırt Çevirmek", source: "https://drakkarhls10.icu/hls/videos/19717/master.m3u8" },
                    { name: "6. Bölüm: Sevgili Dostum", source: "https://drakkarhls10.icu/hls/videos/19729/master.m3u8" },
                    { name: "7. Bölüm: Voleth Meir", source: "https://drakkarhls10.icu/hls/videos/19727/master.m3u8" },
                    { name: "8. Bölüm: Aile (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19719/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Shaerrawedd", source: "https://drakkarhls10.icu/hls/videos/19705/master.m3u8" },
                    { name: "2. Bölüm: Ayrılma", source: "https://drakkarhls10.icu/hls/videos/19699/master.m3u8" },
                    { name: "3. Bölüm: Yeniden Buluşma", source: "https://drakkarhls10.icu/hls/videos/19710/master.m3u8" },
                    { name: "4. Bölüm: Davetiye", source: "https://drakkarhls10.icu/hls/videos/19708/master.m3u8" },
                    { name: "5. Bölüm: İllüzyon Sanatı", source: "https://drakkarhls10.icu/hls/videos/19703/master.m3u8" },
                    { name: "6. Bölüm: Plan Yaptığını Sanırsın...", source: "https://drakkarhls10.icu/hls/videos/19706/master.m3u8" },
                    { name: "7. Bölüm: Yağmurdan Kaçarken Doluya Tutulmak", source: "https://drakkarhls10.icu/hls/videos/19712/master.m3u8" },
                    { name: "8. Bölüm: Kaosun Bedeli (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19701/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_narcos",
        type: "series",
        title: "Narcos",
        year: 2015,
        genre: "Suç, Biyografi, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/narcos-8698.webp",
        backdrop: "https://image.tmdb.org/t/p/original/r87jWeWSTl4aPe2q1lAdN4f4uN0.jpg",
        description: "Kolombiya'daki uyuşturucu kartellerinin yükselişini ve düşüşünü, özellikle Pablo Escobar'ın hikayesi üzerinden anlatan gerçek olaylara dayalı suç draması.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Descenso (Düşüş)", source: "https://drakkarhls10.icu/hls/videos/21672/master.m3u8" },
                    { name: "2. Bölüm: Simón Bolívar'ın Kılıcı", source: "https://drakkarhls10.icu/hls/videos/21673/master.m3u8" },
                    { name: "3. Bölüm: Her Zamanın Adamları", source: "https://drakkarhls10.icu/hls/videos/21675/master.m3u8" },
                    { name: "4. Bölüm: Adalet Sarayı Yanıyor", source: "https://drakkarhls10.icu/hls/videos/21677/master.m3u8" },
                    { name: "5. Bölüm: Bir Geleceğimiz Olacak", source: "https://drakkarhls10.icu/hls/videos/21679/master.m3u8" },
                    { name: "6. Bölüm: Explosivos (Patlayıcılar)", source: "https://drakkarhls10.icu/hls/videos/21681/master.m3u8" },
                    { name: "7. Bölüm: Hak Ettiğini Bulacaksın", source: "https://drakkarhls10.icu/hls/videos/21683/master.m3u8" },
                    { name: "8. Bölüm: La Gran Mentira (Büyük Yalan)", source: "https://drakkarhls10.icu/hls/videos/21685/master.m3u8" },
                    { name: "9. Bölüm: La Catedral", source: "https://drakkarhls10.icu/hls/videos/21687/master.m3u8" },
                    { name: "10. Bölüm: Despegue (Kalkış)", source: "https://drakkarhls10.icu/hls/videos/21689/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Gerileme", source: "https://drakkarhls10.icu/hls/videos/21674/master.m3u8" },
                    { name: "2. Bölüm: Cambalache (Takas)", source: "https://drakkarhls10.icu/hls/videos/21676/master.m3u8" },
                    { name: "3. Bölüm: Kirlenmiş Siyaset", source: "https://drakkarhls10.icu/hls/videos/21678/master.m3u8" },
                    { name: "4. Bölüm: Alevler İçindeki Yer", source: "https://drakkarhls10.icu/hls/videos/21680/master.m3u8" },
                    { name: "5. Bölüm: Düşmanımın Düşmanları", source: "https://drakkarhls10.icu/hls/videos/21682/master.m3u8" },
                    { name: "6. Bölüm: Los Pepes", source: "https://drakkarhls10.icu/hls/videos/21684/master.m3u8" },
                    { name: "7. Bölüm: Deutschland 93", source: "https://drakkarhls10.icu/hls/videos/21686/master.m3u8" },
                    { name: "8. Bölüm: Exit El Patrón", source: "https://drakkarhls10.icu/hls/videos/21688/master.m3u8" },
                    { name: "9. Bölüm: Nuestra Finca (Çiftliğimiz)", source: "https://drakkarhls10.icu/hls/videos/21690/master.m3u8" },
                    { name: "10. Bölüm: Al Fin Cayó! (Sonunda Düştü!)", source: "https://drakkarhls10.icu/hls/videos/21691/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Elebaşı Stratejisi", source: "https://drakkarhls10.icu/hls/videos/21695/master.m3u8" },
                    { name: "2. Bölüm: Cali KGB", source: "https://drakkarhls10.icu/hls/videos/21699/master.m3u8" },
                    { name: "3. Bölüm: Parayı Takip Et", source: "https://drakkarhls10.icu/hls/videos/21703/master.m3u8" },
                    { name: "4. Bölüm: Şah Mat", source: "https://drakkarhls10.icu/hls/videos/21707/master.m3u8" },
                    { name: "5. Bölüm: MRO", source: "https://drakkarhls10.icu/hls/videos/21711/master.m3u8" },
                    { name: "6. Bölüm: En İyi Planlar Bile Ters Gidebilir", source: "https://drakkarhls10.icu/hls/videos/21715/master.m3u8" },
                    { name: "7. Bölüm: Çıkış Yok", source: "https://drakkarhls10.icu/hls/videos/21719/master.m3u8" },
                    { name: "8. Bölüm: Convivir", source: "https://drakkarhls10.icu/hls/videos/21723/master.m3u8" },
                    { name: "9. Bölüm: Başkanın Bütün Adamları", source: "https://drakkarhls10.icu/hls/videos/21727/master.m3u8" },
                    { name: "10. Bölüm: Cali'ye Geri Dönüş", source: "https://drakkarhls10.icu/hls/videos/21731/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_dark",
        type: "series",
        title: "Dark",
        year: 2017,
        genre: "Bilim Kurgu, Gizem, Gerilim",
        poster: "https://dizipal27.plus/uploads/series/original/dark-9321.webp",
        backdrop: "https://image.tmdb.org/t/p/original/3lBDg3i6nn5R2NKkxJ6UnoMVOGa.jpg",
        description: "Bir çocuğun kaybolması, dört aileyi hummalı bir cevap arayışına iter. Bu arayışları, üç nesli kapsayan akıl almaz bir gizemi ortaya çıkarır.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sırlar", source: "https://drinkfromwisdomwell.top/hls/videos/15934/master.m3u8" },
                    { name: "2. Bölüm: Yalanlar", source: "https://drinkfromwisdomwell.top/hls/videos/15935/master.m3u8" },
                    { name: "3. Bölüm: Geçmiş ve Günümüz", source: "https://drinkfromwisdomwell.top/hls/videos/15942/master.m3u8" },
                    { name: "4. Bölüm: Çifte Yaşamlar", source: "https://drinkfromwisdomwell.top/hls/videos/15939/master.m3u8" },
                    { name: "5. Bölüm: Gerçekler", source: "https://drinkfromwisdomwell.top/hls/videos/15938/master.m3u8" },
                    { name: "6. Bölüm: Sic Mundus Creatus Est", source: "https://drinkfromwisdomwell.top/hls/videos/15937/master.m3u8" },
                    { name: "7. Bölüm: Yol Ayrımı", source: "https://drinkfromwisdomwell.top/hls/videos/15936/master.m3u8" },
                    { name: "8. Bölüm: Ne Ekersen Onu Biçersin", source: "https://drinkfromwisdomwell.top/hls/videos/15933/master.m3u8" },
                    { name: "9. Bölüm: Her Şey Şimdi", source: "https://drinkfromwisdomwell.top/hls/videos/15940/master.m3u8" },
                    { name: "10. Bölüm: Alfa ve Omega", source: "https://drinkfromwisdomwell.top/hls/videos/15941/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Başlangıçlar ve Bitişler", source: "https://drinkfromwisdomwell.top/hls/videos/15948/master.m3u8" },
                    { name: "2. Bölüm: Karanlık Madde", source: "https://drinkfromwisdomwell.top/hls/videos/15946/master.m3u8" },
                    { name: "3. Bölüm: Hayaletler", source: "https://drinkfromwisdomwell.top/hls/videos/15950/master.m3u8" },
                    { name: "4. Bölüm: Yolcular", source: "https://drinkfromwisdomwell.top/hls/videos/15945/master.m3u8" },
                    { name: "5. Bölüm: Kaybolanlar ve Bulunanlar", source: "https://drinkfromwisdomwell.top/hls/videos/15943/master.m3u8" },
                    { name: "6. Bölüm: Sonsuz Bir Döngü", source: "https://drinkfromwisdomwell.top/hls/videos/15947/master.m3u8" },
                    { name: "7. Bölüm: Beyaz Şeytan", source: "https://drinkfromwisdomwell.top/hls/videos/15949/master.m3u8" },
                    { name: "8. Bölüm: Sonlar ve Başlangıçlar", source: "https://drinkfromwisdomwell.top/hls/videos/15944/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Dejavu", source: "https://drinkfromwisdomwell.top/hls/videos/15925/master.m3u8" },
                    { name: "2. Bölüm: Sağ Kalanlar", source: "https://drinkfromwisdomwell.top/hls/videos/15931/master.m3u8" },
                    { name: "3. Bölüm: Adem ile Havva", source: "https://drinkfromwisdomwell.top/hls/videos/15930/master.m3u8" },
                    { name: "4. Bölüm: Köken", source: "https://drinkfromwisdomwell.top/hls/videos/15928/master.m3u8" },
                    { name: "5. Bölüm: Yaşam ve Ölüm", source: "https://drinkfromwisdomwell.top/hls/videos/15932/master.m3u8" },
                    { name: "6. Bölüm: Işık ve Gölge", source: "https://drinkfromwisdomwell.top/hls/videos/15927/master.m3u8" },
                    { name: "7. Bölüm: Zamanlar Arasında", source: "https://drinkfromwisdomwell.top/hls/videos/15929/master.m3u8" },
                    { name: "8. Bölüm: Cennet", source: "https://drinkfromwisdomwell.top/hls/videos/15926/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_peaky_blinders",
        type: "series",
        title: "Peaky Blinders",
        year: 2013,
        genre: "Suç, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/peaky-blinders-1189.webp",
        backdrop: "https://image.tmdb.org/t/p/original/9pr859d334j2D91l91h3K5r55o2.jpg",
        description: "1919 Birmingham'ında geçen dizi, acımasız Tommy Shelby liderliğindeki Peaky Blinders çetesinin yükselişini ve karşılaştığı zorlukları konu alıyor.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sonun Başlangıcı", source: "https://drinkfromwisdomwell.top/hls/videos/15809/master.m3u8" },
                    { name: "2. Bölüm: Dört Altın", source: "https://drinkfromwisdomwell.top/hls/videos/15810/master.m3u8" },
                    { name: "3. Bölüm: Hain Dolunay", source: "https://drinkfromwisdomwell.top/hls/videos/15811/master.m3u8" },
                    { name: "4. Bölüm: Şölenler, Piçler ve Cenazeler", source: "https://drinkfromwisdomwell.top/hls/videos/15812/master.m3u8" },
                    { name: "5. Bölüm: Bastırılmış İstekler", source: "https://drinkfromwisdomwell.top/hls/videos/15813/master.m3u8" },
                    { name: "6. Bölüm: Nadir Türler (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15808/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ufak Bir Gerçeklik Payı", source: "https://drinkfromwisdomwell.top/hls/videos/15818/master.m3u8" },
                    { name: "2. Bölüm: Kaer Morhen", source: "https://drinkfromwisdomwell.top/hls/videos/15816/master.m3u8" },
                    { name: "3. Bölüm: Kaybedilenler", source: "https://drinkfromwisdomwell.top/hls/videos/15814/master.m3u8" },
                    { name: "4. Bölüm: Redanyalı Casuslar", source: "https://drinkfromwisdomwell.top/hls/videos/15819/master.m3u8" },
                    { name: "5. Bölüm: Sırt Çevirmek", source: "https://drinkfromwisdomwell.top/hls/videos/15817/master.m3u8" },
                    { name: "6. Bölüm: Sevgili Dostum (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15815/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Shaerrawedd", source: "https://drinkfromwisdomwell.top/hls/videos/15829/master.m3u8" },
                    { name: "2. Bölüm: Ayrılma", source: "https://drinkfromwisdomwell.top/hls/videos/15831/master.m3u8" },
                    { name: "3. Bölüm: Yeniden Buluşma", source: "https://drinkfromwisdomwell.top/hls/videos/15826/master.m3u8" },
                    { name: "4. Bölüm: Davetiye", source: "https://drinkfromwisdomwell.top/hls/videos/15827/master.m3u8" },
                    { name: "5. Bölüm: İllüzyon Sanatı", source: "https://drinkfromwisdomwell.top/hls/videos/15830/master.m3u8" },
                    { name: "6. Bölüm: Plan Yaptığını Sanırsın (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15828/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Halat (The Noose)", source: "https://drinkfromwisdomwell.top/hls/videos/15832/master.m3u8" },
                    { name: "2. Bölüm: Kâfirler (Heathens)", source: "https://drinkfromwisdomwell.top/hls/videos/15837/master.m3u8" },
                    { name: "3. Bölüm: Karatavuk (Blackbird)", source: "https://drinkfromwisdomwell.top/hls/videos/15834/master.m3u8" },
                    { name: "4. Bölüm: Tehlikeli (Dangerous)", source: "https://drinkfromwisdomwell.top/hls/videos/15836/master.m3u8" },
                    { name: "5. Bölüm: Düello (The Duel)", source: "https://drinkfromwisdomwell.top/hls/videos/15835/master.m3u8" },
                    { name: "6. Bölüm: Şirket (The Company)", source: "https://drinkfromwisdomwell.top/hls/videos/15833/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kara Salı", source: "https://drinkfromwisdomwell.top/hls/videos/15825/master.m3u8" },
                    { name: "2. Bölüm: Kara Kediler", source: "https://drinkfromwisdomwell.top/hls/videos/15824/master.m3u8" },
                    { name: "3. Bölüm: Strateji", source: "https://drinkfromwisdomwell.top/hls/videos/15820/master.m3u8" },
                    { name: "4. Bölüm: Döngü", source: "https://drinkfromwisdomwell.top/hls/videos/15823/master.m3u8" },
                    { name: "5. Bölüm: Şok", source: "https://drinkfromwisdomwell.top/hls/videos/15822/master.m3u8" },
                    { name: "6. Bölüm: Bay Jones (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15821/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kara Gün", source: "https://drakkarhls4.icu/hls/videos/24854/master.m3u8" },
                    { name: "2. Bölüm: Siyah Gömlek", source: "https://drakkarhls6.icu/hls/videos/24855/master.m3u8" },
                    { name: "3. Bölüm: Altın", source: "https://drakkarhls8.icu/hls/videos/24856/master.m3u8" },
                    { name: "4. Bölüm: Safir", source: "https://drakkarhls6.icu/hls/videos/24857/master.m3u8" },
                    { name: "5. Bölüm: Cehennem Yolu", source: "https://drakkarhls6.icu/hls/videos/24858/master.m3u8" },
                    { name: "6. Bölüm: Kilit ve Anahtar (Final)", source: "https://drakkarhls8.icu/hls/videos/24859/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_better_call_saul",
        type: "series",
        title: "Better Call Saul",
        year: 2015,
        genre: "Suç, Dram, Kara Mizah",
        poster: "https://dizipal27.plus/uploads/series/original/better-call-saul-3665.webp",
        backdrop: "https://image.tmdb.org/t/p/original/w0y5j7g5k7f3a5a5a5a5a5a5.jpg", // Eğer yoksa Breaking Bad'in bir resmini veya Better Call Saul'un başka bir resmini kullanabiliriz
        description: "Breaking Bad'den önceki olayları konu alan dizi, Jimmy McGill'in ahlak yoksunu bir avukat olan Saul Goodman'a dönüşümünü anlatıyor.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Uno (Bir)", source: "https://drakkarhls10.icu/hls/videos/21447/master.m3u8" },
                    { name: "2. Bölüm: Mijo (Oğlum)", source: "https://drakkarhls10.icu/hls/videos/21451/master.m3u8" },
                    { name: "3. Bölüm: Nacho", source: "https://drakkarhls10.icu/hls/videos/21455/master.m3u8" },
                    { name: "4. Bölüm: Hero (Kahraman)", source: "https://drakkarhls10.icu/hls/videos/21459/master.m3u8" },
                    { name: "5. Bölüm: Alpine Shepherd Boy (Dağ Çobanı)", source: "https://drakkarhls10.icu/hls/videos/21463/master.m3u8" },
                    { name: "6. Bölüm: Five-O (Aynasız)", source: "https://drakkarhls10.icu/hls/videos/21467/master.m3u8" },
                    { name: "7. Bölüm: Bingo (Tombala)", source: "https://drakkarhls10.icu/hls/videos/21471/master.m3u8" },
                    { name: "8. Bölüm: RICO (Dolandırıcılık)", source: "https://drakkarhls10.icu/hls/videos/21475/master.m3u8" },
                    { name: "9. Bölüm: Pimento (Peynirli Sandviç)", source: "https://drakkarhls10.icu/hls/videos/21479/master.m3u8" },
                    { name: "10. Bölüm: Marco", source: "https://drakkarhls10.icu/hls/videos/21483/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Switch (Şalter)", source: "https://drakkarhls10.icu/hls/videos/21506/master.m3u8" },
                    { name: "2. Bölüm: Cobbler (Turta)", source: "https://drakkarhls10.icu/hls/videos/21511/master.m3u8" },
                    { name: "3. Bölüm: Amarillo", source: "https://drakkarhls10.icu/hls/videos/21516/master.m3u8" },
                    { name: "4. Bölüm: Gloves Off (Boks Eldivenleri)", source: "https://drakkarhls10.icu/hls/videos/21522/master.m3u8" },
                    { name: "5. Bölüm: Rebecca", source: "https://drakkarhls10.icu/hls/videos/21527/master.m3u8" },
                    { name: "6. Bölüm: Bali Ha'i", source: "https://drakkarhls10.icu/hls/videos/21532/master.m3u8" },
                    { name: "7. Bölüm: Inflatable (Şişme Adam)", source: "https://drakkarhls10.icu/hls/videos/21537/master.m3u8" },
                    { name: "8. Bölüm: Fifi", source: "https://drakkarhls10.icu/hls/videos/21542/master.m3u8" },
                    { name: "9. Bölüm: Nailed (Başarmak)", source: "https://drakkarhls10.icu/hls/videos/21547/master.m3u8" },
                    { name: "10. Bölüm: Klick (Kilometre)", source: "https://drakkarhls10.icu/hls/videos/21552/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Mabel", source: "https://drakkarhls10.icu/hls/videos/21505/master.m3u8" },
                    { name: "2. Bölüm: Witness (Tanık)", source: "https://drakkarhls10.icu/hls/videos/21510/master.m3u8" },
                    { name: "3. Bölüm: Sunk Costs (Batık Maliyet)", source: "https://drakkarhls10.icu/hls/videos/21515/master.m3u8" },
                    { name: "4. Bölüm: Sabrosito", source: "https://drakkarhls10.icu/hls/videos/21520/master.m3u8" },
                    { name: "5. Bölüm: Chicanery (Dalavere)", source: "https://drakkarhls10.icu/hls/videos/21526/master.m3u8" },
                    { name: "6. Bölüm: Off Brand (Marka Dışı)", source: "https://drakkarhls10.icu/hls/videos/21531/master.m3u8" },
                    { name: "7. Bölüm: Expenses (Masraflar)", source: "https://drakkarhls10.icu/hls/videos/21536/master.m3u8" },
                    { name: "8. Bölüm: Slip (Kayma)", source: "https://drakkarhls10.icu/hls/videos/21541/master.m3u8" },
                    { name: "9. Bölüm: Fall (Düşme)", source: "https://drakkarhls10.icu/hls/videos/21546/master.m3u8" },
                    { name: "10. Bölüm: Lantern (Fener)", source: "https://drakkarhls10.icu/hls/videos/21551/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Smoke (Duman)", source: "https://drakkarhls10.icu/hls/videos/21504/master.m3u8" },
                    { name: "2. Bölüm: Breathe (Nefes Al)", source: "https://drakkarhls10.icu/hls/videos/21509/master.m3u8" },
                    { name: "3. Bölüm: Something Beautiful (Güzel Bir İş)", source: "https://drakkarhls10.icu/hls/videos/21514/master.m3u8" },
                    { name: "4. Bölüm: Talk (Konuşma)", source: "https://drakkarhls10.icu/hls/videos/21519/master.m3u8" },
                    { name: "5. Bölüm: Quite a Ride (Ne Maceraydı)", source: "https://drakkarhls10.icu/hls/videos/21525/master.m3u8" },
                    { name: "6. Bölüm: Piñata", source: "https://drakkarhls10.icu/hls/videos/21530/master.m3u8" },
                    { name: "7. Bölüm: Something Stupid (Aptalca Bir İş)", source: "https://drakkarhls10.icu/hls/videos/21535/master.m3u8" },
                    { name: "8. Bölüm: Coushatta", source: "https://drakkarhls10.icu/hls/videos/21540/master.m3u8" },
                    { name: "9. Bölüm: Wiedersehen", source: "https://drakkarhls10.icu/hls/videos/21545/master.m3u8" },
                    { name: "10. Bölüm: Winner (Kazanan)", source: "https://drakkarhls10.icu/hls/videos/21550/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Magic Man (Mucize Adam)", source: "https://drakkarhls10.icu/hls/videos/21503/master.m3u8" },
                    { name: "2. Bölüm: 50% Off (Yüzde 50 İndirim)", source: "https://drakkarhls10.icu/hls/videos/21508/master.m3u8" },
                    { name: "3. Bölüm: The Guy For This (Bu İş İçin Biçilmiş Kaftan)", source: "https://drakkarhls10.icu/hls/videos/21513/master.m3u8" },
                    { name: "4. Bölüm: Namaste", source: "https://drakkarhls10.icu/hls/videos/21518/master.m3u8" },
                    { name: "5. Bölüm: Dedicado a Max (Max Anısına)", source: "https://drakkarhls10.icu/hls/videos/21524/master.m3u8" },
                    { name: "6. Bölüm: Wexler v. Goodman", source: "https://drakkarhls10.icu/hls/videos/21529/master.m3u8" },
                    { name: "7. Bölüm: JMM", source: "https://drakkarhls10.icu/hls/videos/21534/master.m3u8" },
                    { name: "8. Bölüm: Bagman (Tahsilatçı)", source: "https://drakkarhls10.icu/hls/videos/21539/master.m3u8" },
                    { name: "9. Bölüm: Bad Choice Road (Kötü Seçimler Kötü Yollar)", source: "https://drakkarhls10.icu/hls/videos/21544/master.m3u8" },
                    { name: "10. Bölüm: Something Unforgivable (Affedilmez Bir Şey)", source: "https://drakkarhls10.icu/hls/videos/21549/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Wine and Roses (Şarap ve Güller)", source: "https://drakkarhls10.icu/hls/videos/21502/master.m3u8" },
                    { name: "2. Bölüm: Carrot and Stick (Ödül ve Ceza)", source: "https://drakkarhls10.icu/hls/videos/21507/master.m3u8" },
                    { name: "3. Bölüm: Rock and Hard Place (İki Arada Bir Derede)", source: "https://drakkarhls10.icu/hls/videos/21512/master.m3u8" },
                    { name: "4. Bölüm: Hit and Run (Vurkaç)", source: "https://drakkarhls10.icu/hls/videos/21517/master.m3u8" },
                    { name: "5. Bölüm: Black and Blue (Siyah ve Mavi)", source: "https://drakkarhls10.icu/hls/videos/21523/master.m3u8" },
                    { name: "6. Bölüm: Axe and Grind (Kişisel Çıkarlar)", source: "https://drakkarhls10.icu/hls/videos/21528/master.m3u8" },
                    { name: "7. Bölüm: Plan and Execution (Plan ve Uygulama)", source: "https://drakkarhls10.icu/hls/videos/21533/master.m3u8" },
                    { name: "8. Bölüm: Point and Shoot (Silahı Doğrult ve Tetiği Çek)", source: "https://drakkarhls10.icu/hls/videos/21538/master.m3u8" },
                    { name: "9. Bölüm: Fun and Games (Güllük Gülistanlık)", source: "https://drakkarhls10.icu/hls/videos/21543/master.m3u8" },
                    { name: "10. Bölüm: Nippy", source: "https://drakkarhls10.icu/hls/videos/21548/master.m3u8" },
                    { name: "11. Bölüm: Breaking Bad", source: "https://drakkarhls10.icu/hls/videos/21553/master.m3u8" },
                    { name: "12. Bölüm: Waterworks (Gözyaşları)", source: "https://drakkarhls10.icu/hls/videos/21554/master.m3u8" },
                    { name: "13. Bölüm: Saul Gone (Saul Gider)", source: "https://drakkarhls10.icu/hls/videos/21555/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_sex_education",
        type: "series",
        title: "Sex Education",
        year: 2019,
        genre: "Komedi, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/sex-education-1528.webp",
        backdrop: "https://image.tmdb.org/t/p/original/3r3tZgKTw1554931d3383t78h8.jpg",
        description: "Güvensiz bir genç olan Otis, terapist annesi sayesinde cinsellik konusunda her şeyi bilmektedir. Okulda bir seks terapisi kliniği açmaya karar verir.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19440/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19432/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19444/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19434/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19436/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19429/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19438/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19442/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19399/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19403/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19393/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19411/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19406/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19401/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19396/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19408/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19413/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19415/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19417/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19425/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19421/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19423/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19419/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19428/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19383/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19384/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19388/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19391/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19385/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19386/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls10.icu/hls/videos/19382/master.m3u8" },
                    { name: "8. Bölüm (Final)", source: "https://drakkarhls10.icu/hls/videos/19381/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_ask_101",
        type: "series",
        title: "Aşk 101",
        year: 2020,
        genre: "Gençlik, Dram, Komedi",
        poster: "https://dizipal27.plus/uploads/series/original/ask-101-3595.webp",
        backdrop: "https://image.tmdb.org/t/p/original/A17F13z73f253f10241.jpg", // Veya uygun bir backdrop linki
        description: "1990'lar Türkiye'sinde, dışlanmış bir grup genç, sevdikleri bir öğretmeni okulda tutmak için bir plan yaparlar ve bu süreçte aşkı, dostluğu ve kendilerini keşfederler.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: İlk An", source: "https://drakkarhls4.icu/hls/videos/19202/master.m3u8" },
                    { name: "2. Bölüm: Hayranlık", source: "https://drakkarhls9.icu/hls/videos/19198/master.m3u8" },
                    { name: "3. Bölüm: Tutku", source: "https://drakkarhls8.icu/hls/videos/19200/master.m3u8" },
                    { name: "4. Bölüm: Özlem", source: "https://drakkarhls4.icu/hls/videos/19203/master.m3u8" },
                    { name: "5. Bölüm: Şefkat", source: "https://drakkarhls8.icu/hls/videos/19196/master.m3u8" },
                    { name: "6. Bölüm: Eğlence", source: "https://drakkarhls6.icu/hls/videos/19194/master.m3u8" },
                    { name: "7. Bölüm: Değişim", source: "https://drakkarhls6.icu/hls/videos/19191/master.m3u8" },
                    { name: "8. Bölüm: Özel Bir An (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/19189/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls4.icu/hls/videos/19214/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls6.icu/hls/videos/19208/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls4.icu/hls/videos/19205/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls4.icu/hls/videos/19206/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls4.icu/hls/videos/19212/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls9.icu/hls/videos/19209/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls8.icu/hls/videos/19211/master.m3u8" },
                    { name: "8. Bölüm (Final)", source: "https://drakkarhls8.icu/hls/videos/19216/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_ersan_kuneri",
        type: "series",
        title: "Erşan Kuneri",
        year: 2022,
        genre: "Komedi",
        poster: "https://dizipal27.plus/uploads/series/original/ersan-kuneri-7595.webp",
        backdrop: "https://image.tmdb.org/t/p/original/1rO4xoCUwxQpt3g6wT738yK7u8V.jpg",
        description: "Erotik sinemanın ünlü yapımcısı ve yönetmeni Erşan Kuneri, 80'lerin başında hapishaneden çıktıktan sonra farklı türlerde filmler çekerek sinema tarihine damga vurmayı hedefler.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kuru Murad", source: "https://drakkarhls10.icu/hls/videos/21130/master.m3u8" },
                    { name: "2. Bölüm: Ebenin Avı", source: "https://drakkarhls10.icu/hls/videos/21132/master.m3u8" },
                    { name: "3. Bölüm: Kooperatif Kemal", source: "https://drakkarhls10.icu/hls/videos/21134/master.m3u8" },
                    { name: "4. Bölüm: Kötü Mal", source: "https://drakkarhls10.icu/hls/videos/21131/master.m3u8" },
                    { name: "5. Bölüm: Faqbadi", source: "https://drakkarhls10.icu/hls/videos/21133/master.m3u8" },
                    { name: "6. Bölüm: Blue Box", source: "https://drakkarhls10.icu/hls/videos/21135/master.m3u8" },
                    { name: "7. Bölüm: Er-Man", source: "https://drakkarhls10.icu/hls/videos/21136/master.m3u8" },
                    { name: "8. Bölüm: Doyamadım (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/21137/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kötü Yol (A Bad Path)", source: "https://drakkarhls10.icu/hls/videos/21128/master.m3u8" },
                    { name: "2. Bölüm: Kayma Vakti (Time to Slide)", source: "https://drakkarhls10.icu/hls/videos/21122/master.m3u8" },
                    { name: "3. Bölüm: Hamur İşi (Pastry Job)", source: "https://drakkarhls10.icu/hls/videos/21129/master.m3u8" },
                    { name: "4. Bölüm: Yaprak Sarmala (Wrapped Up Yaprak)", source: "https://drakkarhls10.icu/hls/videos/21125/master.m3u8" },
                    { name: "5. Bölüm: Acı Baba (Bitter Father)", source: "https://drakkarhls10.icu/hls/videos/21126/master.m3u8" },
                    { name: "6. Bölüm: Sahne Tozu (Stage Dust)", source: "https://drakkarhls10.icu/hls/videos/21123/master.m3u8" },
                    { name: "7. Bölüm: Şu Cimri Hayat (This Stingy Life)", source: "https://drakkarhls10.icu/hls/videos/21127/master.m3u8" },
                    { name: "8. Bölüm: Şeker Paşa (Sugar Pasha)", source: "https://drakkarhls10.icu/hls/videos/21124/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_loki",
        type: "series",
        title: "Loki",
        year: 2021,
        genre: "Bilim Kurgu, Fantastik, Macera",
        poster: "https://dizipal27.plus/uploads/series/original/loki-5720.webp",
        backdrop: "https://image.tmdb.org/t/p/original/voHuTlDwt9TaUllgriDRRHbvxfo.jpg",
        description: "Fesatlık Tanrısı Loki, 'Avengers: Endgame' olaylarından sonra zamanın akışını değiştirdiği için gizemli Zaman Değişimi Otoritesi (TVA) tarafından yakalanır.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Görkemli Amaç", source: "https://drakkarhls8.icu/hls/videos/24526/master.m3u8" },
                    { name: "2. Bölüm: Varyant", source: "https://drakkarhls4.icu/hls/videos/24533/master.m3u8" },
                    { name: "3. Bölüm: Lamentis", source: "https://drakkarhls4.icu/hls/videos/24540/master.m3u8" },
                    { name: "4. Bölüm: Nexus Etkinliği", source: "https://drakkarhls8.icu/hls/videos/24547/master.m3u8" },
                    { name: "5. Bölüm: Gizeme Yolculuk", source: "https://drakkarhls4.icu/hls/videos/24554/master.m3u8" },
                    { name: "6. Bölüm: Her Zaman İçin. Daima.", source: "https://drakkarhls8.icu/hls/videos/24561/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ouroboros", source: "https://drakkarhls6.icu/hls/videos/24529/master.m3u8" },
                    { name: "2. Bölüm: Brad'i Sıkıştırmak", source: "https://drakkarhls6.icu/hls/videos/24536/master.m3u8" },
                    { name: "3. Bölüm: 1893", source: "https://drakkarhls9.icu/hls/videos/24543/master.m3u8" },
                    { name: "4. Bölüm: ZDO'nun Kalbi", source: "https://drakkarhls4.icu/hls/videos/24550/master.m3u8" },
                    { name: "5. Bölüm: Bilim Kurgu", source: "https://drakkarhls6.icu/hls/videos/24557/master.m3u8" },
                    { name: "6. Bölüm: Görkemli Amaç (Final)", source: "https://drakkarhls6.icu/hls/videos/24564/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_mahsun_j",
        type: "series",
        title: "Mahsun J",
        year: 2024,
        genre: "Komedi",
        poster: "https://dizipal27.plus/uploads/series/original/mahsun-j-8397.webp",
        backdrop: "https://image.tmdb.org/t/p/original/4w2B78y5a2g55191a7185.jpg", // Temsili backdrop, daha iyisi bulunabilir
        description: "Kimsenin umursamadığı sıradan bir motokurye olan Mahsun'un, bir anda kendisini büyük bir karmaşanın ve komedinin içinde bulduğu hikaye.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls6.icu/hls/videos/2703/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls8.icu/hls/videos/2695/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls4.icu/hls/videos/2696/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls4.icu/hls/videos/2701/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls9.icu/hls/videos/2686/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls9.icu/hls/videos/2698/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls9.icu/hls/videos/2694/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls9.icu/hls/videos/2706/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls6.icu/hls/videos/2705/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls8.icu/hls/videos/2700/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls9.icu/hls/videos/2704/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls8.icu/hls/videos/2699/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls4.icu/hls/videos/2707/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls4.icu/hls/videos/22949/master.m3u8" },
                    { name: "8. Bölüm", source: "https://drakkarhls6.icu/hls/videos/27989/master.m3u8" },
                    { name: "9. Bölüm", source: "https://drakkarhls4.icu/hls/videos/28116/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_gibi",
        type: "series",
        title: "Gibi",
        year: 2021,
        genre: "Komedi",
        poster: "https://dizipal27.plus/uploads/series/original/gibi-8226.webp",
        backdrop: "https://image.tmdb.org/t/p/original/q8EEk0g5w0H0q8r0q8r0q8r0.jpg", // Gibi için uygun bir backdrop linki (yoksa bu placeholder'ı değiştir)
        description: "Yılmaz ve İlkkan, sürekli olarak birbiriyle atışan iki arkadaştır. Sıradan hayatlarını altüst edecek küçücük olayları inanılmaz bir beceriyle büyüterek işleri içinden çıkılmaz bir hale getirirler.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kokariç", source: "https://drakkarhls4.icu/hls/videos/13986/master.m3u8" },
                    { name: "2. Bölüm: Vatka", source: "https://drakkarhls4.icu/hls/videos/13987/master.m3u8" },
                    { name: "3. Bölüm: Nü Model", source: "https://drakkarhls8.icu/hls/videos/13984/master.m3u8" },
                    { name: "4. Bölüm: Erasmus'la Gelen Yamyam", source: "https://drakkarhls6.icu/hls/videos/13988/master.m3u8" },
                    { name: "5. Bölüm: Yanlış Mentor", source: "https://drakkarhls4.icu/hls/videos/13985/master.m3u8" },
                    { name: "6. Bölüm: Karanlık Güç", source: "https://drakkarhls8.icu/hls/videos/13991/master.m3u8" },
                    { name: "7. Bölüm: İkinci Yol", source: "https://drakkarhls8.icu/hls/videos/13992/master.m3u8" },
                    { name: "8. Bölüm: Badana", source: "https://drakkarhls4.icu/hls/videos/13993/master.m3u8" },
                    { name: "9. Bölüm: Ayırtma Yenilemesi", source: "https://drakkarhls9.icu/hls/videos/13989/master.m3u8" },
                    { name: "10. Bölüm: Kan Parası", source: "https://drakkarhls6.icu/hls/videos/13990/master.m3u8" },
                    { name: "11. Bölüm: Yılmaz Bey Banyo", source: "https://drakkarhls6.icu/hls/videos/13994/master.m3u8" },
                    { name: "12. Bölüm: Atın Bulunuşu (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/13983/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Vücutçu Yalvaç", source: "https://drakkarhls4.icu/hls/videos/14003/master.m3u8" },
                    { name: "2. Bölüm: Kuki", source: "https://drakkarhls4.icu/hls/videos/14001/master.m3u8" },
                    { name: "3. Bölüm: Bej", source: "https://drakkarhls8.icu/hls/videos/13997/master.m3u8" },
                    { name: "4. Bölüm: Sokak Röportajı", source: "https://drakkarhls6.icu/hls/videos/13996/master.m3u8" },
                    { name: "5. Bölüm: Çaça ve Cosplay", source: "https://drakkarhls6.icu/hls/videos/13995/master.m3u8" },
                    { name: "6. Bölüm: İki İçi Dışı Bir Kişi", source: "https://drakkarhls6.icu/hls/videos/14000/master.m3u8" },
                    { name: "7. Bölüm: Gelin Başı", source: "https://drakkarhls4.icu/hls/videos/13998/master.m3u8" },
                    { name: "8. Bölüm: Resimdeki Ünlü", source: "https://drakkarhls8.icu/hls/videos/14002/master.m3u8" },
                    { name: "9. Bölüm: Eşref Hidayet Gürdal Kültür Merkezi", source: "https://drakkarhls9.icu/hls/videos/14004/master.m3u8" },
                    { name: "10. Bölüm: Vita Brevis (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/13999/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sarışın ve Kotlu", source: "https://drakkarhls4.icu/hls/videos/13952/master.m3u8" },
                    { name: "2. Bölüm: Keskin Nişancı", source: "https://drakkarhls9.icu/hls/videos/13951/master.m3u8" },
                    { name: "3. Bölüm: Büfe", source: "https://drakkarhls8.icu/hls/videos/13953/master.m3u8" },
                    { name: "4. Bölüm: Sınıfsal Veda", source: "https://drakkarhls9.icu/hls/videos/13954/master.m3u8" },
                    { name: "5. Bölüm: Mazbut Bir Hayat", source: "https://drakkarhls6.icu/hls/videos/13955/master.m3u8" },
                    { name: "6. Bölüm: Ghosting", source: "https://drakkarhls6.icu/hls/videos/13947/master.m3u8" },
                    { name: "7. Bölüm: Teşekkürler", source: "https://drakkarhls6.icu/hls/videos/13949/master.m3u8" },
                    { name: "8. Bölüm: Gülnuray", source: "https://drakkarhls6.icu/hls/videos/13950/master.m3u8" },
                    { name: "9. Bölüm: Bilanço", source: "https://drakkarhls9.icu/hls/videos/13948/master.m3u8" },
                    { name: "10. Bölüm: Birinci Kabak (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/13956/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Övgü", source: "https://drakkarhls4.icu/hls/videos/14005/master.m3u8" },
                    { name: "2. Bölüm: Bin", source: "https://drakkarhls4.icu/hls/videos/14006/master.m3u8" },
                    { name: "3. Bölüm: Orta Yaş Krizi", source: "https://drakkarhls8.icu/hls/videos/14008/master.m3u8" },
                    { name: "4. Bölüm: Kafa Nakli", source: "https://drakkarhls8.icu/hls/videos/14010/master.m3u8" },
                    { name: "5. Bölüm: Patern", source: "https://drakkarhls6.icu/hls/videos/14011/master.m3u8" },
                    { name: "6. Bölüm: 165", source: "https://drakkarhls9.icu/hls/videos/14009/master.m3u8" },
                    { name: "7. Bölüm: Dönen Tekme", source: "https://drakkarhls9.icu/hls/videos/14012/master.m3u8" },
                    { name: "8. Bölüm: Defter", source: "https://drakkarhls4.icu/hls/videos/14007/master.m3u8" },
                    { name: "9. Bölüm: Dirty Talk ve İç Mimari", source: "https://drakkarhls8.icu/hls/videos/14013/master.m3u8" },
                    { name: "10. Bölüm: MÖ 2998-2997 (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/14014/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sinek", source: "https://drakkarhls8.icu/hls/videos/13969/master.m3u8" },
                    { name: "2. Bölüm: Kahır", source: "https://drakkarhls6.icu/hls/videos/13963/master.m3u8" },
                    { name: "3. Bölüm: Şako Bosphorus", source: "https://drakkarhls4.icu/hls/videos/13961/master.m3u8" },
                    { name: "4. Bölüm: Yokluk", source: "https://drakkarhls8.icu/hls/videos/13960/master.m3u8" },
                    { name: "5. Bölüm: Böbrek Taşı", source: "https://drakkarhls9.icu/hls/videos/13958/master.m3u8" },
                    { name: "6. Bölüm: Aşağılık Adam Kanlar İçinde", source: "https://drakkarhls9.icu/hls/videos/13959/master.m3u8" },
                    { name: "7. Bölüm: Leopar Ve", source: "https://drakkarhls9.icu/hls/videos/13962/master.m3u8" },
                    { name: "8. Bölüm: Şadan", source: "https://drakkarhls4.icu/hls/videos/13965/master.m3u8" },
                    { name: "9. Bölüm: İrade", source: "https://drakkarhls9.icu/hls/videos/13964/master.m3u8" },
                    { name: "10. Bölüm: Geleceğin Habercisi Genç Yetişkinler", source: "https://drakkarhls8.icu/hls/videos/13957/master.m3u8" },
                    { name: "11. Bölüm: Kenan Ticaret", source: "https://drakkarhls4.icu/hls/videos/13966/master.m3u8" },
                    { name: "12. Bölüm: Demir Kalenin Kuzgunları: Ölüm Büyücüsü", source: "https://drakkarhls8.icu/hls/videos/13968/master.m3u8" },
                    { name: "13. Bölüm: Demir Kalenin Kuzgunları: Ahşap Sandık (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/13967/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kırık Plak", source: "https://drakkarhls6.icu/hls/videos/13971/master.m3u8" },
                    { name: "2. Bölüm: Yüzeysel Bir Adam", source: "https://drakkarhls4.icu/hls/videos/13973/master.m3u8" },
                    { name: "3. Bölüm: İçerde", source: "https://drakkarhls9.icu/hls/videos/13975/master.m3u8" },
                    { name: "4. Bölüm: Kasa", source: "https://drakkarhls9.icu/hls/videos/13980/master.m3u8" },
                    { name: "5. Bölüm: Kanlı Pazar", source: "https://drakkarhls4.icu/hls/videos/13981/master.m3u8" },
                    { name: "6. Bölüm: Ziyaret", source: "https://drakkarhls4.icu/hls/videos/13970/master.m3u8" },
                    { name: "7. Bölüm: Kiralık Katil", source: "https://drakkarhls6.icu/hls/videos/13982/master.m3u8" },
                    { name: "8. Bölüm: Takip", source: "https://drakkarhls8.icu/hls/videos/13979/master.m3u8" },
                    { name: "9. Bölüm: Yüzleşme", source: "https://drakkarhls4.icu/hls/videos/13978/master.m3u8" },
                    { name: "10. Bölüm: Son Darbe", source: "https://drakkarhls4.icu/hls/videos/13976/master.m3u8" },
                    { name: "11. Bölüm: Kaçış Planı", source: "https://drakkarhls4.icu/hls/videos/13974/master.m3u8" },
                    { name: "12. Bölüm: Hesaplaşma", source: "https://drakkarhls9.icu/hls/videos/13972/master.m3u8" },
                    { name: "13. Bölüm: Final Vuruşu (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/13977/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_prens",
        type: "series",
        title: "Prens",
        year: 2023,
        genre: "Komedi, Tarih",
        poster: "https://dizipal27.plus/uploads/series/original/prens-8513.webp",
        backdrop: "https://image.tmdb.org/t/p/original/w0y5j7g5k7f3a5a5a5a5a5a5.jpg", // Temsili, daha iyi bir backdrop bulunabilir
        description: "Ailesinin isim verme zahmetine bile girmediği, herkesin 'Prens' diye seslendiği, kimsenin ciddiye almadığı bir ortanca prensin trajikomik hikayesi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Bir Devrin Sonu", source: "https://drakkarhls4.icu/hls/videos/7100/master.m3u8" },
                    { name: "2. Bölüm: Olmak Ya Da Olmamak", source: "https://drakkarhls8.icu/hls/videos/7105/master.m3u8" },
                    { name: "3. Bölüm: Vahşi Kelebek", source: "https://drakkarhls9.icu/hls/videos/7101/master.m3u8" },
                    { name: "4. Bölüm: Hain Krala Ölüm", source: "https://drakkarhls8.icu/hls/videos/7107/master.m3u8" },
                    { name: "5. Bölüm: Kanla Alınan Krallık", source: "https://drakkarhls6.icu/hls/videos/7104/master.m3u8" },
                    { name: "6. Bölüm: Giden Geri Gelecek", source: "https://drakkarhls4.icu/hls/videos/7106/master.m3u8" },
                    { name: "7. Bölüm: Her Şey Aşk İçin", source: "https://drakkarhls4.icu/hls/videos/7102/master.m3u8" },
                    { name: "8. Bölüm: Alçaklar ve Piçler (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/7103/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Küçük Oyunlar Büyük Düşler", source: "https://drakkarhls8.icu/hls/videos/7108/master.m3u8" },
                    { name: "2. Bölüm: Kaderine Terk Edilmiş Krallık", source: "https://drakkarhls9.icu/hls/videos/7109/master.m3u8" },
                    { name: "3. Bölüm: Ölü Yelkenler Uğruna", source: "https://drakkarhls9.icu/hls/videos/7112/master.m3u8" },
                    { name: "4. Bölüm: Valhalla", source: "https://drakkarhls9.icu/hls/videos/7113/master.m3u8" },
                    { name: "5. Bölüm: Kuzey Unutmaz", source: "https://drakkarhls4.icu/hls/videos/7114/master.m3u8" },
                    { name: "6. Bölüm: İntikam ve Masumiyet", source: "https://drakkarhls8.icu/hls/videos/7110/master.m3u8" },
                    { name: "7. Bölüm: Kadınların Çağı Başlıyor (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/7111/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls1.icu/hls/videos/7097/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls15.icu/hls/videos/7098/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/8827/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls6.icu/hls/videos/8828/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls16.icu/hls/videos/7099/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls6.icu/hls/videos/15500/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls8.icu/hls/videos/13823/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/13824/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_cekic_ve_gul",
        type: "series",
        title: "Çekiç ve Gül: Bir Behzat Ç. Hikayesi",
        year: 2022,
        genre: "Polisiye, Dram, Aksiyon",
        poster: "https://dizipal27.plus/uploads/series/original/cekic-ve-gul-bir-behzat-c-hikayesi-5701.webp",
        backdrop: "https://image.tmdb.org/t/p/original/7o62a9w84T152563652141.jpg", // Temsili backdrop
        description: "Behzat Ç. ve ekibi, Ankara sokaklarındaki suçlarla ve kendi içsel çatışmalarıyla mücadele etmeye devam ediyor.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls9.icu/hls/videos/21107/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls1.icu/hls/videos/8976/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls15.icu/hls/videos/8974/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls15.icu/hls/videos/8973/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls1.icu/hls/videos/8970/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls1.icu/hls/videos/8971/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls1.icu/hls/videos/8969/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls15.icu/hls/videos/8975/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: İnsanın irisi çiğdir, ölüsü bayat", source: "https://drakkarhls16.icu/hls/videos/9142/master.m3u8" },
                    { name: "2. Bölüm: Sen de bizdensin", source: "https://drakkarhls15.icu/hls/videos/9152/master.m3u8" },
                    { name: "3. Bölüm: Çok mutsuzum lan", source: "https://drakkarhls1.icu/hls/videos/9146/master.m3u8" },
                    { name: "4. Bölüm: Sığamıyorsun değil mi bu şehre?", source: "https://drakkarhls16.icu/hls/videos/8979/master.m3u8" },
                    { name: "5. Bölüm: Toksik ilişki", source: "https://drakkarhls15.icu/hls/videos/9135/master.m3u8" },
                    { name: "6. Bölüm: Mesele Adalet", source: "https://drakkarhls16.icu/hls/videos/8980/master.m3u8" },
                    { name: "7. Bölüm: Adı Boncuk olacak (Sezon Finali)", source: "https://drakkarhls16.icu/hls/videos/8978/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls15.icu/hls/videos/21915/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls16.icu/hls/videos/22761/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls1.icu/hls/videos/23612/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls15.icu/hls/videos/23957/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls1.icu/hls/videos/24067/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls15.icu/hls/videos/25021/master.m3u8" },
                    { name: "7. Bölüm (Sezon Finali)", source: "https://drakkarhls16.icu/hls/videos/25185/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_lucifer",
        type: "series",
        title: "Lucifer",
        year: 2016,
        genre: "Fantastik, Polisiye, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/lucifer-7601.webp",
        backdrop: "https://image.tmdb.org/t/p/original/aDBRtunw49UF4XmqeBeCNjBb9Nj.jpg",
        description: "Cehennemin Efendisi olmaktan sıkılan Lucifer, tahtını bırakıp Los Angeles'a yerleşir ve burada bir gece kulübü işletirken bir yandan da LAPD dedektifi Chloe Decker ile suçları çözer.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drakkarhls10.icu/hls/videos/19274/master.m3u8" },
                    { name: "2. Bölüm: Lucifer, Bekle, Cici Şeytan", source: "https://drakkarhls10.icu/hls/videos/19284/master.m3u8" },
                    { name: "3. Bölüm: Karanlığın Sahte Prensi", source: "https://drakkarhls10.icu/hls/videos/19281/master.m3u8" },
                    { name: "4. Bölüm: Erkek Ivır Zıvırları", source: "https://drakkarhls10.icu/hls/videos/19276/master.m3u8" },
                    { name: "5. Bölüm: Güzel Ayakkabılar", source: "https://drakkarhls10.icu/hls/videos/19277/master.m3u8" },
                    { name: "6. Bölüm: En Sevilen Oğul", source: "https://drakkarhls10.icu/hls/videos/19272/master.m3u8" },
                    { name: "7. Bölüm: Yardımcı", source: "https://drakkarhls10.icu/hls/videos/19279/master.m3u8" },
                    { name: "8. Bölüm: Sen de mi Doktor?", source: "https://drakkarhls10.icu/hls/videos/19275/master.m3u8" },
                    { name: "9. Bölüm: Rahibin Biri Bara Gitmiş", source: "https://drakkarhls10.icu/hls/videos/19283/master.m3u8" },
                    { name: "10. Bölüm: Baba", source: "https://drakkarhls10.icu/hls/videos/19278/master.m3u8" },
                    { name: "11. Bölüm: Aziz Lucifer", source: "https://drakkarhls10.icu/hls/videos/19280/master.m3u8" },
                    { name: "12. Bölüm: #TeamLucifer", source: "https://drakkarhls10.icu/hls/videos/19282/master.m3u8" },
                    { name: "13. Bölüm: Beni Cehenneme Götür (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19273/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Lucifer İçin İşler Tıkırında", source: "https://drakkarhls10.icu/hls/videos/19303/master.m3u8" },
                    { name: "2. Bölüm: Yalancı, Yalancı, Sana Kimse İnanmaz", source: "https://drakkarhls10.icu/hls/videos/19304/master.m3u8" },
                    { name: "3. Bölüm: Günah Yiyici", source: "https://drakkarhls10.icu/hls/videos/19298/master.m3u8" },
                    { name: "4. Bölüm: Kadınlık Organları", source: "https://drakkarhls10.icu/hls/videos/19295/master.m3u8" },
                    { name: "5. Bölüm: Silahlandırıcı", source: "https://drakkarhls10.icu/hls/videos/19296/master.m3u8" },
                    { name: "6. Bölüm: Canavar", source: "https://drakkarhls10.icu/hls/videos/19300/master.m3u8" },
                    { name: "7. Bölüm: Küçük Maymunum", source: "https://drakkarhls10.icu/hls/videos/19307/master.m3u8" },
                    { name: "8. Bölüm: Bıçaklanma", source: "https://drakkarhls10.icu/hls/videos/19301/master.m3u8" },
                    { name: "9. Bölüm: Yuva Yıkıcı", source: "https://drakkarhls10.icu/hls/videos/19308/master.m3u8" },
                    { name: "10. Bölüm: Taviz Vermek", source: "https://drakkarhls10.icu/hls/videos/19306/master.m3u8" },
                    { name: "11. Bölüm: Hostes Engeli", source: "https://drakkarhls10.icu/hls/videos/19312/master.m3u8" },
                    { name: "12. Bölüm: Aşk Boynuzları", source: "https://drakkarhls10.icu/hls/videos/19310/master.m3u8" },
                    { name: "13. Bölüm: Ölmek İçin Güzel Bir Gün", source: "https://drakkarhls10.icu/hls/videos/19305/master.m3u8" },
                    { name: "14. Bölüm: Candy Morningstar", source: "https://drakkarhls10.icu/hls/videos/19297/master.m3u8" },
                    { name: "15. Bölüm: Sahtekâr Küçük Parazit", source: "https://drakkarhls10.icu/hls/videos/19309/master.m3u8" },
                    { name: "16. Bölüm: Tanrı Johnson", source: "https://drakkarhls10.icu/hls/videos/19299/master.m3u8" },
                    { name: "17. Bölüm: Tanrıçaya Acımak", source: "https://drakkarhls10.icu/hls/videos/19302/master.m3u8" },
                    { name: "18. Bölüm: İyisiyle, Kötüsüyle ve Çıtırıyla (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19311/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Geri Döndüler, Değil mi?", source: "https://drakkarhls10.icu/hls/videos/19346/master.m3u8" },
                    { name: "2. Bölüm: Minik Havucu Olan", source: "https://drakkarhls10.icu/hls/videos/19345/master.m3u8" },
                    { name: "3. Bölüm: Bay ve Bayan Mazikeen Smith", source: "https://drakkarhls10.icu/hls/videos/19339/master.m3u8" },
                    { name: "4. Bölüm: Lucifer Olsa Ne Yapardı?", source: "https://drakkarhls10.icu/hls/videos/19342/master.m3u8" },
                    { name: "5. Bölüm: Tekrar Hoş Geldin, Charlotte Richards", source: "https://drakkarhls10.icu/hls/videos/19352/master.m3u8" },
                    { name: "6. Bölüm: Nefis Biriyle Vegas", source: "https://drakkarhls10.icu/hls/videos/19350/master.m3u8" },
                    { name: "7. Bölüm: Kayıt Dışı", source: "https://drakkarhls9.icu/hls/videos/19364/master.m3u8" },
                    { name: "8. Bölüm: Chloe, Lucifer mı Oluyor?", source: "https://drakkarhls10.icu/hls/videos/19362/master.m3u8" },
                    { name: "9. Bölüm: Sinnerman", source: "https://drakkarhls10.icu/hls/videos/19343/master.m3u8" },
                    { name: "10. Bölüm: Günah Kutusu", source: "https://drakkarhls10.icu/hls/videos/19356/master.m3u8" },
                    { name: "11. Bölüm: Melekler Şehri", source: "https://drakkarhls10.icu/hls/videos/19349/master.m3u8" },
                    { name: "12. Bölüm: Tamamen Onunla İlgilenmek", source: "https://drakkarhls10.icu/hls/videos/19341/master.m3u8" },
                    { name: "13. Bölüm: Ölüm Bizi Ayırana Kadar", source: "https://drakkarhls10.icu/hls/videos/19358/master.m3u8" },
                    { name: "14. Bölüm: Kardeşimin Koruyucusu", source: "https://drakkarhls10.icu/hls/videos/19357/master.m3u8" },
                    { name: "15. Bölüm: Lise Saçmalıkları", source: "https://drakkarhls10.icu/hls/videos/19347/master.m3u8" },
                    { name: "16. Bölüm: Cehennemin Kobay Faresi", source: "https://drakkarhls10.icu/hls/videos/19353/master.m3u8" },
                    { name: "17. Bölüm: Bırakalım da İğneli Kafa Şarkısını Söylesin", source: "https://drakkarhls10.icu/hls/videos/19344/master.m3u8" },
                    { name: "18. Bölüm: Son Kalp Yarası", source: "https://drakkarhls10.icu/hls/videos/19340/master.m3u8" },
                    { name: "19. Bölüm: Yeni Maze'e Turuncu Tulum Yakışır", source: "https://drakkarhls10.icu/hls/videos/19351/master.m3u8" },
                    { name: "20. Bölüm: San Bernardino Meleği", source: "https://drakkarhls10.icu/hls/videos/19363/master.m3u8" },
                    { name: "21. Bölüm: Pierce'ın Yaptığı Her Şeyin Daha İyisini Yapabilirim", source: "https://drakkarhls10.icu/hls/videos/19355/master.m3u8" },
                    { name: "22. Bölüm: Herkes Decker'a El Atsın", source: "https://drakkarhls10.icu/hls/videos/19360/master.m3u8" },
                    { name: "23. Bölüm: Tam Deckerstarlık", source: "https://drakkarhls10.icu/hls/videos/19348/master.m3u8" },
                    { name: "24. Bölüm: Sözünün Şeytanıyım", source: "https://drakkarhls10.icu/hls/videos/19361/master.m3u8" },
                    { name: "25. Bölüm: Vay, Normal (Bonus)", source: "https://drakkarhls10.icu/hls/videos/19359/master.m3u8" },
                    { name: "26. Bölüm: Bir Zamanlar (Bonus)", source: "https://drakkarhls10.icu/hls/videos/19354/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Her Şey Yolunda", source: "https://drakkarhls10.icu/hls/videos/19294/master.m3u8" },
                    { name: "2. Bölüm: Biri Dante'nin Cehennemini Okumuş", source: "https://drakkarhls10.icu/hls/videos/19293/master.m3u8" },
                    { name: "3. Bölüm: İnancınız Zayıf Peder", source: "https://drakkarhls10.icu/hls/videos/19290/master.m3u8" },
                    { name: "4. Bölüm: Eve Hakkında Her Şey", source: "https://drakkarhls10.icu/hls/videos/19288/master.m3u8" },
                    { name: "5. Bölüm: Ereksiyon Hâlinde Ölmek", source: "https://drakkarhls10.icu/hls/videos/19292/master.m3u8" },
                    { name: "6. Bölüm: İş İçin Yanlış Pantolon", source: "https://drakkarhls10.icu/hls/videos/19291/master.m3u8" },
                    { name: "7. Bölüm: Şeytan İşini Yapar", source: "https://drakkarhls10.icu/hls/videos/19286/master.m3u8" },
                    { name: "8. Bölüm: Çok Kötü Bir Sevgili", source: "https://drakkarhls10.icu/hls/videos/19287/master.m3u8" },
                    { name: "9. Bölüm: Lucifer'ı Kurtarmak", source: "https://drakkarhls10.icu/hls/videos/19289/master.m3u8" },
                    { name: "10. Bölüm: Cehennemin Yeni Kralı Kimmiş (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19285/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Çok Üzgün Bir Şeytan", source: "https://drakkarhls10.icu/hls/videos/19334/master.m3u8" },
                    { name: "2. Bölüm: Lucifer! Lucifer! Lucifer!", source: "https://drakkarhls10.icu/hls/videos/19335/master.m3u8" },
                    { name: "3. Bölüm: Diablo!", source: "https://drakkarhls10.icu/hls/videos/19323/master.m3u8" },
                    { name: "4. Bölüm: Olan Hep Tavuğa Olur", source: "https://drakkarhls10.icu/hls/videos/19338/master.m3u8" },
                    { name: "5. Bölüm: Dedektif Amenadiel", source: "https://drakkarhls10.icu/hls/videos/19328/master.m3u8" },
                    { name: "6. Bölüm: BlueBallz", source: "https://drakkarhls10.icu/hls/videos/19327/master.m3u8" },
                    { name: "7. Bölüm: Bizim Gücümüz", source: "https://drakkarhls10.icu/hls/videos/19331/master.m3u8" },
                    { name: "8. Bölüm: Spoiler Uyarısı", source: "https://drakkarhls10.icu/hls/videos/19337/master.m3u8" },
                    { name: "9. Bölüm: Aile Yemeği", source: "https://drakkarhls10.icu/hls/videos/19332/master.m3u8" },
                    { name: "10. Bölüm: Kahrolası Kutsal Karaoke Partisi", source: "https://drakkarhls10.icu/hls/videos/19330/master.m3u8" },
                    { name: "11. Bölüm: Şeytanın Suratsızlığı", source: "https://drakkarhls10.icu/hls/videos/19326/master.m3u8" },
                    { name: "12. Bölüm: Daniel Espinoza: Çıplak ve Korkmuş", source: "https://drakkarhls10.icu/hls/videos/19336/master.m3u8" },
                    { name: "13. Bölüm: Zararsız Ufak Bir Taciz", source: "https://drakkarhls10.icu/hls/videos/19325/master.m3u8" },
                    { name: "14. Bölüm: Hiçbir Şey Sonsuza Dek Sürmez", source: "https://drakkarhls10.icu/hls/videos/19324/master.m3u8" },
                    { name: "15. Bölüm: Sahiden Her Şey Böyle mi Bitecek?!", source: "https://drakkarhls10.icu/hls/videos/19329/master.m3u8" },
                    { name: "16. Bölüm: Mutlu Son İçin Bir Fırsat (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/19333/master.m3u8" }
                ]
            },
            // --- 6. SEZON (FİNAL) ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Burada Hiçbir Şey Değişmez", source: "https://drakkarhls10.icu/hls/videos/19322/master.m3u8" },
                    { name: "2. Bölüm: Ciddi Travmalar", source: "https://drakkarhls10.icu/hls/videos/19319/master.m3u8" },
                    { name: "3. Bölüm: Yabba Dabba Do", source: "https://drakkarhls10.icu/hls/videos/19315/master.m3u8" },
                    { name: "4. Bölüm: Babayı Ebele", source: "https://drakkarhls10.icu/hls/videos/19321/master.m3u8" },
                    { name: "5. Bölüm: Lucifer Morningstar'ın Öldürülmesi", source: "https://drakkarhls10.icu/hls/videos/19318/master.m3u8" },
                    { name: "6. Bölüm: Daha Çok Lekelenecek", source: "https://drakkarhls10.icu/hls/videos/19316/master.m3u8" },
                    { name: "7. Bölüm: En İyi Zebanimin Düğünü", source: "https://drakkarhls10.icu/hls/videos/19313/master.m3u8" },
                    { name: "8. Bölüm: Şeytanı Kurtarıp Dünyayı Kurtaralım", source: "https://drakkarhls10.icu/hls/videos/19314/master.m3u8" },
                    { name: "9. Bölüm: Elveda, Lucifer", source: "https://drakkarhls10.icu/hls/videos/19317/master.m3u8" },
                    { name: "10. Bölüm: Sonuna Dek Ortağız (Büyük Final)", source: "https://drakkarhls10.icu/hls/videos/19320/master.m3u8" }
                ]
            }
        ]
    }
    , // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_the_walking_dead",
        type: "series",
        title: "The Walking Dead",
        year: 2010,
        genre: "Korku, Dram, Gerilim",
        poster: "https://dizipal27.plus/uploads/series/original/the-walking-dead-5796.webp",
        backdrop: "https://image.tmdb.org/t/p/original/wxxshOrFGEwLvbQ943hD6e7lXF.jpg",
        description: "Şerif Yardımcısı Rick Grimes komadan uyanır ve dünyanın zombi kıyametiyle altüst olduğunu keşfeder. Hayatta kalan bir grup insanla birlikte güvenli bir yer ararken hayatta kalma mücadelesi verirler.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Günler Sonra", source: "https://drakkarhls8.icu/hls/videos/15435/master.m3u8" },
                    { name: "2. Bölüm: Bağırsaklar", source: "https://drakkarhls6.icu/hls/videos/15434/master.m3u8" },
                    { name: "3. Bölüm: Kurbağalara Anlat", source: "https://drakkarhls4.icu/hls/videos/15439/master.m3u8" },
                    { name: "4. Bölüm: Çete", source: "https://drakkarhls6.icu/hls/videos/15437/master.m3u8" },
                    { name: "5. Bölüm: Wildfire", source: "https://drakkarhls6.icu/hls/videos/15436/master.m3u8" },
                    { name: "6. Bölüm: 19 Numaralı Denek (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15438/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Bizi Bekleyenler", source: "https://drakkarhls6.icu/hls/videos/15341/master.m3u8" },
                    { name: "2. Bölüm: Kan Kaybı", source: "https://drakkarhls9.icu/hls/videos/15343/master.m3u8" },
                    { name: "3. Bölüm: Sonuncuyu Harcama", source: "https://drakkarhls9.icu/hls/videos/15346/master.m3u8" },
                    { name: "4. Bölüm: Çeroki Gülü", source: "https://drakkarhls4.icu/hls/videos/15337/master.m3u8" },
                    { name: "5. Bölüm: Chupacabra", source: "https://drakkarhls6.icu/hls/videos/15338/master.m3u8" },
                    { name: "6. Bölüm: Sırlar", source: "https://drakkarhls4.icu/hls/videos/15335/master.m3u8" },
                    { name: "7. Bölüm: Zaten Ölmüş Sayılırsın", source: "https://drakkarhls10.icu/hls/videos/8910/master.m3u8" },
                    { name: "8. Bölüm: Nebraska", source: "https://drakkarhls6.icu/hls/videos/15336/master.m3u8" },
                    { name: "9. Bölüm: Eli Tetikte", source: "https://drakkarhls4.icu/hls/videos/18882/master.m3u8" },
                    { name: "10. Bölüm: 30 Kilometre Ötede", source: "https://drakkarhls6.icu/hls/videos/15344/master.m3u8" },
                    { name: "11. Bölüm: Yargıç, Jüri, Cellat", source: "https://drakkarhls6.icu/hls/videos/15342/master.m3u8" },
                    { name: "12. Bölüm: İyi Melekler", source: "https://drakkarhls4.icu/hls/videos/15347/master.m3u8" },
                    { name: "13. Bölüm: Ölen Ateşin Yanında (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/15340/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Tohum", source: "https://drakkarhls6.icu/hls/videos/25201/master.m3u8" },
                    { name: "2. Bölüm: Mide Bulandırıcı", source: "https://drakkarhls6.icu/hls/videos/25200/master.m3u8" },
                    { name: "3. Bölüm: Yanımda Yürüyün", source: "https://drakkarhls9.icu/hls/videos/15286/master.m3u8" },
                    { name: "4. Bölüm: İçindeki Katil", source: "https://drakkarhls4.icu/hls/videos/15289/master.m3u8" },
                    { name: "5. Bölüm: Söylemen Yeter", source: "https://animevar.pro/hls/videos/28295/master.m3u8" },
                    { name: "6. Bölüm: Kovalamaca", source: "https://drakkarhls9.icu/hls/videos/15284/master.m3u8" },
                    { name: "7. Bölüm: Ölüler Kapıyı Çalınca", source: "https://drakkarhls4.icu/hls/videos/15285/master.m3u8" },
                    { name: "8. Bölüm: Acı Çekmek İçin Yaratılmış", source: "https://drakkarhls6.icu/hls/videos/15283/master.m3u8" },
                    { name: "9. Bölüm: İntihar Kralı", source: "https://drakkarhls6.icu/hls/videos/15281/master.m3u8" },
                    { name: "10. Bölüm: Ev", source: "https://drakkarhls9.icu/hls/videos/15294/master.m3u8" },
                    { name: "11. Bölüm: Ben Hain Değilim", source: "https://drakkarhls6.icu/hls/videos/15290/master.m3u8" },
                    { name: "12. Bölüm: Temizlik", source: "https://drakkarhls6.icu/hls/videos/15293/master.m3u8" },
                    { name: "13. Bölüm: Kapıdaki Ok", source: "https://drakkarhls9.icu/hls/videos/15291/master.m3u8" },
                    { name: "14. Bölüm: Av", source: "https://drakkarhls4.icu/hls/videos/15292/master.m3u8" },
                    { name: "15. Bölüm: Bu Acı Hayat", source: "https://drakkarhls4.icu/hls/videos/15280/master.m3u8" },
                    { name: "16. Bölüm: Mezarlığa Hoş Geldiniz (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15279/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kazasız 30 Gün", source: "https://drakkarhls8.icu/hls/videos/15442/master.m3u8" },
                    { name: "2. Bölüm: Enfeksiyon", source: "https://drakkarhls8.icu/hls/videos/15440/master.m3u8" },
                    { name: "3. Bölüm: Karantina", source: "https://drakkarhls8.icu/hls/videos/15441/master.m3u8" },
                    { name: "4. Bölüm: Umursamazlık", source: "https://drakkarhls4.icu/hls/videos/15453/master.m3u8" },
                    { name: "5. Bölüm: Hapsetme", source: "https://drakkarhls4.icu/hls/videos/15445/master.m3u8" },
                    { name: "6. Bölüm: Canlı Yem", source: "https://drakkarhls6.icu/hls/videos/15446/master.m3u8" },
                    { name: "7. Bölüm: Ölü Ağırlık", source: "https://drakkarhls4.icu/hls/videos/15454/master.m3u8" },
                    { name: "8. Bölüm: Çok Geç", source: "https://drakkarhls6.icu/hls/videos/15449/master.m3u8" },
                    { name: "9. Bölüm: Akıbet", source: "https://drakkarhls4.icu/hls/videos/15448/master.m3u8" },
                    { name: "10. Bölüm: Mahkûmlar", source: "https://drakkarhls9.icu/hls/videos/15452/master.m3u8" },
                    { name: "11. Bölüm: Ben Kaptım", source: "https://drakkarhls6.icu/hls/videos/15447/master.m3u8" },
                    { name: "12. Bölüm: İmbik", source: "https://drakkarhls6.icu/hls/videos/15444/master.m3u8" },
                    { name: "13. Bölüm: Yalnız", source: "https://drakkarhls8.icu/hls/videos/15451/master.m3u8" },
                    { name: "14. Bölüm: Ağaçlık", source: "https://drakkarhls8.icu/hls/videos/15450/master.m3u8" },
                    { name: "15. Bölüm: Biz", source: "https://drakkarhls8.icu/hls/videos/15455/master.m3u8" },
                    { name: "16. Bölüm: A (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15443/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sığınak Yok", source: "https://drakkarhls9.icu/hls/videos/15393/master.m3u8" },
                    { name: "2. Bölüm: Yabancılar", source: "https://drakkarhls9.icu/hls/videos/15389/master.m3u8" },
                    { name: "3. Bölüm: Dört Duvar ve Bir Çatı", source: "https://drakkarhls6.icu/hls/videos/15391/master.m3u8" },
                    { name: "4. Bölüm: Slabtown", source: "https://drakkarhls4.icu/hls/videos/15388/master.m3u8" },
                    { name: "5. Bölüm: Kişisel Gelişim", source: "https://drakkarhls6.icu/hls/videos/15397/master.m3u8" },
                    { name: "6. Bölüm: Tükenmiş", source: "https://drakkarhls4.icu/hls/videos/15401/master.m3u8" },
                    { name: "7. Bölüm: Kesişme", source: "https://drakkarhls4.icu/hls/videos/15398/master.m3u8" },
                    { name: "8. Bölüm: Koda", source: "https://drakkarhls8.icu/hls/videos/15390/master.m3u8" },
                    { name: "9. Bölüm: Olup Bitenler", source: "https://drakkarhls4.icu/hls/videos/15392/master.m3u8" },
                    { name: "10. Bölüm: Onlar", source: "https://drakkarhls8.icu/hls/videos/15399/master.m3u8" },
                    { name: "11. Bölüm: Mesafe", source: "https://drakkarhls4.icu/hls/videos/15386/master.m3u8" },
                    { name: "12. Bölüm: Hatırlamak", source: "https://drakkarhls9.icu/hls/videos/15394/master.m3u8" },
                    { name: "13. Bölüm: Unutmak", source: "https://drakkarhls9.icu/hls/videos/15400/master.m3u8" },
                    { name: "14. Bölüm: Bedel", source: "https://drakkarhls4.icu/hls/videos/15395/master.m3u8" },
                    { name: "15. Bölüm: Çaba", source: "https://drakkarhls6.icu/hls/videos/15396/master.m3u8" },
                    { name: "16. Bölüm: Zapt Etmek (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15387/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: İlk Kez Yeniden", source: "https://drakkarhls9.icu/hls/videos/15377/master.m3u8" },
                    { name: "2. Bölüm: Ne Yapıp Edip Hayatta Kal", source: "https://drakkarhls6.icu/hls/videos/15378/master.m3u8" },
                    { name: "3. Bölüm: Teşekkür Ederim", source: "https://drakkarhls6.icu/hls/videos/15383/master.m3u8" },
                    { name: "4. Bölüm: Burası Burada Değil", source: "https://drakkarhls8.icu/hls/videos/15373/master.m3u8" },
                    { name: "5. Bölüm: Şimdi", source: "https://drakkarhls6.icu/hls/videos/15381/master.m3u8" },
                    { name: "6. Bölüm: Her Zaman Sorumlu", source: "https://drakkarhls6.icu/hls/videos/15384/master.m3u8" },
                    { name: "7. Bölüm: Dikkat", source: "https://drakkarhls4.icu/hls/videos/15382/master.m3u8" },
                    { name: "8. Bölüm: Baştan Sona", source: "https://drakkarhls8.icu/hls/videos/15379/master.m3u8" },
                    { name: "9. Bölüm: Çıkış Yok", source: "https://drakkarhls6.icu/hls/videos/15385/master.m3u8" },
                    { name: "10. Bölüm: Sonraki Dünya", source: "https://drakkarhls4.icu/hls/videos/15374/master.m3u8" },
                    { name: "11. Bölüm: Düğümler Çözülür", source: "https://drakkarhls8.icu/hls/videos/15370/master.m3u8" },
                    { name: "12. Bölüm: Henüz Yarın Olmadı", source: "https://drakkarhls9.icu/hls/videos/15372/master.m3u8" },
                    { name: "13. Bölüm: Aynı Gemide", source: "https://drakkarhls8.icu/hls/videos/15371/master.m3u8" },
                    { name: "14. Bölüm: İki Kat Uzak", source: "https://drakkarhls9.icu/hls/videos/15380/master.m3u8" },
                    { name: "15. Bölüm: Doğu", source: "https://drakkarhls6.icu/hls/videos/15375/master.m3u8" },
                    { name: "16. Bölüm: Dünya Üzerindeki Son Gün (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/15376/master.m3u8" }
                ]
            },
            // --- 7. SEZON ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: Olmayacağın Günler Gelecek", source: "https://drakkarhls4.icu/hls/videos/15412/master.m3u8" },
                    { name: "2. Bölüm: Kuyu", source: "https://drakkarhls4.icu/hls/videos/15409/master.m3u8" },
                    { name: "3. Bölüm: Hücre", source: "https://drakkarhls9.icu/hls/videos/15402/master.m3u8" },
                    { name: "4. Bölüm: Hizmet", source: "https://drakkarhls4.icu/hls/videos/15406/master.m3u8" },
                    { name: "5. Bölüm: Tuttuğunu Koparanlar", source: "https://drakkarhls8.icu/hls/videos/15414/master.m3u8" },
                    { name: "6. Bölüm: Yemin", source: "https://drakkarhls6.icu/hls/videos/15408/master.m3u8" },
                    { name: "7. Bölüm: Bana Bir Şarkı Söyle", source: "https://drakkarhls4.icu/hls/videos/15410/master.m3u8" },
                    { name: "8. Bölüm: Kalpler Hâlâ Atıyor", source: "https://drakkarhls6.icu/hls/videos/15405/master.m3u8" },
                    { name: "9. Bölüm: Yoldaki Kaya", source: "https://drakkarhls9.icu/hls/videos/15415/master.m3u8" },
                    { name: "10. Bölüm: Yeni Dostlar", source: "https://drakkarhls9.icu/hls/videos/15416/master.m3u8" },
                    { name: "11. Bölüm: Düşmanlar ve Musibetler", source: "https://drakkarhls8.icu/hls/videos/15413/master.m3u8" },
                    { name: "12. Bölüm: Evet De", source: "https://drakkarhls8.icu/hls/videos/15417/master.m3u8" },
                    { name: "13. Bölüm: Beni Buraya Gömün", source: "https://drakkarhls6.icu/hls/videos/15404/master.m3u8" },
                    { name: "14. Bölüm: Öteki Taraf", source: "https://drakkarhls4.icu/hls/videos/15411/master.m3u8" },
                    { name: "15. Bölüm: İhtiyaç Duydukları Şey", source: "https://drakkarhls6.icu/hls/videos/15407/master.m3u8" },
                    { name: "16. Bölüm: Ömrünün Geri Kalanının İlk Günü (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/15403/master.m3u8" }
                ]
            },
            // --- 8. SEZON ---
            {
                name: "8. Sezon",
                episodes: [
                    { name: "1. Bölüm: Merhamet", source: "https://drakkarhls9.icu/hls/videos/15332/master.m3u8" },
                    { name: "2. Bölüm: Lanetliler", source: "https://drakkarhls9.icu/hls/videos/15329/master.m3u8" },
                    { name: "3. Bölüm: Canavarlar", source: "https://drakkarhls6.icu/hls/videos/15320/master.m3u8" },
                    { name: "4. Bölüm: Adamın Teki", source: "https://drakkarhls8.icu/hls/videos/15321/master.m3u8" },
                    { name: "5. Bölüm: Büyük ve Korkutucu Bilinmeyen", source: "https://drakkarhls8.icu/hls/videos/15325/master.m3u8" },
                    { name: "6. Bölüm: Kral, Dul ve Rick", source: "https://drakkarhls4.icu/hls/videos/15322/master.m3u8" },
                    { name: "7. Bölüm: Zamanı Geldiğinde", source: "https://drakkarhls9.icu/hls/videos/15331/master.m3u8" },
                    { name: "8. Bölüm: Bu Şekilde Olmalı", source: "https://drakkarhls4.icu/hls/videos/15328/master.m3u8" },
                    { name: "9. Bölüm: Onur", source: "https://drakkarhls6.icu/hls/videos/15327/master.m3u8" },
                    { name: "10. Bölüm: Kayıplar ve Yağmacılar", source: "https://drakkarhls9.icu/hls/videos/15324/master.m3u8" },
                    { name: "11. Bölüm: Ölü ya da Diri", source: "https://drakkarhls4.icu/hls/videos/15333/master.m3u8" },
                    { name: "12. Bölüm: Anahtar", source: "https://drakkarhls6.icu/hls/videos/15330/master.m3u8" },
                    { name: "13. Bölüm: Bizi Yolumuzdan Saptırma", source: "https://drakkarhls4.icu/hls/videos/15319/master.m3u8" },
                    { name: "14. Bölüm: Bir Anlamı Olmalı", source: "https://drakkarhls6.icu/hls/videos/15326/master.m3u8" },
                    { name: "15. Bölüm: Değer", source: "https://drakkarhls9.icu/hls/videos/15334/master.m3u8" },
                    { name: "16. Bölüm: Gazap (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/15323/master.m3u8" }
                ]
            },
            // --- 9. SEZON ---
            {
                name: "9. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yeni Bir Başlangıç", source: "https://drakkarhls6.icu/hls/videos/15418/master.m3u8" },
                    { name: "2. Bölüm: Köprü", source: "https://drakkarhls4.icu/hls/videos/15426/master.m3u8" },
                    { name: "3. Bölüm: Uyarı İşaretleri", source: "https://drakkarhls6.icu/hls/videos/15419/master.m3u8" },
                    { name: "4. Bölüm: Geçmiş Günahlar", source: "https://drakkarhls6.icu/hls/videos/15430/master.m3u8" },
                    { name: "5. Bölüm: Sonrasında Olacaklar", source: "https://drakkarhls4.icu/hls/videos/15421/master.m3u8" },
                    { name: "6. Bölüm: Peki Şimdi Kimsiniz?", source: "https://drakkarhls8.icu/hls/videos/15422/master.m3u8" },
                    { name: "7. Bölüm: Stradivarius", source: "https://drakkarhls8.icu/hls/videos/15429/master.m3u8" },
                    { name: "8. Bölüm: Evrim", source: "https://drakkarhls9.icu/hls/videos/15432/master.m3u8" },
                    { name: "9. Bölüm: Uyum", source: "https://drakkarhls4.icu/hls/videos/15425/master.m3u8" },
                    { name: "10. Bölüm: Omega", source: "https://drakkarhls8.icu/hls/videos/15433/master.m3u8" },
                    { name: "11. Bölüm: Ganimet", source: "https://drakkarhls4.icu/hls/videos/15423/master.m3u8" },
                    { name: "12. Bölüm: Muhafızlar", source: "https://drakkarhls4.icu/hls/videos/15427/master.m3u8" },
                    { name: "13. Bölüm: Barikat", source: "https://drakkarhls9.icu/hls/videos/15420/master.m3u8" },
                    { name: "14. Bölüm: Yara İzleri", source: "https://drakkarhls8.icu/hls/videos/15424/master.m3u8" },
                    { name: "15. Bölüm: Fırtına Öncesi", source: "https://drakkarhls4.icu/hls/videos/15428/master.m3u8" },
                    { name: "16. Bölüm: Fırtına (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15431/master.m3u8" }
                ]
            },
            // --- 10. SEZON ---
            {
                name: "10. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sınırı Aştık", source: "https://drakkarhls9.icu/hls/videos/15355/master.m3u8" },
                    { name: "2. Bölüm: Biz Dünyanın Sonuyuz", source: "https://drakkarhls8.icu/hls/videos/15364/master.m3u8" },
                    { name: "3. Bölüm: Hayaletler", source: "https://drakkarhls8.icu/hls/videos/15359/master.m3u8" },
                    { name: "4. Bölüm: Fısıltıları Sustur", source: "https://drakkarhls6.icu/hls/videos/15357/master.m3u8" },
                    { name: "5. Bölüm: Hep Olan Şey", source: "https://drakkarhls6.icu/hls/videos/15348/master.m3u8" },
                    { name: "6. Bölüm: Bağlar", source: "https://drakkarhls9.icu/hls/videos/15350/master.m3u8" },
                    { name: "7. Bölüm: Aç Gözlerini", source: "https://drakkarhls8.icu/hls/videos/15358/master.m3u8" },
                    { name: "8. Bölüm: Önceki Dünya", source: "https://drakkarhls4.icu/hls/videos/15365/master.m3u8" },
                    { name: "9. Bölüm: Sıkışma", source: "https://drakkarhls4.icu/hls/videos/15362/master.m3u8" },
                    { name: "10. Bölüm: İz Sürücü", source: "https://drakkarhls8.icu/hls/videos/15352/master.m3u8" },
                    { name: "11. Bölüm: Çivili Gürz", source: "https://drakkarhls9.icu/hls/videos/15361/master.m3u8" },
                    { name: "12. Bölüm: Bizimle Birlikte Yürü", source: "https://drakkarhls9.icu/hls/videos/15349/master.m3u8" },
                    { name: "13. Bölüm: Dönüştüğümüz Şey", source: "https://drakkarhls6.icu/hls/videos/15368/master.m3u8" },
                    { name: "14. Bölüm: Çiçeklere Bak", source: "https://drakkarhls9.icu/hls/videos/15356/master.m3u8" },
                    { name: "15. Bölüm: Kule", source: "https://drakkarhls6.icu/hls/videos/15367/master.m3u8" },
                    { name: "16. Bölüm: Mutlak Yok Oluş", source: "https://drakkarhls6.icu/hls/videos/15360/master.m3u8" },
                    { name: "17. Bölüm: Evim Güzel Evim", source: "https://drakkarhls4.icu/hls/videos/15353/master.m3u8" },
                    { name: "18. Bölüm: Bul Beni", source: "https://drakkarhls9.icu/hls/videos/15369/master.m3u8" },
                    { name: "19. Bölüm: Bir Yer Daha", source: "https://drakkarhls8.icu/hls/videos/15351/master.m3u8" },
                    { name: "20. Bölüm: Kıymık", source: "https://drakkarhls6.icu/hls/videos/15366/master.m3u8" },
                    { name: "21. Bölüm: Ayrılan Yollar", source: "https://drakkarhls6.icu/hls/videos/15354/master.m3u8" },
                    { name: "22. Bölüm: Negan (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/15363/master.m3u8" }
                ]
            },
            // --- 11. SEZON (FINAL) ---
            {
                name: "11. Sezon",
                episodes: [
                    { name: "1. Bölüm: Acheron Kısım I", source: "https://drakkarhls6.icu/hls/videos/15309/master.m3u8" },
                    { name: "2. Bölüm: Acheron Kısım II", source: "https://drakkarhls6.icu/hls/videos/15313/master.m3u8" },
                    { name: "3. Bölüm: Av", source: "https://drakkarhls9.icu/hls/videos/15308/master.m3u8" },
                    { name: "4. Bölüm: Teslim", source: "https://drakkarhls8.icu/hls/videos/15303/master.m3u8" },
                    { name: "5. Bölüm: Küllerin Arasından", source: "https://drakkarhls9.icu/hls/videos/15302/master.m3u8" },
                    { name: "6. Bölüm: İçeride", source: "https://drakkarhls6.icu/hls/videos/15311/master.m3u8" },
                    { name: "7. Bölüm: Tutulmayan Sözler", source: "https://drakkarhls9.icu/hls/videos/15296/master.m3u8" },
                    { name: "8. Bölüm: Kan İçin", source: "https://drakkarhls9.icu/hls/videos/15298/master.m3u8" },
                    { name: "9. Bölüm: Başka Yol Yok", source: "https://drakkarhls8.icu/hls/videos/15316/master.m3u8" },
                    { name: "10. Bölüm: Yeni Hauntlar", source: "https://drakkarhls8.icu/hls/videos/15306/master.m3u8" },
                    { name: "11. Bölüm: Rogue Element", source: "https://drakkarhls6.icu/hls/videos/15297/master.m3u8" },
                    { name: "12. Bölüm: Hiçbir Şey", source: "https://drakkarhls9.icu/hls/videos/15310/master.m3u8" },
                    { name: "13. Bölüm: Savaş Ağaları", source: "https://drakkarhls4.icu/hls/videos/15295/master.m3u8" },
                    { name: "14. Bölüm: Çürük Kor", source: "https://drakkarhls9.icu/hls/videos/15314/master.m3u8" },
                    { name: "15. Bölüm: Güven", source: "https://drakkarhls6.icu/hls/videos/15299/master.m3u8" },
                    { name: "16. Bölüm: Tanrı", source: "https://drakkarhls6.icu/hls/videos/15315/master.m3u8" },
                    { name: "17. Bölüm: Kapanma", source: "https://drakkarhls9.icu/hls/videos/15312/master.m3u8" },
                    { name: "18. Bölüm: Yeni Bir Anlaşma", source: "https://drakkarhls9.icu/hls/videos/15300/master.m3u8" },
                    { name: "19. Bölüm: Başka Türlü", source: "https://drakkarhls4.icu/hls/videos/15304/master.m3u8" },
                    { name: "20. Bölüm: Kaybedilenler", source: "https://drakkarhls9.icu/hls/videos/15317/master.m3u8" },
                    { name: "21. Bölüm: Karakol 22", source: "https://drakkarhls8.icu/hls/videos/15301/master.m3u8" },
                    { name: "22. Bölüm: Güven", source: "https://drakkarhls9.icu/hls/videos/15318/master.m3u8" },
                    { name: "23. Bölüm: Aile", source: "https://drakkarhls6.icu/hls/videos/15305/master.m3u8" },
                    { name: "24. Bölüm: Huzur İçinde Yat (Büyük Final)", source: "https://drakkarhls6.icu/hls/videos/15307/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_game_of_thrones",
        type: "series",
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantastik, Dram, Aksiyon",
        poster: "https://dizipal27.plus/uploads/series/original/game-of-thrones-9896.webp",
        backdrop: "https://image.tmdb.org/t/p/original/ogGI60C9XwL6L27730t803T5z1T.jpg", // Temsili backdrop
        description: "Yedi Krallık'ın Demir Tahtı için asil aileler arasında yaşanan kanlı mücadeleyi ve kuzeyden gelen kadim bir tehdidi konu alan epik bir fantezi dizisi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kış Geliyor", source: "https://drakkarhls6.icu/hls/videos/23512/master.m3u8" },
                    { name: "2. Bölüm: Kral Yolu", source: "https://drakkarhls9.icu/hls/videos/23513/master.m3u8" },
                    { name: "3. Bölüm: Lord Snow", source: "https://drakkarhls4.icu/hls/videos/23514/master.m3u8" },
                    { name: "4. Bölüm: Sakatlar, Piçler ve Kırık Şeyler", source: "https://drakkarhls9.icu/hls/videos/23515/master.m3u8" },
                    { name: "5. Bölüm: Kurt ve Aslan", source: "https://drakkarhls4.icu/hls/videos/23516/master.m3u8" },
                    { name: "6. Bölüm: Altın Taç", source: "https://drakkarhls9.icu/hls/videos/23517/master.m3u8" },
                    { name: "7. Bölüm: Kazan yada Öl", source: "https://drakkarhls4.icu/hls/videos/23518/master.m3u8" },
                    { name: "8. Bölüm: Sivri Uç", source: "https://drakkarhls9.icu/hls/videos/23519/master.m3u8" },
                    { name: "9. Bölüm: Baelor", source: "https://drakkarhls9.icu/hls/videos/23520/master.m3u8" },
                    { name: "10. Bölüm: Ateş ve Kan (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/23521/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kuzey Hatırlar", source: "https://drakkarhls6.icu/hls/videos/23527/master.m3u8" },
                    { name: "2. Bölüm: Karanlık Topraklar", source: "https://drakkarhls6.icu/hls/videos/23533/master.m3u8" },
                    { name: "3. Bölüm: Ölü Olan Bir Daha Ölmez", source: "https://drakkarhls9.icu/hls/videos/23539/master.m3u8" },
                    { name: "4. Bölüm: Kemik Bahçesi", source: "https://drakkarhls4.icu/hls/videos/23545/master.m3u8" },
                    { name: "5. Bölüm: Harrenhal'un Hayaleti", source: "https://drakkarhls9.icu/hls/videos/23551/master.m3u8" },
                    { name: "6. Bölüm: Eski Tanrılar ve Yeni Tanrılar", source: "https://drakkarhls8.icu/hls/videos/23557/master.m3u8" },
                    { name: "7. Bölüm: Onursuz Bir Adam", source: "https://drakkarhls9.icu/hls/videos/23563/master.m3u8" },
                    { name: "8. Bölüm: Kışyarı Prensi", source: "https://drakkarhls4.icu/hls/videos/23568/master.m3u8" },
                    { name: "9. Bölüm: Karasu", source: "https://drakkarhls9.icu/hls/videos/23573/master.m3u8" },
                    { name: "10. Bölüm: Valar Morghulis (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/23578/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Valar Dohaeris", source: "https://drakkarhls4.icu/hls/videos/23526/master.m3u8" },
                    { name: "2. Bölüm: Karanlık Kanatlar, Karanlık Sözler", source: "https://drakkarhls9.icu/hls/videos/23532/master.m3u8" },
                    { name: "3. Bölüm: Ceza Yürüyüşü", source: "https://drakkarhls6.icu/hls/videos/23538/master.m3u8" },
                    { name: "4. Bölüm: Ve Şimdi Nöbeti Bitti", source: "https://drakkarhls6.icu/hls/videos/23544/master.m3u8" },
                    { name: "5. Bölüm: Ateş Tarafından Öpüldü", source: "https://drakkarhls9.icu/hls/videos/23550/master.m3u8" },
                    { name: "6. Bölüm: Tırmanış", source: "https://drakkarhls8.icu/hls/videos/23556/master.m3u8" },
                    { name: "7. Bölüm: Ayı ve Bakire Panayırı", source: "https://drakkarhls6.icu/hls/videos/23562/master.m3u8" },
                    { name: "8. Bölüm: İkinci Oğullar", source: "https://drakkarhls4.icu/hls/videos/23567/master.m3u8" },
                    { name: "9. Bölüm: Castamere Yağmurları", source: "https://drakkarhls9.icu/hls/videos/23572/master.m3u8" },
                    { name: "10. Bölüm: Mhysa (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/23577/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: İki Kılıç", source: "https://drakkarhls6.icu/hls/videos/23522/master.m3u8" },
                    { name: "2. Bölüm: Aslan ve Gül", source: "https://drakkarhls4.icu/hls/videos/23528/master.m3u8" },
                    { name: "3. Bölüm: Zincir Kıran", source: "https://drakkarhls8.icu/hls/videos/23534/master.m3u8" },
                    { name: "4. Bölüm: Yemin Tutucu", source: "https://drakkarhls9.icu/hls/videos/23540/master.m3u8" },
                    { name: "5. Bölüm: İsminin Birincisi", source: "https://drakkarhls8.icu/hls/videos/23546/master.m3u8" },
                    { name: "6. Bölüm: Tanrıların ve İnsanların Yasaları", source: "https://drakkarhls6.icu/hls/videos/23552/master.m3u8" },
                    { name: "7. Bölüm: Alaycı Kuş", source: "https://drakkarhls8.icu/hls/videos/23558/master.m3u8" },
                    { name: "8. Bölüm: Dağ ve Engerek", source: "https://drakkarhls8.icu/hls/videos/23564/master.m3u8" },
                    { name: "9. Bölüm: Duvardaki Gözcüler", source: "https://drakkarhls6.icu/hls/videos/23569/master.m3u8" },
                    { name: "10. Bölüm: Çocuklar (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/23574/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Gelecek Savaşlar", source: "https://drakkarhls6.icu/hls/videos/23524/master.m3u8" },
                    { name: "2. Bölüm: Siyah ve Beyazın Evi", source: "https://drakkarhls8.icu/hls/videos/23530/master.m3u8" },
                    { name: "3. Bölüm: High Sparrow", source: "https://drakkarhls6.icu/hls/videos/23536/master.m3u8" },
                    { name: "4. Bölüm: Harpy'nin Oğulları", source: "https://drakkarhls8.icu/hls/videos/23542/master.m3u8" },
                    { name: "5. Bölüm: Çocuğu Öldür", source: "https://drakkarhls9.icu/hls/videos/23548/master.m3u8" },
                    { name: "6. Bölüm: Eğilmez, Bükülmez, Kırılmaz", source: "https://drakkarhls8.icu/hls/videos/23554/master.m3u8" },
                    { name: "7. Bölüm: Hediye", source: "https://drakkarhls8.icu/hls/videos/23560/master.m3u8" },
                    { name: "8. Bölüm: Zor Ev", source: "https://drakkarhls6.icu/hls/videos/23566/master.m3u8" },
                    { name: "9. Bölüm: Ejderhaların Dansı", source: "https://drakkarhls8.icu/hls/videos/23571/master.m3u8" },
                    { name: "10. Bölüm: Annenin Merhameti (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/23576/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kırmızı Kadın", source: "https://drakkarhls9.icu/hls/videos/23523/master.m3u8" },
                    { name: "2. Bölüm: Ev", source: "https://drakkarhls6.icu/hls/videos/23529/master.m3u8" },
                    { name: "3. Bölüm: Yemin Bozan", source: "https://drakkarhls6.icu/hls/videos/23535/master.m3u8" },
                    { name: "4. Bölüm: Yabancının Kitabı", source: "https://drakkarhls6.icu/hls/videos/23541/master.m3u8" },
                    { name: "5. Bölüm: Kapı", source: "https://drakkarhls9.icu/hls/videos/23547/master.m3u8" },
                    { name: "6. Bölüm: Kanımın Kanı", source: "https://drakkarhls6.icu/hls/videos/23553/master.m3u8" },
                    { name: "7. Bölüm: Kırık Adam", source: "https://drakkarhls9.icu/hls/videos/23559/master.m3u8" },
                    { name: "8. Bölüm: Hiç Kimse", source: "https://drakkarhls6.icu/hls/videos/23565/master.m3u8" },
                    { name: "9. Bölüm: Piçlerin Savaşı", source: "https://drakkarhls6.icu/hls/videos/23570/master.m3u8" },
                    { name: "10. Bölüm: Kış Rüzgarları (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/23575/master.m3u8" }
                ]
            },
            // --- 7. SEZON ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ejdertaşı", source: "https://drakkarhls4.icu/hls/videos/23525/master.m3u8" },
                    { name: "2. Bölüm: Stormborn", source: "https://drakkarhls8.icu/hls/videos/23531/master.m3u8" },
                    { name: "3. Bölüm: Kraliçenin Adaleti", source: "https://drakkarhls8.icu/hls/videos/23537/master.m3u8" },
                    { name: "4. Bölüm: Savaş Ganimetleri", source: "https://drakkarhls6.icu/hls/videos/23543/master.m3u8" },
                    { name: "5. Bölüm: Eastwatch", source: "https://drakkarhls6.icu/hls/videos/23549/master.m3u8" },
                    { name: "6. Bölüm: Duvarın Ötesi", source: "https://drakkarhls6.icu/hls/videos/23555/master.m3u8" },
                    { name: "7. Bölüm: Ejderha ve Kurt (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/23561/master.m3u8" }
                ]
            },
            // --- 8. SEZON (FİNAL) ---
            {
                name: "8. Sezon",
                episodes: [
                    { name: "1. Bölüm: Winterfell", source: "https://drakkarhls8.icu/hls/videos/23579/master.m3u8" },
                    { name: "2. Bölüm: Yedi Krallığın Şövalyesi", source: "https://drakkarhls8.icu/hls/videos/23580/master.m3u8" },
                    { name: "3. Bölüm: Uzun Gece", source: "https://drakkarhls9.icu/hls/videos/23581/master.m3u8" },
                    { name: "4. Bölüm: Starkların Sonuncusu", source: "https://drakkarhls6.icu/hls/videos/23582/master.m3u8" },
                    { name: "5. Bölüm: Çanlar", source: "https://drakkarhls8.icu/hls/videos/23583/master.m3u8" },
                    { name: "6. Bölüm: Demir Taht (Final)", source: "https://drakkarhls9.icu/hls/videos/23584/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_the_boys",
        type: "series",
        title: "The Boys",
        year: 2019,
        genre: "Aksiyon, Suç, Bilim Kurgu",
        poster: "https://dizipal27.plus/uploads/series/original/the-boys-6587.webp",
        backdrop: "https://image.tmdb.org/t/p/original/nVMm1QtZ83IKdM8L7oWdb2y07cR.jpg",
        description: "Süper kahramanların güçlerini ve şöhretlerini kötüye kullandığı bir evrende, onları durdurmak ve yozlaşmışlıklarını açığa çıkarmak için kurulan 'The Boys' adlı bir grubun hikayesi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Oyunun Adı", source: "https://drinkfromwisdomwell.top/hls/videos/12241/master.m3u8" },
                    { name: "2. Bölüm: Vişne", source: "https://drinkfromwisdomwell.top/hls/videos/12242/master.m3u8" },
                    { name: "3. Bölüm: Al Bakalım", source: "https://drinkfromwisdomwell.top/hls/videos/12244/master.m3u8" },
                    { name: "4. Bölüm: Türün Dişisi", source: "https://drinkfromwisdomwell.top/hls/videos/12245/master.m3u8" },
                    { name: "5. Bölüm: Ruhun İlacı", source: "https://drinkfromwisdomwell.top/hls/videos/12247/master.m3u8" },
                    { name: "6. Bölüm: Masumlar", source: "https://drinkfromwisdomwell.top/hls/videos/12248/master.m3u8" },
                    { name: "7. Bölüm: Kendini Koruma Cemiyeti", source: "https://drinkfromwisdomwell.top/hls/videos/12249/master.m3u8" },
                    { name: "8. Bölüm: Beni Buldun (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/12250/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Büyük Yolculuk", source: "https://drinkfromwisdomwell.top/hls/videos/12253/master.m3u8" },
                    { name: "2. Bölüm: Muntazam Hazırlıklar ve Planlamalar", source: "https://drinkfromwisdomwell.top/hls/videos/12252/master.m3u8" },
                    { name: "3. Bölüm: Binlerce Adamın Kılıcıyla", source: "https://drinkfromwisdomwell.top/hls/videos/12255/master.m3u8" },
                    { name: "4. Bölüm: Hiçbir Şeye Benzemez", source: "https://drinkfromwisdomwell.top/hls/videos/12256/master.m3u8" },
                    { name: "5. Bölüm: Hemen Gitmeliyiz", source: "https://drinkfromwisdomwell.top/hls/videos/12257/master.m3u8" },
                    { name: "6. Bölüm: Lanet Kapı Kapalı", source: "https://drinkfromwisdomwell.top/hls/videos/12258/master.m3u8" },
                    { name: "7. Bölüm: Her Kesimden İnsan", source: "https://drinkfromwisdomwell.top/hls/videos/12259/master.m3u8" },
                    { name: "8. Bölüm: Bildiğim Şu (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/12262/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ödeşme", source: "https://drinkfromwisdomwell.top/hls/videos/15488/master.m3u8" },
                    { name: "2. Bölüm: Gökteki Tek Adam", source: "https://drinkfromwisdomwell.top/hls/videos/15489/master.m3u8" },
                    { name: "3. Bölüm: Barbary Coast", source: "https://drinkfromwisdomwell.top/hls/videos/15483/master.m3u8" },
                    { name: "4. Bölüm: Muhteşem Beş Yıllık Plan", source: "https://drinkfromwisdomwell.top/hls/videos/15485/master.m3u8" },
                    { name: "5. Bölüm: Bu Yalanlar Dünyasına Son Kez Bakmak", source: "https://drinkfromwisdomwell.top/hls/videos/15482/master.m3u8" },
                    { name: "6. Bölüm: Kahramangazm", source: "https://drinkfromwisdomwell.top/hls/videos/15486/master.m3u8" },
                    { name: "7. Bölüm: İşte Seni Yatağa Yakacak Bir Mum Geliyor", source: "https://drinkfromwisdomwell.top/hls/videos/15487/master.m3u8" },
                    { name: "8. Bölüm: Anında Vahşi Beyaz Sıcak (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15484/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pis Numaralar Departmanı", source: "https://drinkfromwisdomwell.top/hls/videos/15476/master.m3u8" },
                    { name: "2. Bölüm: Septikler Arasında Yaşam", source: "https://drinkfromwisdomwell.top/hls/videos/15475/master.m3u8" },
                    { name: "3. Bölüm: Kızıl Bayrak Burada Dalgalanmaya Devam Edecek", source: "https://drinkfromwisdomwell.top/hls/videos/15477/master.m3u8" },
                    { name: "4. Bölüm: Asırların Bilgeliği", source: "https://drinkfromwisdomwell.top/hls/videos/15478/master.m3u8" },
                    { name: "5. Bölüm: Jabberwock'a Dikkat Et, Oğlum", source: "https://drinkfromwisdomwell.top/hls/videos/15480/master.m3u8" },
                    { name: "6. Bölüm: Kirli İş", source: "https://drinkfromwisdomwell.top/hls/videos/15474/master.m3u8" },
                    { name: "7. Bölüm: İçerideki Adam", source: "https://drinkfromwisdomwell.top/hls/videos/15479/master.m3u8" },
                    { name: "8. Bölüm: Suikast Koşusu (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/15481/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_rick_and_morty",
        type: "series",
        title: "Rick and Morty",
        year: 2013,
        genre: "Animasyon, Bilim Kurgu, Komedi",
        poster: "https://dizipal27.plus/uploads/series/original/rick-and-morty-2006.webp",
        backdrop: "https://image.tmdb.org/t/p/original/mBJ995JUssgh2hhm4JxNj8hy9M.jpg",
        description: "Dahi ama alkolik bilim adamı Rick Sanchez ve torunu Morty Smith'in boyutlar arası maceraları.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drinkfromwisdomwell.top/hls/videos/7188/master.m3u8" },
                    { name: "2. Bölüm: Teknolojik Köpek", source: "https://drinkfromwisdomwell.top/hls/videos/7189/master.m3u8" },
                    { name: "3. Bölüm: Anatomi Parkı", source: "https://drinkfromwisdomwell.top/hls/videos/7187/master.m3u8" },
                    { name: "4. Bölüm: Sanal Gerçekler", source: "https://drinkfromwisdomwell.top/hls/videos/7194/master.m3u8" },
                    { name: "5. Bölüm: Meeseeks Hizmetinizde", source: "https://drinkfromwisdomwell.top/hls/videos/7191/master.m3u8" },
                    { name: "6. Bölüm: Aşk İksiri", source: "https://drinkfromwisdomwell.top/hls/videos/7192/master.m3u8" },
                    { name: "7. Bölüm: Gazorpazorp'u Büyütmek", source: "https://drinkfromwisdomwell.top/hls/videos/7186/master.m3u8" },
                    { name: "8. Bölüm: Rickmiş Dakika", source: "https://drinkfromwisdomwell.top/hls/videos/7193/master.m3u8" },
                    { name: "9. Bölüm: Ricksiz Bir Şey Geliyor", source: "https://drinkfromwisdomwell.top/hls/videos/7196/master.m3u8" },
                    { name: "10. Bölüm: Rickinci Türden Rickleşmeler", source: "https://drinkfromwisdomwell.top/hls/videos/7185/master.m3u8" },
                    { name: "11. Bölüm: Ricksli İş (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7184/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Nerede Kalmıştık?", source: "https://drinkfromwisdomwell.top/hls/videos/7137/master.m3u8" },
                    { name: "2. Bölüm: Morty Av Peşinde", source: "https://drinkfromwisdomwell.top/hls/videos/7138/master.m3u8" },
                    { name: "3. Bölüm: Erotik Asimilasyon", source: "https://drinkfromwisdomwell.top/hls/videos/7143/master.m3u8" },
                    { name: "4. Bölüm: Uzaylı Parazitler", source: "https://drinkfromwisdomwell.top/hls/videos/7141/master.m3u8" },
                    { name: "5. Bölüm: Schwiftylenme Zamanı", source: "https://drinkfromwisdomwell.top/hls/videos/7142/master.m3u8" },
                    { name: "6. Bölüm: Rick Çıldırmış Olmalı", source: "https://drinkfromwisdomwell.top/hls/videos/7140/master.m3u8" },
                    { name: "7. Bölüm: Evlilik Terapisi", source: "https://drinkfromwisdomwell.top/hls/videos/7145/master.m3u8" },
                    { name: "8. Bölüm: Boyutlar Arası Kablo TV 2", source: "https://drinkfromwisdomwell.top/hls/videos/7139/master.m3u8" },
                    { name: "9. Bölüm: Bak Şu Arınana", source: "https://drinkfromwisdomwell.top/hls/videos/7146/master.m3u8" },
                    { name: "10. Bölüm: Düğün (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7144/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: EsaRick'in Bedeli", source: "https://drinkfromwisdomwell.top/hls/videos/7152/master.m3u8" },
                    { name: "2. Bölüm: Rickazon'da Fırtına", source: "https://drinkfromwisdomwell.top/hls/videos/7153/master.m3u8" },
                    { name: "3. Bölüm: Turşu Rick", source: "https://drinkfromwisdomwell.top/hls/videos/7157/master.m3u8" },
                    { name: "4. Bölüm: Koruyucular 3", source: "https://drinkfromwisdomwell.top/hls/videos/7149/master.m3u8" },
                    { name: "5. Bölüm: Dolambaçlı Halkalar Komplosu", source: "https://drinkfromwisdomwell.top/hls/videos/7151/master.m3u8" },
                    { name: "6. Bölüm: Dinlenme ve Ricktirahat", source: "https://drinkfromwisdomwell.top/hls/videos/7154/master.m3u8" },
                    { name: "7. Bölüm: Ricklantis'te Karışıklık", source: "https://drinkfromwisdomwell.top/hls/videos/7147/master.m3u8" },
                    { name: "8. Bölüm: Morty'nin Kafa Patlatanları", source: "https://drinkfromwisdomwell.top/hls/videos/7156/master.m3u8" },
                    { name: "9. Bölüm: Beth'in Abecesi", source: "https://drinkfromwisdomwell.top/hls/videos/7150/master.m3u8" },
                    { name: "10. Bölüm: Rickçuryalı Mortaday (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7148/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Morty'nin Sınırında: Rick, Öl, Canlan", source: "https://drinkfromwisdomwell.top/hls/videos/7183/master.m3u8" },
                    { name: "2. Bölüm: İhtiyar Adam ve Klozet", source: "https://drinkfromwisdomwell.top/hls/videos/7175/master.m3u8" },
                    { name: "3. Bölüm: Soygun Ekibi", source: "https://drinkfromwisdomwell.top/hls/videos/7178/master.m3u8" },
                    { name: "4. Bölüm: Pençe ve Kanat: Morty'nin Yeni Ev Hayvanı", source: "https://drinkfromwisdomwell.top/hls/videos/7176/master.m3u8" },
                    { name: "5. Bölüm: Uzayda Yılan Macerası", source: "https://drinkfromwisdomwell.top/hls/videos/7182/master.m3u8" },
                    { name: "6. Bölüm: Rick Aşağı Rick Yukarı", source: "https://drinkfromwisdomwell.top/hls/videos/7179/master.m3u8" },
                    { name: "7. Bölüm: Yüz Emiciler", source: "https://drinkfromwisdomwell.top/hls/videos/7177/master.m3u8" },
                    { name: "8. Bölüm: Asit Varili Bölümü", source: "https://drinkfromwisdomwell.top/hls/videos/7172/master.m3u8" },
                    { name: "9. Bölüm: Mort'un Çocukricki", source: "https://drinkfromwisdomwell.top/hls/videos/7174/master.m3u8" },
                    { name: "10. Bölüm: Kahraman Aile Dünyayı Kurtarıyor (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7180/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Rick Andre ile Akşam Yemeği", source: "https://drinkfromwisdomwell.top/hls/videos/7161/master.m3u8" },
                    { name: "2. Bölüm: Yem Aileler", source: "https://drinkfromwisdomwell.top/hls/videos/7171/master.m3u8" },
                    { name: "3. Bölüm: Morty'nin Ekolojik Aşkı", source: "https://drinkfromwisdomwell.top/hls/videos/7166/master.m3u8" },
                    { name: "4. Bölüm: Kurturick Günü", source: "https://drinkfromwisdomwell.top/hls/videos/7162/master.m3u8" },
                    { name: "5. Bölüm: Ricklik Yılları", source: "https://drinkfromwisdomwell.top/hls/videos/7168/master.m3u8" },
                    { name: "6. Bölüm: Rick ve Morty'nin Şükran Günü", source: "https://drinkfromwisdomwell.top/hls/videos/7163/master.m3u8" },
                    { name: "7. Bölüm: GoTron Jerrysis Rickvangelian", source: "https://drinkfromwisdomwell.top/hls/videos/7159/master.m3u8" },
                    { name: "8. Bölüm: Rick Başmorttan", source: "https://drinkfromwisdomwell.top/hls/videos/7165/master.m3u8" },
                    { name: "9. Bölüm: Rickzede", source: "https://drinkfromwisdomwell.top/hls/videos/7160/master.m3u8" },
                    { name: "10. Bölüm: Rickmuray Jack (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7169/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Solaricks", source: "https://drinkfromwisdomwell.top/hls/videos/7135/master.m3u8" },
                    { name: "2. Bölüm: Rick Mort'un İyi Yaşanmış Hayatı", source: "https://drinkfromwisdomwell.top/hls/videos/7132/master.m3u8" },
                    { name: "3. Bölüm: Beth'in Temel İçgüdüsü", source: "https://drinkfromwisdomwell.top/hls/videos/7131/master.m3u8" },
                    { name: "4. Bölüm: Gece Ailesi", source: "https://drinkfromwisdomwell.top/hls/videos/7130/master.m3u8" },
                    { name: "5. Bölüm: Son Smith Durağı", source: "https://drinkfromwisdomwell.top/hls/videos/7134/master.m3u8" },
                    { name: "6. Bölüm: JuRicksic Mort", source: "https://drinkfromwisdomwell.top/hls/videos/7129/master.m3u8" },
                    { name: "7. Bölüm: Full Meta Jackrick", source: "https://drinkfromwisdomwell.top/hls/videos/7127/master.m3u8" },
                    { name: "8. Bölüm: İdrarını Analiz Et, Pislik", source: "https://drinkfromwisdomwell.top/hls/videos/7125/master.m3u8" },
                    { name: "9. Bölüm: Kral Arthur'un Şövalyeleri", source: "https://drinkfromwisdomwell.top/hls/videos/7133/master.m3u8" },
                    { name: "10. Bölüm: Noel Baba Rick (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7128/master.m3u8" }
                ]
            },
            // --- 7. SEZON ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: Müdahale", source: "https://drinkfromwisdomwell.top/hls/videos/7408/master.m3u8" },
                    { name: "2. Bölüm: Jerrick Tuzağı", source: "https://drinkfromwisdomwell.top/hls/videos/7406/master.m3u8" },
                    { name: "3. Bölüm: Hava Kuvvetleri Wong", source: "https://drinkfromwisdomwell.top/hls/videos/7404/master.m3u8" },
                    { name: "4. Bölüm: Rick'in Meşhur Spagettisi", source: "https://drinkfromwisdomwell.top/hls/videos/7411/master.m3u8" },
                    { name: "5. Bölüm: Kötü Morty'nin Dönüşü", source: "https://drinkfromwisdomwell.top/hls/videos/7413/master.m3u8" },
                    { name: "6. Bölüm: Mort Savunmaya Değer", source: "https://drinkfromwisdomwell.top/hls/videos/7412/master.m3u8" },
                    { name: "7. Bölüm: Morty, Summer ve Curcuna", source: "https://drinkfromwisdomwell.top/hls/videos/7407/master.m3u8" },
                    { name: "8. Bölüm: Rakamikonların Yükselişi: Film", source: "https://drinkfromwisdomwell.top/hls/videos/7403/master.m3u8" },
                    { name: "9. Bölüm: Mort Ragnarick", source: "https://drinkfromwisdomwell.top/hls/videos/7415/master.m3u8" },
                    { name: "10. Bölüm: Artık Korkma Mort (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/7414/master.m3u8" }
                ]
            },
            // --- 8. SEZON ---
            {
                name: "8. Sezon",
                episodes: [
                    { name: "1. Bölüm: Summer of All Fears", source: "https://drinkfromwisdomwell.top/hls/videos/7198/master.m3u8" },
                    { name: "2. Bölüm: Valkyrick", source: "https://drinkfromwisdomwell.top/hls/videos/7122/master.m3u8" },
                    { name: "3. Bölüm: The Rick, the Mort & the Ugly", source: "https://drinkfromwisdomwell.top/hls/videos/7195/master.m3u8" },
                    { name: "4. Bölüm: The Last Temptation of Jerry", source: "https://drinkfromwisdomwell.top/hls/videos/8944/master.m3u8" },
                    { name: "5. Bölüm: Cryo Mort a Rickver", source: "https://drinkfromwisdomwell.top/hls/videos/13687/master.m3u8" },
                    { name: "6. Bölüm: The Curious Case of Bethjamin Button", source: "https://drinkfromwisdomwell.top/hls/videos/15519/master.m3u8" },
                    { name: "7. Bölüm: Ricker Than Fiction", source: "https://drinkfromwisdomwell.top/hls/videos/17401/master.m3u8" },
                    { name: "8. Bölüm: Nomortland", source: "https://drinkfromwisdomwell.top/hls/videos/17551/master.m3u8" },
                    { name: "9. Bölüm: Morty Daddy", source: "https://drakkarhls10.icu/hls/videos/20032/master.m3u8" },
                    { name: "10. Bölüm: Hot Rick (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/20619/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_sherlock",
        type: "series",
        title: "Sherlock",
        year: 2010,
        genre: "Suç, Gizem, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/sherlock-7002.webp",
        backdrop: "https://image.tmdb.org/t/p/original/s9O7t67e1h6b5F3t7e7l7f7.jpg",
        description: "Sir Arthur Conan Doyle'un ünlü dedektif hikayelerinin modern günümüz Londra'sına uyarlandığı, dahi dedektif Sherlock Holmes ve ortağı Dr. John Watson'ın maceraları.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pembe Üzerine Bir Çalışma", source: "https://drinkfromwisdomwell.top/hls/videos/11546/master.m3u8", desc: "Sherlock ve Watson tanışır ve ilk vakalarını çözerler." },
                    { name: "2. Bölüm: Kör Bankacı", source: "https://drinkfromwisdomwell.top/hls/videos/11544/master.m3u8", desc: "Gizemli semboller ve bankacı cinayetleri." },
                    { name: "3. Bölüm: Büyük Oyun", source: "https://drinkfromwisdomwell.top/hls/videos/11549/master.m3u8", desc: "Moriarty ile ilk büyük yüzleşme." }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Belgravia'da Bir Skandal", source: "https://drinkfromwisdomwell.top/hls/videos/11552/master.m3u8", desc: "Sherlock, Irene Adler ile karşı karşıya gelir." },
                    { name: "2. Bölüm: Baskerville'in Köpekleri", source: "https://drinkfromwisdomwell.top/hls/videos/11555/master.m3u8", desc: "Ünlü canavar efsanesinin modern yorumu." },
                    { name: "3. Bölüm: Reichenbach Şelalesi (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/11558/master.m3u8", desc: "Sherlock ve Moriarty'nin son düellosu." }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Boş Tabut", source: "https://drinkfromwisdomwell.top/hls/videos/11562/master.m3u8", desc: "Sherlock geri döner, peki nasıl hayatta kaldı?" },
                    { name: "2. Bölüm: Üçlerin İmzası", source: "https://drinkfromwisdomwell.top/hls/videos/11563/master.m3u8", desc: "Watson'ın düğününde işler karışır." },
                    { name: "3. Bölüm: Onun Son Yemini (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/11565/master.m3u8", desc: "Charles Augustus Magnussen ile tehlikeli bir oyun." }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Altı Thatcher", source: "https://drinkfromwisdomwell.top/hls/videos/11567/master.m3u8", desc: "Thatcher büstlerini kıran bir suçlunun peşinde." },
                    { name: "2. Bölüm: Yalancı Dedektif", source: "https://drinkfromwisdomwell.top/hls/videos/11570/master.m3u8", desc: "Culverton Smith ile zihinsel bir savaş." },
                    { name: "3. Bölüm: Son Problem (Final)", source: "https://drinkfromwisdomwell.top/hls/videos/11571/master.m3u8", desc: "Sherlock ve Watson, en büyük aile sırrıyla yüzleşir." }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_vikings",
        type: "series",
        title: "Vikings",
        year: 2013,
        genre: "Tarih, Aksiyon, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/vikingler-8184.webp",
        backdrop: "https://image.tmdb.org/t/p/original/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg",
        description: "Efsanevi Viking kahramanı Ragnar Lothbrok'un, basit bir çiftçiden İngiltere ve Fransa'ya korku salan bir krala dönüşümünün destansı hikayesi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Ergenliğe Geçiş Töreni", source: "https://drinkfromwisdomwell.top/hls/videos/13733/master.m3u8" },
                    { name: "2. Bölüm: Kuzeylilerin Gazabı", source: "https://drinkfromwisdomwell.top/hls/videos/13731/master.m3u8" },
                    { name: "3. Bölüm: El Koyma", source: "https://drinkfromwisdomwell.top/hls/videos/13729/master.m3u8" },
                    { name: "4. Bölüm: Yargılama", source: "https://drinkfromwisdomwell.top/hls/videos/13730/master.m3u8" },
                    { name: "5. Bölüm: Baskın", source: "https://drinkfromwisdomwell.top/hls/videos/13728/master.m3u8" },
                    { name: "6. Bölüm: Cenaze Töreni", source: "https://drinkfromwisdomwell.top/hls/videos/13727/master.m3u8" },
                    { name: "7. Bölüm: Büyük Bir Servet", source: "https://drinkfromwisdomwell.top/hls/videos/13734/master.m3u8" },
                    { name: "8. Bölüm: Kurban", source: "https://drinkfromwisdomwell.top/hls/videos/13732/master.m3u8" },
                    { name: "9. Bölüm: Değişim (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/13726/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kardeşlerin Savaşı", source: "https://drinkfromwisdomwell.top/hls/videos/13806/master.m3u8" },
                    { name: "2. Bölüm: İstila", source: "https://drinkfromwisdomwell.top/hls/videos/13814/master.m3u8" },
                    { name: "3. Bölüm: İhanet", source: "https://drinkfromwisdomwell.top/hls/videos/13808/master.m3u8" },
                    { name: "4. Bölüm: Göze Göz", source: "https://drinkfromwisdomwell.top/hls/videos/13809/master.m3u8" },
                    { name: "5. Bölüm: Kan Akacak", source: "https://drinkfromwisdomwell.top/hls/videos/13811/master.m3u8" },
                    { name: "6. Bölüm: Affedilmeyen", source: "https://drinkfromwisdomwell.top/hls/videos/13805/master.m3u8" },
                    { name: "7. Bölüm: Kan Kartalı", source: "https://drakkarhls10.icu/hls/videos/25466/master.m3u8" },
                    { name: "8. Bölüm: Kemiksiz", source: "https://drinkfromwisdomwell.top/hls/videos/13807/master.m3u8" },
                    { name: "9. Bölüm: Seçim", source: "https://drinkfromwisdomwell.top/hls/videos/13810/master.m3u8" },
                    { name: "10. Bölüm: Gerçek Dua (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/13813/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Paralı Asker", source: "https://drinkfromwisdomwell.top/hls/videos/13755/master.m3u8" },
                    { name: "2. Bölüm: Gezgin", source: "https://drinkfromwisdomwell.top/hls/videos/13761/master.m3u8" },
                    { name: "3. Bölüm: Savaşçının Kaderi", source: "https://drinkfromwisdomwell.top/hls/videos/13763/master.m3u8" },
                    { name: "4. Bölüm: Yaralı", source: "https://drinkfromwisdomwell.top/hls/videos/13758/master.m3u8" },
                    { name: "5. Bölüm: Taht Hırsızı", source: "https://drinkfromwisdomwell.top/hls/videos/13759/master.m3u8" },
                    { name: "6. Bölüm: Yeniden Doğmak", source: "https://drinkfromwisdomwell.top/hls/videos/13760/master.m3u8" },
                    { name: "7. Bölüm: Paris", source: "https://drinkfromwisdomwell.top/hls/videos/13762/master.m3u8" },
                    { name: "8. Bölüm: Kapıya Hücum", source: "https://drinkfromwisdomwell.top/hls/videos/13764/master.m3u8" },
                    { name: "9. Bölüm: Kırılma Noktası", source: "https://drinkfromwisdomwell.top/hls/videos/13756/master.m3u8" },
                    { name: "10. Bölüm: Ölüler (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/13757/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Faydalı Bir İhanet", source: "https://drinkfromwisdomwell.top/hls/videos/13781/master.m3u8" },
                    { name: "2. Bölüm: Kraliçeyi Öldür", source: "https://drinkfromwisdomwell.top/hls/videos/13784/master.m3u8" },
                    { name: "3. Bölüm: Merhamet", source: "https://drinkfromwisdomwell.top/hls/videos/13780/master.m3u8" },
                    { name: "4. Bölüm: Yol Kutlamaları", source: "https://drinkfromwisdomwell.top/hls/videos/13768/master.m3u8" },
                    { name: "5. Bölüm: Vaadedilen", source: "https://drinkfromwisdomwell.top/hls/videos/13775/master.m3u8" },
                    { name: "6. Bölüm: Öyle Olabilirdi", source: "https://drinkfromwisdomwell.top/hls/videos/13766/master.m3u8" },
                    { name: "7. Bölüm: Kazanç ve Kayıp", source: "https://drinkfromwisdomwell.top/hls/videos/13774/master.m3u8" },
                    { name: "8. Bölüm: Karadan Yürütmek", source: "https://drinkfromwisdomwell.top/hls/videos/13783/master.m3u8" },
                    { name: "9. Bölüm: Her Yerde Ölüm", source: "https://drinkfromwisdomwell.top/hls/videos/13777/master.m3u8" },
                    { name: "10. Bölüm: Son Gemi", source: "https://drinkfromwisdomwell.top/hls/videos/13765/master.m3u8" },
                    { name: "11. Bölüm: Yabancı", source: "https://drinkfromwisdomwell.top/hls/videos/13778/master.m3u8" },
                    { name: "12. Bölüm: Vizyon", source: "https://drinkfromwisdomwell.top/hls/videos/13779/master.m3u8" },
                    { name: "13. Bölüm: İki Yolculuk", source: "https://drinkfromwisdomwell.top/hls/videos/13767/master.m3u8" },
                    { name: "14. Bölüm: Şafaktan Önceki Belirsiz Saatler", source: "https://drinkfromwisdomwell.top/hls/videos/13776/master.m3u8" },
                    { name: "15. Bölüm: Onun Tüm Melekleri", source: "https://drinkfromwisdomwell.top/hls/videos/13773/master.m3u8" },
                    { name: "16. Bölüm: Deniz Yolculuğu", source: "https://drinkfromwisdomwell.top/hls/videos/13769/master.m3u8" },
                    { name: "17. Bölüm: Büyük Ordu", source: "https://drinkfromwisdomwell.top/hls/videos/13771/master.m3u8" },
                    { name: "18. Bölüm: İntikam", source: "https://drinkfromwisdomwell.top/hls/videos/13770/master.m3u8" },
                    { name: "19. Bölüm: Hemen Öncesi", source: "https://drinkfromwisdomwell.top/hls/videos/13772/master.m3u8" },
                    { name: "20. Bölüm: Hesaplaşma (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/13782/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Balıkçı Kral", source: "https://drinkfromwisdomwell.top/hls/videos/13799/master.m3u8" },
                    { name: "2. Bölüm: Ölmüşler", source: "https://drinkfromwisdomwell.top/hls/videos/13794/master.m3u8" },
                    { name: "3. Bölüm: Vatan", source: "https://drinkfromwisdomwell.top/hls/videos/13785/master.m3u8" },
                    { name: "4. Bölüm: Plan", source: "https://drinkfromwisdomwell.top/hls/videos/13790/master.m3u8" },
                    { name: "5. Bölüm: Mahkûm", source: "https://drinkfromwisdomwell.top/hls/videos/13793/master.m3u8" },
                    { name: "6. Bölüm: Mesaj", source: "https://drinkfromwisdomwell.top/hls/videos/13797/master.m3u8" },
                    { name: "7. Bölüm: Dolunay", source: "https://drinkfromwisdomwell.top/hls/videos/13791/master.m3u8" },
                    { name: "8. Bölüm: Şaka", source: "https://drinkfromwisdomwell.top/hls/videos/13804/master.m3u8" },
                    { name: "9. Bölüm: Basit Bir Hikâye", source: "https://drinkfromwisdomwell.top/hls/videos/13796/master.m3u8" },
                    { name: "10. Bölüm: Öngörü Anları", source: "https://drinkfromwisdomwell.top/hls/videos/13786/master.m3u8" },
                    { name: "11. Bölüm: Haberler", source: "https://drinkfromwisdomwell.top/hls/videos/13792/master.m3u8" },
                    { name: "12. Bölüm: İğrenç Bir Cinayet", source: "https://drinkfromwisdomwell.top/hls/videos/13787/master.m3u8" },
                    { name: "13. Bölüm: Yeni Bir Tanrı", source: "https://drinkfromwisdomwell.top/hls/videos/13795/master.m3u8" },
                    { name: "14. Bölüm: Kayıp Zaman", source: "https://drinkfromwisdomwell.top/hls/videos/13789/master.m3u8" },
                    { name: "15. Bölüm: Cehennem", source: "https://drinkfromwisdomwell.top/hls/videos/13788/master.m3u8" },
                    { name: "16. Bölüm: Buda", source: "https://drinkfromwisdomwell.top/hls/videos/13803/master.m3u8" },
                    { name: "17. Bölüm: En Korkunç Şey", source: "https://drinkfromwisdomwell.top/hls/videos/13801/master.m3u8" },
                    { name: "18. Bölüm: Baldur", source: "https://drinkfromwisdomwell.top/hls/videos/13798/master.m3u8" },
                    { name: "19. Bölüm: Mağarada Yaşananlar", source: "https://drinkfromwisdomwell.top/hls/videos/13802/master.m3u8" },
                    { name: "20. Bölüm: Ragnarok (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/13800/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yeni Başlangıçlar", source: "https://drinkfromwisdomwell.top/hls/videos/13737/master.m3u8" },
                    { name: "2. Bölüm: Kâhin", source: "https://drinkfromwisdomwell.top/hls/videos/13744/master.m3u8" },
                    { name: "3. Bölüm: Hayaletler, Tanrılar ve Koşan Köpekler", source: "https://drinkfromwisdomwell.top/hls/videos/13743/master.m3u8" },
                    { name: "4. Bölüm: Tüm Esirler", source: "https://drinkfromwisdomwell.top/hls/videos/13736/master.m3u8" },
                    { name: "5. Bölüm: Anahtar", source: "https://drinkfromwisdomwell.top/hls/videos/13749/master.m3u8" },
                    { name: "6. Bölüm: Ölüm ve Yılan", source: "https://drinkfromwisdomwell.top/hls/videos/13739/master.m3u8" },
                    { name: "7. Bölüm: Kadın Savaşçı", source: "https://drinkfromwisdomwell.top/hls/videos/13740/master.m3u8" },
                    { name: "8. Bölüm: Valhalla Bekleyebilir", source: "https://drinkfromwisdomwell.top/hls/videos/13745/master.m3u8" },
                    { name: "9. Bölüm: Diriliş", source: "https://drinkfromwisdomwell.top/hls/videos/13742/master.m3u8" },
                    { name: "10. Bölüm: Sağlam Planlar", source: "https://drinkfromwisdomwell.top/hls/videos/13752/master.m3u8" },
                    { name: "11. Bölüm: Kralların Kralı", source: "https://drinkfromwisdomwell.top/hls/videos/13741/master.m3u8" },
                    { name: "12. Bölüm: Sadece Sihir", source: "https://drinkfromwisdomwell.top/hls/videos/13735/master.m3u8" },
                    { name: "13. Bölüm: İşaret", source: "https://drinkfromwisdomwell.top/hls/videos/13753/master.m3u8" },
                    { name: "14. Bölüm: Kayıp Ruhlar", source: "https://drinkfromwisdomwell.top/hls/videos/13750/master.m3u8" },
                    { name: "15. Bölüm: Denizin Dibinde", source: "https://drinkfromwisdomwell.top/hls/videos/13754/master.m3u8" },
                    { name: "16. Bölüm: Son Yolculuk", source: "https://drinkfromwisdomwell.top/hls/videos/13747/master.m3u8" },
                    { name: "17. Bölüm: Kan Gölü", source: "https://drinkfromwisdomwell.top/hls/videos/13746/master.m3u8" },
                    { name: "18. Bölüm: Sadece Bir Savaş", source: "https://drinkfromwisdomwell.top/hls/videos/13751/master.m3u8" },
                    { name: "19. Bölüm: Tanrıların Verdiği", source: "https://drinkfromwisdomwell.top/hls/videos/13738/master.m3u8" },
                    { name: "20. Bölüm: Son Perde (Büyük Final)", source: "https://drinkfromwisdomwell.top/hls/videos/13748/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_the_sopranos",
        type: "series",
        title: "The Sopranos",
        year: 1999,
        genre: "Suç, Dram",
        poster: "https://dizipal27.plus/uploads/series/original/the-sopranos-3666.webp",
        backdrop: "https://image.tmdb.org/t/p/original/rinkO65eT6XwkaL4Tq0E78674g8.jpg",
        description: "New Jersey'li mafya babası Tony Soprano, hem suç örgütünü yönetmeye çalışırken hem de ailesiyle yaşadığı sorunlar yüzünden panik ataklar geçirir ve bir psikiyatriste gitmeye başlar.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drinkfromwisdomwell.top/hls/videos/9845/master.m3u8" },
                    { name: "2. Bölüm: 2. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9777/master.m3u8" },
                    { name: "3. Bölüm: 3. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9814/master.m3u8" },
                    { name: "4. Bölüm: 4. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9831/master.m3u8" },
                    { name: "5. Bölüm: 5. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9838/master.m3u8" },
                    { name: "6. Bölüm: 6. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9841/master.m3u8" },
                    { name: "7. Bölüm: 7. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9783/master.m3u8" },
                    { name: "8. Bölüm: 8. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9851/master.m3u8" },
                    { name: "9. Bölüm: 9. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9773/master.m3u8" },
                    { name: "10. Bölüm: 10. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9820/master.m3u8" },
                    { name: "11. Bölüm: 11. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9842/master.m3u8" },
                    { name: "12. Bölüm: 12. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9826/master.m3u8" },
                    { name: "13. Bölüm: 13. Bölüm (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/9821/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9822/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9778/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9840/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9815/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9774/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9853/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9835/master.m3u8" },
                    { name: "8. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9779/master.m3u8" },
                    { name: "9. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9802/master.m3u8" },
                    { name: "10. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9809/master.m3u8" },
                    { name: "11. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9807/master.m3u8" },
                    { name: "12. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9839/master.m3u8" },
                    { name: "13. Bölüm (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/9837/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Bay Ruggerio'nun Mahallesi", source: "https://drinkfromwisdomwell.top/hls/videos/9789/master.m3u8" },
                    { name: "2. Bölüm: Güle Güle Küçük Livia", source: "https://drinkfromwisdomwell.top/hls/videos/9813/master.m3u8" },
                    { name: "3. Bölüm: Şanslı Çocuk", source: "https://drinkfromwisdomwell.top/hls/videos/9808/master.m3u8" },
                    { name: "4. Bölüm: Ayın Elemanı", source: "https://drinkfromwisdomwell.top/hls/videos/9776/master.m3u8" },
                    { name: "5. Bölüm: Bir Kürdan Daha", source: "https://drinkfromwisdomwell.top/hls/videos/9832/master.m3u8" },
                    { name: "6. Bölüm: Üniversite", source: "https://drinkfromwisdomwell.top/hls/videos/9804/master.m3u8" },
                    { name: "7. Bölüm: İkinci Bir Görüş", source: "https://drinkfromwisdomwell.top/hls/videos/9797/master.m3u8" },
                    { name: "8. Bölüm: Göğe Yükselmiş", source: "https://drinkfromwisdomwell.top/hls/videos/9829/master.m3u8" },
                    { name: "9. Bölüm: Boşboğaz Mozarella Peyniri", source: "https://drinkfromwisdomwell.top/hls/videos/9787/master.m3u8" },
                    { name: "10. Bölüm: Tüm Şeytanların Şerrinden...", source: "https://drinkfromwisdomwell.top/hls/videos/9770/master.m3u8" },
                    { name: "11. Bölüm: Pine Barrens", source: "https://drinkfromwisdomwell.top/hls/videos/9785/master.m3u8" },
                    { name: "12. Bölüm: Amour Fou (Delice Aşk)", source: "https://drinkfromwisdomwell.top/hls/videos/9798/master.m3u8" },
                    { name: "13. Bölüm: Tek Kişilik Ordu (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/9791/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9824/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9781/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9840/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9834/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9782/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9812/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9846/master.m3u8" },
                    { name: "8. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9828/master.m3u8" },
                    { name: "9. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9796/master.m3u8" },
                    { name: "10. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9784/master.m3u8" },
                    { name: "11. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9793/master.m3u8" },
                    { name: "12. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9769/master.m3u8" },
                    { name: "13. Bölüm (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/9823/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: İki Farklı Tony", source: "https://drinkfromwisdomwell.top/hls/videos/9844/master.m3u8" },
                    { name: "2. Bölüm: Fare Sürüsü", source: "https://drinkfromwisdomwell.top/hls/videos/9799/master.m3u8" },
                    { name: "3. Bölüm: Johnny Nerede?", source: "https://drinkfromwisdomwell.top/hls/videos/9852/master.m3u8" },
                    { name: "4. Bölüm: Bütün Mutlu Aileler", source: "https://drinkfromwisdomwell.top/hls/videos/9816/master.m3u8" },
                    { name: "5. Bölüm: Bir Tuhaflık", source: "https://drinkfromwisdomwell.top/hls/videos/9795/master.m3u8" },
                    { name: "6. Bölüm: Duygusal Eğitim", source: "https://drinkfromwisdomwell.top/hls/videos/9803/master.m3u8" },
                    { name: "7. Bölüm: Camelotta", source: "https://drinkfromwisdomwell.top/hls/videos/9833/master.m3u8" },
                    { name: "8. Bölüm: Marco Polo", source: "https://drinkfromwisdomwell.top/hls/videos/9129/master.m3u8" },
                    { name: "9. Bölüm: Kimliği Belirsiz Siyahi Adamlar", source: "https://drinkfromwisdomwell.top/hls/videos/9806/master.m3u8" },
                    { name: "10. Bölüm: Soğuk Şeyler", source: "https://drinkfromwisdomwell.top/hls/videos/9771/master.m3u8" },
                    { name: "11. Bölüm: Test Rüyası", source: "https://drinkfromwisdomwell.top/hls/videos/9794/master.m3u8" },
                    { name: "12. Bölüm: Uzun Süreli Park", source: "https://drinkfromwisdomwell.top/hls/videos/9819/master.m3u8" },
                    { name: "13. Bölüm: Tüm Saygımla (Sezon Finali)", source: "https://drinkfromwisdomwell.top/hls/videos/9818/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9805/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9825/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9801/master.m3u8" },
                    { name: "4. Bölüm: Kalçanın Etli Kısmı", source: "https://drinkfromwisdomwell.top/hls/videos/9780/master.m3u8" },
                    { name: "5. Bölüm: Bay ve Bayan Sacrimoni'nin Daveti", source: "https://drinkfromwisdomwell.top/hls/videos/9788/master.m3u8" },
                    { name: "6. Bölüm: Özgür Yaşa ya da Öl", source: "https://drinkfromwisdomwell.top/hls/videos/9830/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9836/master.m3u8" },
                    { name: "8. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9847/master.m3u8" },
                    { name: "9. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9772/master.m3u8" },
                    { name: "10. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9850/master.m3u8" },
                    { name: "11. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9811/master.m3u8" },
                    { name: "12. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9792/master.m3u8" },
                    { name: "13. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9849/master.m3u8" },
                    { name: "14. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9810/master.m3u8" },
                    { name: "15. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9848/master.m3u8" },
                    { name: "16. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9790/master.m3u8" },
                    { name: "17. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9786/master.m3u8" },
                    { name: "18. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9800/master.m3u8" },
                    { name: "19. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9843/master.m3u8" },
                    { name: "20. Bölüm", source: "https://drinkfromwisdomwell.top/hls/videos/9827/master.m3u8" },
                    { name: "21. Bölüm (Büyük Final)", source: "https://drinkfromwisdomwell.top/hls/videos/9775/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_dexter",
        type: "series",
        title: "Dexter",
        year: 2006,
        genre: "Suç, Dram, Gizem",
        poster: "https://image.tmdb.org/t/p/original/q8dWfc4JwQuv3HayIZeO84jAXED.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/e78tM32n46qK1yYxQd96i58l1.jpg", // Temsili backdrop
        description: "Gündüzleri Miami Metro Polis Departmanı için kan sıçraması analisti olarak çalışan, geceleri ise bir seri katil olan Dexter Morgan'ın hikayesi.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Dexter", source: "https://vidrame.pro/vr/get/badc82e5/master.m3u8" },
                    { name: "2. Bölüm: Timsah", source: "https://vidrame.pro/vr/get/9d0c7bf4/master.m3u8" },
                    { name: "3. Bölüm: Patlayan Kiraz", source: "https://vidrame.pro/vr/get/7f5f3a0b/master.m3u8" },
                    { name: "4. Bölüm: Hadi El Ele Verelim", source: "https://vidrame.pro/vr/get/5ecc48e7/master.m3u8" },
                    { name: "5. Bölüm: Aşk Amerikan Tarzı", source: "https://vidrame.pro/vr/get/80217411/master.m3u8" },
                    { name: "6. Bölüm: Gönderene İade", source: "https://vidrame.pro/vr/get/5ab18c89/master.m3u8" },
                    { name: "7. Bölüm: Arkadaş Çemberi", source: "https://vidrame.pro/vr/get/5b06090b/master.m3u8" },
                    { name: "8. Bölüm: Psikolog İndirimi", source: "https://vidrame.pro/vr/get/502157e4/master.m3u8" },
                    { name: "9. Bölüm: Babalar En İyisini Bilir", source: "https://vidrame.pro/vr/get/32599541/master.m3u8" },
                    { name: "10. Bölüm: Kırmızı Işıkta Görmek", source: "https://vidrame.pro/vr/get/72b3fa20/master.m3u8" },
                    { name: "11. Bölüm: Gerçek Yalanlar", source: "https://vidrame.pro/vr/get/fda24a8e/master.m3u8" },
                    { name: "12. Bölüm: Özgür Doğmak (Sezon Finali)", source: "https://vidrame.pro/vr/get/1c71b8ca/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yaşıyor!", source: "https://vidrame.pro/vr/get/cfdf4a95/master.m3u8" },
                    { name: "2. Bölüm: Nefesini Tutma", source: "https://vidrame.pro/vr/get/01547bfe/master.m3u8" },
                    { name: "3. Bölüm: Uygunsuz Yalan", source: "https://vidrame.pro/vr/get/390eb5d9/master.m3u8" },
                    { name: "4. Bölüm: Görebiliyorum!", source: "https://vidrame.pro/vr/get/4580aa04/master.m3u8" },
                    { name: "5. Bölüm: Kara Şövalye", source: "https://vidrame.pro/vr/get/f98e3618/master.m3u8" },
                    { name: "6. Bölüm: Dex, Yalanlar ve Video", source: "https://vidrame.pro/vr/get/4dc21195/master.m3u8" },
                    { name: "7. Bölüm: O Gece, Bir Orman Büyüdü", source: "https://vidrame.pro/vr/get/bc93f06c/master.m3u8" },
                    { name: "8. Bölüm: Sabah Geldi", source: "https://vidrame.pro/vr/get/7b7a183f/master.m3u8" },
                    { name: "9. Bölüm: Direniş Gereksizdir", source: "https://vidrame.pro/vr/get/6462da0d/master.m3u8" },
                    { name: "10. Bölüm: Harry'nin Kodunda Bir Şeyler Var", source: "https://vidrame.pro/vr/get/c029c113/master.m3u8" },
                    { name: "11. Bölüm: Sola Dönüş", source: "https://vidrame.pro/vr/get/a679b71d/master.m3u8" },
                    { name: "12. Bölüm: İngiliz İstilası (Sezon Finali)", source: "https://vidrame.pro/vr/get/b85d48b6/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Babamız", source: "https://vidrame.pro/vr/get/e42dbdcb/master.m3u8" },
                    { name: "2. Bölüm: Oscar Mike'ı Bulmak", source: "https://vidrame.pro/vr/get/60699194/master.m3u8" },
                    { name: "3. Bölüm: Aslan Uyuyor Bu Gece", source: "https://vidrame.pro/vr/get/61fa3d73/master.m3u8" },
                    { name: "4. Bölüm: Her Şey Ailede", source: "https://vidrame.pro/vr/get/6ef51174/master.m3u8" },
                    { name: "5. Bölüm: Bimini'ye Dönüş", source: "https://vidrame.pro/vr/get/e38010ea/master.m3u8" },
                    { name: "6. Bölüm: Evet Yapabilirim", source: "https://vidrame.pro/vr/get/19bce741/master.m3u8" },
                    { name: "7. Bölüm: Kolay Lokma", source: "https://vidrame.pro/vr/get/b9c208e5/master.m3u8" },
                    { name: "8. Bölüm: Hasar Bir Kelebek", source: "https://vidrame.pro/vr/get/c33f341a/master.m3u8" },
                    { name: "9. Bölüm: Dün Gece Hakkında", source: "https://vidrame.pro/vr/get/dc14eb89/master.m3u8" },
                    { name: "10. Bölüm: Kendi Yoluna Git", source: "https://vidrame.pro/vr/get/377c68c6/master.m3u8" },
                    { name: "11. Bölüm: Bir Rüya Gördüm", source: "https://vidrame.pro/vr/get/16d95df1/master.m3u8" },
                    { name: "12. Bölüm: Yarın Evleniyorsun? (Sezon Finali)", source: "https://vidrame.pro/vr/get/1fe811d7/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Bir Rüyayı Yaşamak", source: "https://vidrame.pro/vr/get/26ed708c/master.m3u8" },
                    { name: "2. Bölüm: Görülecek Şeyler", source: "https://vidrame.pro/vr/get/8523d292/master.m3u8" },
                    { name: "3. Bölüm: Işıkları Yak", source: "https://vidrame.pro/vr/get/514781f7/master.m3u8" },
                    { name: "4. Bölüm: Dex Tatil Yapar", source: "https://vidrame.pro/vr/get/0e1d4ed8/master.m3u8" },
                    { name: "5. Bölüm: Kirli Harry", source: "https://vidrame.pro/vr/get/53cf7974/master.m3u8" },
                    { name: "6. Bölüm: Çekiçim Olsa", source: "https://vidrame.pro/vr/get/044d6d99/master.m3u8" },
                    { name: "7. Bölüm: Gelgit Durumu", source: "https://vidrame.pro/vr/get/e3696b2e/master.m3u8" },
                    { name: "8. Bölüm: Yol Cinayeti", source: "https://vidrame.pro/vr/get/30ab3ef2/master.m3u8" },
                    { name: "9. Bölüm: Aç Adam", source: "https://vidrame.pro/vr/get/44406409/master.m3u8" },
                    { name: "10. Bölüm: Kayıp Çocuklar", source: "https://vidrame.pro/vr/get/0c7808bf/master.m3u8" },
                    { name: "11. Bölüm: Merhaba Dexter Morgan", source: "https://vidrame.pro/vr/get/df214aac/master.m3u8" },
                    { name: "12. Bölüm: Kaçış (Sezon Finali)", source: "https://vidrame.pro/vr/get/20c1760f/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Benim Hatam", source: "https://vidrame.pro/vr/get/49ae20ff/master.m3u8" },
                    { name: "2. Bölüm: Merhaba Haydut", source: "https://vidrame.pro/vr/get/8335883b/master.m3u8" },
                    { name: "3. Bölüm: Neredeyse Mükemmel", source: "https://vidrame.pro/vr/get/db244b56/master.m3u8" },
                    { name: "4. Bölüm: Güzel ve Çirkin", source: "https://vidrame.pro/vr/get/ec4e546a/master.m3u8" },
                    { name: "5. Bölüm: İlk Kan", source: "https://vidrame.pro/vr/get/e3b26215/master.m3u8" },
                    { name: "6. Bölüm: Her Şey Aydınlandı", source: "https://vidrame.pro/vr/get/8170325b/master.m3u8" },
                    { name: "7. Bölüm: Çember Biziz", source: "https://vidrame.pro/vr/get/33fe8010/master.m3u8" },
                    { name: "8. Bölüm: Al Oraya Koy", source: "https://vidrame.pro/vr/get/0457a046/master.m3u8" },
                    { name: "9. Bölüm: Genç Kalpler", source: "https://vidrame.pro/vr/get/c9d72c99/master.m3u8" },
                    { name: "10. Bölüm: Başlangıçta", source: "https://vidrame.pro/vr/get/534575d5/master.m3u8" },
                    { name: "11. Bölüm: Yemi Yutmak", source: "https://vidrame.pro/vr/get/11d00a67/master.m3u8" },
                    { name: "12. Bölüm: Büyük Şey (Sezon Finali)", source: "https://vidrame.pro/vr/get/34f72f61/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Bu İmanlı Şeyler", source: "https://vidrame.pro/vr/get/7d0e48b8/master.m3u8" },
                    { name: "2. Bölüm: Bir Zamanlar", source: "https://vidrame.pro/vr/get/5d23c1e4/master.m3u8" },
                    { name: "3. Bölüm: Smokey ve Haydut", source: "https://vidrame.pro/vr/get/fa66d112/master.m3u8" },
                    { name: "4. Bölüm: At Gibi Bir Şey", source: "https://vidrame.pro/vr/get/283f3cee/master.m3u8" },
                    { name: "5. Bölüm: Ölüm Meleği", source: "https://vidrame.pro/vr/get/796416d4/master.m3u8" },
                    { name: "6. Bölüm: Bırak Gitsin", source: "https://vidrame.pro/vr/get/f5ef586d/master.m3u8" },
                    { name: "7. Bölüm: Nebraska", source: "https://vidrame.pro/vr/get/3855be3c/master.m3u8" },
                    { name: "8. Bölüm: Günah ve Kefaret", source: "https://vidrame.pro/vr/get/7a62bb03/master.m3u8" },
                    { name: "9. Bölüm: Get Geller", source: "https://vidrame.pro/vr/get/1e214040/master.m3u8" },
                    { name: "10. Bölüm: Tavşan Ricochet", source: "https://vidrame.pro/vr/get/664e9180/master.m3u8" },
                    { name: "11. Bölüm: Elini Hakkında Konuş", source: "https://vidrame.pro/vr/get/34ffc78a/master.m3u8" },
                    { name: "12. Bölüm: Bu Yolun Sonu (Sezon Finali)", source: "https://vidrame.pro/vr/get/591b5410/master.m3u8" }
                ]
            },
            // --- 7. SEZON ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: O Anı Yaşıyor Musun?", source: "https://vidrame.pro/vr/get/26c35961/master.m3u8" },
                    { name: "2. Bölüm: Güneş Işığı ve Buzlu Şekerler", source: "https://vidrame.pro/vr/get/be141e04/master.m3u8" },
                    { name: "3. Bölüm: Sistem Yıkılıyor", source: "https://vidrame.pro/vr/get/30d6f42e/master.m3u8" },
                    { name: "4. Bölüm: Koş", source: "https://vidrame.pro/vr/get/d91fd84f/master.m3u8" },
                    { name: "5. Bölüm: Derine Dalış", source: "https://vidrame.pro/vr/get/c3bcc643/master.m3u8" },
                    { name: "6. Bölüm: Yanlış Yere Bakıyorsun", source: "https://vidrame.pro/vr/get/409f6f0c/master.m3u8" },
                    { name: "7. Bölüm: Kimya", source: "https://vidrame.pro/vr/get/aec8697a/master.m3u8" },
                    { name: "8. Bölüm: Arjantin", source: "https://vidrame.pro/vr/get/a95c2c2e/master.m3u8" },
                    { name: "9. Bölüm: Helter Skelter", source: "https://vidrame.pro/vr/get/4d2cc595/master.m3u8" },
                    { name: "10. Bölüm: Karanlık Yolcu", source: "https://vidrame.pro/vr/get/8ae5f3f6/master.m3u8" },
                    { name: "11. Bölüm: Geleceği Görüyorum", source: "https://vidrame.pro/vr/get/d5307b9b/master.m3u8" },
                    { name: "12. Bölüm: Sürpriz Son (Sezon Finali)", source: "https://vidrame.pro/vr/get/78d6b53f/master.m3u8" }
                ]
            },
            // --- 8. SEZON ---
            {
                name: "8. Sezon",
                episodes: [
                    { name: "1. Bölüm: Güzel Bir Gün", source: "https://vidrame.pro/vr/get/ee6bfd2d/master.m3u8" },
                    { name: "2. Bölüm: Her Şeyin Güzel Tarafı", source: "https://vidrame.pro/vr/get/d9b39aa5/master.m3u8" },
                    { name: "3. Bölüm: Seni Yiyen Şey", source: "https://vidrame.pro/vr/get/897c564f/master.m3u8" },
                    { name: "4. Bölüm: Yara Dokusu", source: "https://vidrame.pro/vr/get/40cb11f5/master.m3u8" },
                    { name: "5. Bölüm: Bu Küçük Domuzcuk", source: "https://vidrame.pro/vr/get/23ebad98/master.m3u8" },
                    { name: "6. Bölüm: Biraz Düşünme", source: "https://vidrame.pro/vr/get/b311bca0/master.m3u8" },
                    { name: "7. Bölüm: Kıyafet Kuralı", source: "https://vidrame.pro/vr/get/f1bafa30/master.m3u8" },
                    { name: "8. Bölüm: Şimdi Gittik mi?", source: "https://vidrame.pro/vr/get/b7ccba35/master.m3u8" },
                    { name: "9. Bölüm: Kendi Müziğini Yap", source: "https://vidrame.pro/vr/get/462023e2/master.m3u8" },
                    { name: "10. Bölüm: Hoşça Kal Miami", source: "https://vidrame.pro/vr/get/db7e41b0/master.m3u8" },
                    { name: "11. Bölüm: Maymun Bir Kutuda", source: "https://vidrame.pro/vr/get/d9eac00a/master.m3u8" },
                    { name: "12. Bölüm: Oduncuyu Hatırla (Büyük Final)", source: "https://vidrame.pro/vr/get/447766e4/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_euphoria",
        type: "series",
        title: "Euphoria",
        year: 2019,
        genre: "Dram",
        poster: "https://dizipal27.plus/uploads/series/original/euphoria-2621.webp",
        backdrop: "https://image.tmdb.org/t/p/original/9m161GawbY3cCRpxxN6rW9F4cRl.jpg",
        description: "Doğu Highland'de bir grup lise öğrencisi; aşk, arkadaşlık ve travmalarla dolu dünyalarında kimliklerini ararken uyuşturucu, seks ve şiddetle yüzleşir.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drakkarhls10.icu/hls/videos/22698/master.m3u8" },
                    { name: "2. Bölüm: Babam Gibi Numara Yapmak", source: "https://drakkarhls10.icu/hls/videos/22699/master.m3u8" },
                    { name: "3. Bölüm: Made You Look", source: "https://drakkarhls10.icu/hls/videos/22697/master.m3u8" },
                    { name: "4. Bölüm: Shook One Pt. II", source: "https://drakkarhls10.icu/hls/videos/22701/master.m3u8" },
                    { name: "5. Bölüm: '03 Bonnie and Clyde", source: "https://drakkarhls10.icu/hls/videos/22704/master.m3u8" },
                    { name: "6. Bölüm: The Next Episode", source: "https://drakkarhls10.icu/hls/videos/22702/master.m3u8" },
                    { name: "7. Bölüm: Denemeler ve Sıkıntılar", source: "https://drakkarhls10.icu/hls/videos/22703/master.m3u8" },
                    { name: "8. Bölüm: And Salt the Earth Behind You (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/22700/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Cennete Gidip Gelmek", source: "https://drakkarhls10.icu/hls/videos/22691/master.m3u8" },
                    { name: "2. Bölüm: Doğadan Uzak", source: "https://drakkarhls10.icu/hls/videos/22695/master.m3u8" },
                    { name: "3. Bölüm: Büyük Dedikodu", source: "https://drakkarhls10.icu/hls/videos/22689/master.m3u8" },
                    { name: "4. Bölüm: Kime Aşık Olduğunu Bilen Var mı?", source: "https://drakkarhls10.icu/hls/videos/22690/master.m3u8" },
                    { name: "5. Bölüm: Dur, Olduğun Gibi Kal", source: "https://drakkarhls10.icu/hls/videos/22693/master.m3u8" },
                    { name: "6. Bölüm: Bin Tane Küçük Ağaç", source: "https://drakkarhls10.icu/hls/videos/22696/master.m3u8" },
                    { name: "7. Bölüm: Tiyatro ve Gerçekler", source: "https://drakkarhls10.icu/hls/videos/22694/master.m3u8" },
                    { name: "8. Bölüm: Hayatım Bir Film (Sezon Finali)", source: "https://drakkarhls10.icu/hls/videos/22692/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_mr_robot",
        type: "series",
        title: "Mr. Robot",
        year: 2015,
        genre: "Dram, Gerilim, Suç",
        poster: "https://image.tmdb.org/t/p/original/b3xyTelIbIFmzD2CpTWrKkS1cFX.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        description: "Gündüzleri siber güvenlik mühendisi, geceleri ise kanunsuz bir hacker olan Elliot Alderson, yeraltı bir hacker grubu tarafından işe alınır.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Merhaba Dostum", source: "https://vidrame.pro/vr/get/50a9932c/master.m3u8" },
                    { name: "2. Bölüm: Birler ve Sıfırlar", source: "https://vidrame.pro/vr/get/1a7d550c/master.m3u8" },
                    { name: "3. Bölüm: Hata Ayıklama", source: "https://vidrame.pro/vr/get/658b731f/master.m3u8" },
                    { name: "4. Bölüm: Şeytanlar", source: "https://vidrame.pro/vr/get/a4376c0d/master.m3u8" },
                    { name: "5. Bölüm: Zayıf Noktalar", source: "https://vidrame.pro/vr/get/71de34fc/master.m3u8" },
                    { name: "6. Bölüm: Cesur Yolcu", source: "https://vidrame.pro/vr/get/5e1ecba5/master.m3u8" },
                    { name: "7. Bölüm: Kaynak Kodu", source: "https://vidrame.pro/vr/get/508e8699/master.m3u8" },
                    { name: "8. Bölüm: Beyaz Gül", source: "https://vidrame.pro/vr/get/6ac19eb0/master.m3u8" },
                    { name: "9. Bölüm: Aynalama", source: "https://vidrame.pro/vr/get/faf3fa46/master.m3u8" },
                    { name: "10. Bölüm: Sıfır Günü (Sezon Finali)", source: "https://vidrame.pro/vr/get/e2072127/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Maske Düşüyor Kısım 1", source: "https://vidrame.pro/vr/get/6ab8b720/master.m3u8" },
                    { name: "2. Bölüm: Maske Düşüyor Kısım 2", source: "https://vidrame.pro/vr/get/4f8a9dbe/master.m3u8" },
                    { name: "3. Bölüm: Çekirdek Panik", source: "https://vidrame.pro/vr/get/218b1e91/master.m3u8" },
                    { name: "4. Bölüm: Başlatma Hatası", source: "https://vidrame.pro/vr/get/25aea6e8/master.m3u8" },
                    { name: "5. Bölüm: Mantık Bombası", source: "https://vidrame.pro/vr/get/94ec6870/master.m3u8" },
                    { name: "6. Bölüm: Yönetici Köle", source: "https://vidrame.pro/vr/get/db8be5d9/master.m3u8" },
                    { name: "7. Bölüm: El Sıkışma", source: "https://vidrame.pro/vr/get/68619a89/master.m3u8" },
                    { name: "8. Bölüm: Varis", source: "https://vidrame.pro/vr/get/838c114e/master.m3u8" },
                    { name: "9. Bölüm: Başlatma Modu", source: "https://vidrame.pro/vr/get/576147b6/master.m3u8" },
                    { name: "10. Bölüm: Gizli Süreç", source: "https://vidrame.pro/vr/get/7a4991d1/master.m3u8" },
                    { name: "11. Bölüm: Python", source: "https://vidrame.pro/vr/get/5ec202ef/master.m3u8" },
                    { name: "12. Bölüm: Pyth1 (Sezon Finali)", source: "https://vidrame.pro/vr/get/e26ca640/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Güç Tasarrufu Modu", source: "https://vidrame.pro/vr/get/e14750da/master.m3u8" },
                    { name: "2. Bölüm: İptal Et", source: "https://vidrame.pro/vr/get/3b869e8c/master.m3u8" },
                    { name: "3. Bölüm: Miras", source: "https://vidrame.pro/vr/get/60b4eb62/master.m3u8" },
                    { name: "4. Bölüm: Meta Veri", source: "https://vidrame.pro/vr/get/bbfa2321/master.m3u8" },
                    { name: "5. Bölüm: Çalışma Zamanı Hatası", source: "https://vidrame.pro/vr/get/e3869bf8/master.m3u8" },
                    { name: "6. Bölüm: Süreci Sonlandır", source: "https://vidrame.pro/vr/get/f94fe5b2/master.m3u8" },
                    { name: "7. Bölüm: Frederick ve Tanya", source: "https://vidrame.pro/vr/get/59e97a8d/master.m3u8" },
                    { name: "8. Bölüm: Beni Silmeyin", source: "https://vidrame.pro/vr/get/72ae75f8/master.m3u8" },
                    { name: "9. Bölüm: Aşama 3", source: "https://vidrame.pro/vr/get/0f927fe7/master.m3u8" },
                    { name: "10. Bölüm: Kapat (Sezon Finali)", source: "https://vidrame.pro/vr/get/6848736a/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yetkisiz", source: "https://vidrame.pro/vr/get/da0245f3/master.m3u8" },
                    { name: "2. Bölüm: Ödeme Gerekli", source: "https://vidrame.pro/vr/get/b9b1fd77/master.m3u8" },
                    { name: "3. Bölüm: Yasak", source: "https://vidrame.pro/vr/get/d63ea783/master.m3u8" },
                    { name: "4. Bölüm: Bulunamadı", source: "https://vidrame.pro/vr/get/50cff881/master.m3u8" },
                    { name: "5. Bölüm: Yönteme İzin Verilmiyor", source: "https://vidrame.pro/vr/get/14ff39ea/master.m3u8" },
                    { name: "6. Bölüm: Kabul Edilemez", source: "https://vidrame.pro/vr/get/9ad79f70/master.m3u8" },
                    { name: "7. Bölüm: Proxy Kimlik Doğrulaması Gerekli", source: "https://vidrame.pro/vr/get/958c0652/master.m3u8" },
                    { name: "8. Bölüm: İstek Zaman Aşımı", source: "https://vidrame.pro/vr/get/eeadf33c/master.m3u8" },
                    { name: "9. Bölüm: Çatışma", source: "https://vidrame.pro/vr/get/96cfe247/master.m3u8" },
                    { name: "10. Bölüm: Gitti", source: "https://vidrame.pro/vr/get/b8b10f51/master.m3u8" },
                    { name: "11. Bölüm: eXit", source: "https://vidrame.pro/vr/get/7d995456/master.m3u8" },
                    { name: "12. Bölüm: kimami", source: "https://vidrame.pro/vr/get/b09d89a0/master.m3u8" },
                    { name: "13. Bölüm: Merhaba Elliot (Büyük Final)", source: "https://vidrame.pro/vr/get/3d8942c6/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_alice_in_borderland",
        type: "series",
        title: "Alice in Borderland",
        year: 2020,
        genre: "Bilim Kurgu, Gerilim, Aksiyon",
        poster: "https://dizipal27.plus/uploads/series/original/alice-in-borderland-523.webp",
        backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
        description: "Amaçsız bir bilgisayar oyuncusu ve iki arkadaşı, kendilerini paralel bir Tokyo'da bulurlar. Burada hayatta kalmak için sadistçe oyunlara katılmak zorundadırlar.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://animevar.pro/hls/videos/24609/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24624/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24639/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls10.icu/hls/videos/24654/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24669/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24689/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls6.icu/hls/videos/24704/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/24718/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24604/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls8.icu/hls/videos/24619/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls10.icu/hls/videos/24634/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls8.icu/hls/videos/24649/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls8.icu/hls/videos/24664/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls6.icu/hls/videos/24679/master.m3u8" },
                    { name: "7. Bölüm", source: "https://drakkarhls4.icu/hls/videos/24685/master.m3u8" },
                    { name: "8. Bölüm (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/24699/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm", source: "https://drakkarhls16.icu/hls/videos/27971/master.m3u8" },
                    { name: "2. Bölüm", source: "https://drakkarhls15.icu/hls/videos/27970/master.m3u8" },
                    { name: "3. Bölüm", source: "https://drakkarhls15.icu/hls/videos/27967/master.m3u8" },
                    { name: "4. Bölüm", source: "https://drakkarhls1.icu/hls/videos/27972/master.m3u8" },
                    { name: "5. Bölüm", source: "https://drakkarhls1.icu/hls/videos/27969/master.m3u8" },
                    { name: "6. Bölüm", source: "https://drakkarhls15.icu/hls/videos/27968/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_the_100",
        type: "series",
        title: "The 100",
        year: 2014,
        genre: "Bilim Kurgu, Dram, Macera",
        poster: "https://dizipal27.plus/uploads/series/original/the-100-6320.webp",
        backdrop: "https://image.tmdb.org/t/p/original/wT57WjX4x4z5w8q1g5X5j2y5g.jpg", // Temsili backdrop
        description: "Nükleer bir kıyametin dünyayı yok etmesinden 97 yıl sonra, insanlığın hayatta kalan tek üyelerinin yaşadığı uzay istasyonundan 100 genç mahkum, yeryüzünün tekrar yaşanabilir olup olmadığını test etmek için dünyaya gönderilir.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drakkarhls4.icu/hls/videos/23392/master.m3u8" },
                    { name: "2. Bölüm: Dünya Becerileri", source: "https://drakkarhls8.icu/hls/videos/23394/master.m3u8" },
                    { name: "3. Bölüm: Ölümcül Dünya", source: "https://drakkarhls4.icu/hls/videos/23396/master.m3u8" },
                    { name: "4. Bölüm: Murphy Kanunu", source: "https://drakkarhls9.icu/hls/videos/23398/master.m3u8" },
                    { name: "5. Bölüm: Alacakaranlığın Son Parıltısı", source: "https://drakkarhls8.icu/hls/videos/23400/master.m3u8" },
                    { name: "6. Bölüm: Kız Kardeşinin Bekçisi", source: "https://drakkarhls6.icu/hls/videos/23402/master.m3u8" },
                    { name: "7. Bölüm: Baskı Altında", source: "https://drakkarhls4.icu/hls/videos/23404/master.m3u8" },
                    { name: "8. Bölüm: Günübirlik Gezi", source: "https://drakkarhls6.icu/hls/videos/23406/master.m3u8" },
                    { name: "9. Bölüm: Birlik Günü", source: "https://drakkarhls9.icu/hls/videos/23408/master.m3u8" },
                    { name: "10. Bölüm: Dünyaları Yok Eden", source: "https://drakkarhls4.icu/hls/videos/23410/master.m3u8" },
                    { name: "11. Bölüm: Sessizlik", source: "https://drakkarhls4.icu/hls/videos/23412/master.m3u8" },
                    { name: "12. Bölüm: Yeryüzü İnsanlarıyız Kısım 1", source: "https://drakkarhls8.icu/hls/videos/23414/master.m3u8" },
                    { name: "13. Bölüm: Yeryüzü İnsanlarıyız Kısım 2 (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/23416/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: 48", source: "https://drakkarhls6.icu/hls/videos/23393/master.m3u8" },
                    { name: "2. Bölüm: Weather'ın Sırrı", source: "https://drakkarhls8.icu/hls/videos/23395/master.m3u8" },
                    { name: "3. Bölüm: Hasatçılar", source: "https://drakkarhls9.icu/hls/videos/23397/master.m3u8" },
                    { name: "4. Bölüm: Mutlu Kavuşmalar", source: "https://drakkarhls6.icu/hls/videos/23399/master.m3u8" },
                    { name: "5. Bölüm: İnsan Deneyleri", source: "https://drakkarhls9.icu/hls/videos/23401/master.m3u8" },
                    { name: "6. Bölüm: Savaşın Sisi", source: "https://drakkarhls6.icu/hls/videos/23403/master.m3u8" },
                    { name: "7. Bölüm: Kötülüğün Pençesinde", source: "https://drakkarhls8.icu/hls/videos/23405/master.m3u8" },
                    { name: "8. Bölüm: Uzay Yürüyüşü", source: "https://drakkarhls8.icu/hls/videos/23407/master.m3u8" },
                    { name: "9. Bölüm: Beni Hatırla", source: "https://drakkarhls9.icu/hls/videos/23409/master.m3u8" },
                    { name: "10. Bölüm: Güçlü Olan Hayatta Kalır", source: "https://drakkarhls6.icu/hls/videos/23411/master.m3u8" },
                    { name: "11. Bölüm: Son Darbe", source: "https://drakkarhls6.icu/hls/videos/23413/master.m3u8" },
                    { name: "12. Bölüm: Dönüşü Olmayan Yol", source: "https://drakkarhls8.icu/hls/videos/23415/master.m3u8" },
                    { name: "13. Bölüm: Diriliş", source: "https://drakkarhls8.icu/hls/videos/23417/master.m3u8" },
                    { name: "14. Bölüm: Yalanlar ve Sırlar", source: "https://drakkarhls6.icu/hls/videos/23418/master.m3u8" },
                    { name: "15. Bölüm: Kana Karşı Kan Kısım 1", source: "https://drakkarhls4.icu/hls/videos/23419/master.m3u8" },
                    { name: "16. Bölüm: Kana Karşı Kan Kısım 2 (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/23420/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Wanheda Kısım 1", source: "https://drakkarhls8.icu/hls/videos/23423/master.m3u8" },
                    { name: "2. Bölüm: Wanheda Kısım 2", source: "https://drakkarhls4.icu/hls/videos/23428/master.m3u8" },
                    { name: "3. Bölüm: İçeri Girenler", source: "https://drakkarhls4.icu/hls/videos/23433/master.m3u8" },
                    { name: "4. Bölüm: Darbe", source: "https://drakkarhls6.icu/hls/videos/23438/master.m3u8" },
                    { name: "5. Bölüm: Kan Tarlası", source: "https://drakkarhls4.icu/hls/videos/23443/master.m3u8" },
                    { name: "6. Bölüm: Acı Hasat", source: "https://drakkarhls4.icu/hls/videos/23448/master.m3u8" },
                    { name: "7. Bölüm: On Üç", source: "https://drakkarhls6.icu/hls/videos/23453/master.m3u8" },
                    { name: "8. Bölüm: Şartlar ve Koşullar", source: "https://drakkarhls6.icu/hls/videos/23460/master.m3u8" },
                    { name: "9. Bölüm: Ateş Çalmak", source: "https://drakkarhls8.icu/hls/videos/23467/master.m3u8" },
                    { name: "10. Bölüm: Düşüş", source: "https://drakkarhls6.icu/hls/videos/23474/master.m3u8" },
                    { name: "11. Bölüm: Bir Daha Asla", source: "https://drakkarhls4.icu/hls/videos/23482/master.m3u8" },
                    { name: "12. Bölüm: Şeytanlar", source: "https://drakkarhls4.icu/hls/videos/23497/master.m3u8" },
                    { name: "13. Bölüm: Katıl ya da Öl", source: "https://drakkarhls9.icu/hls/videos/23502/master.m3u8" },
                    { name: "14. Bölüm: Kızıl Gökyüzü", source: "https://drakkarhls6.icu/hls/videos/23505/master.m3u8" },
                    { name: "15. Bölüm: Ters Somutlaştırma Kısım 1", source: "https://drakkarhls8.icu/hls/videos/23507/master.m3u8" },
                    { name: "16. Bölüm: Ters Somutlaştırma Kısım 2 (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/23508/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yankılar", source: "https://drakkarhls8.icu/hls/videos/23425/master.m3u8" },
                    { name: "2. Bölüm: Tacın Ağırlığı Çok Fazla", source: "https://drakkarhls4.icu/hls/videos/23430/master.m3u8" },
                    { name: "3. Bölüm: Mahşerin Dört Atlısı", source: "https://drakkarhls9.icu/hls/videos/23435/master.m3u8" },
                    { name: "4. Bölüm: Bir Yalanı Saklamak", source: "https://drakkarhls9.icu/hls/videos/23440/master.m3u8" },
                    { name: "5. Bölüm: Riskli Durum", source: "https://drakkarhls9.icu/hls/videos/23445/master.m3u8" },
                    { name: "6. Bölüm: Yükseleceğiz", source: "https://drakkarhls6.icu/hls/videos/23450/master.m3u8" },
                    { name: "7. Bölüm: Saklanacak Bir Yer", source: "https://drakkarhls4.icu/hls/videos/23455/master.m3u8" },
                    { name: "8. Bölüm: Tanrı Kompleksi", source: "https://drakkarhls9.icu/hls/videos/23463/master.m3u8" },
                    { name: "9. Bölüm: Sakın Hayata Döndürmeyin", source: "https://drakkarhls9.icu/hls/videos/23470/master.m3u8" },
                    { name: "10. Bölüm: Seve Seve Ölmek", source: "https://drakkarhls8.icu/hls/videos/23478/master.m3u8" },
                    { name: "11. Bölüm: Öbür Taraf", source: "https://drakkarhls6.icu/hls/videos/23485/master.m3u8" },
                    { name: "12. Bölüm: Seçilmişler", source: "https://drakkarhls6.icu/hls/videos/23499/master.m3u8" },
                    { name: "13. Bölüm: Praimfaya (Sezon Finali)", source: "https://drakkarhls8.icu/hls/videos/23504/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Eden", source: "https://drakkarhls6.icu/hls/videos/23421/master.m3u8" },
                    { name: "2. Bölüm: Kızıl Kraliçe", source: "https://drakkarhls9.icu/hls/videos/23426/master.m3u8" },
                    { name: "3. Bölüm: Uyuyan Devler", source: "https://drakkarhls6.icu/hls/videos/23431/master.m3u8" },
                    { name: "4. Bölüm: Pandora'nın Kutusu", source: "https://drakkarhls8.icu/hls/videos/23436/master.m3u8" },
                    { name: "5. Bölüm: Kumdaki Tehlike", source: "https://drakkarhls8.icu/hls/videos/23441/master.m3u8" },
                    { name: "6. Bölüm: Çıkış Yaraları", source: "https://drakkarhls6.icu/hls/videos/23446/master.m3u8" },
                    { name: "7. Bölüm: Kabul Edilebilir Kayıplar", source: "https://drakkarhls6.icu/hls/videos/23451/master.m3u8" },
                    { name: "8. Bölüm: Barışı Bu Şekilde Sağlayacağız", source: "https://drakkarhls8.icu/hls/videos/23456/master.m3u8" },
                    { name: "9. Bölüm: Tiranlar Kaybetmeye Mahkûmdur", source: "https://drakkarhls6.icu/hls/videos/23465/master.m3u8" },
                    { name: "10. Bölüm: Dünyayı Savaşçılar Kurtaracak", source: "https://drakkarhls8.icu/hls/videos/23471/master.m3u8" },
                    { name: "11. Bölüm: Karanlık Yıl", source: "https://drakkarhls6.icu/hls/videos/23485/master.m3u8" }, // Hata varsa kontrol edilmeli, 11. bölüm listede yoktu, tahmin.
                    { name: "12. Bölüm: Demokles Kısım 1", source: "https://drakkarhls6.icu/hls/videos/23489/master.m3u8" },
                    { name: "13. Bölüm: Demokles Kısım 2 (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/23500/master.m3u8" }
                ]
            },
            // --- 6. SEZON ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Sanctum", source: "https://drakkarhls4.icu/hls/videos/23422/master.m3u8" },
                    { name: "2. Bölüm: Kızıl Güneş Doğuyor", source: "https://drakkarhls8.icu/hls/videos/23427/master.m3u8" },
                    { name: "3. Bölüm: Gabriel'in Çocukları", source: "https://drakkarhls4.icu/hls/videos/23432/master.m3u8" },
                    { name: "4. Bölüm: Yüzündeki Cam", source: "https://drakkarhls6.icu/hls/videos/23437/master.m3u8" },
                    { name: "5. Bölüm: Josephine'in İlahisi", source: "https://drakkarhls8.icu/hls/videos/23442/master.m3u8" },
                    { name: "6. Bölüm: Memento Mori", source: "https://drakkarhls8.icu/hls/videos/23447/master.m3u8" },
                    { name: "7. Bölüm: Asla Zihin Yıkama", source: "https://drakkarhls9.icu/hls/videos/23452/master.m3u8" },
                    { name: "8. Bölüm: Yaşlı Adam ve Anormallik", source: "https://drakkarhls9.icu/hls/videos/23458/master.m3u8" },
                    { name: "9. Bölüm: Taşıdığım Şey", source: "https://drakkarhls9.icu/hls/videos/23466/master.m3u8" },
                    { name: "10. Bölüm: Matruşka", source: "https://drakkarhls8.icu/hls/videos/23473/master.m3u8" },
                    { name: "11. Bölüm: Küller Küllere", source: "https://drakkarhls9.icu/hls/videos/23480/master.m3u8" },
                    { name: "12. Bölüm: Ayarlama Protokolü", source: "https://drakkarhls4.icu/hls/videos/23495/master.m3u8" },
                    { name: "13. Bölüm: Gabriel'in Kanı (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/23501/master.m3u8" }
                ]
            },
            // --- 7. SEZON ---
            {
                name: "7. Sezon",
                episodes: [
                    { name: "1. Bölüm: Küllerden", source: "https://drakkarhls6.icu/hls/videos/23424/master.m3u8" },
                    { name: "2. Bölüm: Bahçe", source: "https://drakkarhls9.icu/hls/videos/23429/master.m3u8" },
                    { name: "3. Bölüm: Sahte Tanrılar", source: "https://drakkarhls4.icu/hls/videos/23434/master.m3u8" },
                    { name: "4. Bölüm: Hesperides", source: "https://drakkarhls8.icu/hls/videos/23439/master.m3u8" },
                    { name: "5. Bölüm: Bardo'ya Hoş Geldiniz", source: "https://drakkarhls9.icu/hls/videos/23444/master.m3u8" },
                    { name: "6. Bölüm: Nakara", source: "https://drakkarhls8.icu/hls/videos/23449/master.m3u8" },
                    { name: "7. Bölüm: Vezirin Hamlesi", source: "https://drakkarhls4.icu/hls/videos/23454/master.m3u8" },
                    { name: "8. Bölüm: Anakonda", source: "https://drakkarhls4.icu/hls/videos/23462/master.m3u8" },
                    { name: "9. Bölüm: Sürü", source: "https://drakkarhls6.icu/hls/videos/23469/master.m3u8" },
                    { name: "10. Bölüm: Küçük Bir Fedakarlık", source: "https://drakkarhls8.icu/hls/videos/23476/master.m3u8" },
                    { name: "11. Bölüm: Etherea", source: "https://drakkarhls8.icu/hls/videos/23483/master.m3u8" },
                    { name: "12. Bölüm: Yabancı", source: "https://drakkarhls9.icu/hls/videos/23498/master.m3u8" },
                    { name: "13. Bölüm: Kan Devi", source: "https://drakkarhls8.icu/hls/videos/23503/master.m3u8" },
                    { name: "14. Bölüm: Bir Tür Eve Dönüş", source: "https://drakkarhls4.icu/hls/videos/23506/master.m3u8" },
                    { name: "15. Bölüm: Ölüme Doğru", source: "https://drakkarhls4.icu/hls/videos/23509/master.m3u8" },
                    { name: "16. Bölüm: Son Savaş (Büyük Final)", source: "https://drakkarhls4.icu/hls/videos/23510/master.m3u8" }
                ]
            }
        ]
    }, // <-- Önceki diziden sonra virgül koymayı unutma!
    {
        id: "ser_gossip_girl",
        type: "series",
        title: "Gossip Girl",
        year: 2007,
        genre: "Dram, Romantik",
        poster: "https://dizipal27.plus/uploads/series/original/gossip-girl-4489.webp",
        backdrop: "https://image.tmdb.org/t/p/original/v7aQ7Rz3B7r7L5J2i5t0g7k9w.jpg",
        description: "New York'un Yukarı Doğu Yakası'ndaki ayrıcalıklı gençlerin skandallarla dolu yaşamları, her şeyi bilen ve herkesin sırrını ifşa eden gizemli bir blogger tarafından takip edilmektedir.",
        seasons: [
            // --- 1. SEZON ---
            {
                name: "1. Sezon",
                episodes: [
                    { name: "1. Bölüm: Pilot", source: "https://drakkarhls6.icu/hls/videos/22137/master.m3u8" },
                    { name: "2. Bölüm: Azılı Düşmanla Yemek", source: "https://drakkarhls9.icu/hls/videos/22145/master.m3u8" },
                    { name: "3. Bölüm: Zehirli Sarmaşık", source: "https://drakkarhls4.icu/hls/videos/22154/master.m3u8" },
                    { name: "4. Bölüm: Blair'ın Kötü Günü", source: "https://drakkarhls4.icu/hls/videos/22163/master.m3u8" },
                    { name: "5. Bölüm: Gözü Kara", source: "https://drakkarhls6.icu/hls/videos/22172/master.m3u8" },
                    { name: "6. Bölüm: Hizmetçi Kızın Hikâyesi", source: "https://drakkarhls4.icu/hls/videos/22181/master.m3u8" },
                    { name: "7. Bölüm: Gizli Gerçekler", source: "https://drakkarhls6.icu/hls/videos/22189/master.m3u8" },
                    { name: "8. Bölüm: On Yedi Mum", source: "https://drakkarhls4.icu/hls/videos/22197/master.m3u8" },
                    { name: "9. Bölüm: Şükran Günü", source: "https://drakkarhls9.icu/hls/videos/22205/master.m3u8" },
                    { name: "10. Bölüm: Merhaba Millet", source: "https://drakkarhls9.icu/hls/videos/22213/master.m3u8" },
                    { name: "11. Bölüm: Roma Tatili", source: "https://drakkarhls4.icu/hls/videos/22221/master.m3u8" },
                    { name: "12. Bölüm: Okul ve Yalanlar", source: "https://drakkarhls9.icu/hls/videos/22226/master.m3u8" },
                    { name: "13. Bölüm: Dedikodular", source: "https://drakkarhls6.icu/hls/videos/22231/master.m3u8" },
                    { name: "14. Bölüm: Yeni Hayatlar", source: "https://drakkarhls4.icu/hls/videos/22235/master.m3u8" },
                    { name: "15. Bölüm: Çaresiz Serena", source: "https://drakkarhls8.icu/hls/videos/22237/master.m3u8" },
                    { name: "16. Bölüm: Erkek Kardeşim Hakkında Her Şey", source: "https://drakkarhls6.icu/hls/videos/22239/master.m3u8" },
                    { name: "17. Bölüm: Sınırdaki Kadın", source: "https://drakkarhls4.icu/hls/videos/22241/master.m3u8" },
                    { name: "18. Bölüm: Yılın Düğünü (Sezon Finali)", source: "https://drakkarhls9.icu/hls/videos/22243/master.m3u8" }
                ]
            },
            // --- 2. SEZON ---
            {
                name: "2. Sezon",
                episodes: [
                    { name: "1. Bölüm: Yaz Mükemmel Geçti", source: "https://drakkarhls8.icu/hls/videos/22249/master.m3u8" },
                    { name: "2. Bölüm: Mutluluk Sarhoşu", source: "https://drakkarhls6.icu/hls/videos/22250/master.m3u8" },
                    { name: "3. Bölüm: Karanlık Gece", source: "https://drakkarhls8.icu/hls/videos/22251/master.m3u8" },
                    { name: "4. Bölüm: Eski Dosyalar", source: "https://drakkarhls8.icu/hls/videos/22252/master.m3u8" },
                    { name: "5. Bölüm: Serena'nın Yükselişi", source: "https://drakkarhls4.icu/hls/videos/22253/master.m3u8" },
                    { name: "6. Bölüm: Ödeşme", source: "https://drakkarhls9.icu/hls/videos/22254/master.m3u8" },
                    { name: "7. Bölüm: Chuck Gerçek Hayatta", source: "https://drakkarhls8.icu/hls/videos/22255/master.m3u8" },
                    { name: "8. Bölüm: Çekim Alanı", source: "https://drakkarhls9.icu/hls/videos/22256/master.m3u8" },
                    { name: "9. Bölüm: Kan Çıkabilir", source: "https://drakkarhls9.icu/hls/videos/22257/master.m3u8" },
                    { name: "10. Bölüm: Manhattan Sosyetesi", source: "https://drakkarhls6.icu/hls/videos/22258/master.m3u8" },
                    { name: "11. Bölüm: Gizli Geçmiş", source: "https://drakkarhls4.icu/hls/videos/22259/master.m3u8" },
                    { name: "12. Bölüm: Mükemmel Bir Yalan", source: "https://drakkarhls4.icu/hls/videos/22260/master.m3u8" },
                    { name: "13. Bölüm: Yanlış Zaman", source: "https://drakkarhls4.icu/hls/videos/22261/master.m3u8" },
                    { name: "14. Bölüm: Unutmaya Çalışmak", source: "https://drakkarhls9.icu/hls/videos/22262/master.m3u8" },
                    { name: "15. Bölüm: Vasiyetname", source: "https://drakkarhls6.icu/hls/videos/22263/master.m3u8" },
                    { name: "16. Bölüm: Yale'e Hoş Geldiniz", source: "https://drakkarhls9.icu/hls/videos/22264/master.m3u8" },
                    { name: "17. Bölüm: Hafıza Sorunu", source: "https://drakkarhls8.icu/hls/videos/22265/master.m3u8" },
                    { name: "18. Bölüm: Karalama Kampanyası", source: "https://drakkarhls9.icu/hls/videos/22266/master.m3u8" },
                    { name: "19. Bölüm: Büyükbaba", source: "https://drakkarhls6.icu/hls/videos/22267/master.m3u8" },
                    { name: "20. Bölüm: Çıkarlar Uğruna", source: "https://drakkarhls4.icu/hls/videos/22268/master.m3u8" },
                    { name: "21. Bölüm: Gizli Anlaşma", source: "https://drakkarhls8.icu/hls/videos/22269/master.m3u8" },
                    { name: "22. Bölüm: Güneyli Centilmenler Sarışın Sever", source: "https://drakkarhls8.icu/hls/videos/22270/master.m3u8" },
                    { name: "23. Bölüm: Rekabetin Doruklarında", source: "https://drakkarhls8.icu/hls/videos/22271/master.m3u8" },
                    { name: "24. Bölüm: Vadi Kızları", source: "https://drakkarhls4.icu/hls/videos/22272/master.m3u8" },
                    { name: "25. Bölüm: Elveda Gossip Girl (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/22273/master.m3u8" }
                ]
            },
            // --- 3. SEZON ---
            {
                name: "3. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kaderin Cilvesi", source: "https://drakkarhls6.icu/hls/videos/22139/master.m3u8" },
                    { name: "2. Bölüm: Freshman", source: "https://drakkarhls4.icu/hls/videos/22148/master.m3u8" },
                    { name: "3. Bölüm: Kayıp Çocuk", source: "https://drakkarhls4.icu/hls/videos/22157/master.m3u8" },
                    { name: "4. Bölüm: Dan de Fleurette", source: "https://drakkarhls4.icu/hls/videos/22166/master.m3u8" },
                    { name: "5. Bölüm: Rufus Evleniyor", source: "https://drakkarhls6.icu/hls/videos/22175/master.m3u8" },
                    { name: "6. Bölüm: Havva Hakkında Her Şey", source: "https://drakkarhls9.icu/hls/videos/22183/master.m3u8" },
                    { name: "7. Bölüm: Bir Babadan Nasıl Kurtulunur", source: "https://drakkarhls8.icu/hls/videos/22191/master.m3u8" },
                    { name: "8. Bölüm: Büyükbaba: İkinci Bölüm", source: "https://drakkarhls8.icu/hls/videos/22199/master.m3u8" },
                    { name: "9. Bölüm: Disco Çubuğu ile Öldürmek", source: "https://drakkarhls8.icu/hls/videos/22207/master.m3u8" },
                    { name: "10. Bölüm: Son Günler", source: "https://drakkarhls6.icu/hls/videos/22217/master.m3u8" },
                    { name: "11. Bölüm: Waldorfların Hazinesi", source: "https://drakkarhls4.icu/hls/videos/22223/master.m3u8" },
                    { name: "12. Bölüm: Bart Bass'ın Hayaleti", source: "https://drakkarhls8.icu/hls/videos/22228/master.m3u8" },
                    { name: "13. Bölüm: Acı Hasat", source: "https://drakkarhls9.icu/hls/videos/22232/master.m3u8" },
                    { name: "14. Bölüm: Sırlar ve Yalanlar", source: "https://drakkarhls9.icu/hls/videos/22236/master.m3u8" },
                    { name: "15. Bölüm: On Altı Yaşında", source: "https://drakkarhls6.icu/hls/videos/22238/master.m3u8" },
                    { name: "16. Bölüm: İmparatorluk Yıkılıyor", source: "https://drakkarhls4.icu/hls/videos/22240/master.m3u8" },
                    { name: "17. Bölüm: Yabancı", source: "https://drakkarhls6.icu/hls/videos/22242/master.m3u8" },
                    { name: "18. Bölüm: Dayanılmaz Hafiflik", source: "https://drakkarhls8.icu/hls/videos/22244/master.m3u8" },
                    { name: "19. Bölüm: Dr. Yabancı Aşk", source: "https://drakkarhls4.icu/hls/videos/22245/master.m3u8" },
                    { name: "20. Bölüm: Babamın Gölgesi", source: "https://drakkarhls9.icu/hls/videos/22246/master.m3u8" },
                    { name: "21. Bölüm: Eski Kocalar", source: "https://drakkarhls4.icu/hls/videos/22247/master.m3u8" },
                    { name: "22. Bölüm: Son Tango, Sonra Paris (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/22248/master.m3u8" }
                ]
            },
            // --- 4. SEZON ---
            {
                name: "4. Sezon",
                episodes: [
                    { name: "1. Bölüm: Gündüz Güzelleri", source: "https://drakkarhls6.icu/hls/videos/22274/master.m3u8" },
                    { name: "2. Bölüm: Çifte Kimlik", source: "https://drakkarhls8.icu/hls/videos/22277/master.m3u8" },
                    { name: "3. Bölüm: Öğrenciler", source: "https://drakkarhls4.icu/hls/videos/22280/master.m3u8" },
                    { name: "4. Bölüm: Eva'nın Dokunuşu", source: "https://drakkarhls6.icu/hls/videos/22283/master.m3u8" },
                    { name: "5. Bölüm: Güle Güle Columbia", source: "https://drakkarhls4.icu/hls/videos/22286/master.m3u8" },
                    { name: "6. Bölüm: Kolay", source: "https://drakkarhls8.icu/hls/videos/22289/master.m3u8" },
                    { name: "7. Bölüm: Güller Savaşı", source: "https://drakkarhls9.icu/hls/videos/22292/master.m3u8" },
                    { name: "8. Bölüm: Juliet Artık Burada Yaşamıyor", source: "https://drakkarhls9.icu/hls/videos/22295/master.m3u8" },
                    { name: "9. Bölüm: Brooklyn Cadıları", source: "https://drakkarhls9.icu/hls/videos/22298/master.m3u8" },
                    { name: "10. Bölüm: Gazlight", source: "https://drakkarhls9.icu/hls/videos/22301/master.m3u8" },
                    { name: "11. Bölüm: Kasaba", source: "https://drakkarhls9.icu/hls/videos/22304/master.m3u8" },
                    { name: "12. Bölüm: Çocuklar İyi Değil", source: "https://drakkarhls9.icu/hls/videos/22306/master.m3u8" },
                    { name: "13. Bölüm: Damien Darko", source: "https://drakkarhls9.icu/hls/videos/22308/master.m3u8" },
                    { name: "14. Bölüm: Panik Oda Arkadaşı", source: "https://drakkarhls8.icu/hls/videos/22310/master.m3u8" },
                    { name: "15. Bölüm: Bir Gecede Oldu", source: "https://drakkarhls9.icu/hls/videos/22312/master.m3u8" },
                    { name: "16. Bölüm: Sen Henüz Onsekizsin", source: "https://drakkarhls4.icu/hls/videos/22314/master.m3u8" },
                    { name: "17. Bölüm: Uyuyan İmparatorluk", source: "https://drakkarhls4.icu/hls/videos/22316/master.m3u8" },
                    { name: "18. Bölüm: Krallığın Çocukları", source: "https://drakkarhls9.icu/hls/videos/22318/master.m3u8" },
                    { name: "19. Bölüm: Küçük Prens", source: "https://drakkarhls4.icu/hls/videos/22320/master.m3u8" },
                    { name: "20. Bölüm: Prensesler ve Kurbağa", source: "https://drakkarhls9.icu/hls/videos/22322/master.m3u8" },
                    { name: "21. Bölüm: Paramparça", source: "https://drakkarhls8.icu/hls/videos/22324/master.m3u8" },
                    { name: "22. Bölüm: Yanlış Veda (Sezon Finali)", source: "https://drakkarhls6.icu/hls/videos/22326/master.m3u8" }
                ]
            },
            // --- 5. SEZON ---
            {
                name: "5. Sezon",
                episodes: [
                    { name: "1. Bölüm: Evet", source: "https://drakkarhls9.icu/hls/videos/22276/master.m3u8" },
                    { name: "2. Bölüm: Güzel ve Ziyafet", source: "https://drakkarhls9.icu/hls/videos/22279/master.m3u8" },
                    { name: "3. Bölüm: Reddedilen Mücevher", source: "https://drakkarhls6.icu/hls/videos/22282/master.m3u8" },
                    { name: "4. Bölüm: Dan'in Anıları", source: "https://drakkarhls9.icu/hls/videos/22285/master.m3u8" },
                    { name: "5. Bölüm: Hızlı ve Öfkeli", source: "https://drakkarhls6.icu/hls/videos/22288/master.m3u8" },
                    { name: "6. Bölüm: Ben Bir Numara", source: "https://drakkarhls9.icu/hls/videos/22291/master.m3u8" },
                    { name: "7. Bölüm: Büyük Uyku Yok", source: "https://drakkarhls8.icu/hls/videos/22294/master.m3u8" },
                    { name: "8. Bölüm: Tüm Kaynaklar Tükendi", source: "https://drakkarhls8.icu/hls/videos/22297/master.m3u8" },
                    { name: "9. Bölüm: Rhodes'a Giden Yol", source: "https://drakkarhls4.icu/hls/videos/22300/master.m3u8" },
                    { name: "10. Bölüm: Dünyayı Yöneten Kızlar", source: "https://drakkarhls9.icu/hls/videos/22303/master.m3u8" },
                    { name: "11. Bölüm: Sonun Başlangıcı", source: "https://drakkarhls6.icu/hls/videos/22305/master.m3u8" },
                    { name: "12. Bölüm: Peder ve Gelin", source: "https://drakkarhls4.icu/hls/videos/22307/master.m3u8" },
                    { name: "13. Bölüm: G, G, G", source: "https://drakkarhls4.icu/hls/videos/22309/master.m3u8" },
                    { name: "14. Bölüm: Yedek Plan", source: "https://drakkarhls8.icu/hls/videos/22311/master.m3u8" },
                    { name: "15. Bölüm: Çılgın Aşk", source: "https://drakkarhls6.icu/hls/videos/22313/master.m3u8" },
                    { name: "16. Bölüm: Çapraz Ateş", source: "https://drakkarhls4.icu/hls/videos/22315/master.m3u8" },
                    { name: "17. Bölüm: Prensesin Çeyizi", source: "https://drakkarhls6.icu/hls/videos/22317/master.m3u8" },
                    { name: "18. Bölüm: Her Şey Dahil", source: "https://drakkarhls4.icu/hls/videos/22319/master.m3u8" },
                    { name: "19. Bölüm: It Girl, Interrupted", source: "https://drakkarhls4.icu/hls/videos/22321/master.m3u8" },
                    { name: "20. Bölüm: Salon Ölüsü", source: "https://drakkarhls9.icu/hls/videos/22323/master.m3u8" },
                    { name: "21. Bölüm: Alçak Biri", source: "https://drakkarhls9.icu/hls/videos/22325/master.m3u8" },
                    { name: "22. Bölüm: Sanatın Hırsızları", source: "https://drakkarhls4.icu/hls/videos/22327/master.m3u8" },
                    { name: "23. Bölüm: Kaçaklar", source: "https://drakkarhls8.icu/hls/videos/22328/master.m3u8" },
                    { name: "24. Bölüm: Yüzüğün Dönüşü (Sezon Finali)", source: "https://drakkarhls4.icu/hls/videos/22329/master.m3u8" }
                ]
            },
            // --- 6. SEZON (FINAL) ---
            {
                name: "6. Sezon",
                episodes: [
                    { name: "1. Bölüm: Kayıp ve Bulunan", source: "https://drakkarhls4.icu/hls/videos/22275/master.m3u8" },
                    { name: "2. Bölüm: Yüksek İhanet", source: "https://drakkarhls9.icu/hls/videos/22278/master.m3u8" },
                    { name: "3. Bölüm: Kirli Çürük Skandallar", source: "https://drakkarhls6.icu/hls/videos/22281/master.m3u8" },
                    { name: "4. Bölüm: Bir Leydi'nin Portresi", source: "https://drakkarhls4.icu/hls/videos/22284/master.m3u8" },
                    { name: "5. Bölüm: Canavar Balo", source: "https://drakkarhls4.icu/hls/videos/22287/master.m3u8" },
                    { name: "6. Bölüm: Görüntünün Olduğu Yer", source: "https://drakkarhls9.icu/hls/videos/22290/master.m3u8" },
                    { name: "7. Bölüm: Son Şansı Kurtar", source: "https://drakkarhls4.icu/hls/videos/22293/master.m3u8" },
                    { name: "8. Bölüm: Her Şey Çok Karışık", source: "https://drakkarhls9.icu/hls/videos/22296/master.m3u8" },
                    { name: "9. Bölüm: Revengers", source: "https://drakkarhls8.icu/hls/videos/22299/master.m3u8" },
                    { name: "10. Bölüm: New York, Seni Seviyorum (Büyük Final)", source: "https://drakkarhls9.icu/hls/videos/22302/master.m3u8" }
                ]
            }
        ]
    },
    {
        "id": "ser_lost87",
        "type": "series",
        "title": "Lost",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/lost-7243.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/lost-7243.webp",
        "description": "Lost dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4719/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8fc97df1/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4704/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f42baf24/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4707/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/521567e6/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Avustralya Yürüyüşü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4711/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6597a3a3/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Beyaz Tavşan",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4718/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/43652268/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Güneşin Doğduğu Ev",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4705/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3ffdbadf/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Güve",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4702/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d004ae6f/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Üçkağıtçı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4701/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3213d7f5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Yalnız",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4724/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d6cf879e/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Başka Biri Tarafından Yetiştirildi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4721/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7bec0c78/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: En İyi Kovboyların Bile Babalarıyla Sorunları",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4697/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a40de6e5/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Ne Olursa Olsun",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4713/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/67ccefbe/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Kalpler ve Zihinler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4715/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ae0ace0f/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Özel",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4723/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4bf1e4e6/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Eve Dönüş",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4717/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a30ad740/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Haydutlar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4720/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/70045252/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Çeviride",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4712/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/db455f6a/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Numaralar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4709/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f50b3260/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4714/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1398a404/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Zarar Verme",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4716/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4e430e49/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Yüce Amaç",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4706/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8deaa73f/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Kaçmak İçin Doğmuş",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4703/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/66baad06/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: 23 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4710/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/41d3ab99/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: 24 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4722/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e9de9665/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/998dfe3c/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d54db05c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bad93827/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4679/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6b5f93d9/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4677/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e1a8cd71/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4691/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0b239ac3/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4678/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f39437ae/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4694/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9eed26f8/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4698/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c5838a4d/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4680/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e3754699/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4700/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fe1a10ce/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4695/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b4b9b8a3/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4693/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a042829c/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4687/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/be8844a8/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/acde2dfc/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4696/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/218e7b6b/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4692/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bc99ffb7/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4682/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/775cfb35/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4676/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4e855aa4/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4699/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/81d31b35/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9183a95d/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/05a99120/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: 23 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4690/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fc52a2a5/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: 24 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4681/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm",
                        "source": "https://vidrame.pro/vr/get/08015f65/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4752/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1bdf816a/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4755/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ad1e181d/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4749/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dffb6aa2/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4753/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b4565658/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4742/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b780779e/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4760/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c305bd63/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4761/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f5883442/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4744/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7965389e/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4762/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/76d719f2/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4745/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5ae350eb/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4758/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/da7656c3/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4750/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0b93d1e3/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4759/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/aa39ab20/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4757/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9a9bc68b/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4754/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/758d150e/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4743/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/34a10b31/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4746/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d54812c0/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4747/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/906dcc86/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4756/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0df9980c/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4751/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6455b07d/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4764/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f7268f70/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4748/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/72a59e9a/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: 23 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4763/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/640e8434/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4655/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/675f1c15/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4660/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/296f8b19/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4672/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/79f72aa5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4653/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0a51958b/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4661/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/65e1e3f9/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4659/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/92123dee/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4666/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5e44112a/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4657/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d2a955f4/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4673/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/23ed3ec5/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4658/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/555b36d5/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4670/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f3c28a62/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4664/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/45c5d913/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4675/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/432d130a/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4732/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f2a1a4ab/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4736/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ffa27883/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4729/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5bc098ea/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4735/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/50fc9df5/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4737/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6b97db12/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4734/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/43bc0d62/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4728/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1c40c2e0/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4740/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4eadfc22/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4727/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6f7f4a58/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4726/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/709e88a2/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4738/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d71f99ed/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4733/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f4e9cba6/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4741/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fb2e4ceb/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4730/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dba7a9c9/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4725/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/32bf4dc2/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4731/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3a828890/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4739/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6b3769f0/master.m3u8"
                    }
                ]
            },
            {
                "name": "6. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4787/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6535fc4f/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/28bbb0c1/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4774/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2b6261e5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4769/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ae3a103d/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4773/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6f2ec17f/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4782/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5c8cf844/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4768/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7824540d/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4772/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b1f52a5e/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4771/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/86745d51/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4777/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d3dd25ee/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4779/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1280a506/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4765/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/36d27be6/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4766/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/20261a94/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4776/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/35b6a56c/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4767/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e8d52a23/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4770/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2fa1b559/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/4775/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ad4303b4/master.m3u8"
                    }
                ]
            }
        ]
    }
    ,
    {
        "id": "ser_chernobyl77",
        "type": "series",
        "title": "Chernobyl",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/501973/poster/thumb/chernobyl.webp",
        "backdrop": "https://www.hdfilmizle.to/v/501973/poster/thumb/chernobyl.webp",
        "description": "Chernobyl dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3217951d/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/85c93f78/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8c259ba5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/717190d1/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/be036693/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_prison_break_izle75",
        "type": "series",
        "title": "Prison Break Izle",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/500522/poster/thumb/prison-break.webp",
        "backdrop": "https://www.hdfilmizle.to/v/500522/poster/thumb/prison-break.webp",
        "description": "Prison Break Izle dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fdd5cc03/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/93ffead0/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b215bb73/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3d0cd8a4/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/48a843c0/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4034575d/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7d7fe151/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d7f24495/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1f633f3b/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: izle 1. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/90535c19/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: izle 1. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/74d6e901/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: izle 1. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/703ce08f/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: izle 1. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ae5c2a6a/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: izle 1. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d91d4729/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: izle 1. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/91b9f5ca/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: izle 1. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/11dc40b0/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: izle 1. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7a3064d2/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: izle 1. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b15b0613/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: izle 1. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9ed531cf/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: izle 1. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4b5ab0a2/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: izle 1. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2f64434e/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: izle 1. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/93d4afcb/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5045a820/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ca272f07/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/488cca01/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/412cf1ac/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 2. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/da6b0ff1/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 2. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b9574013/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 2. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/666e381a/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 2. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7538b9bf/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 2. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/56cf4c9b/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: izle 2. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4f2d73fe/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: izle 2. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5e3115cc/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: izle 2. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/08afc5d0/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: izle 2. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/aa775de7/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: izle 2. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6668f8b9/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: izle 2. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6dbb5911/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: izle 2. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9cf6bd75/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: izle 2. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/216f4e4f/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: izle 2. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5edb26d1/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: izle 2. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/54fc7220/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: izle 2. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/58a21a39/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: izle 2. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2c0c8baa/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: izle 2. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/25840c9b/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 3. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2bba7ed7/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 3. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c66a9fe6/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 3. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/381ec4ed/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 3. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0378a3bb/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 3. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/df76523c/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 3. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e842f040/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 3. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/72f84b0f/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 3. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d55975b8/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 3. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8df42a99/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: izle 3. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0c498ca6/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: izle 3. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a91f6496/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: izle 3. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2ff3e3a7/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: izle 3. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/072ea378/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 4. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f75f518b/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 4. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7ad95782/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 4. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c7143437/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 4. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3e6b8a2e/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 4. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/de73bfe8/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 4. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a36a036f/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 4. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/36f662c7/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 4. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/26b5951e/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 4. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c13f123d/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: izle 4. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/67355cec/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: izle 4. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6e4de77c/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: izle 4. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/972772ec/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: izle 4. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d40adda4/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: izle 4. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/144cdf5b/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: izle 4. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c7455976/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: izle 4. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d12b64c4/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: izle 4. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/47b04ca8/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: izle 4. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0d475b43/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: izle 4. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9649a1fc/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: izle 4. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5d103fd1/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: izle 4. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9b51a327/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: izle 4. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/137227f2/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 5. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9a0a90c0/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 5. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e3a489ef/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 5. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/14fefa55/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 5. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b0513769/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 5. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b73d106a/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 5. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ec5e91f3/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 5. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0a987825/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 5. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1b3beeb5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 5. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5647f97c/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_house_of_the_dragon74",
        "type": "series",
        "title": "House Of The Dragon",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/house-of-the-dragon-9209.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/house-of-the-dragon-9209.webp",
        "description": "Dizipal House Of The Dragon dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Ejderhanın Mirasçıları",
                        "source": "https://drakkarhls6.icu/hls/videos/14525/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Serseri Prens",
                        "source": "https://drakkarhls4.icu/hls/videos/14527/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: İsminin İkincisi",
                        "source": "https://drakkarhls9.icu/hls/videos/14519/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Dar Denizin Kralı",
                        "source": "https://drakkarhls8.icu/hls/videos/14530/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Yolu Aydınlatırız",
                        "source": "https://drakkarhls9.icu/hls/videos/14529/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Prenses ve Kraliçe",
                        "source": "https://drakkarhls8.icu/hls/videos/14528/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Akıntıtaşı",
                        "source": "https://drakkarhls6.icu/hls/videos/14522/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Dalgaların Lordu",
                        "source": "https://drakkarhls4.icu/hls/videos/14520/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Yeşil Konsey",
                        "source": "https://drakkarhls4.icu/hls/videos/14524/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Siyah Kraliçe",
                        "source": "https://drakkarhls4.icu/hls/videos/14523/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Oğula Karşılık Oğul",
                        "source": "https://drakkarhls9.icu/hls/videos/14517/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Zalim Rhaenyra",
                        "source": "https://drakkarhls8.icu/hls/videos/14510/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Yanan Değirmen",
                        "source": "https://drakkarhls9.icu/hls/videos/14514/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/14515/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/14518/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/14512/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/14516/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/14511/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_last_of_us18",
        "type": "series",
        "title": "The Last Of Us",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/the-last-of-us-579.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/the-last-of-us-579.webp",
        "description": "The Last Of Us dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Karanlıkta Kaybolduğunda",
                        "source": "https://drakkarhls8.icu/hls/videos/8581/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Enfekte",
                        "source": "https://drakkarhls9.icu/hls/videos/7231/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Çok Uzun Zaman Önce",
                        "source": "https://drakkarhls4.icu/hls/videos/8582/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Lütfen Elimi Tut",
                        "source": "https://drakkarhls4.icu/hls/videos/7223/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Dayan ve Hayatta Kal",
                        "source": "https://drakkarhls6.icu/hls/videos/7225/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Kin",
                        "source": "https://drakkarhls8.icu/hls/videos/18818/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Geride Kalanlar",
                        "source": "https://drakkarhls8.icu/hls/videos/7230/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: İhtiyacımız Olduğunda",
                        "source": "https://drakkarhls8.icu/hls/videos/7227/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Işığı Ara",
                        "source": "https://drakkarhls6.icu/hls/videos/7226/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Future Days",
                        "source": "https://drakkarhls9.icu/hls/videos/8627/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Episode 2",
                        "source": "https://drakkarhls6.icu/hls/videos/8624/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Episode 3",
                        "source": "https://drakkarhls6.icu/hls/videos/8629/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Episode 4",
                        "source": "https://drakkarhls6.icu/hls/videos/8931/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Episode 5",
                        "source": "https://drakkarhls6.icu/hls/videos/8928/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Episode 6",
                        "source": "https://drakkarhls4.icu/hls/videos/8625/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Episode 7",
                        "source": "https://drakkarhls8.icu/hls/videos/7818/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_how_i_met_your_mother_yabanci_22",
        "type": "series",
        "title": "How I Met Your Mother ",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/how-i-met-your-mother-8429.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/how-i-met-your-mother-8429.webp",
        "description": "How I Met Your Mother Yabancı Dizi dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Pilot Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17820/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Mor Zürafa",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17830/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Özgürlüğün Tadı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17838/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Gömleğin Dönüşü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17836/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Okay mi Müthiş",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17833/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Kaşar Bal Kabağı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17826/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Çöpçatan",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17831/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Düello",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17834/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Bıktıran Hindi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17821/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Ananas Olayı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17823/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Limuzin",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17840/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Düğün",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17832/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Trampet Sesleri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17828/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: İlkler",
                        "source": "https://drakkarhls10.icu/hls/videos/17819/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Oyun Gecesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17839/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Kapkek",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17835/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Goriller Arasında Yaşam",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17829/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Gece İkiden Sonra İyi Bir Şey Olmaz",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17825/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Avukat Asistanı Mary",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17824/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Unutulmaz Balo",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17822/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Süt",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17827/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Hadisene",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17837/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Nerede Kalmıştık",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17856/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Akrep ve Kurbağa",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17845/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Brunch",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17846/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Mimar Ted Mosby",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17860/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Dünyanın En Harika Çifti",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17858/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Aldrin Adaleti",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17850/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Swarley",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17841/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Atlantic City",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17848/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Tokat İddiası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17857/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Bekâr Gücü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17847/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Lily Noeli Nasıl Mahvetti",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17854/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: İlk Defa New Yorkta",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17844/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Kolonlar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17861/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Pazartesi Gecesi Futbolu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17851/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Şanslı Çeyreklik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17855/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Eşyalar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17849/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Arrivederci Fiero",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17862/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Taşınma Günü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17859/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Bekârlığa Veda Partisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17843/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Kaç Para",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17842/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Ödünç Alınmış Bir Şey",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17853/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Mavi Bir Şey",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17852/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Bekle",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17918/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Biz Buralı Değiliz",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17920/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Üçteker",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17923/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Çocuklar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17924/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Diğer Herkesle Nasıl Tanıştım",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17914/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ben O Adam Değilim",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17915/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Dowisetrepla",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17929/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Kötü Alışkanlıklar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17930/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Tokat Günü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17919/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Bağlantı Kopması",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17927/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Platin Kural",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17928/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Yarın Yok",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17916/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: On Seans",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17921/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Liste",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17917/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Bağırma Zinciri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17911/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Kumdan Kaleler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17925/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Keçi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17922/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Telafi Kankası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17926/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Hepsi Satılık",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17913/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Mucizeler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17912/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Seni Tanıyor muyum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17908/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: New Yorkun En İyi Hamburgeri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17896/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: New Jerseyi Seviyorum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17904/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Müdahale",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17888/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Shelter Adası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17887/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Sonsuza Dek Mutlu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17910/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Baba Olmama Günü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17890/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Woooo",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17897/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Çıplak Adam",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17902/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Kavga",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17900/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Küçük Minnesota",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17901/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Faydalar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17894/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Karlı Üç Gün",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17895/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Mümkânsız",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17906/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Stinson Ailesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17909/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Üzgünüm Kanka",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17903/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Ön Veranda",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17891/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Yaşlı Kral Clancy",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17893/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Murtaugh",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17889/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Mosbius Tasarım",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17907/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Üç Gün Kuralı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17905/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Doğru Zamanda Doğru Yerde",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17899/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Elinden Geldiğince Hızlı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17892/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Atlayış",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17898/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Tanımlamalar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17988/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Çifte Randevu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18000/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Robine Giriş Dersi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17987/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Sekssiz Hancı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17984/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Vatandaşlık Düellosu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17985/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Gayda",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17983/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Zor Dönem",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17995/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Av Rehberi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17998/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Tokat Günü 2",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17986/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Pencere",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17990/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Son Sigara",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17997/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Kızlar mı Takımlar mı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17992/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Jenkins",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17993/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Kusursuz Hafta",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17980/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Tavşan veya Ördek",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17996/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Kancaya Takılmış",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17982/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Tabii",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17989/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Gülümse",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17991/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Doğru mu Yanlış mı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17999/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Ev Yıkıcılar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17979/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Tekli Yataklar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18001/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Robotlar Güreşçilere Karşı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17994/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Düğün Gelini",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18002/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Görsel İkizler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17981/master.m3u8"
                    }
                ]
            },
            {
                "name": "6. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Önemli Günler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17966/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Ev Toplamak",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17970/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Yarım Kalmış",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17958/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Metro Savaşları",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17962/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Yıkımın Mimarı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17964/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Bebek Muhabbeti",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17978/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Randyyi Kovmak",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17963/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Doğa Tarihi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17965/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Glitter",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17956/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Blitz Laneti",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17976/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Deniz Kızı Teorisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17969/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Yanlış Pozitif",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17974/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Kötü Haber",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17957/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Son Sözler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17973/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Canım Ya",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17959/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Umutsuzluk Günü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17975/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Çöp Adası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17960/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Kalbinin Sesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17967/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Efsane Baba",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17968/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Patlayan Köfteli Sandviç",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17977/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Umutsuz",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17971/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Kusursuz Kokteyl",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17972/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Kent Simgeleri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17961/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Meydan Okumanı Kabul Ediyorum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17955/master.m3u8"
                    }
                ]
            },
            {
                "name": "7. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Sağdıç",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17867/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Çıplak Gerçek",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17877/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Ördekli Kravat",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17882/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Stinson Füze Krizi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17876/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Alan Gezisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17866/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Gizem Geçmişe Karşı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17871/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Noretta",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17870/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Kaşar Bal Kabağı Dönüyor",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17864/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Atlatılan Felaket",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17883/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Tik Tak",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17868/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Telafi Kızı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17874/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Aydınlatma Senfonisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17869/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Piknik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17872/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 46 Dakika",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17865/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Yanan Arıcı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17881/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Sarhoş Treni",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17878/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Baskı Yok",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17885/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Karma",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17863/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Kanka Andı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17884/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Triloji Zamanı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17880/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Şimdi Eşitiz",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17879/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: İyi Bir Delilik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17875/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Sihirbazın Kuralı 1",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17873/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Sihirbazın Kuralı 2",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17886/master.m3u8"
                    }
                ]
            },
            {
                "name": "8. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Farhampton",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18025/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Evlilik Sözleşmesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18004/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Dadılar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18008/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Kim Vaftiz Ebeveyni Olmak İster",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18017/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Ayrılık Mevsimi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18011/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ayrılık Şehri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18006/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Damga Sürtüğü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18014/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 12 Azgın Kadın",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18023/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Istakoz Emeklemesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18026/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Abartılı Telafi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18019/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Son Sayfa 1",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18018/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Son Sayfa 2",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18022/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Grup mu DJ mi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18003/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Yüzüğün Gücü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18024/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Not Seni Seviyorum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18021/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Kötü Bir Delilik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18005/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Küllük",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18015/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Barneyde Hafta Sonu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18009/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Kale",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18013/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Zaman Yolcuları",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18016/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: İstikamet Roma",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18007/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Kanka Mitzvahı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18012/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Eski Bir Şey",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18010/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Yeni Bir Şey",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/18020/master.m3u8"
                    }
                ]
            },
            {
                "name": "9. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Madalyon",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17938/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Geri Döneceğim",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17939/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Son Defa New Yorkta",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17952/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Kanunu Çiğnemek",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17944/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Poker Oyunu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17934/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Şövalye Görüşü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17947/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Soru Sormak Yok",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17949/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Deniz Feneri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17946/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Platonik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17950/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Anne ve Baba",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17954/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Uyku Masalları",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17943/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Prova Yemeği",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17948/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Basçı Aranıyor",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17933/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Tokat Günü 3",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17951/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: Başlat",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17945/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: Anneniz Benimle Nasıl Tanıştı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17953/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Gün Doğumu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17935/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Toparlanmak",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17940/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Vezüv",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17937/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Papatya",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17936/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Gary Blauman",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17942/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Mihrap",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17941/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: Sonsuza Kadar 1",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17931/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: Sonsuza Kadar 2",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/17932/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_suits53",
        "type": "series",
        "title": "Suits",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/suits-514.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/suits-514.webp",
        "description": "Suits dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19114/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f710c39a/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19117/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a7dd8a2c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19122/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a8621e2b/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19119/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/56f87c8b/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19120/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8db19b6a/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19121/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/42213e76/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19111/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a7552d82/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19116/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b6cc283e/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19124/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b2cf4694/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19123/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/48372729/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19115/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2400d0a6/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19118/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3157423a/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19166/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/67088650/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19152/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8e3fae13/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19157/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2b54b6c2/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19163/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b4f5f22c/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19158/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0bb2578d/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19164/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1bbb04f4/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19156/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2721f23a/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19153/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6897601f/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19154/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/19e4dd0c/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19159/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/02559fc3/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19160/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/770a10d1/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19161/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e894b9f4/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19151/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5f09d64b/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19155/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b51acf4f/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19165/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/84481c33/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19162/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/130344fb/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18903/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/085c619f/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18926/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2cd92e8c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18937/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0e23f6a2/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18921/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/968aa7c3/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18930/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/25e58c60/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18914/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/be5c947c/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18945/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a48038cf/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18898/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ab434552/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18893/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/87e49301/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18889/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1052f0ad/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18948/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a2249387/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18917/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7e22fc48/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18907/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f930764c/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18933/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4233963d/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18910/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7099e624/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18941/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4c81e5cf/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19042/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0d4570be/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19029/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9ba4b80b/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19054/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/72b2226a/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19058/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3ba5dcdc/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19065/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/96b1729e/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19061/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/87f743f2/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19017/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dfe77b68/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19021/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a5893e30/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19033/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2068f767/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19071/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5e08191b/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19068/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/927141fc/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19037/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4d750cd3/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19014/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7c28108d/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19025/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e494d7c0/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19051/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d802d6b1/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19047/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9c2a0422/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18999/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4306dfe2/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18975/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c51cff66/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18979/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bf5e0cc5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18995/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9fe99e07/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18987/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/370e94d3/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19006/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2919fe76/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18960/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/33b6d4cc/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18983/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2ca29c60/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18967/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/18973a90/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18952/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/530c58ce/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19010/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ecfa171e/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19002/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f861451e/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18991/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/74c69bf8/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18964/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0e4c58bb/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18971/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/972c53d9/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/18956/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7134bad0/master.m3u8"
                    }
                ]
            },
            {
                "name": "6. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19167/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3e303d8f/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19170/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e7f72ffd/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19175/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/67ade543/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19168/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6a6228ba/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19177/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3983e83d/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19181/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6b7ad177/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19179/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/70b2496a/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19174/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ce055e4d/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19182/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/525d3f95/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19173/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c8e69776/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19171/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/45863fbd/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19169/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0a7a5d12/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19172/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/88a2d798/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19180/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9d96a937/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19176/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/71a8eab6/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19178/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/12623b87/master.m3u8"
                    }
                ]
            },
            {
                "name": "7. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19085/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c1b9b2e2/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19101/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ccd6449c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19087/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3891acd6/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19077/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/71b4b518/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19110/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5f8ea720/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19105/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/149021b2/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19091/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/10357be2/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19083/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a264e8bf/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19089/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/59ba7acd/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19080/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0ada6233/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19099/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c6956d48/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19094/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8f7d78a6/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19108/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fd5b081b/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19074/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7e7475c5/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19103/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b4fb00a6/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19096/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a73087ea/master.m3u8"
                    }
                ]
            },
            {
                "name": "8. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19134/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7b7f538e/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19136/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/76f9f6d9/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19130/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/91b97862/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19125/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/04185f45/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19138/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/268a284c/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19140/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/034b6d7f/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19127/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ebc9552c/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19137/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/512b0ee3/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19133/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/94ab9bd1/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19129/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a10eeecd/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19131/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/30154fb4/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19139/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/618dbb28/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19135/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8b1c231a/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19128/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eb948d59/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19126/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9051c2ea/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19132/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f07f9d12/master.m3u8"
                    }
                ]
            },
            {
                "name": "9. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19147/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4d249dfd/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19146/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9752c8c5/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19142/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b891efa0/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19144/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bcb3a17f/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19150/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ec104cf9/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19143/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4b827a63/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19141/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4bb7eaa2/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19148/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/705a9aca/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19145/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ce7bb501/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/19149/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/db368067/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_avatar_the_last_airbender11",
        "type": "series",
        "title": "Avatar The Last Airbender",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/500256/poster/thumb/avatar-the-last-airbender.webp",
        "backdrop": "https://www.hdfilmizle.to/v/500256/poster/thumb/avatar-the-last-airbender.webp",
        "description": "Avatar The Last Airbender dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: airbender 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ce7d06ed/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: airbender 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0f3ada3e/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: airbender 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/68dee47e/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: airbender 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a5963258/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: airbender 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/33433433/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: airbender 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2eba4d27/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: airbender 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a212ffbe/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: airbender 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4093680b/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_bear29",
        "type": "series",
        "title": "The Bear",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/the-bear-9567.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/the-bear-9567.webp",
        "description": "The Bear dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Sistem",
                        "source": "https://drakkarhls4.icu/hls/videos/24935/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Eller",
                        "source": "https://drakkarhls9.icu/hls/videos/24929/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Birlik",
                        "source": "https://drakkarhls8.icu/hls/videos/24933/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Köpekler",
                        "source": "https://drakkarhls9.icu/hls/videos/24934/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Sheridan",
                        "source": "https://drakkarhls8.icu/hls/videos/24930/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ceres",
                        "source": "https://drakkarhls6.icu/hls/videos/24928/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: İnceleme",
                        "source": "https://drakkarhls9.icu/hls/videos/24932/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Braciole",
                        "source": "https://drakkarhls4.icu/hls/videos/24931/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Beef",
                        "source": "https://drakkarhls8.icu/hls/videos/24886/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Pasta",
                        "source": "https://drakkarhls8.icu/hls/videos/24887/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Sundae",
                        "source": "https://drakkarhls8.icu/hls/videos/24895/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Tatlı Kavun",
                        "source": "https://drakkarhls4.icu/hls/videos/24892/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Beklenmedik Sonuç",
                        "source": "https://drakkarhls9.icu/hls/videos/24893/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Balıklar",
                        "source": "https://drakkarhls6.icu/hls/videos/24891/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Çatallar",
                        "source": "https://drakkarhls8.icu/hls/videos/24888/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Bolonez",
                        "source": "https://drakkarhls4.icu/hls/videos/24894/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Omlet",
                        "source": "https://drakkarhls6.icu/hls/videos/24889/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: The Bear",
                        "source": "https://drakkarhls9.icu/hls/videos/24890/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Yarın",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10344/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Sonraki",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10570/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Kapılar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10569/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Episode 1",
                        "source": "https://drakkarhls6.icu/hls/videos/24919/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Episode 2",
                        "source": "https://drakkarhls9.icu/hls/videos/24918/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Episode 3",
                        "source": "https://drakkarhls9.icu/hls/videos/24926/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Episode 4",
                        "source": "https://drakkarhls8.icu/hls/videos/24924/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Episode 5",
                        "source": "https://drakkarhls9.icu/hls/videos/24925/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Episode 7",
                        "source": "https://drakkarhls8.icu/hls/videos/24966/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Episode 8",
                        "source": "https://drakkarhls6.icu/hls/videos/24974/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Episode 9",
                        "source": "https://drakkarhls4.icu/hls/videos/24927/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Episode 10",
                        "source": "https://drakkarhls9.icu/hls/videos/24922/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_doctor_who74",
        "type": "series",
        "title": "Doctor Who",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/doctor-who-2590.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/doctor-who-2590.webp",
        "description": "Doctor Who dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Uzay Bebekleri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10861/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm: who 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d2434748/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Şeytanın Akoru",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10871/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: who 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a30040bb/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Bum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10867/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: The Unquiet Dead",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10619/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: who 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d5f9b784/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 73 Yarda",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10866/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: who 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/710dcdb5/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: World War Three",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10872/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: who 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/44173f7a/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Rogue",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10858/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: who 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/75579b5e/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Ruby Sunday Efsanesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10863/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: who 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/300692a4/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Ölüm İmparatorluğu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10862/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: who 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ae4f70bf/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: New Earth",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10011/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm: who 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/29e54aff/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Tooth and Claw",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10008/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: who 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d6954cfc/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: School Reunion",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10015/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: who 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4943ee3a/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: The Girl in the Fireplace",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10007/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: who 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6a5020cb/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Rise of the Cybermen",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8271/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: The Age of Steel",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8251/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: The Idiots Lantern",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8272/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: The Impossible Planet",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10000/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_punisher64",
        "type": "series",
        "title": "The Punisher",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/marvel-s-the-punisher-4878.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/marvel-s-the-punisher-4878.webp",
        "description": "The Punisher dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Sabah 3",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11285/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: İki Ölü Adam",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11292/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Kandahar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11294/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: ikmal",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11280/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Nişancı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11274/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Yahuda Keçisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11273/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Nişangah",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11276/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Soğuk çelik",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11268/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Düşmana Yönelik Cephe",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11279/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Kötünün Erdemi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11289/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Tehlike yakın",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11288/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11284/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Ölüm Sembolü",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11277/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Roadhouse Blues",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11250/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Dövüş ya da Kaç",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11265/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Su Belası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11263/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Yara dokusu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11267/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Tek Gözlü Vale",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11253/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Nakazat",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11254/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Kötü Bir Gün",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11244/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Kardeşimin bekçisi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11256/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Flustercluck",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11243/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Erkeklerin Karanlık Kalpleri",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11261/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Uçurum",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11251/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Çarpışma Rotası",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11262/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Kasırga",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11257/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_smoke90",
        "type": "series",
        "title": "Smoke",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/smoke-9801.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/smoke-9801.webp",
        "description": "Smoke dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Pilot",
                        "source": "https://drakkarhls8.icu/hls/videos/22954/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Seni Mutlu Eden Şey Beni Üzüyor",
                        "source": "https://drakkarhls8.icu/hls/videos/22988/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Garip Süt",
                        "source": "https://drakkarhls6.icu/hls/videos/23024/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Çilek",
                        "source": "https://drakkarhls9.icu/hls/videos/23028/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Boyut Önemlidir",
                        "source": "https://drakkarhls4.icu/hls/videos/23063/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Erkeklik",
                        "source": "https://drakkarhls8.icu/hls/videos/23099/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/23103/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/23137/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_wandavision22",
        "type": "series",
        "title": "Wandavision",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/502096/poster/thumb/wandavision.webp",
        "backdrop": "https://www.hdfilmizle.to/v/502096/poster/thumb/wandavision.webp",
        "description": "Wandavision dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1cd09599/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8e59e277/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/37f3f0ad/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/571ae5b7/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/47b47280/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e23d26f2/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c42a19e4/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e5d4163c/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/029b02d1/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_moon_knight14",
        "type": "series",
        "title": "Moon Knight",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/moon-knight-7012.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/moon-knight-7012.webp",
        "description": "Moon Knight dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Japon Balığı Sorunu",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10852/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Kostümü Çağır",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10849/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Cana Yakın",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10854/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Mezar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10846/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Akıl Hastanesi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10850/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Tanrılar ve Canavarlar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10857/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_hawkeye32",
        "type": "series",
        "title": "Hawkeye",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/hawkeye-6546.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/hawkeye-6546.webp",
        "description": "Hawkeye dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Kahramanlarınızla Asla Tanışmayın",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7518/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bc4cd177/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Saklambaç",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8635/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/33f4608b/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Yankılar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8636/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5022a762/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Ortaklar Haklı mıyım",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7514/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5de73bf9/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Ronin",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7517/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f9a0862f/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Yani Bu Noel",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8637/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/41a10d2c/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_what_if86",
        "type": "series",
        "title": "What If...?",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/what-if-7705.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/what-if-7705.webp",
        "description": "What If dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Ya Kaptan Carter İlk İntikamcı Olsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10233/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm: if 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/719eba81/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Ya TChalla Bir Yıldız Lordu Olsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10236/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: if 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9cc88cc4/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Ya Dünya En Güçlü Kahramanlarını Kaybetsey",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10237/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: if 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f61f5773/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Ya Doktor Strange Elleri Yerine Kalbini Ka",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10229/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: if 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b3e8c024/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Ya Zombiler",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10226/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: if 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f85e6acc/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ya Killmonger Tony Starkı Kurtarırsa",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10224/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: if 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f1ba41a0/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Ya Thor Tek Çocuk Olsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10223/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: if 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b060efcf/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Ya Ultron Kazanırsa",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10227/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: if 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/946a6bf5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Ya Gözcü Yeminini Bozarsa",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10232/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: if 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/04f172a0/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Ya Nebula Nova Birliğine Katılsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10481/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm: if 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f8b1fe01/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Ya Peter Quill Dünyanın En Güçlü Kahramanlar",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10482/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: if 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b5977466/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Ya Happy Hogan Noeli Kurtarsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10487/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: if 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e3a03dc0/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Ya Iron Man Grandmasterla Savaşsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10479/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: if 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3aa1eed7/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Ya Yüzbaşı Carter Hydra Zırhıyla Savaşsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10484/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: if 2. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/46eaee9b/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ya Kahhori Dünyayı Baştan Şekillendirseydi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10480/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: if 2. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4b9c9826/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Ya Hela On Halkayı Bulmuş Olsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10483/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: if 2. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/aabbe6ff/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Ya Avengers 1602de Kurulsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10489/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: if 2. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d0f67502/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Ya Strange Supremee Müdahale Edilseydi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10486/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: if 2. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d945c94f/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Ya Hulk Robotlu Avengerlarla Savaşsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10413/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm: if 3. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8d95a6e7/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Ya Agatha Hollywooda Gitseydi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10409/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: if 3. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1120a554/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Ya Red Guardian Kış Askerini Durdursaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10414/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: if 3. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0a9cf0ff/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Ya Ördek Howard Evlenseydi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10410/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: if 3. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4f882fed/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Ya Yaradılış Dünyayı Yok Etseydi",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10412/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: if 3. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dc11bf4f/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Ya 1872",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10411/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: if 3. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3ef78983/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Ya Watcher Kaybolsaydı",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10407/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: if 3. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/53236be6/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Ya Ya",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10406/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: if 3. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/78066358/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_arcane_izle34",
        "type": "series",
        "title": "Arcane",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/500489/poster/thumb/arcane.webp",
        "backdrop": "https://www.hdfilmizle.to/v/500489/poster/thumb/arcane.webp",
        "description": "Arcane Izle dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/066491c5/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9e237db2/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2894c022/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d45a3b35/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4fe7fe87/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eae75a6e/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fcea7981/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/412097dd/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bc9aa4f3/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: izle 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d94522d9/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: izle 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/400f1985/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: izle 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0c8da74b/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: izle 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/48b0acd4/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: izle 2. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/24978548/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: izle 2. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/28c39fca/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: izle 2. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4ea681f2/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: izle 2. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f9adb04f/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: izle 2. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/21f52373/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_invincible96",
        "type": "series",
        "title": "Invincible",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/invincible-7161.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/invincible-7161.webp",
        "description": "Invincible dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: TAM ZAMANI",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7297/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/296b5042/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: ELDE VAR HİÇBİR ŞEY",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7305/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0407ba01/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: KİME ÇİRKİN DİYORSUN",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7301/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1d60010c/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: NEIL ARMSTRONG ÇATLA DA PATLA",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7302/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4708602b/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: GERÇEKTEN ACITTI",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7304/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0bac3fd3/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: ÖLÜ GİBİ GÖRÜNÜYORSUN",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7303/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eb793189/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: KONUŞMAMIZ GEREK",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7296/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e09135ec/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: GELDİĞİM ASIL YER",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7300/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2ddf35a3/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: SONRAKİ HAYATIN İÇİN DERS OLSUN",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7221/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/585707a9/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: YAKLAŞIK ALTI SAAT İÇİNDE BEKÂRETİMİ BİR BALI",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8580/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e786b9d5/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: BU MESAJ BU ENTRİKA",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8577/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0d8746bb/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: UZUN ZAMAN OLDU",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7220/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5fa5be08/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: ŞOKE OLMALISIN",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8578/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eaeb6484/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: O KADAR KOLAY DEĞİL",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/8579/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f234f002/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: HİÇBİR YERE GİTMİYORUM",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7219/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4762b66d/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: DAHA GÜÇLÜSÜN SANIYORDUM",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7215/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/17cb3c05/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f7addb54/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/594a2c22/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ba30fd72/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d6b7cdd1/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cadfde71/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/868074a2/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fce7d1dc/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: HİÇ SUSMAYACAKSIN SANDIM",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/7117/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/da23616e/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_hannibal57",
        "type": "series",
        "title": "Hannibal",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/hannibal-7255.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/hannibal-7255.webp",
        "description": "Hannibal dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Apéritif",
                        "source": "https://drakkarhls8.icu/hls/videos/24610/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: AmuseBouche",
                        "source": "https://drakkarhls9.icu/hls/videos/24625/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Potage",
                        "source": "https://drakkarhls10.icu/hls/videos/24640/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Oeuf",
                        "source": "https://drakkarhls10.icu/hls/videos/24655/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Coquilles",
                        "source": "https://drakkarhls6.icu/hls/videos/24670/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Entrée",
                        "source": "https://drakkarhls9.icu/hls/videos/24690/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Sorbet",
                        "source": "https://drakkarhls6.icu/hls/videos/24705/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Fromage",
                        "source": "https://drakkarhls9.icu/hls/videos/24719/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Trou Normand",
                        "source": "https://drakkarhls8.icu/hls/videos/24732/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: Buffet Froid",
                        "source": "https://drakkarhls4.icu/hls/videos/24745/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Rôti",
                        "source": "https://drakkarhls9.icu/hls/videos/24758/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Relevés",
                        "source": "https://drakkarhls4.icu/hls/videos/24768/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Savoureux",
                        "source": "https://drakkarhls9.icu/hls/videos/24778/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24603/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24618/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24633/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24648/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24663/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24678/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24684/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24698/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24713/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24727/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24740/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24753/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24763/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24612/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24627/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24642/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24657/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24672/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24692/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24707/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24721/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24734/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24747/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24760/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24780/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24789/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_originals12",
        "type": "series",
        "title": "The Originals",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/502191/poster/thumb/the-originals.webp",
        "backdrop": "https://www.hdfilmizle.to/v/502191/poster/thumb/the-originals.webp",
        "description": "The Originals dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: originals 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f13de240/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: originals 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/442b41b1/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: originals 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/269c2b1d/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: originals 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5fbe3457/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: originals 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/329be2a6/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: originals 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f5b2a1ce/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: originals 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/381dd168/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: originals 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9e9f5559/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: originals 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f93a4ead/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: originals 1. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0adca1fd/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: originals 1. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5b298174/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: originals 1. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1a5c130b/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: originals 1. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7d3c4d52/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: originals 1. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/90961cdd/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: originals 1. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/56eaadbe/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: originals 1. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/996311bf/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: originals 1. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b1deb94c/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: originals 1. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bee9fe70/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: originals 1. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/59013248/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: originals 1. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/18e0cdf4/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: originals 1. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/01bb6d10/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: originals 1. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ee74a161/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: originals 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/080ba08f/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: originals 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9f4fc317/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: originals 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/312b072f/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: originals 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/03550b19/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: originals 2. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/477adb99/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: originals 2. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3b2174a6/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: originals 2. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/07e3fb55/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: originals 2. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7cababb2/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: originals 2. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bbb69c3a/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: originals 2. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cda85134/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: originals 2. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f8998e5f/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: originals 2. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c9aac212/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: originals 2. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/74b09207/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: originals 2. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5605f227/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: originals 2. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f3c46768/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: originals 2. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4624cefc/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: originals 2. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/785c4db8/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: originals 2. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c9553cb8/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: originals 2. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a8f18e77/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: originals 2. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bf0feb65/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: originals 2. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/198a4a26/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: originals 2. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ea83d16f/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: originals 3. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bbcfceb8/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: originals 3. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/34d0d57c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: originals 3. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/11e6ebcc/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: originals 3. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d3e259d7/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: originals 3. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5dd689d6/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: originals 3. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e5f22e1b/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: originals 3. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/55b934d7/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: originals 3. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8b6cdd2d/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: originals 3. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/19d2f8ca/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: originals 3. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/75e3324a/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: originals 3. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/02efd007/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: originals 3. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/053d0c45/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: originals 3. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b3235845/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: originals 3. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f8f11c11/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: originals 3. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/db343c4f/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: originals 3. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2940fbdd/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: originals 3. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5b99aff2/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: originals 3. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1d1c9635/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: originals 3. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8a0f90e4/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: originals 3. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6a40f646/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: originals 3. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/97160da6/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: originals 3. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d1675c1b/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: originals 4. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/592897e2/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: originals 4. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/df954860/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: originals 4. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a920c867/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: originals 4. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e38ca58c/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: originals 4. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d975a5dc/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: originals 4. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/71091d83/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: originals 4. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ecc3141b/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: originals 4. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9feff28a/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: originals 4. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bd69206f/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: originals 4. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/21034da9/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: originals 4. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bc3e8066/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: originals 4. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6836aef7/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: originals 4. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0d95ee3f/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: originals 5. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/575d9b62/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: originals 5. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a1967805/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: originals 5. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/21b860a0/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: originals 5. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3c6017f2/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: originals 5. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/660700c3/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: originals 5. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b1c538e5/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: originals 5. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/24931abd/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: originals 5. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/08c5eb55/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: originals 5. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f1c338ba/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: originals 5. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/17bd4eea/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: originals 5. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/69e652d2/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: originals 5. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/956e79f5/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: originals 5. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c096fc27/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_gotham13",
        "type": "series",
        "title": "Gotham",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/gotham-1317.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/gotham-1317.webp",
        "description": "Gotham dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24607/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f8ad2715/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24622/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8d651f69/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24637/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b62637be/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24652/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/225942bf/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24667/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/33749275/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24687/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2f6795eb/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24702/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f73991b6/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24716/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/15e59945/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24730/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7df5b5e7/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24743/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8abedb6b/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24756/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cfc7def8/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24766/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a281b604/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24776/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/641477df/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24786/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f3b8eaba/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ead22bc8/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24802/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0cbf1e03/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24810/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a5c34a57/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24818/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/44ea98f2/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24826/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bf4be5e7/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24834/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7c2c87c2/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24842/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2f004c68/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24847/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9783d6dd/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24613/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/377f430f/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24628/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e1bfe0ea/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24643/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ceccad51/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24658/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ccbf51d4/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24673/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e72e7f78/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24693/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c08d8cc9/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24708/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/12b1fff1/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24722/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/766c18f5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24735/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2d20abc9/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24748/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/93ad26ea/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24770/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/50d031f0/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24781/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1907b681/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24790/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/82fb995a/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4307734f/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24805/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9b1e7b30/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24813/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/feb052f0/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24821/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8a82878a/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24829/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7d2db1b0/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24837/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/40f3c4e2/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24844/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b627c79e/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24849/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6bae54b6/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24852/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c6a8e722/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24611/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/827cec4b/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24626/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3744ca2b/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24641/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/acdfddd5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24656/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/99d95bf4/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24671/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/38104eb8/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24691/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/33028a6c/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24706/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/118f5eac/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24720/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/389a62aa/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24733/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ee15b5aa/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24746/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d166ab0b/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24759/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/acf69f1d/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24769/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9416e783/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24779/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/36682661/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24788/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/34dc46fe/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24796/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/94f8866c/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24804/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0b9a4f35/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24812/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0adc3706/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24820/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/745f76f0/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24828/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a237a3c1/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24836/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/03d579a2/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24843/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24848/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24614/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ea76c873/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24629/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1bfaa61d/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24644/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/db237640/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24659/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4f89ca43/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24674/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/64267b7e/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24694/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/18470b0c/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24709/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6874494d/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24723/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9d6759e5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24736/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bfd620ef/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24749/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1e1f71f9/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24771/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/109abbd5/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24782/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fe896138/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24791/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/51beed4e/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24798/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1d0a07ee/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24806/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b8157fc7/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24814/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8ddecbee/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24822/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/44b1fa59/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24830/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c89ad377/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24838/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a4449991/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24845/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a5c8aebe/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24850/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f63a83c7/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24853/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d751bea3/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls4.icu/hls/videos/24602/master.m3u8"
                    },
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4ce478b6/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24617/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/489d9e89/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/24632/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1060a7c8/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24647/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ea206e8e/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls8.icu/hls/videos/24662/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/142bc9dd/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24677/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c76655d4/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24683/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bf433312/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24697/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4f606b04/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24712/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/197b0d43/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls6.icu/hls/videos/24726/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1ec650ea/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24739/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d166d1c0/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls9.icu/hls/videos/24752/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/01a9ee4d/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_titans45",
        "type": "series",
        "title": "Titans",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/502108/poster/thumb/titans.webp",
        "backdrop": "https://www.hdfilmizle.to/v/502108/poster/thumb/titans.webp",
        "description": "Titans dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0367ed98/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c3556bc2/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/46d16acb/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d50538dd/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5a13696d/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dce5cb53/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8a3339ca/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/17241fe1/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6f62c65b/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/82dfb020/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/236ae076/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0769a457/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b7e61e2b/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7d966129/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/992277d6/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a7fd2a53/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b19abe34/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a4844c97/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/19745d0b/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3c01816b/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/87a52cc5/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b28047ef/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4a4662b6/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/036e70ee/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4737b29e/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2145a772/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e1cc00e2/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/36dc1029/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/62514b37/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1e4bfd5e/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8c0ae229/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c9cf107c/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/63ac97bf/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/90bd553d/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/55f7a3f0/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/10cc18d3/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eb342d5a/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/da0100a8/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/253f57fd/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/92d09c56/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/56d08225/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/42b04aa0/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1796ab2a/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8f5d496c/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0df620dc/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d5911381/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f75b7f81/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/73c88a92/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/351d2122/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_dexter_new_blood94",
        "type": "series",
        "title": "Dexter New Blood",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/501417/poster/thumb/dexter-new-blood.webp",
        "backdrop": "https://www.hdfilmizle.to/v/501417/poster/thumb/dexter-new-blood.webp",
        "description": "Dexter New Blood dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: blood 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4cce0f04/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: blood 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ee0b68c8/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: blood 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/57b58592/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: blood 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/97a93c5d/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: blood 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/59515544/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: blood 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f050a6df/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: blood 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a8947f23/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: blood 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/46d1ccc9/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: blood 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d95a238b/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: blood 1. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d8e757a1/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_mentalist19",
        "type": "series",
        "title": "The Mentalist",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/501369/poster/thumb/the-mentalist.webp",
        "backdrop": "https://www.hdfilmizle.to/v/501369/poster/thumb/the-mentalist.webp",
        "description": "The Mentalist dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 1. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0fd119de/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 1. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/85ea6bb2/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 1. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1839cf73/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 1. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/47874f58/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 1. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/77981099/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 1. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1618233b/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 1. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b35766cc/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 1. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4ee1d9c0/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 1. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/10c30656/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 1. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/be6368a0/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 1. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/38ea8b34/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 1. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/008eb090/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 1. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f551566b/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 1. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d892ee0b/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: mentalist 1. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3f00a7cc/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 1. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f6fa4d56/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 1. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b98f1b0c/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 1. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2ffedc4f/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 1. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5532344f/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 1. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8219a631/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 1. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/eded9cbc/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 1. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f610d4f3/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: mentalist 1. Sezon 23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/36512012/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 2. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d6acc2d3/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 2. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9a2e74d2/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 2. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0ba334b7/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 2. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/95d29dcc/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 2. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7cf272e0/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 2. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5d097e5b/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 2. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0d75a728/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 2. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/473d5fc9/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 2. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1eb961bd/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 2. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3ab93cfe/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 2. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/daa999f9/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 2. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0a2148ec/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 2. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d7dcfa1a/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 2. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3f0631c0/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: mentalist 2. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c9e5071f/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 2. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1cd38442/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 2. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a3e4e483/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 2. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b00bd860/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 2. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/707647f3/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 2. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6bdf89fe/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 2. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/73e6ab8f/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 2. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fc963c06/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: mentalist 2. Sezon 23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ddb73fdc/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 3. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/971461eb/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 3. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/aefdbd6c/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 3. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/34d1c15e/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 3. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5b2132f5/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 3. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/22bc9d17/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 3. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5345d0ce/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 3. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c234f0ff/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 3. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2831d494/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 3. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9e0edfc5/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 3. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b6ff0c91/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 3. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/deffd829/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 3. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8f6ce6e5/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 3. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/34a9f5c0/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 3. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/af745f80/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 3. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f9c51901/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 3. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ec5ba33f/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 3. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/718ed3c2/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 3. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2e8548df/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 3. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/09776a54/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 3. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/38641834/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 3. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/69ac3822/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 4. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9feec07a/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 4. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cf9b6599/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 4. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/934cfbd5/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 4. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/4abfe516/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 4. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/256fbbaa/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 4. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b0c4dcb7/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 4. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/91373739/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 4. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8b9873c5/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 4. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/30beed35/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 4. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6981cdaf/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 4. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/13bd6cc1/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 4. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6543bf44/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 4. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/396a05f4/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 4. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a85f8d97/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: mentalist 4. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cf77f2c9/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 4. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a8574057/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 4. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/692cc882/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 4. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a7fa2f21/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 4. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dbf12924/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 4. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a9edeb02/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 4. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e6ef81c3/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 4. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ed0176b0/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: mentalist 4. Sezon 23. Bölüm",
                        "source": "https://vidrame.pro/vr/get/656f89cf/master.m3u8"
                    },
                    {
                        "name": "24. Bölüm: mentalist 4. Sezon 24. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bf554842/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 5. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/60b5c7da/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 5. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/5775438e/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 5. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/3bb62f9a/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 5. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e6f8237c/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 5. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d9bbc892/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 5. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2c18d116/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 5. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/cd5d5639/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 5. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8641741a/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 5. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8e740480/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 5. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2dcfbb6f/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 5. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/22dd9bdd/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 5. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d9a69ff2/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 5. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1e2276b3/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 5. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e45f65ca/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: mentalist 5. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/048087c8/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 5. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/20b99f37/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 5. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/398734a1/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 5. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b89babe1/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 5. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/13e4b00c/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 5. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/dcaee6b6/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 5. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c12b15d6/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 5. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/9685a06f/master.m3u8"
                    }
                ]
            },
            {
                "name": "6. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 6. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/62f3db1a/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 6. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1c75c37d/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 6. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c4da033a/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 6. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fba8b4a7/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 6. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d8b887b4/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 6. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2787513d/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 6. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a45f8f17/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 6. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d8173dc1/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 6. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bcda63b3/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 6. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f9177ec7/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 6. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/64cca771/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 6. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d579a27a/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: mentalist 6. Sezon 13. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c69c65c7/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: mentalist 6. Sezon 14. Bölüm",
                        "source": "https://vidrame.pro/vr/get/ada54562/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: mentalist 6. Sezon 15. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1d8d5360/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: mentalist 6. Sezon 16. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7f76a932/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: mentalist 6. Sezon 17. Bölüm",
                        "source": "https://vidrame.pro/vr/get/7a776833/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: mentalist 6. Sezon 18. Bölüm",
                        "source": "https://vidrame.pro/vr/get/77bb3d60/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: mentalist 6. Sezon 19. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1d499418/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: mentalist 6. Sezon 20. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b4026274/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: mentalist 6. Sezon 21. Bölüm",
                        "source": "https://vidrame.pro/vr/get/06569a4f/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: mentalist 6. Sezon 22. Bölüm",
                        "source": "https://vidrame.pro/vr/get/8f1458db/master.m3u8"
                    }
                ]
            },
            {
                "name": "7. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: mentalist 7. Sezon 1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2dc1bb0d/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: mentalist 7. Sezon 2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/39ca6c08/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: mentalist 7. Sezon 3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/0edff7f3/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: mentalist 7. Sezon 4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/79591926/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: mentalist 7. Sezon 5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/69e09a5b/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: mentalist 7. Sezon 6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/bc6470ed/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: mentalist 7. Sezon 7. Bölüm",
                        "source": "https://vidrame.pro/vr/get/6f2a0608/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: mentalist 7. Sezon 8. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fdc28b47/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: mentalist 7. Sezon 9. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f93c64cd/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: mentalist 7. Sezon 10. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a7fb4052/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: mentalist 7. Sezon 11. Bölüm",
                        "source": "https://vidrame.pro/vr/get/66dd9faf/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: mentalist 7. Sezon 12. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f9b22840/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_911_lone_star28",
        "type": "series",
        "title": "911 Lone Star",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/9-1-1-lone-star-7733.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/9-1-1-lone-star-7733.webp",
        "description": "911 Lone Star dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11042/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11037/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11033/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11034/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11031/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11036/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11026/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11039/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11030/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11038/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11318/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11311/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11301/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11310/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11300/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11296/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11305/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11297/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11304/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11308/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11313/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11314/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11307/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11317/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10114/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10131/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10123/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10118/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10140/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10116/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10121/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10134/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10142/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10127/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10151/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10136/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10145/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10126/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10147/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10130/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10138/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10119/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10042/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10055/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10054/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10025/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10036/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10024/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10059/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10039/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10047/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10050/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10060/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10051/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10033/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10046/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10032/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10028/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10029/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10044/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10263/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/9898/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10228/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11050/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10214/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11124/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11112/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11130/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11111/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11109/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/10202/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drinkfromwisdomwell.top/hls/videos/11127/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_ragnarok80",
        "type": "series",
        "title": "Ragnarok",
        "year": 2023,
        "genre": "HD-Film-izle-Dizi",
        "poster": "https://www.hdfilmizle.to/v/500529/poster/thumb/ragnarok.webp",
        "backdrop": "https://www.hdfilmizle.to/v/500529/poster/thumb/ragnarok.webp",
        "description": "Ragnarok dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/d4b1aad6/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/390631ad/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/fcfff72b/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2783eebb/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/2ca0fd11/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c2d7d5b2/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e761a348/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b8f3806e/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/f4cc1bdc/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e9b50e38/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/55d37623/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e59e4210/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm",
                        "source": "https://vidrame.pro/vr/get/e157f4bd/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm",
                        "source": "https://vidrame.pro/vr/get/c9ed7ab0/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm",
                        "source": "https://vidrame.pro/vr/get/b3e51cdc/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm",
                        "source": "https://vidrame.pro/vr/get/a3d5d40d/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm",
                        "source": "https://vidrame.pro/vr/get/1f7061b1/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm",
                        "source": "https://vidrame.pro/vr/get/914cbc16/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "ser_the_vampire_diaries40",
        "type": "series",
        "title": "The Vampire Diaries",
        "year": 2023,
        "genre": "tum-diziler",
        "poster": "https://dizipal27.plus/uploads/series/original/the-vampire-diaries-1844.webp",
        "backdrop": "https://dizipal27.plus/uploads/series/original/the-vampire-diaries-1844.webp",
        "description": "The Vampire Diaries dizisinin tüm bölümleri.",
        "seasons": [
            {
                "name": "1. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: Pilot",
                        "source": "https://drakkarhls10.icu/hls/videos/20519/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Night of the Comet",
                        "source": "https://drakkarhls10.icu/hls/videos/20507/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Friday Night Bites",
                        "source": "https://drakkarhls10.icu/hls/videos/20518/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Family Ties",
                        "source": "https://drakkarhls10.icu/hls/videos/20501/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Youre Undead to Me",
                        "source": "https://drakkarhls10.icu/hls/videos/20508/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Lost Girls",
                        "source": "https://drakkarhls10.icu/hls/videos/20506/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Haunted",
                        "source": "https://drakkarhls10.icu/hls/videos/20502/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 162 Candles",
                        "source": "https://drakkarhls10.icu/hls/videos/20513/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: History Repeating",
                        "source": "https://drakkarhls10.icu/hls/videos/20510/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: The Turning Point",
                        "source": "https://drakkarhls10.icu/hls/videos/20505/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: Bloodlines",
                        "source": "https://drakkarhls10.icu/hls/videos/20500/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: Unpleasantville",
                        "source": "https://drakkarhls10.icu/hls/videos/20514/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Children of the Damned",
                        "source": "https://drakkarhls10.icu/hls/videos/20512/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Fool Me Once",
                        "source": "https://drakkarhls10.icu/hls/videos/20515/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: A Few Good Men",
                        "source": "https://drakkarhls10.icu/hls/videos/20503/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: There Goes the Neighborhood",
                        "source": "https://drakkarhls10.icu/hls/videos/20498/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Let The Right One In",
                        "source": "https://drakkarhls10.icu/hls/videos/20511/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: Under Control",
                        "source": "https://drakkarhls10.icu/hls/videos/20516/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Miss Mystic Falls",
                        "source": "https://drakkarhls10.icu/hls/videos/20499/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: Blood Brothers",
                        "source": "https://drakkarhls10.icu/hls/videos/20504/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: Isobel",
                        "source": "https://drakkarhls10.icu/hls/videos/20517/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: Founders Day",
                        "source": "https://drakkarhls10.icu/hls/videos/20509/master.m3u8"
                    }
                ]
            },
            {
                "name": "2. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: The Return",
                        "source": "https://drakkarhls10.icu/hls/videos/20540/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: Brave New World",
                        "source": "https://drakkarhls10.icu/hls/videos/20538/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: Bad Moon Rising",
                        "source": "https://drakkarhls10.icu/hls/videos/20527/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: Memory Lane",
                        "source": "https://drakkarhls10.icu/hls/videos/20523/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: Kill or Be Killed",
                        "source": "https://drakkarhls10.icu/hls/videos/20525/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: Plan B",
                        "source": "https://drakkarhls10.icu/hls/videos/20529/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: Masquerade",
                        "source": "https://drakkarhls10.icu/hls/videos/20530/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: Rose",
                        "source": "https://drakkarhls10.icu/hls/videos/20528/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: Katerina",
                        "source": "https://drakkarhls10.icu/hls/videos/20539/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: The Sacrifice",
                        "source": "https://drakkarhls10.icu/hls/videos/20531/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: By the Light of the Moon",
                        "source": "https://drakkarhls10.icu/hls/videos/20532/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: The Descent",
                        "source": "https://drakkarhls10.icu/hls/videos/20533/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: Daddy Issues",
                        "source": "https://drakkarhls10.icu/hls/videos/20536/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: Crying Wolf",
                        "source": "https://drakkarhls10.icu/hls/videos/20524/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: The Dinner Party",
                        "source": "https://drakkarhls10.icu/hls/videos/20526/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: The House Guest",
                        "source": "https://drakkarhls10.icu/hls/videos/20541/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: Know Thy Enemy",
                        "source": "https://drakkarhls10.icu/hls/videos/20537/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: The Last Dance",
                        "source": "https://drakkarhls10.icu/hls/videos/20534/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: Klaus",
                        "source": "https://drakkarhls10.icu/hls/videos/20520/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: The Last Day",
                        "source": "https://drakkarhls10.icu/hls/videos/20521/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: The Sun Also Rises",
                        "source": "https://drakkarhls10.icu/hls/videos/20535/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: As I Lay Dying",
                        "source": "https://drakkarhls10.icu/hls/videos/20522/master.m3u8"
                    }
                ]
            },
            {
                "name": "3. Sezon",
                "episodes": [
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20579/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20571/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20576/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20575/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20584/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20570/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20578/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20577/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20567/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20574/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20580/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20568/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20583/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20566/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20585/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20565/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20572/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20581/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20586/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20569/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20582/master.m3u8"
                    }
                ]
            },
            {
                "name": "4. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20555/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20562/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20544/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20560/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20558/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20551/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20559/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20546/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20561/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20542/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20543/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20547/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20554/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20548/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20553/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20563/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20557/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20556/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20549/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20552/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20564/master.m3u8"
                    },
                    {
                        "name": "23. Bölüm: 23 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20550/master.m3u8"
                    }
                ]
            },
            {
                "name": "5. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20449/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20453/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20456/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20438/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20442/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20439/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20454/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20447/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20448/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20451/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20455/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20450/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20446/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20457/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20452/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20458/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20459/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20445/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20441/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20443/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20444/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20440/master.m3u8"
                    }
                ]
            },
            {
                "name": "6. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20480/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20460/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20471/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20476/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20465/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20481/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20474/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20467/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20472/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20470/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20466/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20461/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20479/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20478/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20464/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20462/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20463/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20473/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20477/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20469/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20468/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20475/master.m3u8"
                    }
                ]
            },
            {
                "name": "7. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20427/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20418/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20422/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20416/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20429/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20435/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20432/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20434/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20430/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20417/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20419/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20436/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20421/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20425/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20426/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20431/master.m3u8"
                    },
                    {
                        "name": "17. Bölüm: 17 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20424/master.m3u8"
                    },
                    {
                        "name": "18. Bölüm: 18 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20433/master.m3u8"
                    },
                    {
                        "name": "19. Bölüm: 19 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20420/master.m3u8"
                    },
                    {
                        "name": "20. Bölüm: 20 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20428/master.m3u8"
                    },
                    {
                        "name": "21. Bölüm: 21 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20423/master.m3u8"
                    },
                    {
                        "name": "22. Bölüm: 22 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20437/master.m3u8"
                    }
                ]
            },
            {
                "name": "8. Sezon",
                "episodes": [
                    {
                        "name": "1. Bölüm: 1 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20483/master.m3u8"
                    },
                    {
                        "name": "2. Bölüm: 2 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20493/master.m3u8"
                    },
                    {
                        "name": "3. Bölüm: 3 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20485/master.m3u8"
                    },
                    {
                        "name": "4. Bölüm: 4 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20492/master.m3u8"
                    },
                    {
                        "name": "5. Bölüm: 5 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20495/master.m3u8"
                    },
                    {
                        "name": "6. Bölüm: 6 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20489/master.m3u8"
                    },
                    {
                        "name": "7. Bölüm: 7 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20494/master.m3u8"
                    },
                    {
                        "name": "8. Bölüm: 8 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20496/master.m3u8"
                    },
                    {
                        "name": "9. Bölüm: 9 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20490/master.m3u8"
                    },
                    {
                        "name": "10. Bölüm: 10 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20482/master.m3u8"
                    },
                    {
                        "name": "11. Bölüm: 11 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20484/master.m3u8"
                    },
                    {
                        "name": "12. Bölüm: 12 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20486/master.m3u8"
                    },
                    {
                        "name": "13. Bölüm: 13 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20497/master.m3u8"
                    },
                    {
                        "name": "14. Bölüm: 14 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20487/master.m3u8"
                    },
                    {
                        "name": "15. Bölüm: 15 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20488/master.m3u8"
                    },
                    {
                        "name": "16. Bölüm: 16 Bölüm",
                        "source": "https://drakkarhls10.icu/hls/videos/20491/master.m3u8"
                    }
                ]
            }
        ]
    },
    {
        "id": "mov_sil_bastan_155",
        "type": "movie",
        "title": "Sil Baştan",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/17414/poster/watch/sil-bastan.webp",
        "backdrop": "https://www.hdfilmizle.to/v/17414/poster/watch/sil-bastan.webp",
        "description": "Sil Baştan filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/aef12eec/master.m3u8"
    },
    {
        "id": "mov_not_defteri_741",
        "type": "movie",
        "title": "Not Defteri",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13491/poster/watch/not-defteri.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13491/poster/watch/not-defteri.webp",
        "description": "Not Defteri filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/b28728ed/master.m3u8"
    },
    {
        "id": "mov_amerikan_sapigi_467",
        "type": "movie",
        "title": "Amerikan Sapığı",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13067/poster/watch/amerikan-sapigi.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13067/poster/watch/amerikan-sapigi.webp",
        "description": "Amerikan Sapığı filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/0dce4c49/master.m3u8"
    },
    {
        "id": "mov_para_avcisi_467",
        "type": "movie",
        "title": "Para Avcısı",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13329/poster/watch/para-avcisi.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13329/poster/watch/para-avcisi.webp",
        "description": "Para Avcısı filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/348fd80b/master.m3u8"
    },
    {
        "id": "mov_blade_runner_2049_bicak_sirti_635",
        "type": "movie",
        "title": "Blade Runner 2049: Bıçak Sırtı",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13332/poster/watch/bicak-sirti-2049.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13332/poster/watch/bicak-sirti-2049.webp",
        "description": "Blade Runner 2049: Bıçak Sırtı filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/8e05bfc4/master.m3u8"
    },
    {
        "id": "mov_surucu_891",
        "type": "movie",
        "title": "Sürücü",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/14030/poster/watch/surucu.webp",
        "backdrop": "https://www.hdfilmizle.to/v/14030/poster/watch/surucu.webp",
        "description": "Sürücü filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/cf95b8c4/master.m3u8"
    },
    {
        "id": "mov_barbie_165",
        "type": "movie",
        "title": "Barbie",
        "year": 2024,
        "genre": "Film",
        "poster": "https://image.tmdb.org/t/p/original/66JhCovLuFUO2PqcP20oWLopEvr.jpg",
        "backdrop": "https://www.hdfilmizle.to/v/502240/poster/watch/barbie.webp",
        "description": "Barbie filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/77179d0a/master.m3u8"
    },
    {
        "id": "mov_kara_sovalye_966",
        "type": "movie",
        "title": "Kara Şövalye",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/10734/poster/watch/kara-sovalye.webp",
        "backdrop": "https://www.hdfilmizle.to/v/10734/poster/watch/kara-sovalye.webp",
        "description": "Kara Şövalye filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/626b53b2/master.m3u8"
    },
    {
        "id": "mov_prestij_146",
        "type": "movie",
        "title": "Prestij",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13412/poster/watch/prestij.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13412/poster/watch/prestij.webp",
        "description": "Prestij filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/71efdcb8/master.m3u8"
    },
    {
        "id": "mov_tenet_710",
        "type": "movie",
        "title": "Tenet",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13053/poster/watch/tenet-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13053/poster/watch/tenet-hd.webp",
        "description": "Tenet filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/2bdfdf84/master.m3u8"
    },
    {
        "id": "mov_orumcek_adam_orumcek_evreninde_149",
        "type": "movie",
        "title": "Örümcek Adam: Örümcek Evreninde",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13312/poster/watch/orumcek-adam-orumcek-evreninde.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13312/poster/watch/orumcek-adam-orumcek-evreninde.webp",
        "description": "Örümcek Adam: Örümcek Evreninde filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/927493d0/master.m3u8"
    },
    {
        "id": "mov_orumcek_adam_eve_donus_454",
        "type": "movie",
        "title": "Örümcek Adam: Eve Dönüş",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/11682/poster/watch/orumcek-adam-eve-donus.webp",
        "backdrop": "https://www.hdfilmizle.to/v/11682/poster/watch/orumcek-adam-eve-donus.webp",
        "description": "Örümcek Adam: Eve Dönüş filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/189e48ab/master.m3u8"
    },
    {
        "id": "mov_orumcek_adam_evden_uzakta_432",
        "type": "movie",
        "title": "Örümcek Adam: Evden Uzakta",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/11680/poster/watch/orumcek-adam-evden-uzakta.webp",
        "backdrop": "https://www.hdfilmizle.to/v/11680/poster/watch/orumcek-adam-evden-uzakta.webp",
        "description": "Örümcek Adam: Evden Uzakta filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/7c802b5c/master.m3u8"
    },
    {
        "id": "mov_deadpool_385",
        "type": "movie",
        "title": "Deadpool",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/12919/poster/watch/deadpool-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/12919/poster/watch/deadpool-hd.webp",
        "description": "Deadpool filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/2b622c50/master.m3u8"
    },
    {
        "id": "mov_deadpool_2_459",
        "type": "movie",
        "title": "Deadpool 2",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13322/poster/watch/deadpool-2-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13322/poster/watch/deadpool-2-hd.webp",
        "description": "Deadpool 2 filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/b06bb918/master.m3u8"
    },
    {
        "id": "mov_deadpool_3_487",
        "type": "movie",
        "title": "Deadpool 3",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/59837/poster/watch/deadpool-wolverine-hd-film-izle-2-izle-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/59837/poster/watch/deadpool-wolverine-hd-film-izle-2-izle-hd.webp",
        "description": "Deadpool 3 filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/b6dcdfc1/master.m3u8"
    },
    {
        "id": "mov_soysuzlar_cetesi_778",
        "type": "movie",
        "title": "Soysuzlar Çetesi",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13233/poster/watch/soysuzlar-cetesi.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13233/poster/watch/soysuzlar-cetesi.webp",
        "description": "Soysuzlar Çetesi filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/ff41ed1e/master.m3u8"
    },
    {
        "id": "mov_yesil_yol_588",
        "type": "movie",
        "title": "Yeşil Yol",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13130/poster/watch/yesil-yol.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13130/poster/watch/yesil-yol.webp",
        "description": "Yeşil Yol filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/fa5e44ad/master.m3u8"
    },
    {
        "id": "mov_zafere_hucum_266",
        "type": "movie",
        "title": "Zafere Hücum",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/14155/poster/watch/zafere-hucum.webp",
        "backdrop": "https://www.hdfilmizle.to/v/14155/poster/watch/zafere-hucum.webp",
        "description": "Zafere Hücum filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/fb791e52/master.m3u8"
    },
    {
        "id": "mov_yesil_rehber_644",
        "type": "movie",
        "title": "Yeşil Rehber",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13435/poster/watch/yesil-rehber.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13435/poster/watch/yesil-rehber.webp",
        "description": "Yeşil Rehber filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/a14f25a6/master.m3u8"
    },
    {
        "id": "mov_bir_ayrilik_874",
        "type": "movie",
        "title": "Bir Ayrılık",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/31863/poster/watch/bir-ayrilik.webp",
        "backdrop": "https://www.hdfilmizle.to/v/31863/poster/watch/bir-ayrilik.webp",
        "description": "Bir Ayrılık filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/807b59b4/master.m3u8"
    },
    {
        "id": "mov_heart_eyes_590",
        "type": "movie",
        "title": "Heart Eyes",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/501544/poster/watch/heart-eyes.webp",
        "backdrop": "https://www.hdfilmizle.to/v/501544/poster/watch/heart-eyes.webp",
        "description": "Heart Eyes filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/0bb4165d/master.m3u8"
    },
    {
        "id": "mov_soul_129",
        "type": "movie",
        "title": "Soul",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13356/poster/watch/soul-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13356/poster/watch/soul-hd.webp",
        "description": "Soul filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/109652e8/master.m3u8"
    },
    {
        "id": "mov_yarali_yuz_923",
        "type": "movie",
        "title": "Scarface",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13564/poster/watch/yarali-yuz.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13564/poster/watch/yarali-yuz.webp",
        "description": "Yaralı Yüz filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/ad5594a1/master.m3u8"
    },
    {
        "id": "mov_piyanist_469",
        "type": "movie",
        "title": "Piyanist",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/39499/poster/watch/muzik-ogretmeni.webp",
        "backdrop": "https://www.hdfilmizle.to/v/39499/poster/watch/muzik-ogretmeni.webp",
        "description": "Piyanist filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/86435060/master.m3u8"
    },
    {
        "id": "mov_ruhlarin_kacisi_873",
        "type": "movie",
        "title": "Ruhların Kaçışı",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/14580/poster/watch/ruhlarin-kacisi-izle-hda.webp",
        "backdrop": "https://www.hdfilmizle.to/v/14580/poster/watch/ruhlarin-kacisi-izle-hda.webp",
        "description": "Ruhların Kaçışı filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/475fd3d1/master.m3u8"
    },
    {
        "id": "mov_animatrix_473",
        "type": "movie",
        "title": "Animatrix",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/18910/poster/watch/animatrix.webp",
        "backdrop": "https://www.hdfilmizle.to/v/18910/poster/watch/animatrix.webp",
        "description": "Animatrix filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/aef5b62d/master.m3u8"
    },
    {
        "id": "mov_gelecege_donus_918",
        "type": "movie",
        "title": "Geleceğe Dönüş",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/12184/poster/watch/gelecege-donus.webp",
        "backdrop": "https://www.hdfilmizle.to/v/12184/poster/watch/gelecege-donus.webp",
        "description": "Geleceğe Dönüş filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/0a181236/master.m3u8"
    },
    {
        "id": "mov_ters_yuz_509",
        "type": "movie",
        "title": "Ters Yüz",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13171/poster/watch/ters-yuz.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13171/poster/watch/ters-yuz.webp",
        "description": "Ters Yüz filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/75967b2a/master.m3u8"
    },
    {
        "id": "mov_ters_yuz_2_801",
        "type": "movie",
        "title": "Ters Yüz 2",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/56783/poster/watch/ters-yuz-2-izle-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/56783/poster/watch/ters-yuz-2-izle-hd.webp",
        "description": "Ters Yüz 2 filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/968e8cf1/master.m3u8"
    },
    {
        "id": "mov_lincoln_123",
        "type": "movie",
        "title": "Lincoln",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/36087/poster/watch/lincoln.webp",
        "backdrop": "https://www.hdfilmizle.to/v/36087/poster/watch/lincoln.webp",
        "description": "Lincoln filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/7136e7cb/master.m3u8"
    },
    {
        "id": "mov_can_dostum_163",
        "type": "movie",
        "title": "Can Dostum",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/24605/poster/watch/can-dostum-3.webp",
        "backdrop": "https://www.hdfilmizle.to/v/24605/poster/watch/can-dostum-3.webp",
        "description": "Can Dostum filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/73de94ec/master.m3u8"
    },
    {
        "id": "mov_babam_ve_oglum_670",
        "type": "movie",
        "title": "Babam ve Oğlum",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/25211/poster/watch/babam-ve-oglum.webp",
        "backdrop": "https://www.hdfilmizle.to/v/25211/poster/watch/babam-ve-oglum.webp",
        "description": "Babam ve Oğlum filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/1e8c8ec0/master.m3u8"
    },
    {
        "id": "mov_hokkabaz_854",
        "type": "movie",
        "title": "Hokkabaz",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/25209/poster/watch/hokkabaz.webp",
        "backdrop": "https://www.hdfilmizle.to/v/25209/poster/watch/hokkabaz.webp",
        "description": "Hokkabaz filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/73ea0635/master.m3u8"
    },
    {
        "id": "mov_demir_adam_843",
        "type": "movie",
        "title": "Demir Adam",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/11851/poster/watch/demir-adam.webp",
        "backdrop": "https://www.hdfilmizle.to/v/11851/poster/watch/demir-adam.webp",
        "description": "Demir Adam filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/ef7709d0/master.m3u8"
    },
    {
        "id": "mov_batman_268",
        "type": "movie",
        "title": "Batman",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/21681/poster/watch/batman.webp",
        "backdrop": "https://www.hdfilmizle.to/v/21681/poster/watch/batman.webp",
        "description": "Batman filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/cc253ee1/master.m3u8"
    },
    {
        "id": "mov_parazit_351",
        "type": "movie",
        "title": "Parazit",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/30551/poster/watch/vucut-hirsizlari.webp",
        "backdrop": "https://www.hdfilmizle.to/v/30551/poster/watch/vucut-hirsizlari.webp",
        "description": "Parazit filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/33a79d62/master.m3u8"
    },
    {
        "id": "mov_the_platform_719",
        "type": "movie",
        "title": "The Platform",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/1411/poster/watch/the-platform-izle-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/1411/poster/watch/the-platform-izle-hd.webp",
        "description": "The Platform filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/cf839b97/master.m3u8"
    },
    {
        "id": "mov_the_platform_2_234",
        "type": "movie",
        "title": "The Platform 2",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/61149/poster/watch/the-platform-2.webp",
        "backdrop": "https://www.hdfilmizle.to/v/61149/poster/watch/the-platform-2.webp",
        "description": "The Platform 2 filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/cf839b97/master.m3u8"
    },
    {
        "id": "mov_aclik_oyunlari_914",
        "type": "movie",
        "title": "Açlık Oyunları",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/11726/poster/watch/aclik-oyunlari.webp",
        "backdrop": "https://www.hdfilmizle.to/v/11726/poster/watch/aclik-oyunlari.webp",
        "description": "Açlık Oyunları filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/df2e21c8/master.m3u8"
    },
    {
        "id": "mov_sherlock_holmes_835",
        "type": "movie",
        "title": "Sherlock Holmes",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/12452/poster/watch/sherlock-holmes-hd.webp",
        "backdrop": "https://www.hdfilmizle.to/v/12452/poster/watch/sherlock-holmes-hd.webp",
        "description": "Sherlock Holmes filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/1c9bff46/master.m3u8"
    },
    {
        "id": "mov_lucy_637",
        "type": "movie",
        "title": "Lucy",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13570/poster/watch/lucy.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13570/poster/watch/lucy.webp",
        "description": "Lucy filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/e89076d6/master.m3u8"
    },
    {
        "id": "mov_sosyal_ag_419",
        "type": "movie",
        "title": "Sosyal Ağ",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13552/poster/watch/sosyal-ag.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13552/poster/watch/sosyal-ag.webp",
        "description": "Sosyal Ağ filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/c2f89ff1/master.m3u8"
    },
    {
        "id": "mov_ayi_teddy_934",
        "type": "movie",
        "title": "Ayı Teddy",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/14059/poster/watch/ayi-teddy.webp",
        "backdrop": "https://www.hdfilmizle.to/v/14059/poster/watch/ayi-teddy.webp",
        "description": "Ayı Teddy filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/480cadf6/master.m3u8"
    },
    {
        "id": "mov_ayi_teddy_2_625",
        "type": "movie",
        "title": "Ayı Teddy 2",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/16668/poster/watch/ayi-teddy-2.webp",
        "backdrop": "https://www.hdfilmizle.to/v/16668/poster/watch/ayi-teddy-2.webp",
        "description": "Ayı Teddy 2 filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/96e2d973/master.m3u8"
    },
    {
        "id": "mov_v__v_for_vendetta_309",
        "type": "movie",
        "title": "V - V for Vendetta",
        "year": 2024,
        "genre": "Film",
        "poster": "https://www.hdfilmizle.to/v/13427/poster/watch/v-for-vendetta.webp",
        "backdrop": "https://www.hdfilmizle.to/v/13427/poster/watch/v-for-vendetta.webp",
        "description": "V - V for Vendetta filmini şimdi izle.",
        "source": "https://vidrame.pro/vr/get/1406a039/master.m3u8"
    }
    
];