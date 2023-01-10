var jumlaHAngkot = 30;
var noAngkoT = 1;

for( var noAngkoT = 1; noAngkoT <= jumlaHAngkot; noAngkoT++){
    if( noAngkoT <= 6 && noAngkoT !== 5){
        console.log('Angkot no. ' + noAngkoT + ' sedang bekerja.');
    } else if( noAngkoT === 5 || noAngkoT === 7 || noAngkoT === 9){
        console.log('Angkot no. ' + noAngkoT + ' tidak dapat dihubungi.')
    }else{
        console.log('Angkot no. ' + noAngkoT + ' sedang perbaikan rutin.')
    }
}