function fakTorial (num) {
    if( num === 1) {
        return 1;
    } else {
        return num * fakTorial( num - 1);
    }
}

console.log( fakTorial(5));