// var mak = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'ahad'];

// console.log(mak.join(' - '));
// mak.push('soto');

// mak.pop();
// mak.pop();
// mak.splice(5,4, 'libur');

// mak.splice(6, 0, 'monday','tuesday','saturday');
// var makk = mak.slice(2,5);
// console.log(mak.join(' '))
// console.log(makk.join(' - '));
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e) {
//     return e;
// });
// console.log(angka2.join (' '));
var angka = [1,3,4,2,5,3,2,6,7,8,9,10,20,39];
angka.sort( function (a, b) {
    return a-b;
});
console.log(angka.join(' '));