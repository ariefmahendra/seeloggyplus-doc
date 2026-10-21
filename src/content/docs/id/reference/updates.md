---
title: Pembaruan
description: Pemeriksaan pembaruan otomatis dan manual, unduhan latar belakang, restart bertahap dengan keamanan rollback, dan dialog What's New.
---

Gunakan **Help → Check for Updates...** untuk pemeriksaan manual, atau biarkan opsi
otomatis tetap aktif.

| Opsi | Perilaku |
| --- | --- |
| Check for Updates Automatically | Memeriksa di latar belakang setelah aplikasi dimulai; tautan muncul di bilah status saat ada rilis yang lebih baru. |
| Download Updates Automatically | Mengunduh paket di latar belakang sehingga restart berikutnya dapat memasangnya. |
| Dialog pembaruan | Menampilkan versi baru, nama dan ukuran paket, catatan rilis, serta progres unduhan, dengan **Download**, **Skip this version**, **Later**, **Release Notes**, dan **Close**. |
| Menerapkan pembaruan | Setelah unduhan selesai, konfirmasi restart. Versi baru disiapkan di samping versi saat ini dan diaktifkan saat restart. |
| Keamanan rollback | Versi dipasang secara berdampingan (`versions/<version>` dengan penunjuk `current`), sehingga start yang gagal dapat kembali ke versi sebelumnya. |
| What's New | Setelah peningkatan versi, sebuah dialog merangkum perubahan pada versi baru. |

:::tip
Jika unduhan gagal (offline, proxy, host yang diblokir), instalasi dibiarkan utuh dan
Anda dapat mencoba lagi nanti. Tidak ada yang diganti sampai paket terverifikasi
selesai diunduh.
:::

## Upgrade 0.9.0

Skema database tetap versi 4; data dan kredensial yang sudah ada dipertahankan. Preferensi JSON/XML lama tetap menjadi fallback untuk mode awal Formatted. Cadangkan seluruh direktori data sebelum upgrade manual. Riwayat Tail kini memakai ruang disk sementara; penutupan sesi normal menghapus spool, sedangkan penghentian paksa dapat meninggalkannya. Help tetap membuka website.
