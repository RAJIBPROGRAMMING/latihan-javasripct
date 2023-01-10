// program untuk mengelola penumpang angkot, jumlah penumpang, dimana mereka duduk, dan lain lain.
// tambah penumpang. 2parameter : nama penumpang dan array penumpang
// rulesnya jika angkot kosong, penumpang naik duduk di kursi pertama. penumpang berikutnya duduk dikursi selanjutnya secara berurutan, jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu. asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang yang naik. nama penumpang tidak boleh sama untuk menghindari kebingungan ketika nanti penumpang turun.


let penumpang = ['rajib', 'galih','meldi'];
let tambahPenumpang = function(namaPenumpang, penumpang){
// jika angkot kosong
    if( penumpang.length === 0){
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi Array dan keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for( let i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if( penumpang[i] == undefined){
                // tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            // jika sudah ada nama yang sama
            } else if ( penumpang[i] === namaPenumpang ){
                // tampilkan pesan kesalahannya
                console.log( namaPenumpang + ' sudah ada di dalam angkot.' );
                // kembalikan isi array dan keluar dari function
                return penumpang;
            // jika seluruh kursi terisi
            } else if ( i == penumpang.length - 1){
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

// hapus penumpang
// 2 parameter : nama penumpang dan arraypenumpang
// rules: jika angkot kosong, tampilkan pesan bahwa angkot kosong, jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undifined. jika tidak ada penumpang yang namanya sesuai ,tampilkan pesan kesalahannya.

let hapusPenumpang = function( namaPenumpang,penumpang){
    // jika angkot kosong
    if( penumpang.length === 0 ){
        // tampilkan pesan bahwa angkot kosong
        console.log( 'Angkot sedang kosong.' );
        // tidak mungkin ada penumpang yang  turun
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        for( let i = 0; i < penumpang.length; i++){
            if( penumpang[i] == namaPenumpang ){
                penumpang[i] = undefined
                return penumpang;
            } else if ( i == penumpang.length - 1 ){
                console.log(namaPenumpang + ' tidak ada di dalam Angkot.')
                return penumpang;
            }
        }
    }
}