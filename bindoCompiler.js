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
    hasilJika:[null],
    dalamFungsi:null,
    fungsiBerjalan:null,
    checkpoint:null
  }
}

bindo.jalankan=kode=>{
  let waktuMulai = performance.now()
  bindo.init();

  let baris = kode.split('\n')
  while(bindo.proses.indexBaris<baris.length-1)
  {
    bindo.proses.indexBaris++;
    let isiBaris=baris[bindo.proses.indexBaris];
    if(isiBaris.trim()=='' || isiBaris.startsWith("//"))continue;
    let ini = bindo.sistem.bongkar(isiBaris);
    if(bindo.proses.dalamFungsi && ini.perintah!="akhiri")continue;
    if(bindo.proses.hasilJika[bindo.proses.kedalamanJika]===false && ini.perintah!="akhiri")continue;
    
    if(ini.perintah=="ingat")bindo.sintaks.ingat(ini.parameter);
    else if(ini.perintah=="tulis" || ini.perintah=="tampilkan")bindo.sintaks.tulis(ini.parameter);
    else if(ini.perintah=="jika" || ini.perintah=="kalau")bindo.sintaks.jika(ini.parameter);
    else if(ini.perintah=="akhiri")bindo.sintaks.akhiri(ini.parameter);
    else if(ini.perintah=="fungsi")bindo.sintaks.fungsi(ini.parameter);
    else if(ini.perintah=="jalankan")bindo.sintaks.jalankan(ini.parameter);
    else{bindo.sistem.error('Perintah "'+ini.perintah+'" tidak tersedia dalam bahasa pemrograman ini.')}
  }
  let sukses='Proses menjalankan berhasil ('+(performance.now()-waktuMulai)+' ms)';
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput+'<span class="bindo-success">'+sukses+'</span>';
  else{bindo.sistem.tampilkan(sukses)}
}


// ##### Fungsi Sistem #####
bindo.sistem = {};

bindo.sistem.bongkar=baris=>{
  let hasil = [];
  baris.split('"').forEach((v,i)=>{
    if(i%2==0){
      v.trim().split(" ").forEach(w=>{
        if(/[\+\-\*\/()]/.test(w) && w.length==1)bindo.sistem.error("Operasi hitung gagal dilakukan, cobalah cek tipe data milik data yang sedang dioperasikan");
        hasil.push({
        isi:w,
        tipe:(/[\d\+\-\*\/()]/.test(w) && !/[!@#$%^&_=\[\]{};':"\\|,.<>?$]/.test(w))?'angka':'keyword'
      })})
    }
    else{
      hasil.push({isi:v,tipe:"string"})
    }
  })
  hasil=hasil.filter(b=>(b.isi.toString().trim()!="" && b.tipe!='string') || b.tipe=='string');
  let hasilFinal=[];
  let gabung = false;
  hasil.forEach((v,i)=>{
    if(hasil[i].tipe=='keyword'){
    if(hasil[i].isi.startsWith('.') && hasil[i].isi.endsWith('.')){
      if(hasilFinal[hasilFinal.length-1]==undefined)hasilFinal[hasilFinal.length-1]=[];
      hasil[i].isi.split('.').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
        }
      })
      gabung=true;
    }
    else if(hasil[i].isi.startsWith('.')){
      if(hasilFinal[hasilFinal.length-1]==undefined)hasilFinal[hasilFinal.length-1]=[];
      hasil[i].isi.split('.').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe})
        }
      })
    }
    else if(hasil[i].isi.endsWith('.')){
      hasilFinal[hasilFinal.length]=[];
      hasil[i].isi.split('.').forEach(w=>{
        if(w.trim().length){
          hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe});
        }
      })
      gabung=true;
    }
    else{
      hasilFinal[hasilFinal.length]=[];
      hasil[i].isi.split('.').forEach(w=>{
        hasilFinal[hasilFinal.length-1].push({isi:w,tipe:hasil[i].tipe})
      })
    }
    }
    else{
      if(!gabung)hasilFinal[hasilFinal.length]=[hasil[i]];
      else{
        hasilFinal[hasilFinal.length-1]=hasilFinal[hasilFinal.length-1].concat(hasil[i])
        gabung=false;
      }
    }
  })
  hasilFinal=hasilFinal.map(w=>w.length>1?w:w[0]);
  if(Array.isArray(hasilFinal[0]))bindo.sistem.error('Perintah tidak boleh menggunakan string concat');
  
  return {
    perintah: hasilFinal[0].isi.toLowerCase().trim(),
    parameter: hasilFinal.slice(1)
  }
}

bindo.sistem.error=pesan=>{
  let info='Terdapat kesalahan pada baris ke-'+(bindo.proses.indexBaris+1)+': ';
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput+'<span class="bindo-error">'+info+pesan+'</span><br>';
  throw Error(info+pesan);
}

bindo.sistem.tampilkan=kalimat=>{
  if(bindo.konsol)console.log(kalimat);
  else{
    bindo.proses.stringOutput+=kalimat+"<br>";
  }
}

