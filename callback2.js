function submitForm(buttonClick, db){
    setTimeout(function(){
        console.log(buttonClick)
        db();
    },2000)
}
function database(){
    console.log("Form submitted successfully")
}
submitForm("Form submit button clicked",database)