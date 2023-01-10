const size = 5;

let value = 1;
for(let i = 0; i < size; i++)
{
       let s = '';
    for(let j = 0; j <= i; j++){
        s += value++ + ' ';
    }
    console.log(s);
}