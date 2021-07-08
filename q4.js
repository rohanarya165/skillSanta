function foo1() {
    return {
        bar: "hello"
    };
}
function foo2() {
    return
    {
        bar: "hello"
    };
}
console.log(foo1()) // the output will be barr: 'hello'
console.log(foo2()) // the output will be undefined
// this is because in the second funtion foo2 the parenthesis is not just after return it is on the next lint so it is not taking it as an return value
// if we correct the code foo2 and start parenthesis just after the return it will show us the same value foo1 and foo2


