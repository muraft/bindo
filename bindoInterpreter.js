const bindo={konsol:true,output:null};

bindo.init=()=>{
  if(!bindo.konsol && !(bindo.output instanceof Element))throw Error("bindo.output harus berisi elemen HTML");
  console.clear();
  bindo.variabel = new Map();
  bindo.fungsi = new Map();
  bindo.proses = {
    indexBaris:-1,
    stringOutput:"",
    kedalamanJika:0,
    dataPercabangan:[{nilai:true,jumlahCabang:0,pernahBenar:false,berakhir:false}],
    dalamFungsi:null,
    fungsiBerjalan:[],
    perulanganBerjalan:[],
    checkpoint:[]
  };
};

bindo.jalankan=kode=>{
  let waktuMulai = performance.now();
  bindo.init();

  let baris = kode.split('\n');
  while(bindo.proses.indexBaris<baris.length-1)
  {
    bindo.proses.indexBaris++;
    let isiBaris=baris[bindo.proses.indexBaris];
    if(isiBaris.trim()=='' || isiBaris.startsWith("//"))continue;
    let ini = bindo.sistem.bongkar(isiBaris);
    if(bindo.proses.dalamFungsi && ini.perintah!="tutup")continue;
    if(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-2] && !bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-2].nilai && ini.perintah!="tutup" && ini.perintah!="cabang")continue;
    if(bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1] && !bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].berjalan && ini.perintah!="tutup" && ini.perintah!="perulangan")continue;

    if(ini.perintah=="ingat")bindo.sintaks.ingat(ini.parameter);
    else if(ini.perintah=="tulis" || ini.perintah=="tampilkan")bindo.sintaks.tulis(ini.parameter);
    else if(ini.perintah=="jika")bindo.sintaks.jika(ini.parameter);
    else if(ini.perintah=="atau")bindo.sintaks.atau(ini.parameter);
    else if(ini.perintah=="selain")bindo.sintaks.selain(ini.parameter);
    else if(ini.perintah=="tutup")bindo.sintaks.tutup(ini.parameter);
    else if(ini.perintah=="fungsi")bindo.sintaks.fungsi(ini.parameter);
    else if(ini.perintah=="jalankan")bindo.sintaks.jalankan(ini.parameter);
    else if(ini.perintah=="ulangi")bindo.sintaks.ulangi(ini.parameter);
    else{bindo.sistem.error('Perintah "'+ini.perintah+'" tidak tersedia dalam bahasa pemrograman ini.')}
  }
  let sukses='Proses menjalankan berhasil ('+(performance.now()-waktuMulai)+' ms)';
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput+'<span class="bindo-sukses">'+sukses+'</span>';
  else{bindo.sistem.tampilkan(sukses)}
};


// ##### Fungsi Sistem #####
bindo.sistem = {};

bindo.sistem.bongkar=baris=>{
  let hasil = [];
  baris.split('"').forEach((v,i)=>{
    if(i%2==0){
      v.trim().split(" ").forEach(w=>{
        if(/[\+\-\*\/.()]/.test(w) && w.length==1)bindo.sistem.error("Operasi hitung gagal dilakukan, cobalah cek tipe data milik data yang sedang dioperasikan");
        hasil.push({
        isi:w,
        tipe:(/[\d\+\-\*\/.()]/.test(w) && !/[!@#$%^&_=\[\]{};':"\\|,<>?$]/.test(w))?
        ((!/[\+\-\*\/]/.test(w) && /\d/.test(w) && /[A-Za-z]/.test(w))?'keyword':'angka')
        :'keyword'
      })});
    }
    else{
      hasil.push({isi:v,tipe:"string"});
    }
  });
  hasil=hasil.filter(b=>(b.isi.toString().trim()!="" && b.tipe!='string') || b.tipe=='string');
  let hasilFinal=[];
  let gabung = false;

  hasil.forEach((v,i)=>{
    if(hasil[i].tipe=='keyword' && hasil[i].isi.includes('&')){
    if(hasil[i].isi.startsWith('&') && hasil[i].isi.endsWith('&')){
      if(hasilFinal[hasilFinal.length-1]==undefined)hasilFinal[hasilFinal.length-1]=[];
      hasil[i].isi.split('&').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
        }
      });
      gabung=true;
    }
    else if(hasil[i].isi.startsWith('&')){
      if(hasilFinal[hasilFinal.length-1]==undefined)hasilFinal[hasilFinal.length-1]=[];
      hasil[i].isi.split('&').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
        }
      });
    }
    else if(hasil[i].isi.endsWith('&')){
      hasilFinal.push([]);
      hasil[i].isi.split('&').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
        }
      });
      gabung=true;
    }
    else{
      hasilFinal.push([]);
      hasil[i].isi.split('&').forEach(w=>{
        hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
      });
    }
    }
    else{
      if(!gabung)hasilFinal.push([hasil[i]]);
      else{
        hasilFinal[hasilFinal.length-1]=hasilFinal[hasilFinal.length-1].concat(hasil[i]);
        gabung=false;
      }
    }
  });
  hasilFinal=hasilFinal.map(w=>w.length>1?w:w[0]);
  if(Array.isArray(hasilFinal[0]))bindo.sistem.error('Perintah tidak boleh menggunakan string concat');

  return {
    perintah: hasilFinal[0].isi.toLowerCase().trim(),
    parameter: hasilFinal.slice(1)
  };
};

