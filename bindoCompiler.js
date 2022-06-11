const bindo={konsol:true,output:null,sistem:{}};

bindo.init=()=>{
  if(!bindo.konsol && !(bindo.output instanceof Element))throw Error("bindo.output harus berisi elemen HTML");
  console.clear();
  bindo.variabel = new Map();
  bindo.proses = {
    indexBaris:0,
    dataBaris:[],
    stringOutput:"",
    kedalamanJika:0,
    hasilJika:[null]
  }
}

bindo.jalankan= kode=>{
  bindo.init();

  let baris = kode.split('\n')
  for(bindo.proses.indexBaris;bindo.proses.indexBaris<baris.length;bindo.proses.indexBaris++)
  {
    let isiBaris=baris[bindo.proses.indexBaris];
    if(isiBaris.trim()=='' || isiBaris.startsWith("//"))continue;
    let ini = bindo.sistem.bongkar(isiBaris);
    if(bindo.proses.hasilJika[bindo.proses.kedalamanJika]===false && ini.perintah!="akhiri")continue;
    
    if(ini.perintah=="ingat")bindo.sintaks.ingat(ini.parameter);
    else if(ini.perintah=="tulis" || ini.perintah=="tampilkan")bindo.sintaks.tulis(ini.parameter);
    else if(ini.perintah=="jika" || ini.perintah=="kalau")bindo.sintaks.jika(ini.parameter);
    else if(ini.perintah=="akhiri")bindo.sintaks.akhiri(ini.parameter);
    else{bindo.sistem.error('Perintah "'+ini.perintah+'" tidak tersedia dalam bahasa pemrograman ini.')}
    bindo.proses.dataBaris.push(ini);
  }
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput;
  bindo.sistem.tampilkan("Proses menjalankan berhasil")
}


// ##### Fungsi Sistem #####
bindo.sistem = {};

bindo.sistem.bongkar=baris=>{
  let hasil = [];
  baris.split('"').forEach((v,i)=>{
    if(i%2==0){
      v.trim().split(" ").forEach(w=>{
        let tipe = (/[a-zA-Z!@#$%^&()_=\[\]{};':"\\|,.<>?$]/).test(w)==false && w.length>0 && (/\d/).test(w)==true?"angka":"keyword";
        let isi = tipe=="angka"?parseFloat(eval(w)):w;
        hasil.push({isi,tipe});
      })
    }
    else{
      hasil.push({
        isi:v,
        tipe: "string"
      })
    }
  })
  hasil=hasil.filter(b=>b.isi.toString().trim()!="");
  
  return {
    perintah: hasil[0].isi.toLowerCase().trim(),
    parameter: hasil.slice(1)
  }
}

bindo.sistem.error=pesan=>{
  let info='Terdapat kesalahan pada baris ke-'+(bindo.proses.indexBaris+1)+': ';
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput+'<font color="red">'+info+pesan+'</font><br>';
  throw Error(info+pesan);
}

bindo.sistem.tampilkan=kalimat=>{
  if(bindo.konsol)console.log(kalimat);
  else{
    bindo.proses.stringOutput+=kalimat+"<br>";
  }
}

bindo.sistem.dapatkan=konten=>{
  if(konten.tipe=="keyword"){
    if(!bindo.variabel.has(konten.isi))bindo.sistem.error('Tidak ada variabel yang bernama "'+konten.isi+'"');;
    return bindo.variabel.get(konten.isi);
  }
  return konten
}

// ####Sintaks####
bindo.sintaks={}

bindo.sintaks.ingat=parameter=>{
  if(parameter.length<3){
    bindo.sistem.error("Perintah ini membutuhkan 3 parameter.")
  }

  if(parameter[0].tipe=="string")bindo.sistem.error("Nama variabel tidak boleh string")
  if(parameter[0].tipe=="angka")bindo.sistem.error("Nama variabel tidak boleh angka")
  let namaVariabel = parameter[0].isi;
  if(/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(namaVariabel))bindo.sistem.error("Nama variabel tidak boleh mengandung simbol");

  let konjungsi = parameter[1].isi.toLowerCase();
  let konstan;
  if(konjungsi=="adalah")konstan=false;
  else if(konjungsi=="pasti")konstan=true;
  else{
    bindo.sistem.error(konjungsi+' bukanlah kongjungsi yang tepat, pililah "adalah" atau "pasti"');
  }

  let isi = parameter[2];
  
  let konten = bindo.sistem.dapatkan(isi);
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
  let pernyataan=parameter[1].isi
  let variabel1=bindo.sistem.dapatkan(parameter[0]);
  let variabel2=bindo.sistem.dapatkan(parameter[2]);
  
  let hasil;
  if(pernyataan=="sama-dengan" || pernyataan=="=" || pernyataan=="==" || pernyataan=="adalah"){
    if(variabel1.isi==variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="lebih-dari" || pernyataan==">"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda lebih dari karena variabel yang dibandingkan bukanlah angka")
    if(variabel1.isi>variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="kurang-dari" || pernyataan=="<"){
    if(variabel1.tipe!="angka" || variabel2.tipe!="angka")bindo.sistem.error("Tidak bisa menggunakan tanda kurang dari karena variabel yang dibandingkan bukanlah angka")
    if(variabel1.isi<variabel2.isi)hasil=true;
    else{hasil=false}
  }
  else if(pernyataan=="berbeda-dengan" || pernyataan=="!=" || pernyataan=="bukan"){
    if(variabel1.isi!=variabel2.isi)hasil=true;
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
  if(parameter[0].isi=="jika"){
    if(bindo.proses.kedalamanJika<=0)bindo.sistem.error('Tidak bisa mengakhiri perintah "jika" karena tidak ada perintah tersebut yang sedang berjalan')
    bindo.proses.kedalamanJika--;
  }
  else{bindo.sistem.error('"'+parameter[0].isi+'" bukanlah sesuatu yang bisa diakhiri')}
}