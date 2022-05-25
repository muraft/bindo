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
tampilkan favorit
```

maka hasilnya adalah

```
teh
```

Jika kamu ingin mengganti isi variabel, kamu bisa mengulang perintah serupa namun dengan isi yang berbeda

```
ingat favorit adalah "teh"
ingat favorit adalah "kopi"
tampilkan favorit
```

maka hasilnya adalah

```
kopi
```

Jika kamu ingin variabelmu bersifat konstan atau tidak bisa diubah, kamu bisa mengubah "adalah" menjadi "pasti"

```
ingat favorit pasti "teh"
ingat favorit adalah "kopi"
tampilkan favorit
```

maka hasilnya adalah

```
Terdapat kesalahan pada baris ke-3: Variabel favorit adalah konstan sehingga isinya tidak bisa diubah.
```

Bagian 3 segera hadir...
