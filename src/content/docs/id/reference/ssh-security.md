---
title: Keamanan SSH
description: Cara SeeLoggyPlus menyimpan kredensial, memverifikasi host key terhadap known_hosts, serta menjelaskan penyebab masalah koneksi.
---

## Kredensial

- Kata sandi dan passphrase kunci hanya disimpan saat Anda mencentang **Save password** / **Save passphrase**, lalu terjaga dalam keadaan terenkripsi di keystore aplikasi (`.keystore` di direktori data).
- Tanpa opsi "simpan" tersebut, aplikasi meminta kredensial itu setiap kali terhubung (dialog kata sandi muncul sebelum menjelajah atau tailing).
- Kunci privat tetap berada di disk — hanya path dan, secara opsional, passphrase yang disimpan.

## Host key

- Host key setiap server diperiksa terhadap `known_hosts` di direktori data.
- **Koneksi pertama:** fingerprint ditampilkan dan Anda memutuskan apakah mempercayainya. Verifikasi dengan administrator server jika Anda ragu.
- **Kunci berubah:** koneksi selalu ditolak dengan peringatan. Beginilah aplikasi melindungi Anda dari serangan man-in-the-middle.
- Jika server memang dibangun ulang secara sah, hapus entri lamanya dari `known_hosts` (atau dari direktori data) dan percayai kunci baru pada koneksi berikutnya — lakukan dengan sengaja, jangan pernah asal percaya.

## Masalah koneksi

Kegagalan dijelaskan dengan bahasa yang mudah dipahami, dengan pesan error mentah di bawah **Details**:

| Pesan | Arti |
| --- | --- |
| Login rejected | Username/kata sandi salah, atau kunci/passphrase tidak cocok dengan metode autentikasi yang dikonfigurasi. |
| Timeout | Host tidak menjawab tepat waktu — periksa jaringan, VPN, atau firewall, atau naikkan timeout di **Preferences → SSH**. |
| Connection refused / unknown host | Host atau port salah, atau layanan SSH tidak sedang berjalan. |
| Private key unusable | File tidak ada, tidak dapat dibaca, atau formatnya tidak didukung (kunci RSA, ECDSA, dan Ed25519 didukung). |
