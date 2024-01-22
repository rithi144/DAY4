//functions
//eg1
function fun(){
    console.log("Function Sample Example")
}
fun()

function fun(a,b){
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
fun(5,10)

function eg(a,b){
    return a+b;
}

console.log(eg(5,10))

