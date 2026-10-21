---
title: Pemecahan Masalah
description: Solusi untuk karakter kacau (mojibake), hasil pencarian yang hilang, masalah tail, tekanan memori, fingerprint SSH, dan lainnya.
---

## Karakter tampak kacau (mojibake)

File log didekode sebagai UTF-8. File yang ditulis dengan encoding lain (misalnya
Windows-1252 atau Shift-JIS) menampilkan karakter yang rusak. Konversi file ke UTF-8, atau
buka salinan hasil konversi.

## Satu baris yang sangat panjang terpotong

Baris dibaca hingga 256 KB demi keamanan; kelebihannya dipotong agar satu entri raksasa
tidak membuat penampil macet. Pisahkan file, atau gunakan **Find in Files** / pratinjau
File Manager untuk memeriksa konten mentahnya.

## Istilah yang terlihat tidak ditemukan

- Periksa toggle **Regex** dan **Case Sensitive** — keduanya diingat per sesi.
- Operator boolean harus ditulis dengan huruf kapital (`AND`, `OR`, `NOT`); `and` huruf kecil dicari sebagai teks.
- Dalam regex, escape karakter seperti `.`, `[`, atau `(`; jika tidak, pola gagal dikompilasi dan tidak ada yang cocok.
- Istilah tersebut mungkin berada di luar batas baris 256 KB yang dijelaskan di atas.

## Penghitung kecocokan menampilkan "50000+ matches"

Penghitungan berhenti setelah 50 000 baris yang cocok agar UI tetap responsif. Panel hasil
mencantumkan semua yang ditemukan sejauh ini — persempit pencarian untuk mendapatkan angka
yang pasti.

## Pencarian di file yang sangat besar terasa lambat

Pencarian berjalan dalam potongan paralel dengan overlay progres; Anda dapat
membatalkannya kapan saja. Pencarian teks biasa dan boolean jauh lebih cepat daripada regex
kompleks, dan istilah yang lebih sempit sama cepatnya tetapi menghasilkan lebih sedikit
untuk ditampilkan.

## Mode Tail tidak menampilkan baris baru

- Untuk file lokal, pastikan file masih sedang ditulis dan belum dirotasi atau dipindahkan. Tekan <kbd>Ctrl+R</kbd> untuk memuat ulang, lalu aktifkan Tail lagi.
- Untuk file remote, periksa bahwa koneksi SSH masih hidup; menyambung ulang memulihkan stream.
- Pastikan **Smart Follow** aktif (atau Anda sudah bergulir ke bagian bawah) agar tampilan terus mengikuti.

## Tailing berhenti dan tampilan kosong

Itu adalah aksi **Clear**: tailing dihentikan dan file dilepas, tetapi tab tetap ada.
Buka kembali dengan **Reload** (<kbd>Ctrl+R</kbd>) atau dengan menekan **Tail**.

## File remote tidak dapat dibuka atau diunduh

- Periksa ruang kosong di direktori unduhan dan buka direktori tersebut dengan **Preferences → SSH → Open Folder**.
- Gunakan **Clean Downloads** jika folder menyimpan banyak salinan lama.
- Naikkan **Connection Timeout** untuk koneksi lambat, dan pastikan server masih dapat dijangkau dengan **Test Connection**.

## SSH meminta fingerprint, atau menolak koneksi

Host key yang tidak dikenal ditampilkan sekali untuk dikonfirmasi; kunci yang **berubah**
selalu ditolak. Verifikasi fingerprint dengan administrator server. Jika host memang sengaja
dibangun ulang, hapus entri-nya dari `known_hosts` di direktori data dan percayai kunci baru.

## Kehabisan memori dengan file raksasa

- Naikkan **Max Memory** di **Preferences → General** dan restart aplikasi.
- Gunakan mode Tail atau filter tampilan alih-alih menggulir jutaan baris.
- Tutup tab yang tidak lagi diperlukan — setiap file yang terbuka menyimpan indeksnya — dan gunakan **Diagnostics → Run Garbage Collection** untuk melepaskan memori.

## Preferensi tampaknya tidak diterapkan

- Pengaturan diterapkan setelah **Save**; **Cancel** membuang perubahan.
- **Max Memory** baru berlaku setelah aplikasi di-restart.
- Perubahan tema dan font langsung diterapkan, termasuk ke dialog yang sudah terbuka.

## Panel menghilang

Panel dibuka/tutup dengan <kbd>Ctrl+B</kbd> (Recent Log Files), <kbd>Ctrl+J</kbd> (Detail)
atau dua toggle di toolbar; menu View memiliki entri yang sama. Garis pemisah dapat digeser
dan mengingat posisinya per sesi.

## Klik ganda pada file di File Manager tidak membukanya

Aksi klik ganda dapat diatur ke **Open/Download** atau **Tail** di
**Preferences → General**. Folder selalu terbuka. Tombol footer (**Preview**, **Tail**,
**Open**) dan <kbd>Enter</kbd> menggunakan aksi yang dikonfigurasi.

## Pemeriksaan atau unduhan pembaruan gagal

Dialog melaporkan penyebabnya (tidak ada jaringan, proxy, host yang diblokir, checksum
tidak cocok). Unduhan diverifikasi sebelum disiapkan dan kegagalan tidak mengubah
instalasi saat ini; coba lagi melalui **Help → Check for Updates...**.

## Melaporkan masalah

Buka issue di [GitHub issue tracker](https://github.com/ariefmahendra/seeloggyplus/issues)
dan sertakan versi aplikasi (**Help → About**), sistem operasi Anda, apa yang Anda lakukan,
serta file dari folder `logs/`. Untuk masalah SSH, sebutkan metode autentikasi dan teks
error di bawah **Details** — jangan pernah kata sandi Anda.
