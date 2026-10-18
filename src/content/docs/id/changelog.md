---
title: Changelog
description: Catatan rilis SeeLoggyPlus — ringkasan semua fitur, perbaikan, dan peningkatan yang hadir di setiap versi baru aplikasi.
---

Sorotan utama setiap rilis dari sisi pengguna. Catatan lengkap dan unduhan tersedia di halaman
[GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases).

## 0.8.0

SeeLoggyPlus 0.8.0 memperbarui antarmuka dengan tema Light dan Dark yang ringkas,
memperbaiki navigasi file dan pemilihan teks, serta memindahkan Help ke website dokumentasi.

### Fitur dan peningkatan
- Breadcrumb folder responsif dengan menu subfolder dan navigasi folder induk tersembunyi.
- Pemilihan dan penyalinan teks log per karakter, dengan sorotan pilihan yang konsisten.
- Grup server yang sama pada Server Management dan File Manager.
- Tema Light/Dark, kontrol ringkas, popup, ikon, field input dan splash mengikuti tema.
- Preferences dibagi menjadi General, Log Viewer dan SSH; recent files dimuat di latar belakang.
- Paket portable memakai konfigurasi launcher default, bukan pengaturan Java atau memori dari workspace pengembang.
- Help online dengan panduan bahasa Inggris dan Indonesia di https://seeloggyplus-doc.vercel.app/.

### Perbaikan
- Baris log panjang tetap terbaca dan dapat dicari melewati batas pembacaan sebelumnya.
- View Refresh memuat ulang file; hasil pencarian menunjukkan saat jumlah kecocokan dibatasi pemindaian.
- Pemulihan lokasi remote dan navigasi keyboard tabel file diperbaiki.
- Menu subfolder, field direktori unduhan dan posisi panah breadcrumb mengikuti tema.
- Launcher Linux membaca data dan konfigurasi relatif terhadap direktori instalasi.
- Launcher Windows menerima pengaturan Java kosong dan path Java dengan spasi. Script launcher lama yang dikenali diperbaiki setelah upgrade tanpa menimpa konfigurasi pengguna.
- Launcher dan runtime bawaan Linux tetap memiliki izin eksekusi setelah instalasi dan update.

### Pengujian
- Regression suite aplikasi headless dan build rilis.
- Kompatibilitas migrasi database, kredensial tersimpan dan preferensi tema.
- Paket portable nyata diuji dengan updater 0.7.0, termasuk checksum, aktivasi, health dan rollback.
- Pemeriksaan konten, build produksi dan tes browser dokumentasi dua bahasa.

### Catatan upgrade
- Skema database tetap versi 4; upgrade dari 0.7.0 tidak memerlukan perubahan skema.
- Server, grup, favorit, riwayat dan konfigurasi parsing tetap dipertahankan.
- Preferensi Graphite menjadi Light; pilihan Light dan Dark yang ada tetap dipertahankan.
- Cadangkan seluruh direktori data setelah aplikasi ditutup, termasuk seeloggyplus.db, .keystore dan known_hosts.
- Untuk upgrade manual, ekstrak paket ke folder baru yang dapat ditulis, lalu salin seluruh direktori data dan launcher.properties. Jangan menimpa paket baru dengan current atau versions dari instalasi lama.
- Paket tidak lagi menyertakan Help HTML offline. F1 membuka website dan memerlukan internet; membaca log lokal tetap dapat dilakukan offline.
- Tersedia paket Windows/Linux dengan runtime bawaan atau tanpa runtime (memerlukan Java 21 atau lebih baru).
- Jika verifikasi unduhan update gagal, instalasi aktif tetap utuh.


## 0.7.0

**Fitur**

