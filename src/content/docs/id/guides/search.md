---
title: Pencarian & Pemfilteran
description: Filter log dengan teks biasa, istilah boolean, atau regex, telusuri kecocokan dengan F3, dan gunakan Search Result Panel untuk melompat antarkecocokan.
---

Kolom pencarian di toolbar memfilter log dan menyorot setiap kecocokan.

![Memfilter berdasarkan istilah: sorotan di log, penghitung kecocokan di toolbar, dan panel hasil di sebelah kanan](../../../../assets/screenshots/search.png)

<p class="screenshot-caption">Memfilter berdasarkan istilah: sorotan di log, penghitung kecocokan di toolbar, dan panel hasil di sebelah kanan.</p>

| Fitur | Deskripsi |
| --- | --- |
| Pencarian inkremental | Hasil diperbarui sambil Anda mengetik (debounce 300 ms); <kbd>Enter</kbd> langsung menerapkannya. |
| Regex | Aktifkan **Regex** agar kueri diperlakukan sebagai regular expression. |
| Case Sensitive | Aktifkan **Case Sensitive** untuk pencocokan huruf besar-kecil secara persis (nonaktif berarti tidak peka huruf besar-kecil). |
| Istilah boolean | Gabungkan kata dengan `AND`, `OR`, dan `NOT` huruf kapital, misalnya `ERROR AND timeout` atau `WARN NOT retry`. |
| Penyorotan | Setiap istilah yang cocok disorot di log viewer. |
| Navigasi | <kbd>F3</kbd> / <kbd>Shift+F3</kbd> berpindah ke kecocokan berikutnya / sebelumnya dan kembali ke ujung satunya setelah mencapai akhir. |
| Penghitung kecocokan | Toolbar menampilkan *"current / total"*. Penghitungan berhenti setelah 50 000 baris yang cocok, lalu menampilkan *"50000+ matches"*; panel hasil tetap mencantumkan kecocokan yang ditemukan sejauh ini. |
| Menghapus filter | <kbd>Escape</kbd> di kolom pencarian menghapus filter, atau klik tombol clear. |

:::tip
Pencarian teks biasa dan boolean adalah yang tercepat. Gunakan regex saat memang perlu, dan
hindari pola dengan backtracking berat pada file berukuran multi-gigabyte.
:::

## Search Result Panel

Selama pencarian aktif, sebuah panel mencantumkan setiap baris yang cocok.

![Kecocokan dengan nomor baris dan kata kunci yang disorot](../../../../assets/screenshots/search-result-panel.png)

<p class="screenshot-caption">Kecocokan dengan nomor baris dan kata kunci yang disorot.</p>

- Setiap baris menampilkan nomor baris dan kontennya, dengan teks yang cocok disorot.
- Klik sebuah baris untuk melompat ke baris tersebut di log viewer.
- Baris panjang digulir secara horizontal; panel disembunyikan lagi saat pencarian dihapus.
- Selama tailing, kecocokan baru ditambahkan begitu baris tiba.
