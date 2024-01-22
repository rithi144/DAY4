//objects

//How will you declare objects
//way 1
var studentDetails = {
    "Name": "Rithi",
    "Age": 19,
    "Mobile": 9344509722
}
console.log(studentDetails)
studentDetails["RollNo"] = "21ECR166"
console.log(studentDetails)

//key will not hold any quotes because it is inbuiltly present

//way 2
var studentDetails = {}
studentDetails["RollNo"] = "21ECR166"
studentDetails["Name"] = "Swe"
studentDetails["Age"] = "21"
studentDetails["Phone"] = "9344509722"

console.log(studentDetails)

//way 3
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
console.log("The Kongu Specialities are : ",kongu)