- Splash startup beranimasi dengan logo, versi, dan progres startup.
- Tab log adaptif yang menyusut secara proporsional saat makin banyak tab dibuka dan melebar kembali saat ditutup.
- Pengurutan ulang server di panel Locations: seret server di antara baris untuk mengurutkan ulang, lepaskan ke sebuah grup untuk memindahkannya, atau ke **Local Drive** / ruang kosong untuk mengeluarkannya dari grup.
- Umpan balik drop yang jelas: garis di antara baris berarti "letakkan di sini", sorotan area berarti "gabung grup ini".
- **New group...** dari mana saja di panel Locations — judul, ruang kosong, atau favorit.
- Email kontak di dialog About sebagai tautan email yang dapat diklik.

**Perbaikan**

- **Clear Log View**: tombol Clear di toolbar kini benar-benar mengosongkan tab aktif tanpa menutupnya, sehingga Reload (<kbd>Ctrl+R</kbd>) atau Tail memulihkan file yang sama.
- File remote bernama `seeloggyplus-...` tidak lagi ditolak sebagai salinan lokal.
- Dialog error ditulis ulang dengan bahasa yang mudah dipahami — login ditolak, timeout, koneksi ditolak, host tidak dikenal, kunci tidak terbaca, dan identitas server yang berubah masing-masing mendapat penjelasannya sendiri, dengan pesan mentah di bawah **Details**.
- File Manager langsung kembali ke lokasi lokal saat koneksi gagal.
- Ikon toggle toolbar tetap memiliki kontras yang terbaca saat ditekan di tema Light.

**Peningkatan**

- Tail menggunakan ikon terminal; Detail Clear dan Close menggunakan ikon yang berbeda.
- Kepadatan tombol yang lebih ringkas di panel Detail, File Manager, dan panel Recent Log Files.
- Header grup Recent Log Files hanya menampilkan nama server.
- Membuka kembali sebuah file memperbarui waktu terakhir dibukanya dan memindahkannya ke atas grupnya, sementara berpindah tab seperti biasa tidak menulis ulang riwayat.

## 0.6.5

- **Tidak ada lagi terminal di latar belakang**: memulai instalasi lama atau memilih "Restart to update" tidak lagi meninggalkan jendela `cmd` yang terbuka; aplikasi me-restart dirinya sendiri dengan `javaw` dan memperbaiki launcher lama yang menggunakan `java.exe`.
- **Pemeriksaan pembaruan tepat setelah rilis**: manifes pembaruan diambil dari endpoint latest-release GitHub dengan `Cache-Control: no-cache`, sehingga rilis yang baru saja diterbitkan langsung terdeteksi.

## 0.6.4

- **Kesehatan startup self-update**: versi yang baru diaktifkan mengonfirmasi bahwa dirinya sehat sebelum rollback dievaluasi, sehingga peluncuran berikutnya dari launcher root yang ada tetap menggunakan versi yang diperbarui.
- **Kesinambungan launcher lama**: launcher root yang tidak berubah dan sadar versi terus mengarahkan `current` ke JAR terbaru yang disiapkan setelah pembaruan.

## 0.6.3

- **Self-update dari 0.5.x berfungsi lagi**: paket portabel tidak lagi menyertakan `SeeLoggyPlus.vbs`; aplikasi membuat ulang launcher Windows senyap saat startup jika file tersebut hilang, sehingga pembaruan dari 0.5.x disiapkan dan diaktifkan secara normal.

## 0.6.1 / 0.6.2

- Build pertama yang diterbitkan dari seri 0.6 dengan set fitur 0.6.0 yang persis (alur kerja rilis 0.6.0 gagal sebelum penerbitan), serta perbaikan keandalan CI.

## 0.6.0

**Fitur**