bindo.sistem.error=pesan=>{
  let info='Terdapat kesalahan pada baris ke-'+(bindo.proses.indexBaris+1)+': ';
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput+'<span class="bindo-error">'+info+pesan+'</span><br>';
  throw Error(info+pesan);
};

bindo.sistem.tampilkan=kalimat=>{
  if(bindo.konsol)console.log(kalimat);
  else{
    bindo.proses.stringOutput+=kalimat+"<br>";
  }
};

bindo.sistem.dapatkan=konten=>{
  if(!Array.isArray(konten))konten=[konten];
  let ketemuString=false;
  return {isi:konten.reduce((a,b,i)=>{
    if(b.tipe=='keyword' && /\d/.test(b.isi) && !/[A-Za-z!@#$%^&_=\[\]{};':"\\|,<>?$]/.test(b.isi)){
         b.tipe='angka';
    }

    if(b.tipe=='angka'){
      let isi;
      b.isi.split(/[\+\-\*\/()]/).forEach(v=>{
          if(v==0)return;
          if(v.trim().length && /[A-Za-z]/.test(v)){
            let konten = bindo.sistem.dapatkan({isi:v,tipe:'keyword'});
            if(konten.tipe!='angka')bindo.sistem.error('Tidak bisa melakukan operasi hitung karena variabel "'+v+'" bukan berisi angka');
            b.isi=b.isi.replace(RegExp(v),konten.isi);
          }
        })
      try {
        isi=eval(b.isi);
      } catch (e) {bindo.sistem.error("Operasi hitung gagal dilakukan, cobalah teliti lagi penempatan lambang operasi hitung")}
      return a+isi;
    }
    else if(b.tipe=='keyword'){
      if(bindo.proses.fungsiBerjalan.length){
        if(bindo.proses.fungsiBerjalan[bindo.proses.fungsiBerjalan.length-1].argumen.has(konten[i].isi)){
          let c=bindo.proses.fungsiBerjalan[bindo.proses.fungsiBerjalan.length-1].argumen.get(konten[i].isi);
          if(c && c.tipe=='string')ketemuString=true;
          if(c)return a+c.isi;
        }
      }
      if(bindo.proses.perulanganBerjalan.length){
      	for(let i=0;i<bindo.proses.perulanganBerjalan.length;i++){
      		if(bindo.proses.perulanganBerjalan[i].tipe=='untuk' && bindo.proses.perulanganBerjalan[i].namaVariabel==b.isi)return a+bindo.proses.perulanganBerjalan[i].kondisi[0].isi;
      	}
      }

      if(!bindo.variabel.has(b.isi))bindo.sistem.error('Tidak ada variabel yang bernama "'+b.isi+'"');
      let c=bindo.variabel.get(b.isi);
      if(c.tipe=='string')ketemuString=true;
      return a+c.isi;
      }else{
        ketemuString=true;
        return a+b.isi;
      }
  },''),tipe:ketemuString?'string':'angka'}
}

bindo.sistem.validasiNama=nama=>{
  if(/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(nama.isi))bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh mengandung simbol");
  if(nama.tipe=="string")bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh string");
  if(nama.tipe=="angka")bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh angka");
  return nama.isi;
}

// ####Sintaks####
bindo.sintaks={}

bindo.sintaks.ingat=parameter=>{
  if(parameter.length<3){
    bindo.sistem.error("Perintah ini membutuhkan 3 parameter.");
  }

  let namaVariabel = bindo.sistem.validasiNama(parameter[0]);
  let konjungsi = parameter[1].isi.toLowerCase();
  let konstan;
  if(konjungsi=="adalah")konstan=false;
  else if(konjungsi=="pasti")konstan=true;
  else{
    bindo.sistem.error(konjungsi+' bukanlah kongjungsi yang tepat, pililah "adalah" atau "pasti"');
  }

  let konten = bindo.sistem.dapatkan(parameter[2]);
  if(bindo.variabel.has(namaVariabel) && bindo.variabel.get(namaVariabel).konstan)bindo.sistem.error("Variabel "+namaVariabel+" adalah konstan sehingga isinya tidak bisa diubah.");
  konten.konstan=konstan;
  bindo.variabel.set(namaVariabel,konten);
}

bindo.sintaks.tulis=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini membutuhkan 1 parameter.");
  }

  let konten=bindo.sistem.dapatkan(parameter[0]);
  if(parameter[1] && parameter[1].isi.toLowerCase()=="!tipe")bindo.sistem.tampilkan(`(${konten.tipe}): ${konten.isi}`)
  else {bindo.sistem.tampilkan(konten.isi)}
}

