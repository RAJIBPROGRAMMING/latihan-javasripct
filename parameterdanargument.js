function tambah(){
    return arguments;
}

var a = prompt('masukan nilai');
var b = prompt('masukan nilai lagi')

var hasil = tambah(a + b);
console.log(hasil);