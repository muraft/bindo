## Daftar perintah
- [ingat](#ingat)
- [tulis](#tulis)
- [jika](#jika)
- [atau](#atau)
- [selain](#selain)
- [tutup ](#tutup )
- [fungsi](#fungsi)
- [jalankan](#jalankan)
- [ulangi](#ulangi)

## Ingat
```
ingat namaVariabel (adalah | pasti) (string | angka)
```
- Berfungsi untuk mendeklarasikan sebuah variabel
- Membutuhkan 3 parameter:

  ### 1. Nama Variabel
  - Tidak boleh bertipe string ataupun angka
  - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)

  ### 2. Konjungsi (Apakah konstan?)
  - Gunakan "adalah" untuk mendeklarasikan variabel yang bersifat tidak konstan
  - Gunakan "pasti" untuk mendeklarasikan variabel yang bersifat konstan

  ### 3. Isi variabel
  - Gunakan string atau angka untuk mengisi variabel

## Tulis
```
tulis (string | angka) !mode
```
- Alias: tampilkan
- Berfungsi untuk menampilkan data ke tempat output
- Membutuhkan 1 parameter wajib dan 1 parameter opsional:
  
  ### 1. Data yang ingin ditampilkan
  - Boleh berbentuk string ataupun angka
  ### 2. Mode penampilan data (opsional, digunakan untuk proses debugging)
  - Keywordnya diawali dengan tanda seru (!)
  - Saat ini hanya ada 1 keyword untuk dipilih:
    #### 1. tipe
    - Untuk menampilkan isi beserta tipe dari data yang ingin ditampilkan

## Jika
```
jika (string | angka) (sama-dengan | lebih-dari | kurang-dari | lebih-dari-sama-dengan | kurang-dari-sama-dengan | berbeda-dengan) (string | angka)
//kode...
tutup  cabang
```
- Berfungsi untuk membandingkan dua string ataupun angka, jika pernyataan perbandingan benar, maka akan menjalankan sekumpulan kode di bawahnya
- Perlu ditutup 
- Membutuhkan 3 parameter:
  ### 1. Data pertama
  - Data yang ingin dibandingkan
  - Boleh dalam bentuk string ataupun angka
  
  ### 2. Pernyataan
  - Pernyataan yang digunakan untuk membandingkan dua variabel, yaitu:
    #### 1. sama-dengan
      - Alias: adalah, =, ==
      - Membandingkan apakah data yang dibandingkan sama persis
    
    #### 2. lebih-dari
      - Alias: >
      - Membandingkan apakah data pertama lebih besar daripada data kedua
      - Kedua data yang dibandingkan harus berjenis angka

    #### 3. kurang-dari
      - Alias: <
      - Membandingkan apakah data pertama lebih kecil daripada data kedua
      - Kedua data yang dibandingkan harus berjenis angka
    
    #### 4. lebih-dari-sama-dengan
      - Alias: lebih-dari-smd, >=
      - Membandingkan apakah data pertama lebih besar atau sama dengan data kedua
      - Kedua data yang dibandingkan harus berjenis angka

    #### 5. kurang-dari-sama-dengan
      - Alias: kurang-dari-smd, <=
      - Membandingkan apakah data pertama lebih kecil atau sama dengan data kedua
      - Kedua data yang dibandingkan harus berjenis angka

    #### 6. berbeda-dengan
      - Alias: bukan, !=
      - Membandingkan apakah data yang dibandingkan berbeda

  ### 3. Data kedua
  - Data yang ingin dibandingkan
  - Boleh dalam bentuk string, angka, ataupun variabel

## Atau
```
atau jika (string | angka) (sama-dengan | lebih-dari | kurang-dari | lebih-dari-sama-dengan | kurang-dari-sama-dengan | berbeda-dengan) (string | angka)
//kode...
tutup  jika
```
- Berfungsi untuk mengecek suatu kondisi ketika perintah "jika" sebelumnya tidak benar, tetapi jika perintah "jika" sebelumnya benar maka perintah ini akan dilewatkan
- Harus ada perintah "jika" sebelum perintah ini
- Membutuhkan 4 parameter
  ### 1. Tulisan "jika"
  ### 2-4. Kondisi
  Parameter-parameter selanjutnya mengikuti aturan parameter perintah "jika"

## Selain
```
selain itu
//kode...
tutup  jika
```
- Berfungsi untuk menjalankan kode yang ada di dalam perintah ini ketika hasil perintah "jika" ataupun "atau jika" sebelumnya tidak benar
- Membutuhkan 1 parameter: Tulisan "itu"

## Tutup
```
tutup (cabang | fungsi | perulangan)
```
- Berfungsi untuk menutup perintah yang perlu ditutup, karena perintah tersebut mempengaruhi baris kode di bawahnya
- Membutukan 1 parameter:
  ### 1. Nama perintah yang ingin ditutup
  - Yaitu: cabang, fungsi, dan perulangan

## Fungsi
```
fungsi namaFungsi perlu namaParameter1 namaParameter2 ...
//kode
tutup  fungsi
```
- Untuk mendeklarasikan fungsi
- Fungsi digunakan untuk menyimpan sekumpulan baris kode sehingga bisa dipakai berulang-ulang
- Perlu ditutup 
- Membutuhkan 1 parameter dan 2+ parameter opsional
  ### 1. Nama fungsi
  - Tidak boleh bertipe string ataupun angka
  - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)
  
  ### 2. Tulisan "perlu" (opsional)
  - Tulis kata "perlu" jika anda ingin menggunakan parameter di fungsi anda
 
  ### 3+. Nama parameter (opsional)
  - Tidak boleh string ataupun angka
  - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)
  - Jumlahnya bisa lebih dari 1
 
## jalankan
```
jalankan namaFungsi dengan isiParameter1 isiParameter2 ...
```
- Digunakan untuk menjalankan sebuah fungsi
- Membutuhkan 1 parameter dan 2+ parameter opsional
  ### 1. Nama fungsi yang ingin dijalankan
  - Pastikan fungsi tersebut sudah dideklarasikan sebelumnya
  
  ### 2. Tulisan "dengan" (opsional)
  - Tulis kata "dengan" jika anda ingin mengisi isi parameter
  
  ### 3+. Isi parameter (opsional)
  - Boleh berisi string ataupun angka
  - Isilah sesuai urutan nama parameter yang ditulis saat fungsi dideklarasi
  - Jumlahnya bisa lebih dari 1

## Ulangi
- Berfungsi untuk mengulangi sekumpulan baris kode beberapa kali
- Perlu ditutup
- Ada 2 tipe perulangan:
  ### 1. Ulangi untuk
  ```
  ulangi untuk namaVariabel dari (angka) sampai (angka) kelipatan
  //kode...
  tutup ulangi
  ```
  - Berfungsi untuk mengulangi sekumpulan kode sesuai hitungan yang ditentukan
  - Membutuhkan 5 parameter dan 1 parameter opsional
    #### 1. Nama Variabel Hitungan
    - Nama variabel yang digunakan untuk menyimpan hitungan dalam perulangan
    - Tidak boleh bertipe string ataupun angka
    - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)
    #### 2. Tulisan "dari"
    #### 3. Bilangan awal
    - Bilangan awal perhitungan
    - Harus bertipe angka
    #### 4. Tulisan "sampai"
    #### 5. Bilangan akhir
    - Bilangan akhir perhitungan
    - Harus bertipe angka
    #### 6. Perubahan/kelipatan perhitungan (opsional)
    - default 
      - Jika bilanganAwal <= bilanganAkhir: namaVariabel+1
      - Jika bilanganAwal > bilanganAkhir: namaVariabel-1
    - Diisi dengan operasi hitung
    - Operasi hitung dilakukan pada setiap perulangan hingga variabel perulangan sama dengan bilangan akhir
    - Hasil operasi hitung akan menjadi isi dari variabel perhitungan
  
  ### 2. Ulangi jika
  ```
  ulangi jika (string | angka) (sama-dengan | lebih-dari | kurang-dari | lebih-dari-sama-dengan | kurang-dari-sama-dengan | berbeda-dengan) (string | angka)
  //kode...
  tutup ulangi
  ```
  - Berfungsi untuk mengulangi sekumpulan kode jika kondisinya terpenuhi
  - Membutuhkan 4 parameter
    ### 1. Tulisan "jika"
    ### 2-4. Kondisi
    Parameter-parameter selanjutnya mengikuti aturan parameter perintah "jika"