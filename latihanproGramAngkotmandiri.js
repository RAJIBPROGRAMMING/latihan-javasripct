// dua variaber
let penumpang = [];
// rules
let tambaHPenumpang = function (namaPenumpang,penumpang){
    if( penumpang.length === 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else {
        for(let m = 0; m < penumpang.length; m++){
            if( penumpang[m] == undefined){
                penumpang[m] = namaPenumpang;
                return penumpang;
            }else if( penumpang[m] == namaPenumpang){
                console.log(namaPenumpang + ' sudah ada.');
                return penumpang;
            }else if( m = penumpang.length - 1 ){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}