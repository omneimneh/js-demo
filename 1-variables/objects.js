var emptyObject = {};
var objectWithStuff = {
    aNumber: 1,
    aString: "abcde",
    anotherObject: {
        "aString": "We can also put keys with string quotes",
        "cool right?": "This allows us to use special characters as keys"
    },
    aFunction: function () {
        console.log("I am a function inside an object!!")
    }
}

console.log("emptyObject", emptyObject);
console.log("objectWithStuff", objectWithStuff);

console.log("objectWithStuff.aString", objectWithStuff.aString);
console.log("objectWithStuff.anotherObject['cool right?']", objectWithStuff.anotherObject['cool right?']);
console.log("aFunction()", objectWithStuff.aFunction());