- **Autentikasi kunci privat** — kata sandi atau file kunci privat per server, dengan passphrase terenkripsi opsional. Kunci modern (ed25519, ecdsa, rsa-sha2) didukung.
- **Verifikasi host key** — saat host pertama kali dihubungi, aplikasi menampilkan fingerprint kunci dan meminta konfirmasi kepercayaan (`known_hosts`); host key yang berubah selalu ditolak dengan peringatan MITM yang jelas.
- **Grup server di File Management** — pohon bergaya WinSCP/MobaXterm dengan New, Rename, Delete, Move to group, dan drag & drop. Grup tetap tersimpan meski kosong.
- **Pohon Recent Files** — entri terbaru dikelompokkan per server di bawah node yang dapat diperluas.
- **Error koneksi yang jelas** — kegagalan melaporkan alasan sebenarnya (file kunci tidak ada, kegagalan autentikasi) alih-alih pesan generik.
- **Launcher Windows senyap** — `SeeLoggyPlus.vbs` menjalankan aplikasi tanpa jendela terminal; `launcher.bat --console` tetap tersedia untuk diagnostik.
- **Preferensi klik ganda** — pilih Open/Download (default) atau Tail untuk file di File Management.

**Peningkatan**

- Tombol dan dropdown secara konsisten mengikuti tema aktif dengan status yang terbaca.
- Panel kiri File Management ringkas dengan pane Folder favorit yang dapat dilipat.
- Memuat ulang tail remote yang aktif menyambung kembali di latar belakang.
- Editor server selalu menampilkan Test Connection / Cancel / Save.

## 0.5.1

- **Lokasi unduhan self-update**: pembaruan disiapkan di bawah folder data aplikasi (`<data>/updates`) alih-alih direktori temp sistem.
- **Tanpa pencarian folder rekursif**: installer menemukan `seeloggyplus.jar` dari tata letak paket yang sudah dikenal.
- **Root instalasi yang benar** saat dijalankan dari `versions/<version>`.

## 0.5.0

- **Tema serba terang** — tema ketiga dengan menu bar, toolbar, dan bilah status yang terang, dapat dipilih dari **Preferences → Theme**: Graphite (default) / Light / Dark.
- Status interaktif (hover / selected / pressed / focus) mengikuti tema aktif melalui token aksen yang digunakan bersama.
- **Versi rilis diperbaiki** — build terpaket tidak lagi melaporkan `vDEV`.
- **File terbaru** mengingat apakah file terakhir dibuka secara normal atau dalam live tail, dan membukanya kembali dengan cara yang sama.
- **File remote** yang sudah di-streaming digunakan kembali alih-alih diunduh ulang.

## 0.4.3

- **Navigasi keyboard log viewer** — tombol Up/Down (dan PageUp/PageDown/Home/End) menggerakkan log viewer meski fokus tidak berada di canvas, sementara input teks, daftar, dan editor detail tetap memakai perilakunya sendiri.

## 0.4.2

- Tombol langkah scrollbar vertikal kembali terlihat dan menggeser tepat satu baris.
- Scroll horizontal / Shift+wheel di atas header tab dibatasi agar satu gerakan memindahkan satu tab.

## 0.4.1

- **Find in Files**: scrollbar lebih lebar; baris pratinjau yang dipilih menggunakan warna seleksi bersama dengan teks yang tetap terbaca di kedua tema.
- **Log viewer**: tombol langkah scrollbar dipulihkan.
- **Tampilan utama**: scroll horizontal di atas header tab memindahkan tab yang dipilih; ikon toggle toolbar mempertahankan warna tema di setiap status.

## 0.4.0

- **Sistem desain berbasis token** yang dipasang di level scene, sehingga jendela utama, setiap dialog, dan semua popup tetap konsisten.
- **Mode gelap penuh** dengan toggle langsung di Preferences.
- Bahasa visual graphite yang padat data dan bernuansa enterprise.
- Desain ulang keterbacaan kanvas log: teks isi netral, aksen severity yang halus, tint baris.
- Warna seleksi teks yang disatukan di seluruh canvas, panel pencarian, panel detail, dan kontrol teks.
- Kontras berorientasi WCAG untuk label, teks input, ikon, dan indikator status.