bindo.sintaks.jika=(parameter,tipe="jika")=>{
  let hasil;
  if(tipe!="selain-itu"){
  if(parameter.length<3){
    bindo.sistem.error('Perintah "jika" membutuhkan 3 parameter.');
  }
  let variabel1=bindo.sistem.dapatkan(parameter[0]);
  let variabel2=bindo.sistem.dapatkan(parameter[2]);

  let pernyataan=parameter[1].isi.toLowerCase();
  if(pernyataan=="sama-dengan" || pernyataan=="==" || pernyataan=="adalah"){
    if(variabel1.isi===variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="lebih-dari" || pernyataan==">"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda lebih dari karena variabel yang dibandingkan bukanlah angka");
    if(parseFloat(variabel1.isi)>parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="kurang-dari" || pernyataan=="<"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda kurang dari karena variabel yang dibandingkan bukanlah angka");
    if(parseFloat(variabel1.isi)<parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="lebih-dari-sama-dengan" || pernyataan=="lebih-dari-smd" || pernyataan==">="){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda lebih dari atau sama dengan karena variabel yang dibandingkan bukanlah angka");
    if(parseFloat(variabel1.isi)>=parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="kurang-dari-sama-dengan" || pernyataan=="kurang-dari-smd" || pernyataan=="<="){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda kurang dari atau sama dengan karena variabel yang dibandingkan bukanlah angka");
    if(parseFloat(variabel1.isi)<=parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="berbeda-dengan" || pernyataan=="!=" || pernyataan=="bukan"){
    if(variabel1.isi!==variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else{bindo.sistem.error('Pernyataan "'+pernyataan+'" bukanlah pernyataan yang tepat untuk membandingkan dua variabel')}
  if(tipe=='perulangan')return hasil;
  }


  if(tipe=='jika'){
       bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].nilai=hasil;
       bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].berakhir=false;
  }
  else if(tipe=='atau-jika'){
       bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].nilai=(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].pernahBenar)?false:hasil;
  }
  else{
       bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].nilai=(!bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].pernahBenar)?true:false;
       bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].berakhir=true;
  }

  if(hasil)bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].pernahBenar=true;
  if(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-2] && bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-2].nilai==false)bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].nilai=false;
  bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].jumlahCabang++;
  bindo.proses.dataPercabangan.push({nilai:true,jumlahCabang:0,pernahBenar:false,berakhir:false});
}

