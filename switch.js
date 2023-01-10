var item = prompt(`masukan nama makanan / minuman : \n (cth: nasi daging,susu, hamburger, softdrink)`);


switch( item ) {
    case 'nasi' :
        alert(`Anda memilih makan yang Sehat.`);
    case'daging':
        alert(`Anda memilih makan Sehat.`);
    case'susu' :
        alert(`Anda memilih makanan Sehat.`)
        break;
    case"hamburger" :
        alert('Anda memilih makanan yang Tidak Sehat.')
        break;
    case "softdrink" :
        alert(`Anda memilih makanan yang Tidak Sehat.`);
        break;
    default :
        alert(`Anda memilih makanan yang Tidak tersedia.`)
}