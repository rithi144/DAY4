//ES6 -> ECMA script 6 standard
//1. let,var,const -> refer variable.js
//2. Arrow function

var fun = () =>{
    console.log("Hello")
}
fun()

//3. Destructuring operator

var array = [10,20,30,40,50]
var a,b,c,d,e = array
console.log(a,b,c,d,e)

// undefined --> verification
var array = [10,20,30,40,50]
var [a,b,c,d,e] = array
console.log(a,b,c,d,e)

//4. Spread operator
var array = [10,20,30,40]
var arr1 = [...array,60,70]
console.log(arr1)
