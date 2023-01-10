var tanya = true;

while( tanya == true) {


var p = prompt('Masukan : gajah , semut , atau orang');
var comp = Math.random();

if ( comp < 0.34){
    comp = 'gajah';
} else if ( comp >= 0.34 && comp <= 0.67){
    comp = 'orang';
} else{
    comp = 'semut';
}

var hasil = '';

if( p == comp){
    hasil = 'SERI';
} else if( p == 'gajah'){
    hasil = (comp == 'semut') ? 'KALAH' : 'MENANG';
} else if( p == 'orang'){
    hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG';
} else if ( p == 'semut'){
    hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'ERROR !!!!!'
}

alert('' + 'KAMU MEMILIH ' + p + ' DAN KOMPUTER MEMILIH ' + comp + ' MAKA, HASILNYA ADALAH KAMU  ' + hasil);

 tanya = confirm('lagi?')
}