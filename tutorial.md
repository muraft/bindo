# Dasar
## 1. Menampilkan kalimat
Untuk menampilkan sebuah kalimat, kamu bisa dengan mudah mengetik perintah "tulis" kemudian disambung dengan kalimat yang ingin kamu tampilkan yang dikurung dengan tanda petik dua(") seperti contoh di bawah ini

```
tulis "Halo dunia!"
```

Maka di layar output atau layar hasil akan tampil

```
Halo dunia!
```

## 2. Komentar
Di setiap bahasa pemrograman ada yang namanya komentar, komentar adalah tulisan yang tidak dianggap sebagai perintah oleh sistem, contoh:
```
//ini adalah komentar
```
Maka tidak akan menghasilkan apa apa
```
```

## 3. Menggunakan variabel
Variabel bisa kita misalkan sebagai sebuah gelas yang diberi label nama, misalnya kita mengisi gelas dengan label nama "favorit", kemudian kita isi gelasnya dengan teh. Jika diubah ke dalam bahasa bindo, hasilnya akan seperti ini, yaitu dengan mengetik perintah "ingat", kemudian disambung dengan nama variabel, kemudian "adalah", kemudian isi variabel yang dikurung dengan tanda petik(")

```
ingat favorit adalah "teh"
```

Meskipun kode di atas tidak akan menampilkan apa apa, sebenarnya sistem bindo dapat diumpamakan mengisi "teh" ke gelas bernama "favorit". Jika kamu ingin menampilkan isi dari variabelnya, kamu bisa mengetik perintah "tulis" kemudian ketik nama variabelnya tanpa dikurung tanda petik (")

```
ingat favorit adalah "teh"
tulis favorit
```

maka hasilnya adalah

```
teh
```

Jika kamu ingin mengganti isi variabel, kamu bisa mengulang perintah serupa namun dengan isi yang berbeda

```
ingat favorit adalah "teh"
ingat favorit adalah "kopi"
tulis favorit
```

maka hasilnya adalah

```
kopi
```

Jika kamu ingin variabelmu bersifat konstan atau tidak bisa diubah, kamu bisa mengubah "adalah" menjadi "pasti"

```
ingat favorit pasti "teh"
ingat favorit adalah "kopi"
tulis favorit
```

maka hasilnya adalah

```
Terdapat kesalahan pada baris ke-3: Variabel favorit adalah konstan sehingga isinya tidak bisa diubah.
```
Informasi tambahan:
- Nama variabel tidak boleh hanya berisi angka, tetapi kombinasi variabel dan angka diperbolehkan
- Nama variabel tidak boleh mengandung simbol dan tanda baca, kecuali garis bawah(_)

## 4. Apa bedanya pakai petik dua dan tidak?
Kalimat tanpa tanda petik dua digunakan untuk menampilkan isi variabel. Contoh:
```
ingat umur adalah 16
tulis umur
```
maka kode di atas akan menampilkan isi dari umur
```
16
```
Sedangkan jika diberi tanda petik dua
```
ingat umur adalah 16
tulis "umur"
```
maka kode di atas akan menampilkan tulisan "umur"
```
umur
```
## 5. Tipe data
Di setiap bahasa pemrograman ada yang namanya tipe data. Dalam bahasa ini, hanya ada 2 tipe data:
  ### 1. String (Kalimat)
  String, atau kita dalam bahasa ini kita sebut saja sebagai kalimat, adalah tipe data yang berisi serangkaian huruf, angka, ataupun simbol. Contoh:
  - "Halo"
  - "12345"
  - "Umur saya adalah 16 tahun"

  Panjang string tidak menentu, panjangnya bisa dimulai dari 0, contoh:
  - ""
  - "a"

  Keduanya termasuk string, yang terpenting diapit oleh tanda petik dua(")
  
  ### 2. Angka
  Seperti namanya, tipe data angka pastinya berisi angka. Dalam bahasa ini, angka termasuk bilangan asli, negatif, maupun bilangan desimal. Contoh:
  - 12345
  - 0.3333
  - -1.5
  - 90

  Di contoh atas, ada 12345, sedangkan di string juga ada "12345", tetapi apa perbedaan angka yang berjenis string dan yang bukan? Perbedaannya angka yang bertipe string tidak bisa dijumlahkan, seperti "10"+"10" itu tidak bisa dijumlahkan, sedangkan 10+10 akan menghasilkan 20. Contoh:
  ```
  tulis 10+10
  ```
  maka hasilnya:
  ```
  20
  ```
  tipe data angka bisa dioperasikan dengan operasi hitung lainnya yaitu pengurangan(-), perkalian(*), dan pembagian(/)
## 6. Operasi hitung dan penggabungan string
Kamu bisa melakukan operasi hitung pertambahan(+), pengurangan(-), perkalian(*), ataupun pembagian(/). Contohnya:
```
ingat a adalah 5
ingat b adalah 2

tulis a+b
tulis a-b
tulis a*b
tulis a/b
tulis (1+2)*2/2
```
maka akan menghasilkan
```
2
7
3
10
2.5
4
```
namun kamu tidak bisa melakukan operasi hitung pada tipe data string, karena mereka dibaca sebagai kalimat, bukan angka. Contoh:
```
ingat a adalah "5"
ingat b adalah "2"

tulis a+b
```
maka akan menghasilkan error:
```
Terdapat kesalahan pada baris ke-4: Tidak bisa melakukan operasi hitung karena variabel "a" bukan berisi angka
```
Jka kamu ingin mencoba menggabungkan string, gunakan simbol titik(.) seperti ini:
```
ingat nama adalah "Rafie"
tulis "Halo nama saya ".nama."!"
```
Maka akan menghasilkan:
```
Halo nama saya Rafie!
```
Jika kamu mencoba menggabungkan angka dengan penggabung string seperti ini:
```
ingat a adalah 5
ingat b adalah 7

tulis 5.7
```
maka akan menghasilkan
```
57
```

## 7. Percabangan
Dilihat dari namanya, percabangan berarti membagi jalur kode kita menjadi beberapa cabang. Jika sebelumnya kita membuat kode dengan 1 jalur seperti ini:
```
ingat uang adalah 50000
tulis uang
```
Sekarang bagaimana jika kita meningkatkan kode kita agar menjadi bercabang
```
ingat uang adalah 5000

jika uang lebih-dari 0
tulis "kamu punya uang"
akhiri jika
```
maka akan menghasilkan
```
kamu punya uang
```
Perintah "jika" digunakan untuk membandingkan 2 data, dalam contoh di atas kita mengecek apakah variabel uang lebih dari 0, dan jika lebih dari 0, maka tampilkan "kamu punya uang". Mari kita coba apa yang terjadi jika kita mengubah isi variabel uang menjadi 0
```
ingat uang adalah 0

jika uang lebih-dari 0
tulis "kamu punya uang"
akhiri jika
```
Maka tidak akan tampil apa apa
```

```
Sekarang kita tingkatkan lagi menjadi seperti ini
```
ingat uang adalah 5000

jika uang lebih-dari 0
tulis "kamu punya uang"
akhiri jika

jika uang lebih-dari 5000
tulis "Kamu bisa membeli es teh manis"
akhiri jika
```
maka hasilnya adalah
```
kamu punya uang 
Kamu bisa membeli es teh manis
```
Jangan lupa untuk memberi perintah "akhiri jika" untuk mengakhiri kode yang dijalankan perintah "jika". Kemudian kamu bisa mengkreasikan kodemu menjadi bercabang cabang, bahkan kamu bisa menambahkan perintah jika di dalam perintah jika seperti ini
```
ingat uang adalah 5000
ingat warung adalah "tutup"

jika uang lebih-dari 0
tulis "kamu punya uang"
akhiri jika

jika uang lebih-dari 5000
  jika warung sama-dengan "buka"
  tulis "Kamu bisa membeli es teh manis"
  akhiri jika

  jika warung sama-dengan "tutup"
  tulis "Kamu punya cukup uang untuk beli es teh manis tapi warungnya tutup"
  akhiri jika
akhiri jika
```
Maka hasilnya adalah
```
kamu punya uang
Kamu punya cukup uang untuk beli es teh manis tapi warungnya tutup
```
Pernyataan yang digunakan untuk membandingkan ada 4:
1. sama-dengan : untuk mengecek apakah data pertama dan kedua sama persis
2. berbeda-dengan : untuk mengecek apakah data pertama dan kedua berbeda
3. lebih-dari : untuk mengecek apakah data pertama lebih beear daripada data kedua (Hanya berlaku untuk angka)
4. kurang-dari : untuk mengecek apakah data pertama lebih kecil daripada data kedua (Hanya berlaku untuk angka)

## 8. Fungsi
Misalnya kamu memiliki kode yang ingin kamu pakai berkali-kali seperti ini:
```
tulis "Halo semuanya! Selamat pagi! Semoga sehat selalu"
tulis "Halo semuanya! Selamat pagi! Semoga sehat selalu"
tulis "Halo semuanya! Selamat pagi! Semoga sehat selalu"
tulis "Halo semuanya! Selamat pagi! Semoga sehat selalu"
```
pasti kamu akan melakukannya dengan mencopy paste kodenya berkali-kali, sebenarnya dalam dunia pemrograman, ada yang namanya fungsi.
Fungsi itu tujuannya untuk menyimpan sekumpulan kode yang bisa dipakai berulang-ulang tanpa menyalin ulanh kodenya, contoh:
```
fungsi menyapa
tulis "Halo semuanya! Selamat pagi! Semoga sehat selalu"
akhiri fungsi

jalankan menyapa
jalankan menyapa
jalankan menyapa
jalankan menyapa
```
Kode yang pertama dan kedua akan menghasilkan hasil yang sama. Seperti yang kamu lihat di atas, kita bisa membuat fungsi dengan perintah "fungsi", kemudian diiringi dengan nama fungsi, setelah itu di baris selanjutkan diisi dengan kode yang ingin kamu simpan di dalam fungsinya, dan terakhir jangan lupa menutup fungsi dengan perintah "akhiri fungsi". Untuk menjalankannya, kamu tinggal menulis perintah "jalankan" kemudian diiringi dengan nama fungsi yang ingin dijalankan. Sekarang kita coba membuat fungsi yang lebih kompleks
```
ingat a adalah 0

fungsi tambah
ingat a adalah a+1
tulis a
akhiri fungsi

jalankan tambah
jalankan tambah
jalankan tambah
jalankan tambah
jalankan tambah
```
Maka akan menghasilkan:
```
1
2
3
4
5
```
Di setiap bahasa pemrograman, ada yang namanya parameter fungsi, ia mirip seperti variabel, namun perbedaannya isi parameter bisa ditetapkan saat menjalankan fungsi, dan hanya berlaku di dalam fungsi. Mari kita langsung lihat saja ke contohnya:
```
fungsi perkenalan perlu nama
tulis "Halo nama saya ".nama
akhiri fungsi

jalankan perkenalan dengan "Rafie"
jalankan perkenalan dengan "Budi"
jalankan perkenalan dengan "Joko"
```
Maka akan menghasilkan:
```
Halo nama saya Rafie
Halo nama saya Budi
Halo nama saya Joko
```
untuk mendeklarasikan parameter, kamu bisa menulis kata "perlu" kemudian diiringi dengan nama parameternya. Kemudian untuk mengisi nilai parameter, kamu bisa menulis kata "dengan" diiringi dengan data yang ingin kamu isi ke parameternya. Jumlah parameter pada fungsi bisa lebih dari satu, contoh:
```
fungsi hitungLuasBalok perlu panjang lebar tinggi
tulis "Luas balok adalah ".panjang*lebar*tinggi
akhiri fungsi

jalankan hitungLuasBalok dengan 5 7 8
jalankan hitungLuasBalok dengan 2 3 9
jalankan hitungLuasBalok dengan 7 10 8
```
Maka akan menghasilkan
```
Luas balok adalah 280
Luas balok adalah 54
Luas balok adalah 560
```
