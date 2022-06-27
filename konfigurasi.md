# Menjalankan kode bindo
Untuk menjalankan kode bindo, gunakan bindo.jalankan() dan isilah parameter dengan string kode
```javascript
bindo.jalankan('tulis "halo dunia"')
```

# Konfigurasi bindo
Kamu bisa menkonfigurasi beberapa perilaku bindo sebelum mulai menjalankan fungsi bindo.jalankan(), di antaranya:
## 1. bindo.console (Default: true)
  ```javascript
  bindo.console = (true/false)
  ```
  Secara default, output yang dihasilkan compiler bindo akan ditaruh di console, tetapi kamu bisa menaruh outputnya di elemen HTML seperti div, paragraf, dan lain-lain dengan cara menyetel nilai bindo.console menjadi false, namun setup ini butuh penyetelan lain yaitu yang ada di bawah ini
## 2. bindo.output
  ```javascript
  bindo.output = (Elemen DOM)
  ```
  Setelah mensetup bindo.console menjadi false, kamu perlu menyetel pada elemen HTML apa output akan ditampilkan dengan mengisi bindo.output dengan elemen DOM

# Styling output bindo
  ## 1. Error
  Error yang dioutput bindo ke dalam elemen HTML akan dibungkus dengan tag span dengan class **bindo-error**. Contoh jika anda ingin mengubah warna error bindo menjadi warna merah
  ```css
  .bindo-error{
     color: red;
  }
  ```
  ## 2. Sukses
   Bindo akan mengoutput sebuah pesan dan informasi waktu eksekusi ketika seluruh kode berhasil dijalankan, output yang dihasilkan ke sebuah elemen HTML akan dibungkus dengan tag span dengan class **bindo-sukses**. Contoh jika anda ingin mengubah warna pesan sukses bindo menjadi warna hijau
  ```css
  .bindo-sukses{
     color: green;
  }
  ```
