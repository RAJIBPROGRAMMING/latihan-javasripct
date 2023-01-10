// var jumlahAngkot = 10;
// var noAngkot = 1;

// for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){

//     if(noAngkot <= 6){
//         console.log(`Angkot NO. ${noAngkot} beroperasi dengan baik.`);
//     }
//     else if (noAngkot === 8 || noAngkot === 10){
//         console.log(`Angkot NO. ${noAngkot} sedang lembur.`);
//     }
//     else {
//         console.log(`Angkot NO. ${noAngkot} sedang tidak berfungsi.`);
//     }
// }


//  tugas membuat program sederhana dimana angkot 1 , 3, 5 , tidak berfungsi . 4, 7 , sedang libur , dan sisanya beroperasi dengan baik.

// disini kita coba menerapkan penggunaan let sebagai pengganti dari var

let jumLanhAngkot = 15;
let noAngkot = 1;

for ( let noAngkot = 1; noAngkot <= jumLanhAngkot; noAngkot++){
if( noAngkot === 1 || noAngkot ===3 || noAngkot === 5){
    console.log(` Angkot Dengan NO.${noAngkot} Tidak Sedang Beroperasi`);
} else if( noAngkot === 4 || noAngkot === 7){
    console.log(`Angkot Dengan NO.${noAngkot} Sedang Libur`);
}else{
    console.log(`Angkot Dengan NO.${noAngkot} Beroperasi Dengan Baik`);
}

}