//FOR loops 
sum = 0
for (var i=0;i<10;i++)
{
    sum = sum+i;
}
console.log("The sum in for loop is : ",sum)

//WHILE loops
sumw=0
var i =0
while(i<10)
{
    sumw+=i;
    i++;
}
console.log("The sum in while loop is : ",sumw)

//DO-WHILE loops
 i=0
sumd=0
do{
    sumd+=i
    i++
}while(i<10)
console.log("The sum in do-while loop is : ",sumd)


//example 1
arr=[10,20,30]
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 2
arr=[10,20,20.5]
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 3
arr=[10,20,true,false]
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 4
arr=[10,20,"string","Rithi",true,false]
console.log(arr.length)
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//for in loop
arr=[10,20,"string","Rithi",true,false]
for (const index in arr) {
    console.log("The value present in ",index,"is",arr[index])
}

//To access ur element directly,there are 2 loops
//for of
//for each

//for of loop
arr=[10,20,"string","Rithi",true,false]
for (const element of arr) {
    console.log(element)//element or value
}

//for each loop
//eg 1
arr=[10,20,"string","Rithi",true,false]
arr.forEach(value => {
    console.log(value)
});

//eg 2
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
console.log(kongu)
//for in eg -->output = key
for (const key in kongu) {
    console.log(key,kongu[key])
}


//error
/*
//for each eg
kongu.forEach(key,element => {
    cobsole.log(key,element)
});
*/








