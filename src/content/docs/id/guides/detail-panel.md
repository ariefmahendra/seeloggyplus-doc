---
title: Panel Detail
description: Baca seluruh baris log dengan mode Raw dan Formatted, deteksi JSON/XML otomatis, Copy dan Clear.
---

Pilih baris untuk menampilkan isi lengkapnya di Detail. Buka/tutup dengan <kbd>Ctrl+J</kbd> atau ikon panel pada bar bawah. Pilih Auto, Right atau Bottom melalui **View → Results Position**. Jika Results dan Detail berbagi dock bawah, pilih tab Detail.

![Panel Detail menampilkan payload JSON yang dideteksi otomatis dalam mode Formatted](../../../../assets/screenshots/detail-panel-dark.png)

| Kontrol | Aksi |
| --- | --- |
| Raw | Menampilkan baris log asli secara utuh. |
| Formatted | Mendeteksi dan memformat JSON/XML yang didukung secara langsung, dengan mempertahankan teks log di sekeliling payload. Payload besar diproses di latar belakang. |
| Copy | Menyalin mode yang sedang ditampilkan: teks asli pada Raw atau hasil format pada Formatted. |
| Clear | Mengosongkan Detail tanpa menutup panel. |
| Close | Menyembunyikan Detail. Buka kembali dengan <kbd>Ctrl+J</kbd> atau ikon bar bawah. Results tetap terbuka secara terpisah. |

:::tip
Atur apakah Detail dibuka dalam mode Formatted melalui **Preferences → Log Viewer**. Preferensi JSON/XML lama tetap menjadi fallback. Mode pilihan digunakan untuk baris berikutnya; konten yang tidak didukung atau rusak ditampilkan Raw dan tidak dapat mengaktifkan Formatted. Panel memakai pengaturan font dari **Preferences → General**.
:::
