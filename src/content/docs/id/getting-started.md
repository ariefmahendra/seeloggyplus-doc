---
title: Memulai
description: "Panduan pengenalan SeeLoggyPlus: apa yang diperlukan untuk menjalankannya, dan tur singkat hingga file log pertama terbuka."
---

SeeLoggyPlus adalah log viewer yang cepat dan ringan untuk developer dan tim operasi.
Aplikasi ini membaca file log lokal dan log remote melalui SSH, memfilter dan mencarinya,
melakukan tailing secara real time, serta memformat payload JSON atau XML yang tertanam.

## Yang dibutuhkan

| Persiapan | Kebutuhan |
| --- | --- |
| Paket portabel dengan JRE | Berjalan langsung di Windows dan Linux; tidak perlu memasang Java. |
| Paket portabel tanpa JRE | Memerlukan Java 21 atau yang lebih baru di komputer. |
| Log remote | Akun SSH di server. Autentikasi kata sandi dan kunci privat didukung. |

## Mulai cepat

1. Buka file dengan **File → Open...** (<kbd>Ctrl+O</kbd>), atau pilih salah satu dari panel **Recent Log Files**.
2. Ketik kata kunci di kolom pencarian untuk menyorot dan memfilter baris yang cocok.
3. Klik satu baris untuk membaca isinya secara lengkap di panel **Detail**; seret untuk memilih sebagian baris lalu tekan <kbd>Ctrl+C</kbd> untuk menyalinnya.
4. Tekan tombol **Tail** untuk mengikuti log secara real time.
5. Tambahkan server SSH di **Settings → Server Management...** (<kbd>Ctrl+M</kbd>) untuk menjelajah dan tail log remote.

![Jendela utama setelah membuka dua file log lokal](../../../assets/screenshots/main-window.png)

<p class="screenshot-caption">Jendela utama setelah membuka dua file log lokal.</p>

## Langkah berikutnya

- [Instalasi](/id/installation/) — paket, launcher, dan persyaratan Java
- [Antarmuka Utama](/id/interface/) — tata letak, tab, dan status bar
- [File Manager Terpadu](/id/guides/file-manager/) — satu penjelajah untuk file lokal dan remote
