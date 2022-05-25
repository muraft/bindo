# Menambahkan compiler Bindo ke websitemu
Untuk menambahkan compiler Bindo caranya seperti menambahkan library JavaScript lain, yaitu:
1. Unduh bindoCompiler.js, atau salin seluruh kodenya ke file baru
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
4. Kemudian kamu bisa kreasikan kode di atas seperti menjalankan kode bindo sesuai dengan input user di website mu atau sesuai kreasimu. Kunjungi [index.html]() untuk melihat penerapannya

# Setup tambahan bindo
Kamu bisa mensetup beberapa perilaku bindo (untuk tahap ini baru ada satu) sebelum mulai menjalankan fungsi bindo.jalankan(), di antaranya:
## bindo.console (Default: true)
  ```
  bindo.console = (true/false)
  ```
  Secara default, output yang dihasilkan compiler bindo akan ditaruh di console, tetapi kamu bisa menaruh outputnya di elemen HTML seperti div, paragraf, dan lain-lain dengan cara menyetel nilai bindo.console menjadi false, namun setup ini butuh penyetelan lain yaitu yang ada di bawah ini
## bindo.output
  ```
  bindo.output = (Elemen DOM)
  ```
  setelah mensetup bindo.console menjadi false, kamu perlu menyetel pada elemen HTML apa output akan ditampilkan dengan mengisi bindo.output dengan elemen DOM (bisa menggunakan document.getElementById() atau document.querySelector())
