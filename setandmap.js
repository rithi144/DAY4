//SET
//eg 1
setExample = new Set(["Rithi","Swe","Yugi"])
setExample.add("abc")
setExample.add("Rithi")
console.log(setExample)

//for of loop
/*for (const value of setExample) {
    console.log(value)
}*/

//for in loop
for (const value in setExample) {
    console.log(value)
}

//Maps

//eg 1
mapEg = new Map([
    ["id","21ECR166"],
    ["Name","Rithi"],
    ["Age","19"]
])

//for of loop
console.log(mapEg)
for (const value of mapEg) {
    console.log(value)
}

/*
//for in loop
for (const value in mapEg) {
    console.log(value)
}*/

console.log(mapEg.has("Name"))

console.log(mapEg)
mapEg.set("Phone","9344509722")
console.log(mapEg)

mapEg.delete("Phone","9344509722")
console.log(mapEg)

mapEg.set([
    ["Phone","9344509722"],
    ["hbbhf","nfh"]
])
console.log(mapEg)



