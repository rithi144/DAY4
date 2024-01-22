//In callback, we are not so sure that the code will get executed in mentioned/setted time
//Due to this, user doesn't know what's happening and so we go for Promise


function hasFedVirtualPet() {
    // Simulate whether the user has fed their virtual pet
    return Math.random() < 0.5;
  }
  
  function login() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (hasFedVirtualPet()) {
          resolve("Your virtual pet is well-fed and happy!");
        } else {
          reject("Oops! It seems like your virtual pet is hungry.");
        }
      }, 1000);
    });
  }
  
  login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });