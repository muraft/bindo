## Daftar perintah
- [ingat](#ingat)
- [tulis](#tulis)
- [jika](#jika)
- [akhiri](#akhiri)
- [fungsi](#fungsi)
- [jalankan](#jalankan)

## ingat
```
ingat namaVariabel (adalah | pasti) (string | angka)
```
- Berfungsi untuk mendeklarasikan sebuah variabel
- Membutuhkan 3 parameter:

  ### 1. Nama Variabel
  - Tidak boleh string ataupun angka
  - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)

  ### 2. Konjungsi (Apakah konstan?)
  - Gunakan "adalah" untuk mendeklarasikan variabel yang bersifat tidak konstan
  - Gunakan "pasti" untuk mendeklarasikan variabel yang bersifat konstan

  ### 3.Isi variabel
  - Gunakan string atau angka untuk mengisi variabel

## tulis
```
tulis (string | integer)
```
- Alias: tampilkan
- Berfungsi untuk menampilkan data ke tempat output
- Membutuhkan 1 parameter:
  ### 1. Data yang ingin ditampilkan
  - Boleh berbentuk string ataupun angka

## jika
```
jika (string | angka) (sama-dengan | lebih-dari | kurang-dari | berbeda-dengan) (string | angka)
//kode...
akhiri jika
```
- Berfungsi untuk membandingkan dua string ataupun angka, jika pernyataan perbandingan benar, maka akan menjalankan sekumpulan kode di bawahnya
- Perlu diakhiri
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

    #### 4. berbeda-dengan
      - Alias: bukan, !=
      - Membandingkan apakah data yang dibandingkan berbeda

  ### 3. Data kedua
  - Data yang ingin dibandingkan
  - Boleh dalam bentuk string, angka, ataupun variabel

## akhiri
```
akhiri (jika | fungsi)
```
- Berfungsi untuk mengakhiri perintah yang perlu diakhiri (karena perintah tersebut mempengaruhi baris kode di bawahnya)
- Membutukan 1 parameter:
  ### 1. Nama perintah yang ingin diakhiri
  - Pada saat ini hanya ada 2 perintah yang bisa diakhiri, yaitu: "jika" fan "fungsi"

## fungsi
```
fungsi namaFungsi perlu namaParameter1 namaParameter2 ...
//kode
akhiri fungsi
```
- Untuk mendeklarasikan fungsi
- Fungsi digunakan untuk menyimpan sekumpulan perintah-perintah sehingga bisa dipakai berulang-ulang
- Perlu diakhiri
- Membutuhkan 1 parameter dan 2+ parameter opsional
  ### 1. Nama fungsi
  - Tidak boleh string ataupun angka
  - Tidak boleh mengandung simbol, kecuali simbol garis bawah(_)
  
  ### 2. Tulisan "perlu" (opsional)
  - Tulis kata "perlu" jika anda ingin menggunakan parameter di fungsi anda
 
  ### ... Nama parameter (opsional)
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
  - Tulis kata "dengan jika anda ingin mengisi isi parameter
  
  ### ... Isi parameter (opsional)
  - Boleh berisi string ataupun angka
  - Isilah sesuai urutan nama parameter yang ditulis saat fungsi dideklarasi
  - Jumlahnya bisa lebih dari 1