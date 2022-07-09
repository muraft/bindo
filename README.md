Bindo adalah [toy programming language](https://www.techopedia.com/definition/22609/toy-language) atau bahasa pemrograman yang hanya digunakan untuk main-main ataupun edukasi, bukan untuk membuat program tingkat tinggi. Bahasa ini dibuat menggunakan JavaScript, sehingga bahasa ini berfungsi sebagai library JavaScript

<h2>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
Perkenalan
</h2>

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

Klik tombol di bawah ini untuk mencoba Bindo secara online
<br>
<br>
<a href="https://muraft.github.io/bindo"><button><font size="5" face="Times New Roman ">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>
Coba sekarang
</font></button></a>


<h2>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
Instalasi interpreter
</h2>

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
<script src="https://cdn.jsdelivr.net/gh/muraft/bindo/bindoCompiler.min.js"></script>
<script>
     bindo.konsol = false;
     bindo.output = document.getElementById('output');
     function jalankan(){
          bindo.jalankan(document.getElementById('kode').value)
     }
</script>
```

<h2>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
Pelajari lebih lanjut
</h2>
<a href="dokumentasi" margin><button><font size="5" face="Times New Roman ">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-md" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM.706 13.189v2.66H0V11.85h.806l1.14 2.596h.026l1.14-2.596h.8v3.999h-.716v-2.66h-.038l-.946 2.159h-.516l-.952-2.16H.706Zm3.919 2.66V11.85h1.459c.406 0 .741.078 1.005.234.263.157.46.383.589.68.13.297.196.655.196 1.075 0 .422-.066.784-.196 1.084-.131.301-.33.53-.595.689-.264.158-.597.237-1 .237H4.626Zm1.353-3.354h-.562v2.707h.562c.186 0 .347-.028.484-.082a.8.8 0 0 0 .334-.252 1.14 1.14 0 0 0 .196-.422c.045-.168.067-.365.067-.592a2.1 2.1 0 0 0-.117-.753.89.89 0 0 0-.354-.454c-.159-.102-.362-.152-.61-.152Z"/>
</svg>
Dokumentasi
</font></button></a>
<br><br>
<a href="https://github.com/coolraptor08/bindo/releases"><button><font size="5" face="Times New Roman ">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>
Changelog
</font></button></a>
