---
title: Instalasi
description: Pasang SeeLoggyPlus dari Microsoft Store di Windows, gunakan paket portabel di Windows atau Linux, atau bangun dari kode sumber.
---

SeeLoggyPlus tersedia di **Microsoft Store** untuk Windows. Paket portabel tetap tersedia untuk Windows dan Linux.

## Windows: Microsoft Store

1. Buka [SeeLoggyPlus di Microsoft Store](https://apps.microsoft.com/detail/9PDJ4N28SNT7) dan pasang aplikasi.
2. Jalankan **SeeLoggyPlus** dari menu Start. Java sudah disertakan.
3. Microsoft Store mengelola pembaruan sesuai pengaturan Store Anda. **Help → Open Microsoft Store** membuka halaman produk; menu ini tidak memaksa pembaruan langsung.

Instalasi Store dan portabel menggunakan lokasi data terpisah. Memasang edisi Store tidak otomatis mengimpor profil portabel. Lihat [File, Data & Log](/id/reference/data-and-logs/) sebelum memindahkan atau mencadangkan data.

## Paket portabel: Windows dan Linux

Ekstrak seluruh ZIP lalu jalankan launcher. Dua varian tersedia:

| Paket | Catatan |
| --- | --- |
| Paket portabel dengan JRE | Berjalan langsung; tidak perlu memasang Java. |
| Paket portabel tanpa JRE | Lebih kecil; memerlukan Java 21 atau yang lebih baru di komputer. |

Unduh paket terbaru dari halaman [GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases/latest).

## Menjalankan aplikasi dari paket

**Windows**

1. Jalankan `launcher.bat` sekali. Saat pertama dijalankan, aplikasi akan membuat `SeeLoggyPlus.vbs` di folder yang sama.
2. Setelah itu, klik dua kali `SeeLoggyPlus.vbs` untuk menjalankan aplikasi tanpa jendela konsol.
3. Untuk diagnostik, jalankan `launcher.bat --console` agar jendela konsol tetap terbuka.

**Linux**

Jalankan `./launcher.sh`.

## Java dan memori untuk paket portabel

Java dipilih dengan urutan ini: `java.home` di `launcher.properties`, lalu folder `jre/`
bawaan, kemudian `JAVA_HOME`, dan terakhir `java` pada `PATH`. Ukuran heap maksimum
diatur lewat `max.memory.gb` di `launcher.properties` (default: 4 GB) atau melalui
**Settings → Preferences → General**.

## Menjalankan dari kode sumber

Diperlukan Java 21 atau yang lebih baru.

```bash
git clone https://github.com/ariefmahendra/seeloggyplus.git
cd seeloggyplus

# Windows
.\gradlew.bat --no-daemon runDev

# Linux/macOS
./gradlew --no-daemon runDev
```

## Bantuan online pada 0.8.0

**Help → Help Contents** atau **F1** membuka [website dokumentasi](https://seeloggyplus-doc.vercel.app/). Paket tidak lagi menyertakan panduan HTML offline. Membaca log lokal tidak memerlukan internet.
