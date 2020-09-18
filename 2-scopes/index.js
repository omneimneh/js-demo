{
    x = 5;
    var y = 10;
}

console.log(x);
console.log(y);

var z = 1;

{
    z = z + 1;
    console.log(z);

    function print(x) {
        console.log(x);
    }
    
    console.log(print);
    print(z);
}

console.log(print);