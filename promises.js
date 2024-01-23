function isLocationValid(loc) {
    var validLocation = "Trichy";
    return loc === validLocation;
  }
  
  function location() {
    return new Promise((resolve, reject)=>{
      setTimeout(function () {
        var loc = "Trichy";
        console.log(loc);
        if (isLocationValid(loc)) {
          resolve("Location found");
        } else {
          reject("Location not found");
        }
      }, 2000);
    });
  }
  
  location()
    .then((response) =>{
      console.log(response);
    })
    .catch((errorMessage) =>{
      console.log(errorMessage);
    });