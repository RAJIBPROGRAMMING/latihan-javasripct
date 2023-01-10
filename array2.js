let angka = ['satu','dua','tiga','empat']

console.log(angka);

// let namaMahasiswa = ['rajib', 'isan', 'antung']

// namaMahasiswa.pop();
// namaMahasiswa.push('jamal','udin','asep');
// namaMahasiswa.splice(2, 0, 'joni','bambang');
let namaMahasiswa =  [1,4,2,3,2,5,3,2,28,22,32,14,5,60,2];

namaMahasiswa.sort(function (a,b){
    return a-b;
});

console.log(namaMahasiswa.join(' - '));