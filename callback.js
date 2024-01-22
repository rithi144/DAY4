//callback
function ramuSomu(WelcomeMessage,callback){
    setTimeout(function(){
        console.log(WelcomeMessage)
        callback();
    },2000)
}
function miniAni(){
    console.log("Thambi!!!!Odi poiru....Vandhudatha")
}
ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)