bindo.sintaks.atau=parameter=>{
	if(parameter.length<1 || parameter[0].isi.toLowerCase()!='jika')bindo.sistem.error('Parameter pertama perintah "atau" harus bertuliskan "jika"');
     if(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].jumlahCabang<=0)bindo.sistem.error('Tidak bisa menggunakan perintah "atau jika" karena tidak ada perintah "jika" sebelumnya');
     if(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].berakhir)bindo.sistem.error('Tidak bisa menggunakan perintah "atau jika" setelah "selain itu"');
     bindo.sintaks.jika(parameter.slice(1),'atau-jika');
}

bindo.sintaks.selain=parameter=>{
	if(parameter.length<1 || parameter[0].isi.toLowerCase()!='itu')bindo.sistem.error('Parameter pertama perintah "selain" harus bertuliskan "itu"');
     if(bindo.proses.dataPercabangan[bindo.proses.dataPercabangan.length-1].jumlahCabang<=0)bindo.sistem.error('Tidak bisa menggunakan perintah "selain-itu" karena tidak ada perintah "jika" sebelumnya')
     bindo.sintaks.jika(parameter.slice(1),'selain-itu');
}

bindo.sintaks.tutup=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini membutuhkan 1 parameter.")
  }
  if(parameter[0].isi.toLowerCase()=="cabang"){
    if(!bindo.proses.dalamFungsi){
      if(bindo.proses.dataPercabangan.length<=1)bindo.sistem.error('Tidak bisa menutup perintah "jika" karena tidak ada perintah tersebut yang sedang berjalan');
      bindo.proses.dataPercabangan.pop();
    }
  }
  else if(parameter[0].isi.toLowerCase()=="fungsi"){
    if(bindo.proses.fungsiBerjalan.length){
      bindo.proses.indexBaris=bindo.proses.checkpoint[bindo.proses.checkpoint.length-1];
      bindo.proses.checkpoint.pop();
      bindo.proses.fungsiBerjalan.pop();
      bindo.proses.dataPercabangan.pop();
    }
    else{
      if(!bindo.proses.dalamFungsi)bindo.sistem.error('Tidak bisa menutup perintah "fungsi" karena tidak ada fungsi yang sedang dideklarasi');
      bindo.fungsi.set(bindo.proses.dalamFungsi.namaFungsi,{
        argumen:bindo.proses.dalamFungsi.argumen,
        indexAwal:bindo.proses.dalamFungsi.indexAwal
      });
      bindo.proses.dalamFungsi=null;
    }
  }
  else if(parameter[0].isi.toLowerCase()=="perulangan"){
  	if(!bindo.proses.perulanganBerjalan.length)bindo.sistem.error('Tidak bisa menutup perintah "ulangi" karena tidak ada perulangan yang sedang berjalan');
    const checkpoint=bindo.proses.indexBaris;
    bindo.proses.indexBaris=bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].index;
  	if(bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].tipe=='untuk')bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].kondisi[0].isi=bindo.sistem.dapatkan({isi:bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].perubahan,tipe:'angka'}).isi;
  	if(bindo.sintaks.jika(bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].kondisi,'perulangan')){
      bindo.proses.dataPercabangan.pop();
      bindo.proses.dataPercabangan.push({nilai:true,jumlahCabang:0,pernahBenar:false,berakhir:false});
    }
  	else{
      bindo.proses.indexBaris=checkpoint;
      bindo.proses.perulanganBerjalan.pop()
      bindo.proses.dataPercabangan.pop();
    }
  }
  else{bindo.sistem.error('"'+parameter[0].isi+'" bukanlah perintah yang perlu ditutup')}
}

