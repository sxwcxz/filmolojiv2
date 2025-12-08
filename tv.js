// tv.js
// Bu dosya, tv.m3u dosyasındaki tüm kanal bilgilerini JavaScript dizisi (Array) formatına dönüştürülmüş halidir.

export const CHANNEL_DATA = [
    {
        name: "ANLIK YAYIN",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebiraz1.m3u8",
        logo: "https://filmoloji.studio/img/ANLIK%20YAYIN.png"
    },
    {
        name: "beIN Sport 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebs1.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebs2.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport 3 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebs3.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport 4 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebs4.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport 5 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebs5.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport Max 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebsm1.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "beIN Sport Max 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivebsm2.m3u8",
        logo: "https://filmoloji.studio/img/BE%C4%B0N.png"
    },
    {
        name: "S Sport 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivess1.m3u8",
        logo: "https://filmoloji.studio/img/SSPORT.jpg"
    },
    {
        name: "S Sport 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivess2.m3u8",
        logo: "https://filmoloji.studio/img/SSPORT.jpg"
    },
    {
        name: "Tivibu Spor 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivets1.m3u8",
        logo: "https://filmoloji.studio/img/T%C4%B0V%C4%B0BU.png"
    },
    {
        name: "Tivibu Spor 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivets2.m3u8",
        logo: "https://filmoloji.studio/img/T%C4%B0V%C4%B0BU.png"
    },
    {
        name: "Tivibu Spor 3 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivets3.m3u8",
        logo: "https://filmoloji.studio/img/T%C4%B0V%C4%B0BU.png"
    },
    {
        name: "Tivibu Spor 4 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivets4.m3u8",
        logo: "https://filmoloji.studio/img/T%C4%B0V%C4%B0BU.png"
    },
    {
        name: "Tabii HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb1.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb2.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 3 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb3.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 4 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb4.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 5 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb5.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 6 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb6.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 7 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb7.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Tabii 8 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamlivetb8.m3u8",
        logo: "https://img.piri.net/piri/upload/3/2025/2/19/0a6c0b0a-ufwbno848mfha0icrzav6.jpeg"
    },
    {
        name: "Exxen 1 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn1.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 2 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn2.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 3 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn3.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 4 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn4.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 5 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn5.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 6 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn6.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 7 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn7.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Exxen 8 HD",
        url: "https://mac.filmolojilive.workers.dev/https://andro.226503.xyz/checklist/androstreamliveexn8.m3u8",
        logo: "https://filmoloji.studio/img/EXXEN.png"
    },
    {
        name: "Selçuk beIN Sports 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsports1/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsports2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports 3",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsports3/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports 4",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsports4/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports 5",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsports5/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports Max 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsportsmax1/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk beIN Sports Max 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukbeinsportsmax2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk S Sport 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukssport/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk S Sport 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcukssport2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Smart Spor 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuksmartspor/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Smart Spor 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuksmartspor2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tivibu Spor 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktivibuspor1/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tivibu Spor 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktivibuspor2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tivibu Spor 3",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktivibuspor3/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tivibu Spor 4",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktivibuspor4/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk S Sport 1 (Yedek)",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/sssplus1/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk S Sport 2 (Yedek)",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/sssplus2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tabii Spor 1",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktabiispor1/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tabii Spor 2",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktabiispor2/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tabii Spor 3",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktabiispor3/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tabii Spor 4",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktabiispor4/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Selçuk Tabii Spor 5",
        url: "https://mac.filmolojilive.workers.dev/https://dga1op10s1u3leo.a2dbcc0d8e2c8c.click/live/selcuktabiispor5/playlist.m3u8",
        logo: "https://filmoloji.studio/img/selcuk.png"
    },
    {
        name: "Trt 1 HD",
        url: "https://mac.filmolojilive.workers.dev/http://89.187.191.41/TRT-1-HD-TR/video.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/80196fc2-f4f6-4e35-ae29-7925a5885a20.png"
    },
    {
        name: "Trt 1 HD Yedek",
        url: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/80196fc2-f4f6-4e35-ae29-7925a5885a20.png"
    },
    {
        name: "Atv HD",
        url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/atv/atv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/33b10329-faa9-4247-aa46-92a305ed5a92.png"
    },
    {
        name: "Kanal D HD",
        url: "https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/d7c5d3d5-2942-4715-872f-73be070dc201.png"
    },
    {
        name: "Show TV HD",
        url: "https://ciner.daioncdn.net/showtv/showtv.m3u8?app=showtv_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/04fb743d-4a72-4907-8c54-f53b72c3600a.png"
    },
    {
        name: "Star HD",
        url: "https://dogus.daioncdn.net/startv/startv.m3u8?app=startv_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/4a7901e4-dbc5-491d-b014-6da6fa236e99.png"
    },
    {
        name: "Now HD",
        url: "https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv_720p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/25c7c620-dfe4-4c78-9d9b-185d8a91885f.png"
    },
    {
        name: "a2 HD",
        url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/a2tv/a2tv_1080p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/fee44d61-2476-40ae-89eb-f51a7428789d.png"
    },
    {
        name: "Teve 2 HD",
        url: "https://live.duhnet.tv/S2/HLS_LIVE/teve2np/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/8373a6d8-d5c5-4990-8fe6-14bcde706ecd.png"
    },
    {
        name: "360 HD",
        url: "https://turkmedya-live.ercdn.net/tv360/tv360.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/36157058-80ce-4724-a7ff-28bbad7df301.png"
    },
    {
        name: "Tlc HD",
        url: "https://dogus.daioncdn.net/tlc/tlc.m3u8?app=tlc_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/0de9fa25-120c-4b52-b460-e078531f6988.png"
    },
    {
        name: "Dmax HD",
        url: "https://dogus.daioncdn.net/dmax/dmax.m3u8?app=dmax_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/6a63a310-1f7d-4d5c-b377-1e497f5b3610.png"
    },
    {
        name: "Tv 100 HD",
        url: "https://tv100-live.daioncdn.net/tv100/tv100_1080p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/e2291af0-569b-4260-94f3-5505d1a40e76.png"
    },
    {
        name: "Kon HD",
        url: "https://helga.iptv2022.com/sh/kon_tv/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/6a265ee4-81f8-4a57-80ba-41ddb0663aaf.png"
    },
    {
        name: "Cnbc-e HD",
        url: "https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/16752eb5-4001-4b31-860c-ab947ed2c86d.png"
    },
    {
        name: "Gzt Tv HD",
        url: "https://mn-nl.mncdn.com/gzttv/gzttv/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/86c1a901-3b47-41e6-bf9b-b433ec170fdd.png"
    },
    {
        name: "Kanal B HD",
        url: "https://baskentaudiovideo.xyz/LiveApp/streams/mUE22idl26lA1683879097431.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/fc190867-720b-4e57-b561-993d0a02bcae.png"
    },
    {
        name: "Tyt Türk HD",
        url: "https://cdn-tytturk.yayin.com.tr/tytturk/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/b6c2e739-0336-4e34-9f27-38e181522363.png"
    },
    {
        name: "Tmb HD",
        url: "https://str.yodacdn.net/tmb_tr_app/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/3d8f616d-a421-4fcd-a13a-1a29e3bbd88c.png"
    },
    {
        name: "Tv 4 HD",
        url: "https://turkmedya-live.ercdn.net/tv4/tv4.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/66c8ed0b-96b6-4476-806e-5e8e877c7fd4.png"
    },
    {
        name: "Bengü Türk HD",
        url: "https://tv.ensonhaber.com/benguturk/benguturk_720p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/6edd1622-84fd-4ebf-a50b-7e95787ee427.png"
    },
    {
        name: "Trt 2 HD",
        url: "https://tv-trt2.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/14a65b49-958f-497f-be22-52d958ef8498.png"
    },
    {
        name: "Trt Haber HD",
        url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/8c07dd0b-0100-4a56-9a8c-9f810a184bd4.png"
    },
    {
        name: "A Haber HD",
        url: "https://trn03.tulix.tv/gt-ahabertv/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/1c207549-826b-4c8e-8dd3-bbd488258430.png"
    },
    {
        name: "Ntv HD",
        url: "https://dogus.daioncdn.net/ntv/ntv.m3u8?app=ntv_web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/344f452e-fa44-4f00-8005-1b8898186888.png"
    },
    {
        name: "Cnn Türk HD",
        url: "https://helga.iptv2022.com/cnn_turk/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/3686a1f5-9c4d-401f-9c7b-031ca66454a0.png"
    },
    {
        name: "24 Tv HD",
        url: "https://turkmedya-live.ercdn.net/tv24/tv24_1080p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/216cade3-b4a7-4c8b-8d62-aab7a3431a89.png"
    },
    {
        name: "Tgrt Haber HD",
        url: "https://tgrthaber-live.daioncdn.net/tgrthaber/tgrthaber.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/a5773592-d40c-4d84-a64a-21c422cc7eb3.png"
    },
    {
        name: "Haber Türk HD",
        url: "https://rmtftbjlne.turknet.ercdn.net/bpeytmnqyp/haberturktv/haberturktv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/516aa59e-70a2-4be3-9077-02862a052fde.png"
    },
    {
        name: "Bloomberg Ht HD",
        url: "https://ciner.daioncdn.net/bloomberght/bloomberght.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/5795a2e7-9d78-4cc5-b83e-b6dcf36256fd.png"
    },
    {
        name: "Ülke Tv HD",
        url: "https://livetv.radyotvonline.net/kanal7live/ulketv/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/5a733c68-7739-4466-851d-573cfd125990.png"
    },
    {
        name: "Tvnet HD",
        url: "https://mn-nl.mncdn.com/tvnet/tvnet/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/b6abbbf7-0822-448d-a942-7af6d079d997.png"
    },
    {
        name: "Akit Tv HD",
        url: "https://akittv-live.ercdn.net/akittv/akittv_720p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/76a7dd67-cee1-4c70-914e-551d77e09661.png"
    },
    {
        name: "Brt 1 HD",
        url: "https://edge.kuzeykibrissmart.tv/brt1hd/bant1/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/1f260af7-37dd-4368-8c9a-2d4c28fa5fd1.png"
    },
    {
        name: "Trt Türk HD",
        url: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/0acb34e5-4b37-434e-b555-c7eb0271ba9d.png"
    },
    {
        name: "Trt Avaz HD",
        url: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/4a3026d6-b1be-4373-bb83-447117196e55.png"
    },
    {
        name: "Trt 3 - Tbmm HD",
        url: "https://meclistv-live.ercdn.net/meclistv/meclistv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/aac80fcc-d1e7-41da-85b6-3037cc3f1a4b.png"
    },
    {
        name: "Trt Kurdi HD",
        url: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/1d937ced-d803-47eb-aa0c-90586e4e162e.png"
    },
    {
        name: "Haber Global HD",
        url: "https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/ecb65a51-f5ad-440f-9c21-a4db8cbc9398.png"
    },
    {
        name: "HT Spor",
        url: "https://ciner.daioncdn.net/ht-spor/ht-spor.m3u8?app=web",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/213d42ff-51ba-4591-ae43-a35779496d93.png"
    },
    {
        name: "Ekol TV HD",
        url: "https://ekoltv-live.ercdn.net/ekoltv/ekoltv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/229e051d-6090-4235-a2ef-9420a17e6f9d.png"
    },
    {
        name: "Ekol Sport TV HD",
        url: "https://ekoltv-live.ercdn.net/ekolsport/ekolsport.m3u8",
        logo: "https://i.hizliresim.com/99egc5v.png"
    },
    {
        name: "Halk Tv HD",
        url: "https://halktv-live.daioncdn.net/halktv/halktv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/c9acd31e-5cc0-4b5d-bdef-7c9f8b577c42.png"
    },
    {
        name: "Szc Tv HD",
        url: "https://helga.iptv2022.com/szc_tv/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/2fdd6eb0-bd9e-44ef-ad0e-7f2c4cf3a8a7.png"
    },
    {
        name: "Tv 5 HD",
        url: "https://ip252.ozelip.com:1936/protv5/protv5/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/043eff4d-bde2-493c-9c7d-c07a698bb0be.png"
    },
    {
        name: "Lider Haber HD",
        url: "https://lidertv.radyotelekom.com.tr/player/m3u8/9217b6e91d17c38f7d171eb2b3670349/chunklist_w1214941309.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/ccf5746a-1eda-45ed-9afc-5e281fa7a704.png"
    },
    {
        name: "Tele 1 HD",
        url: "https://tele1-live.ercdn.net/tele1/tele1.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/50921da2-0f81-40cf-971b-1b3db26245d7.png"
    },
    {
        name: "As Tv HD",
        url: "https://live.artidijitalmedya.com/artidijital_astv/astv/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/bb23721e-664b-48c6-a9f4-5e55f890f026.png"
    },
    {
        name: "Tivi 6 HD",
        url: "https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/chunks.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/999a12b9-6679-4621-8096-c88a76b33e92.png"
    },
    {
        name: "TRT World HD",
        url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/acd68840-492b-43c5-9635-bbaf32148e2a.png"
    },
    {
        name: "TRT Arabia HD",
        url: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/1857f0c2-3a80-4b95-bb35-ffcefdcf4729.png"
    },
    {
        name: "Dw Tv (English) HD",
        url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/b2d761b5-1822-4531-8f00-51bb232f8afa.png"
    },
    {
        name: "Trt Belgesel HD",
        url: "http://tv-trtbelgesel.medya.trt.com.tr/master_720.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/6925f7f0-2d64-4a15-99ec-e4a19c117279.png"
    },
    {
        name: "Krt Tv HD",
        url: "https://uzayakaczekiye81.mywire.org/index.php?ID=UCVKWwHoLwUMMa80cu_1uapA",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/be5ace80-d03f-40f1-8c6b-a6e66ca96927.png"
    },
    {
        name: "Cartoon Network HD",
        url: "https://uzayakaczekiye81.mywire.org/index.php?ID=UCehmwSZGPod7JFbHJspmxzQ",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/4c47b639-2916-4563-9e40-0f2a7925b2ea.png"
    },
    {
        name: "Ulusal Kanal HD",
        url: "https://uzayakaczekiye81.mywire.org/index.php?ID=UC6T0L26KS1NHMPbTwI1L4Eg",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/5f895c30-fa0a-4f74-b4b6-ee562fb27e26.png"
    },
    {
        name: "Trt Spor HD",
        url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/46319886-6c97-4640-8d63-8e4b11511c74.png"
    },
    {
        name: "A Spor HD",
        url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/aspor/aspor.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/9d28401f-2d4e-4862-85e2-69773f6f45f4.png"
    },
    {
        name: "Trt Spor Yıldız HD",
        url: "https://tv-trtspor2.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/02ef58a4-349a-49a6-8df2-82fb71c6554d.png"
    },
    {
        name: "Sports Tv HD",
        url: "https://live.sportstv.com.tr/hls/low/sportstv_hd/index.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/ce3a853a-b638-44b8-b4f4-9728aec137d3.png"
    },
    {
        name: "Fb Tv HD",
        url: "https://1hskrdto.rocketcdn.com/fenerbahcetv.smil/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/06bc7085-065e-473e-b4aa-ec56ed3455f5.png"
    },
    {
        name: "Trt Çocuk HD",
        url: "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/3261c5eb-0e08-4c96-b8fc-58211e3da29c.png"
    },
    {
        name: "Minika Çocuk HD",
        url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/minikago_cocuk/minikago_cocuk_720p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/12a9b581-f79c-41ba-b1e4-2f13f0087776.png"
    },
    {
        name: "Minika Go HD",
        url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/minikago/minikago_720p.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/7dfb3c14-3837-4c82-9c30-88edefebe4bd.png"
    },
    {
        name: "Trt Diyanet Çocuk HD",
        url: "https://tv-trtdiyanetcocuk.medya.trt.com.tr/master_720.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/7e733bf8-6c0e-4d6e-b18a-5864e571894b.png"
    },
    {
        name: "Diyanet Tv HD",
        url: "https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/500/500/channels/logos/c9fac001-ce36-4712-9eaa-786ec2465171.png"
    },
    {
        name: "Lalegül Tv HD",
        url: "https://lbl.netmedya.net/hls/lalegultv.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/8322c403-9f7c-4b5a-aef1-7c65e56ee8a6.png"
    },
    {
        name: "Trt Müzik HD",
        url: "http://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/81ac5eb4-6201-47ce-977e-736a4247da91.png"
    },
    {
        name: "Dream Türk HD",
        url: "https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8",
        logo: "https://feo.kablowebtv.com/resize/168A635D265A4328C2883FB4CD8FF/0/0/Vod/HLS/63d6800d-1ecb-40b6-bc2b-01a225f0d3ec.png"
    },
    {
        name: "Sinema TV 1 HD",
        url: "https://cdn18.yayin.com.tr/nowplay/tracks-v1a1/mono.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 2 HD",
        url: "https://mediaserver1.castpin.com/hls/filbox/1_2/index.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 3 HD",
        url: "https://a8.radyotelekom.com.tr:3899/stream/play.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 4 HD",
        url: "https://raw.githubusercontent.com/Elvin4K/restream/refs/heads/pro4k/1siriustv.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 5 HD",
        url: "https://edge-e3.evrideo.tv/f2dcbecf-5af0-47db-a82e-032112050a23_1000027346_HLS/manifest.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 6 HD",
        url: "https://cdn-cine5.yayin.com.tr/cine5/cine5/chunklist.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 7 HD",
        url: "https://ip100.radyotelekomtv.com:3303/stream/play.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 8 HD",
        url: "https://host.onlineradyotv.net:8081/sdmtv/tracks-v1a1/mono.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 9 HD",
        url: "https://cdn-onstv.yayin.com.tr/onstv/index.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 10 HD",
        url: "https://live.artidijitalmedya.com/artidijital_bikanal/bikanal/chunks.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 11 HD",
        url: "https://live.artidijitalmedya.com/artidijital_cine1/cine1/chunks.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 12 HD",
        url: "https://ip100.radyotelekomtv.com:3784/stream/play.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    },
    {
        name: "Sinema TV 13 HD",
        url: "https://trn03.tulix.tv/gt-tivi6/tracks-v1a1/rewind-588800.m3u8",
        logo: "https://i.hizliresim.com/2qpuwst.jpg"
    }
];