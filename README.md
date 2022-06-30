Bindo adalah [toy programming language](https://www.techopedia.com/definition/22609/toy-language) atau bahasa pemrograman yang hanya digunakan untuk main-main ataupun edukasi, bukan untuk membuat program tingkat tinggi. Bahasa ini dibuat menggunakan JavaScript, sehingga bahasa ini berfungsi sebagai library JavaScript

# Perkenalan
![logo Bindo](logo.jpg)
Bindo adalah singkatan dari Bahasa Indonesia, sesuai namanya, Bindo menggunakan perintah yang mudah dibaca dan dipahami bagi orang yang belum terlalu familiar dengan bahasa pemrograman karena perintahnya menggunakan kosa kata Bahasa Indonesia

```
ingat salam adalah "Assalamualaikum"
tulis salam
```

Hasil:

```
Assalamualaikum
```

Untuk saat ini Bindo masih berada di versi awal sehingga hanya memiliki sedikit fitur, fitur lainnya akan dikembangkan di versi mendatang. Jika kalian ingin melaporkan bug atau memberi kritik & saran, kunjungi [issues](https://github.com/muraft/bindo/issues)

Untuk mencoba Bindo secara online, kamu bisa kunjungi https://muraft.github.io/bindo

# Instalasi interpreter
Untuk output di console
```javascript
<textarea id="kode"></textarea>
<br>
<button onclick="jalankan()">Jalankan</button>
<script src="https://cdn.jsdelivr.net/gh/muraft/bindo/bindoInterpreter.min.js"></script>
<script>
     function jalankan(){
          bindo.jalankan(document.getElementById('kode').value)
     }
</script>
```
Untuk output di elemen html
```javascript
<textarea id="kode"></textarea>
<br>
<button onclick="jalankan()">Jalankan</button>
<div id="output"></div>
<script src="https://cdn.jsdelivr.net/gh/muraft/bindo/bindoInterpreter.min.js"></script>
<script>
     bindo.console = false;
     bindo.output = document.getElementById("output);
     function jalankan(){
          bindo.jalankan(document.getElementById('kode').value)
     }
</script>
```

# Pelajari lebih lanjut
- Untuk mempelajari dasar-dasar bahasa ini, kunjungi [tutorial.md](tutorial.md)
- Untuk memlihat daftar perintah di bahasa ini dan penggunaannya, kunjungi [perintah.md](perintah.md)
- Untuk mengkonfigurasi interpreter Bindo di websitemu, kunjungi [konfigurasi.md](konfigurasi.md)
- Untuk melihat changelog dan versi terbaru bahasa ini, kunjungi [releases](https://github.com/coolraptor08/bindo/releases)
