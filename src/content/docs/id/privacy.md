---
title: Kebijakan Privasi
description: Cara SeeLoggyPlus menangani file log lokal, kredensial SSH, diagnostik, pembaruan, dan informasi dukungan.
---

Terakhir diperbarui: 25 Oktober 2026

SeeLoggyPlus adalah aplikasi desktop penampil log yang diterbitkan oleh
**Arief Mahendra**. Kebijakan ini menjelaskan penanganan informasi di perangkat
Anda serta koneksi aplikasi ke layanan yang Anda gunakan.

## File log dan informasi lokal

Anda memilih file dan folder yang dibuka oleh SeeLoggyPlus. Isi log dibaca dan
diproses di perangkat Anda. Aplikasi tidak mengunggah isi log, pengaturan
tersimpan, atau kredensial SSH secara otomatis kepada penerbit.

Aplikasi menyimpan preferensi, path file terakhir, profil server, host key
tepercaya, dan metadata file secara lokal. File hasil unduhan SSH dan file kerja
sementara dapat berisi salinan log. Diagnostik aplikasi dapat memuat path file,
alamat server, dan detail kesalahan. Periksa file sebelum membagikannya karena
log dan path Anda dapat mengandung data pribadi atau rahasia.

SeeLoggyPlus tidak menyertakan iklan atau layanan analitik aplikasi.

## Koneksi dan kredensial SSH

Saat Anda menghubungkan server SSH, aplikasi mengirim autentikasi dan permintaan
file ke server yang Anda pilih. Server dan pengelolanya dapat mencatat informasi
koneksi sesuai kebijakan mereka sendiri.

Password dan passphrase kunci disimpan hanya ketika Anda memilih opsi simpan.
Rahasia yang disimpan dienkripsi menggunakan material kunci lokal di direktori
data aplikasi, termasuk `.keystore`. File private key tetap berada di lokasi
yang Anda pilih dan dibaca ketika diperlukan untuk autentikasi. Host key server
tepercaya disimpan dalam `known_hosts`.

Lihat [keamanan SSH](/id/reference/ssh-security/) dan
[file, data, dan log](/id/reference/data-and-logs/) untuk petunjuk operasional.

## Pembaruan dan layanan eksternal

Perilaku pembaruan bergantung pada versi dan distribusi yang terpasang.
Instalasi Microsoft Store menggunakan layanan instalasi dan pembaruan Microsoft.
Rilis portable lama dapat memeriksa atau mengunduh pembaruan dari GitHub;
rilis portable tanpa updater memerlukan unduhan manual. Koneksi ini memberikan
informasi permintaan jaringan yang umum, seperti alamat IP, kepada penyedia
layanan. Koneksi tersebut tidak mengunggah isi log atau rahasia SSH kepada
penerbit.

Membuka dokumentasi, tautan dukungan, atau Store akan membuka layanan eksternal.
Website dokumentasi dihosting di Vercel. Penyedia tersebut menangani informasi
website, unduhan, dan akun sesuai kebijakan mereka:

- [Pernyataan privasi Microsoft](https://privacy.microsoft.com/privacystatement)
- [Pernyataan privasi GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Kebijakan privasi Vercel](https://vercel.com/legal/privacy-policy)

## Penyimpanan dan pilihan Anda

Informasi lokal tetap berada di perangkat sampai Anda menghapusnya. Anda dapat
menghapus profil dan riwayat tersimpan melalui aplikasi serta menghapus file
unduhan atau direktori data aplikasi ketika tidak diperlukan. Tutup aplikasi
sebelum menghapus datanya. Menghapus direktori data juga menghapus pengaturan
dan material kunci yang diperlukan untuk membuka kredensial tersimpan.

Uninstall suatu distribusi dapat menyisakan file di luar direktori instalasi
yang dikelolanya, termasuk unduhan pilihan Anda atau data portable. Menghapus
salinan lokal tidak menghapus file asli di server SSH.

## Dukungan dan kontak

Jika Anda mengirim email, file diagnostik, atau issue GitHub, Anda menentukan
informasi yang dibagikan. Issue GitHub bersifat publik. Hapus kredensial dan isi
log sensitif sebelum mengirim laporan. Informasi dukungan digunakan untuk
menanggapi permintaan dan menyelidiki masalah yang dilaporkan; aplikasi tidak
mengirimkannya secara otomatis.

Untuk pertanyaan privasi atau permintaan mengenai informasi yang Anda kirim
kepada penerbit, hubungi **Arief Mahendra** melalui
[mahend.arief@gmail.com](mailto:mahend.arief@gmail.com). Penerbit tidak dapat
mengakses atau menghapus file yang hanya tersimpan di perangkat atau server SSH
Anda dari jarak jauh.

Halaman ini akan diperbarui jika penanganan informasi oleh aplikasi berubah.
