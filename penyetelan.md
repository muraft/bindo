# Menambahkan compiler Bindo ke websitemu
Untuk menambahkan compiler Bindo caranya seperti menambahkan library JavaScript lain, yaitu:
1. Unduh file bindoCompiler.js
2. Tulis kode ini di bagian paling akhir sebelum tag </body> di file html mu
  ```
  <script src="bindoCompiler.js"></script>
  ```
3. Untuk menjalankan kode bindo, jalankan function bindo.jalankan(string) dengan parameter string kode yang ingin dijalankan
  ```
  <script src="bindoCompiler.js"></script>
  <script>
    bindo.jalankan('tampilkan "Halo dunia!"')
  </script>
  ```
4. Kemudian kamu bisa kreasikan kode di atas untuk membuat code editor bindo sesuai kreasimu. Kunjungi [index.html](index.html) untuk melihat penerapannya

# Konfigurasi bindo
Kamu bisa menkonfigurasi beberapa perilaku bindo sebelum mulai menjalankan fungsi bindo.jalankan(), di antaranya:
## 1. bindo.console (Default: true)
  ```
  bindo.console = (true/false)
  ```
  Secara default, output yang dihasilkan compiler bindo akan ditaruh di console, tetapi kamu bisa menaruh outputnya di elemen HTML seperti div, paragraf, dan lain-lain dengan cara menyetel nilai bindo.console menjadi false, namun setup ini butuh penyetelan lain yaitu yang ada di bawah ini
## 2. bindo.output
  ```
  bindo.output = (Elemen DOM)
  ```
  Setelah mensetup bindo.console menjadi false, kamu perlu menyetel pada elemen HTML apa output akan ditampilkan dengan mengisi bindo.output dengan elemen DOM

# Styling output bindo
  ## 1. Error
  Error yang dioutput bindo ke dalam elemen HTML akan dibungkus dengan tag span dengan class **bindo-error**. Contoh jika anda ingin mengubah warna error bindo menjadi warna merah
  ```
  <style>
    .bindo-error{
      color: red;
    }
  </style>
  ```
  ## 2. Success
   Bindo akan mengoutput sebuah pesan dan informasi waktu eksekusi ketika seluruh kode berhasil dijalankan, output yang dihasilkan ke sebuah elemen HTML akan dibungkus dengan tag span dengan class **bindo-success**. Contoh jika anda ingin mengubah warna pesan sukses bindo menjadi warna hijau
  ```
  <style>
    .bindo-success{
      color: green;
    }
  </style>
  ```
