# Vixel - Play Game by Mood

**Vixel** adalah platform direktori web yang mengurasi dan merekomendasikan *video game* berdasarkan **suasana hati (mood)** atau pengalaman emosional pemain, bukan sekadar pengelompokan genre konvensional (seperti Action, RPG, atau FPS).

Proyek ini dikembangkan sebagai bagian dari tugas besar mata kuliah **Pembuatan & Perancangan Web (Webpro)**.

---

**Latar Belakang**

Sering kali gamer merasa bingung memilih game dari tumpukan katalog yang melimpah. Pembagian genre standar tidak selalu mencerminkan perasaan atau *vibe* yang ingin dicari pemain saat itu. Vixel hadir untuk menyelesaikan masalah tersebut dengan menyediakan katalog berbasis emosi—seperti game untuk momen bersantai, cerita mengharukan yang menyentuh hati, hingga tantangan tinggi yang memicu adrenalin.

**Fitur Utama (Fase Prototyping)**

* **Katalog Berbasis Mood:** Pengelompokan game dalam kategori unik (seperti *Top Game 2025*, *Cerita Mengharukan*, dll.).
* **Carousel Horizontal Scroll:** Tampilan antarmuka berbasis CSS Flexbox dengan fitur *scroll-snap* interaktif mirip platform modern (Spotify/Netflix).
* **Halaman Detail Game:** Menyajikan sinopsis bebas *spoiler*, metadata game, alasan kesesuaian *mood*, serta galeri visual.
* **Halaman About:** Penjelasan latar belakang proyek dan filosofi perancangan antarmuka Vixel.
* **Aset Teroptimasi:** Menggunakan format gambar generasi baru (`.webp`) untuk pemuatan halaman yang lebih cepat.

**Teknologi yang Digunakan**

### Front-End (Saat Ini):
* **HTML5:** Pembuatan struktur semantik untuk halaman Beranda, Detail, dan About.
* **CSS3:** Penataan tata letak menggunakan Flexbox, CSS Grid, Custom Scrollbar, dan perancangan *Dark Mode* bersih.

---

## 📂 Struktur Folder Proyek

```text
Vixel-Web/
├── assets/                       # Gambar poster, icon, dan screenshot game (.webp, .png, .jpg)
├── css/
│   └── style.css                 # File stylesheet utama
├── beranda.html                  # Halaman utama / Discovery
├── detail_game.html              # Template halaman detail game, contoh game sample: Death Stranding 2: On the Beach
├── about.html                    # Halaman informasi proyek Vixel
└── README.md                     # Dokumentasi repository
