---
title: Pembaruan
description: Pembaruan Microsoft Store untuk Windows dan upgrade portabel manual pada SeeLoggyPlus 0.10.0.
---

## Microsoft Store

Microsoft Store mengelola pembaruan edisi Store sesuai pengaturan Store dan ketersediaan layanannya.

Gunakan **Help → Open Microsoft Store** untuk membuka [halaman produk SeeLoggyPlus](https://apps.microsoft.com/detail/9PDJ4N28SNT7). Membuka halaman ini tidak memaksa pembaruan langsung.

Setelah versi Store berubah, **What's New** menampilkan catatan rilis bawaan sekali. Dialog ini tidak muncul saat pertama kali aplikasi dijalankan.

## Paket portabel

Mulai 0.10.0, instalasi portabel tidak memeriksa pembaruan, menampilkan notifikasi pembaruan, atau mengunduh dan memasang penggantinya. Unduh paket terbaru secara manual dari [GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases/latest).

1. Tutup aplikasi dan cadangkan seluruh direktori data.
2. Ekstrak paket baru ke folder baru.
3. Salin seluruh direktori data dan `launcher.properties`. Pertahankan pengaturan khusus `seeloggyplus.dataDir`. Jangan salin penunjuk `current` atau direktori `versions/` lama.
4. Jalankan paket baru dan periksa pengaturan serta profil server sebelum menghapus instalasi lama.

Lihat [File, Data & Log](/id/reference/data-and-logs/) untuk rincian pencadangan. Instalasi Store dan portabel memakai lokasi data terpisah; memasang edisi Store tidak otomatis mengimpor data portabel.
