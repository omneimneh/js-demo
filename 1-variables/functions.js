function sayHello() {
    console.log("Hello");
}

function saySomething(something) {
    console.log(something);
}

function getSomething() {
    return "I am something";
}

console.log("sayHello", sayHello);
console.log("sayHello", saySomething);
console.log("getSomething", getSomething);

console.log("sayHello()", sayHello());
console.log("sayHello()", saySomething("It's fun ain't it?"));
console.log("getSomething()", getSomething());
