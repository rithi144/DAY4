//Hoisting
//variable hoisting
/*
console.log(a)
let a=10  //-->ref error

console.log(b)
var b=10  //-->undefined
*/

//functional hoisting
konguClg(5,10)
function konguClg(){
    console.log("Function With Argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("Even Number",i)
        }
        else{
            console.log("Odd Number",i)
        }
    }
}
konguClg(5,10)