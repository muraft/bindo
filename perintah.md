## Daftar perintah
- [ingat](#ingat)
- [tulis](#tulis)
- [jika](#jika)
- [akhiri](#akhiri)

## ingat
```
ingat namaVariabel (adalah/pasti) ("isi variabel"/123/variabelLain)
```
- Berfungsi untuk mendeklarasikan sebuah variabel
- Membutuhkan 3 parameter:

  ### 1. Nama Variabel
  - Tidak boleh string ataupun angka

  ### 2. Konjungsi (Apakah konstan?)
  - Gunakan "adalah" untuk mendeklarasikan variabel yang bersifat tidak konstan
  - Gunakan "pasti" untuk mendeklarasikan variabel yang bersifat konstan

  ### 3.Isi variabel
  - Gunakan string atau angka untuk mengisi variabel
  - Gunakan nama variabel lain untuk menyalin isi variabel lain

## tulis
```
tulis ("kalimat"/123/variabel)
```
- Alias: tampilkan
- Berfungsi untuk menampilkan sebuah kalimat atau isi dari sebuah variabel
- Membutuhkan 1 parameter:
  ### 1. Konten yang ingin ditampilkan
  - Boleh dalam bentuk string, angka, ataupun variabel

## jika
```
jika ("kalimat"/123/variabel) (sama-dengan/lebih-dari/kurang-dari/berbeda-dengan) ("kalimat"/123/variabel)
```
- Alias: kalau
- Berfungsi untuk membandingkan dua kalimat, angka, ataupun variabel
- Perlu diakhiri
- Membutuhkan 3 parameter:
  ### 1. Data pertama
  - Data yang ingin dibandingkan
  - Boleh dalam bentuk string, angka, ataupun variabel
  
  ### 2. Pernyataan
  - Pernyataan yang digunakan untuk membandingkan variabel, yaitu:
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
      - Membandingkan apakah data yang dibandingkan sama persis

  ### 3. Data kedua
  - Data yang ingin dibandingkan
  - Boleh dalam bentuk string, angka, ataupun variabel

## akhiri
```
akhiri (perintah yang perlu diakhiri)
```
- Berfungsi untuk mengakhiri perintah yang perlu diakhiri (karena perintah tersebut mempengaruhi baris kode di bawahnya)
- Membutukan 1 parameter:
  ### 1. Nama perintah yang ingin diakhiri
  - Pada versi ini hanya tersedia perintah "jika"