bindo.sistem.dapatkan=konten=>{
  if(!Array.isArray(konten))konten=[konten];
  let ketemuString=false;
  return {isi:konten.reduce((a,b,i)=>{
    if(b.tipe=='keyword' && /[\d\+\-\*\/()]/.test(b.isi) && !/[!@#$%^&_=\[\]{};':"\\|,.<>?$]/.test(b.isi))b.tipe='angka';
    if(b.tipe=='angka'){
      let isi;
      b.isi.split(/[\+\-\*\/()]/).forEach(v=>{
          if(v==0)return;
          if(v.trim().length && !parseFloat(v)){
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
      if(bindo.proses.fungsiBerjalan){
        if(bindo.proses.fungsiBerjalan.argumen.has(konten[i].isi)){
          let c=bindo.proses.fungsiBerjalan.argumen.get(konten[i].isi);
          if(c===null)bindo.sistem.error('Parameter "'+konten[i].isi+'" belum terisi')
          if(c.tipe=='string')ketemuString=true;
          return a+c.isi;
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

bindo.sistem.validasiNama=namaVariabel=>{
  if(/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(namaVariabel.isi))bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh mengandung simbol");
  if(namaVariabel.tipe=="string")bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh string");
  if(namaVariabel.tipe=="angka")bindo.sistem.error("Nama variabel, fungsi, ataupun parameter tidak boleh angka");
  return namaVariabel.isi;
}

// ####Sintaks####
bindo.sintaks={}

bindo.sintaks.ingat=parameter=>{
  if(parameter.length<3){
    bindo.sistem.error("Perintah ini membutuhkan 3 parameter.")
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
    bindo.sistem.error("Perintah ini membutuhkan 1 parameter.")
  }

  let konten=bindo.sistem.dapatkan(parameter[0]);
  bindo.sistem.tampilkan(konten.isi);
}

bindo.sintaks.jika=parameter=>{
  if(parameter.length<3){
    bindo.sistem.error("Perintah ini membutuhkan 3 parameter.")
  }
  let variabel1=bindo.sistem.dapatkan(parameter[0]);
  let variabel2=bindo.sistem.dapatkan(parameter[2]);
  
  let pernyataan=parameter[1].isi.toLowerCase();
  let hasil;
  if(pernyataan=="sama-dengan" || pernyataan=="=" || pernyataan=="==" || pernyataan=="adalah"){
    if(variabel1.isi===variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="lebih-dari" || pernyataan==">"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda lebih dari karena variabel yang dibandingkan bukanlah angka")
    if(parseFloat(variabel1.isi)>parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="kurang-dari" || pernyataan=="<"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda kurang dari karena variabel yang dibandingkan bukanlah angka")
    if(parseFloat(variabel1.isi)<parseFloat(variabel2.isi))hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="berbeda-dengan" || pernyataan=="!=" || pernyataan=="bukan"){
    if(variabel1.isi!==variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else{bindo.sistem.error('Pernyataan "'+pernyataan+'" bukanlah pernyataan yang tepat untuk membandingkan dua variabel')}
  
  bindo.proses.kedalamanJika++;
  bindo.proses.hasilJika[bindo.proses.kedalamanJika]=hasil;
}

bindo.sintaks.akhiri=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini membutuhkan 1 parameter.")
  }
  if(parameter[0].isi.toLowerCase()=="jika"){
    if(!bindo.proses.dalamFungsi){
      if(bindo.proses.kedalamanJika<=0)bindo.sistem.error('Tidak bisa mengakhiri perintah "jika" karena tidak ada perintah tersebut yang sedang berjalan');
      bindo.proses.kedalamanJika--;
    }
  }
  else if(parameter[0].isi.toLowerCase()=="fungsi"){
    if(bindo.proses.fungsiBerjalan){
      bindo.proses.indexBaris=bindo.proses.checkpoint;
      bindo.proses.fungsiBerjalan=null;
    }
    else{
      if(!bindo.proses.dalamFungsi)bindo.sistem.error('Tidak bisa mengakhiri perintah "fungsi" karena tidak ada fungsi yang sedang dideklarasi');
      bindo.fungsi.set(bindo.proses.dalamFungsi.namaFungsi,{
        argumen:bindo.proses.dalamFungsi.argumen,
        indexAwal:bindo.proses.dalamFungsi.indexAwal
      });
      bindo.proses.dalamFungsi=null;
    }
  }
  else{bindo.sistem.error('"'+parameter[0].isi+'" bukanlah sesuatu yang bisa diakhiri')}
}

bindo.sintaks.fungsi=parameter=>{
  if(parameter.length<1){
    bindo.sistem.error("Perintah ini minimal membutuhkan 2 parameter.")
  }
  if(bindo.proses.dalamFungsi)bindo.sistem.error("Tidak bisa mendeklarasikan fungsi karena masih ada pendeklarasian fungsi yang belum diakhiri")
  let namaFungsi = bindo.sistem.validasiNama(parameter[0]);
  
  let argumen = new Map();
  if(parameter.length>1){
    if(parameter[1].isi.toLowerCase()!='perlu')bindo.sistem.error('Parameter kedua fungsi harus bertuliskan "perlu"')
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
  if(bindo.proses.fungsiBerjalan)bindo.sistem.error('Tidak bisa menjalankan fungsi di dalam fungsi');
  if(!bindo.fungsi.has(parameter[0].isi))bindo.sistem.error('Tidak ada fungsi yang bernama "'+parameter[0].isi+'"')
  let fungsi = bindo.fungsi.get(parameter[0].isi);
  if(parameter.length>1){
    if(parameter[1].isi!='dengan')bindo.sistem.error('Paramater kedua harus bertuliskan "dengan"')
    parameter.slice(2).forEach((v,i)=>{
      fungsi.argumen.set(Array.from(fungsi.argumen.keys())[i],bindo.sistem.dapatkan(v))
    });
  }
  console.log(fungsi)
  bindo.proses.fungsiBerjalan=fungsi;
  bindo.proses.checkpoint=bindo.proses.indexBaris;
  bindo.proses.indexBaris=fungsi.indexAwal;
}
