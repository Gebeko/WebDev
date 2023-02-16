// function A() { ... }
// function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

let obj = {};
function A(){
    return obj;
}
function B(){
    return obj;
}