var tanya = true;

while ( tanya == true ){


// menangkap pilihan player
    var p = prompt('Silahkan pilihan anda : Gajah, Semut, Orang');


    // menangkap pilihan komputer

    // membangkitkan bilangan random
    var comp = Math.random();


    if(comp < 0.34) {
        comp = 'Gajah';
    } else if(comp <= 0.34 && comp >= 0.67) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }


    // menentukan rules
    var hasil = '';

    if ( p == comp) {
        hasil = 'SERI';
    } else if( p == 'Gajah'){
        hasil = (comp == 'Semut') ? 'KALAH' : 'MENANG';
    }else if( p == 'Semut'){
        hasil = (comp == 'Orang') ? 'KALAH' : 'MENANG';
    } else if( p == 'Orang'){
        hasil = ( comp == 'Gajah') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memilih pilihan yang salah';
    }

    alert( '' + 'Pilihan kamu adalah ' + p + ' dan pilihan komputer adalah ' + comp + ' maka hasilnya adalah KAMU ' + hasil);

 tanya = confirm('lagi?');

}