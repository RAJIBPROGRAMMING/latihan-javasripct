var ulang = true;

while ( ulang == true){

var p = prompt('masukan pilihan kamu : gajah , semut, orang');

var comp = Math.random();
console.log(comp);



if(comp == 0.42){
    comp = 'gajah';
} else if(comp >= 0.43 && comp <= 0.76){
    comp = 'orang';
} else {
    comp = 'semut';
}


var hasil = '';

if( p == comp){
    hasil = 'seri';
} else if( p == 'gajah'){
    hasil = ( comp == 'orang') ? 'menang' : 'kalah';
}else if ( p == 'orang'){
    hasil = ( comp == 'semut') ? 'menang' : 'kalah';
} else if ( p == 'semut'){
    hasil = ( comp == 'gajah') ? 'menang' : 'kalah';
} else {
    hasil = 'ERROR';
}


alert(`kamu memasukan ${p} komputer memilih ${comp} maka hasilnya kamu ${hasil}`);

ulang = confirm(' main lagi?');
}