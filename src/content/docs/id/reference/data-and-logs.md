---
title: File, Data & Log
description: Tempat SeeLoggyPlus menyimpan direktori data, log aplikasi, serta unduhan — termasuk cara mencadangkan dan memindahkannya.
---

## Direktori data

Pengaturan dan riwayat tersimpan di **direktori data**: `.data` di samping aplikasi secara
default, atau folder yang diberikan oleh properti sistem `seeloggyplus.dataDir` (dipakai
oleh test suite dan instalasi portabel).

| Item | Isi |
| --- | --- |
| `seeloggyplus.db` | Database SQLite: file terbaru, server, grup, favorit, preferensi, dan metadata log. |
| `.keystore` | Kata sandi SSH dan passphrase kunci yang terenkripsi. |
| `known_hosts` | Host key SSH yang dipercaya. |
| `updates/` | Area staging untuk paket pembaruan yang diunduh. |

## Log aplikasi

- `logs/seeloggyplus.log` mencatat apa yang dilakukan aplikasi; `logs/seeloggyplus-error.log` menyimpan peringatan dan error.
- Lampirkan kedua file tersebut saat melaporkan masalah — keduanya memuat versi, operasi yang gagal, dan exception penyebabnya.
- Log berupa teks biasa dan aman untuk diperiksa; log tidak memuat kata sandi yang tersimpan.

## Unduhan

- File remote yang dibuka dari File Manager diunduh ke direktori yang dikonfigurasi (default: temp sistem) dan dibuka kembali dari sana.
- Nama unduhan mendapat awalan sementara `seeloggyplus-<timestamp>-`; judul tab dan aksi penyalinan menggunakan nama serta path file asli.
- **Preferences → SSH → Clean Downloads** menghapus salinan hasil unduhan setelah Anda tidak lagi membutuhkannya.

## Pencadangan dan portabilitas

- Cadangkan server, grup, favorit, dan file terbaru dengan menyalin direktori data.
- Paket portabel dapat dipindahkan ke folder atau mesin lain; biarkan file `current`, `versions/`, dan launcher tetap berada bersama.

## Upgrade aman ke 0.9.0

Skema database tetap versi 4. Tutup aplikasi sebelum menyalin seluruh direktori data, termasuk database, .keystore dan known_hosts. Jangan menyalin database saja: kredensial memerlukan keystore aslinya.

Untuk upgrade manual, ekstrak paket ke folder baru, salin seluruh direktori data dan launcher.properties, lalu jalankan launcher baru. Jangan salin current atau versions lama ke paket baru. Untuk direktori data khusus, pertahankan konfigurasi seeloggyplus.dataDir yang sama. Simpan instalasi dan backup lama sampai upgrade berhasil diverifikasi.
