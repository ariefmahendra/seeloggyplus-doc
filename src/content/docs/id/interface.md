---
title: Antarmuka Utama
description: Panduan mengenal ruang kerja SeeLoggyPlus — tata letak panel, tab, log viewer, dan status bar beserta fungsinya masing-masing.
---

Ruang kerja terbagi menjadi beberapa area. Setiap panel dapat disembunyikan dan muncul
kembali dengan pintasannya.

![Ringkasan tata letak: file terbaru, log viewer, hasil pencarian, dan panel Detail](../../../assets/screenshots/interface-overview-dark.png)

<p class="screenshot-caption">Ringkasan tata letak: file terbaru, log viewer, hasil pencarian, dan panel Detail.</p>

| Area | Fungsi |
| --- | --- |
| Menu bar | Perintah File, View, Settings, dan Help. Akselerator menu berfungsi selama jendela dalam fokus. |
| Toolbar | Tombol buka/tutup panel, kolom pencarian dengan **Regex** / **Case Sensitive**, navigator kecocokan, Reload, Tail, Smart Follow, dan Clear. |
| Recent Log Files | File yang pernah dibuka, dikelompokkan berdasarkan sumber. Buka/tutup dengan <kbd>Ctrl+B</kbd>. |
| Log viewer | Baris yang dirender di canvas dengan nomor baris, warna tingkat keparahan, bilah aksen kiri, dan warna lembut untuk WARN/ERROR/FATAL, plus sorotan pencarian. |
| Search Result Panel | Muncul di sisi kanan saat pencarian aktif. Menampilkan baris yang cocok; klik salah satunya untuk melompat ke baris tersebut. |
| Panel Detail | Isi lengkap baris yang dipilih dengan prettify JSON/XML dan Copy. Buka/tutup dengan <kbd>Ctrl+J</kbd>. |
| Status bar | Baris saat ini dan totalnya, ukuran seleksi, tombol GC, dan penggunaan heap dengan bar berkode warna. |

## Tab

- Setiap file yang dibuka mendapat tabnya sendiri. Header tab menyusut saat makin banyak tab dibuka dan melebar kembali saat tab ditutup (<kbd>Ctrl+Tab</kbd> / <kbd>Ctrl+Shift+Tab</kbd> untuk berpindah, <kbd>Ctrl+W</kbd> untuk menutup).
- Titik hijau menandai tab yang sedang tailing; baris hasil streaming yang belum dibaca dihitung di judul (maksimum 999).
- Seret header tab untuk menyusun ulang urutan tab. Menggulir di atas header tab akan memindahkan pilihan.
- Klik kanan pada tab untuk **Close**, **Close Tabs to the Right**, **Close Other Tabs**, **Close All Tabs**, **Reload**, **Copy File Path**, dan **Show in File Explorer**.

## Status bar

| Elemen | Arti |
| --- | --- |
| **Line: 143 / 175 (81.1%)** | Baris teratas yang terlihat, total baris pada tampilan saat ini, dan posisi gulir. Klik untuk membuka **Go To Line** (<kbd>Ctrl+G</kbd>). |
| **Selected: 3 lines, 120 chars** | Muncul saat teks dipilih; lihat [Memilih & Menyalin Teks](/id/guides/selection/). |
| **GC** | Menjalankan garbage collection — berguna saat file besar baru saja ditutup atau dibersihkan. |
| **Memory** | Heap terpakai / total dengan bar yang berubah kuning di atas 60% dan merah di atas 85%. |
| **Pemberitahuan pembaruan** | Tautan yang dapat diklik muncul ketika rilis yang lebih baru tersedia. |
