const bindo={konsol:true,output:null,sistem:{}};

bindo.init=()=>{
  if(!bindo.konsol && !(bindo.output instanceof Element))throw new Error("bindo.output harus berisi elemen HTML")
  if(bindo.konsol)console.clear()
  bindo.variabel = new Map(),
  bindo.proses = {
    indexBaris:0,
    stringOutput:""
  }
}

bindo.jalankan= kode=>{
  bindo.init();

  let baris = kode.split('\n')
  while(bindo.proses.indexBaris<baris.length)
  {
    let isiBaris=baris[bindo.proses.indexBaris];
    bindo.proses.indexBaris++;
    if(isiBaris.trim()=='')continue;
    let ini = bindo.sistem.bongkar(isiBaris);
    if(ini.perintah=="ingat")hasil=bindo.sintaks.ingat(ini.parameter);
    else if(ini.perintah=="tulis" || ini.perintah=="tampilkan")hasil=bindo.sintaks.tulis(ini.parameter);
    else if(ini.perintah=="" || ini.perintah.startsWith("//"))hasil=true;
    else{
      bindo.sistem.error('Perintah "'+ini.perintah+'" tidak tersedia dalam bahasa pemrograman ini.')
      hasil=false;
    }

    if(!hasil)break;
  }
  if(!bindo.konsol)bindo.output.innerHTML=bindo.proses.stringOutput;
  bindo.sistem.tampilkan("Proses menjalankan telah selesai")
}


// #####Private Functions#####
bindo.sistem = {};

bindo.sistem.bongkar= baris=>{
  let hasil = [];
  baris.split('"').forEach((v,i)=>{
    if(i%2==0){
      v.trim().split(" ").forEach(w=>{
        let tipe = (/[a-zA-Z!@#$%^&()_=\[\]{};':"\\|,.<>?$]/).test(w)==false && w.length>0?"angka":"keyword";
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

bindo.sistem.error= (pesan)=>{
  let info='Terdapat kesalahan pada baris ke-'+(bindo.proses.indexBaris+1)+': ';
  if(bindo.konsol)console.error(info+pesan);
  else{
    bindo.proses.stringOutput+='<font color="red">'+info+pesan+'</font><br>';
  }
  return false;
}

bindo.sistem.tampilkan= kalimat=>{
  if(bindo.konsol)console.log(kalimat);
  else{
    bindo.proses.stringOutput+=kalimat+"<br>";
  }
}

// ####Sintaks####
bindo.sintaks={}

bindo.sintaks.ingat=parameter=>{
  if(parameter.length<3){
    return bindo.sistem.error("Perintah ini membutuhkan 3 parameter.")
  }

  if(parameter[0].tipe=="string")return bindo.sistem.error("Nama variabel tidak boleh string")
  if(parameter[0].tipe=="angka")return bindo.sistem.error("Nama variabel tidak boleh angka")
  let namaVariabel = parameter[0].isi;
  if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(namaVariabel))return bindo.sistem.error("Nama variabel tidak boleh mengandung simbol");

  let konjungsi = parameter[1].isi.toLowerCase();
  let konstan;
  if(konjungsi=="adalah")konstan=false;
  else if(konjungsi=="pasti")konstan=true;
  else{
    return bindo.sistem.error(konjungsi+' bukanlah kongjungsi yang tepat, pililah "adalah" atau "pasti"');
  }

  let isi = parameter[2].isi;

  if(parameter[2].tipe=="keyword"){
    if(!bindo.variabel.has(isi))return bindo.sistem.error('Tidak ada variabel yang bernama "'+isi+'"');
    bindo.variabel.set(namaVariabel,bindo.variabel.get(isi))
  }
  else{
    if(!bindo.variabel.has(namaVariabel))bindo.variabel.set(namaVariabel,{isi,konstan});
    else{
      if(bindo.variabel.get(namaVariabel).konstan)return bindo.sistem.error("Variabel "+namaVariabel+" adalah konstan sehingga isinya tidak bisa diubah.");
      else{bindo.variabel.set(namaVariabel,{isi,konstan})}
    }
  }

  return true;
}

bindo.sintaks.tulis=parameter=>{
  if(parameter.length<1){
    return bindo.sistem.error("Perintah ini membutuhkan 1 parameter.")
  }

  let konten = parameter[0].isi;

  let kalimat;
  if(parameter[0].tipe=="keyword"){
    if(!bindo.variabel.has(konten))return bindo.sistem.error('Tidak ada variabel yang bernama "'+konten+'"');
    kalimat=bindo.variabel.get(konten).isi;
  }
  else{kalimat=konten}
  bindo.sistem.tampilkan(kalimat)

  return true;
}
