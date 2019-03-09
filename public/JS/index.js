function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email)
    console.log(password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code)
    console.log(error.message)

    // ...
    });

}

function logIn(){
    var email1 = document.getElementById("emailSession").value;
    var password1 = document.getElementById("passwordSession").value;


    firebase.auth().signInWithEmailAndPassword(email1, password1)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message)
        // ...
      });
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("existe usuario activo")
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log(user.email)
          // ...
        } else {
        console.log("no existe usuario activo")
          // User is signed out.
          // ...
        }
      });

}

observador();