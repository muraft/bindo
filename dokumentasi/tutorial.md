# Tutorial Dasar
Note: cek juga [daftar perintah](perintah.md) untuk meningkatkan pemahaman
## Komentar & Menampilkan kalimat
```
//Menampilkan "Halo dunia!"
tulis "Halo dunia!"
```
Hasil:
```
Halo dunia!
```
Note: Perintah bindo adalah case-insensitive

## Variabel & Tipe Data
```
//Variabel bisa diubah
ingat bisaDiubah adalah "tes"
ingat bisaDiubah adalah "cek"

//Menggunakan pasti untuk membuat variabel konstan, tidak bisa diubah
ingat takBisaDiubah pasti "tes"

//tipe data
ingat contohString adalah "Ini adalah string"
ingat contohAngka adalah 123
ingat contohAngkaDesimal adalah 1.23
```
Note:
- Nama variabel tidak boleh angka, tetapi kombinasi huruf dan angka diperbolehkan
- Nama variabel tidak boleh mengandung simbol, kecuali garis bawah(_)

## Operasi Hitung & Penggabungan String
```
//Operasi hitung
ingat a adalah 2
ingat b adalah 4
tulis 2*(a+b-2)/2

//Penggabungan string menggunakan simbol &
ingat nama pasti "Rafie"
ingat umur adalah 16
tulis "Halo nama saya "&nama&" dan umur saya " & umur & " tahun"
```
Hasil:
```
4
Halo nama saya Rafie dan umur saya 16 tahun
```
Note: Operasi hitung yang tersedia hanya pertambahan(+), pengurangan(-), perkalian(*), dan pembagian(/)

## Percabangan
```
ingat uang adalah 5000

//if
jika uang kurang-dari 5000
tulis "Uang kamu tidak cukup untuk membeli minum"
tutup cabang

//else if
atau jika uang lebih-dari 5000
tulis "Uang kamu lebih dari cukup untuk membeli minum"
tutup cabang

//else
selain itu
tulis "Uang kamu cukup untuk membeli minum"
tutup cabang
```
Note:
Perbandingan yang tersedia:
1. sama-dengan
2. berbeda-dengan
3. lebih-dari
4. kurang-dari
5. lebih-dari-sama-dengan
6. kurang-dari-sama-dengan

## Fungsi
```
//Fungsi tanpa argumen
fungsi haloDunia
tulis "Halo dunia!"
tutup fungsi

//fungsi dengan argumen
fungsi luasPersegi perlu sisi
tulis "Luas: " & sisi*sisi
tutup fungsi

fungsi luasPersegiPanjang perlu panjang lebar
tulis "Luas: " & panjang*lebar
tutup fungsi

//Pemanggilan fungsi
jalankan haloDunia
jalankan luasPersegi dengan 5
jalankan luasPersegiPanjang dengan 5 10
```
Hasil:
```
Halo dunia!
Luas: 25
Luas: 50
```
Note: Peraturan nama fungsi sama seperti peraturan nama variabel

## Perulangan
### 1. Perulangan untuk (for loop)
```
//Hitung maju
ulangi untuk hitunganMaju dari 1 sampai 10 
tulis hitunganMaju
tutup perulangan

//Hitung mundur
ulangi untuk hitungMundur dari 10 sampai 1
tulis hitungMundur
tutup perulangan

//Merubah kelipatan perhitungan
ulangi untuk hitungan dari 1 sampai 20 hitungan+2
tulis "Bilangan ganjil: " & hitungan
tutup perulangan
```
Hasil:
```
1
2
3
4
5
6
7
8
9
10
10
9
8
7
6
5
4
3
2
1
Bilangan ganjil: 1
Bilangan ganjil: 3
Bilangan ganjil: 5
Bilangan ganjil: 7
Bilangan ganjil: 9
Bilangan ganjil: 11
Bilangan ganjil: 13
Bilangan ganjil: 15
Bilangan ganjil: 17
Bilangan ganjil: 19
```
Note: hitungMaju, hitungMundur, dan hitungan itu adalah nama variabel untuk menyimpan perhitungan loop (i)
### Perulangan jika
```
ingat angka adalah 0

ulangi jika angka kurang-dari 10
tulis angka
angka adalah angka+1
tutup perulangan
```
Hasil
```
0
1
2
3
4
5
6
7
8
9
10
```
