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

## 2. Menggunakan variabel
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

## 3. Apa bedanya pakai petik dua dan tidak?
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
## 4. Tipe data
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
## 5. Percabangan
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