bindo.sintaks.fungsi=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini minimal membutuhkan 2 parameter.");
  }
  if(bindo.proses.fungsiBerjalan.length)bindo.sistem.error("Tidak bisa mendeklarasikan fungsi di dalam fungsi");
  if(bindo.proses.perulanganBerjalan.length)bindo.sistem.error("Tidak bisa mendeklarasikan fungsi di dalam perulangan");
  let namaFungsi = bindo.sistem.validasiNama(parameter[0]);

  let argumen = new Map();
  if(parameter.length>1){
    if(parameter[1].isi.toLowerCase()!='perlu')bindo.sistem.error('Parameter kedua fungsi harus bertuliskan "perlu"');
    parameter.slice(2).forEach(v=>{
      argumen.set(bindo.sistem.validasiNama(v),null);
    });
  }
  bindo.proses.dalamFungsi = {namaFungsi,argumen,indexAwal:bindo.proses.indexBaris};
}

bindo.sintaks.jalankan=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini minimal membutuhkan 1 parameter.")
  }

  if(!bindo.fungsi.has(parameter[0].isi))bindo.sistem.error('Tidak ada fungsi yang bernama "'+parameter[0].isi+'"');
  let fungsi = bindo.fungsi.get(parameter[0].isi);
  if(parameter.length>1){
    if(parameter[1].isi!='dengan')bindo.sistem.error('Paramater kedua harus bertuliskan "dengan"');
    parameter.slice(2).forEach((v,i)=>{
      fungsi.argumen.set(Array.from(fungsi.argumen.keys())[i],bindo.sistem.dapatkan(v))
    });
  }

  bindo.proses.fungsiBerjalan.push(fungsi);
  bindo.proses.checkpoint.push(bindo.proses.indexBaris);
  bindo.proses.dataPercabangan.push({nilai:true,jumlahCabang:0,pernahBenar:false,berakhir:false});
  bindo.proses.indexBaris=fungsi.indexAwal;
}

bindo.sintaks.ulangi=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error('Perintah "ulangi" memerlukan parameter pertama untuk mendefinisikan tipe perulangan')
  }
  let data={index:bindo.proses.indexBaris};
  if(parameter[0].isi.toLowerCase()=='untuk'){
    if(parameter.length<6){
      bindo.sistem.error('Perulangan "untuk" membutuhkan 5 parameter selanjutnya')
    }
    let namaVariabel=bindo.sistem.validasiNama(parameter[1]);
    if(parameter[2].isi.toLowerCase()!='dari')bindo.sistem.error('Parameter kedua perulangan-untuk harus bertuliskan "dari"');
    let awal=bindo.sistem.dapatkan(parameter[3]);
    if(awal.tipe!='angka')bindo.sistem.error('Bilangan awal perulangan harus bertipe angka');
    if(parameter[4].isi.toLowerCase()!='sampai')bindo.sistem.error('Parameter ketiga perulangan-untuk harus bertuliskan "dari"');
    let akhir=bindo.sistem.dapatkan(parameter[5]);
    if(akhir.tipe!='angka')bindo.sistem.error('Bilangan akhir perulangan harus bertipe angka');
    let lambang=parseInt(awal.isi)<=parseInt(akhir.isi)?'<=':'>=';
    Object.assign(data,{
      tipe:'untuk',
      namaVariabel,
      kondisi:[awal,{isi:lambang,tipe:'keyword'},akhir],
      perubahan:parameter[6]?parameter[6].isi:lambang=='<='?namaVariabel+'+1':namaVariabel+'-1',
      berjalan:(!bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1] || bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1] && bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].berjalan)
    });
  }
  else if(parameter[0].isi.toLowerCase()=='jika'){
  	if(parameter.length<4){
      bindo.sistem.error('Perulangan "jika" membutuhkan 3 parameter selanjutnya')
    }
  	const kondisi = parameter.slice(1);
  	Object.assign(data,{
      tipe:'jika',
      kondisi:kondisi,
      berjalan:(bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1] && !bindo.proses.perulanganBerjalan[bindo.proses.perulanganBerjalan.length-1].berjalan)?false:bindo.sintaks.jika(kondisi,'perulangan')
    });
  }
  else{bindo.sistem.error(parameter[0].isi+' bukanlah tipe perulangan yang tepat')}
  bindo.proses.dataPercabangan.push({nilai:true,jumlahCabang:0,pernahBenar:false,berakhir:false});
  bindo.proses.perulanganBerjalan.push(data);
}
