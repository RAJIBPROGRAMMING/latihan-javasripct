var jumlahAngkot = 10;
var noAngkot = 1;

for (var noAngkot = 1; noAngkot <= jumlahAngkot;noAngkot++){

    if(noAngkot <= 6 && noAngkot !== 5){
        console.log(`Angkot NO. ${noAngkot} beroperasi dengan baik.`)
    }
    else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log(`Angkot NO. ${noAngkot} sedang lembur.`)
    }
    else{
        console.log(`Angkot NO ${noAngkot} tidak dapat beroperasi.`)
    }
}