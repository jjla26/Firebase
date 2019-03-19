function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email)
    console.log(password)

    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(function(){
      verificacion();
    })

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
          aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log(user.email)
          console.log(emailVerified)
          // ...
        } else {
        console.log("no existe usuario activo")
          // User is signed out.
          // ...
        }
      });

}

observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById("contenido");
  if(user.emailVerified){
    contenido.innerHTML = 
    `
    <button onclick="cerrar()">Cerrar Sesion</button>
    <p>Bienvenido </p>
    
    `
    ;
  }
}

function cerrar(){
  firebase.auth().signOut().then(function() {
    console.log("Saliendo...")
    // Sign-out successful.
  }).catch(function(error) {
    console.log(error)
    // An error happened.
  });
}

function verificacion(){
    
  var user = firebase.auth().currentUser;
  
  user.sendEmailVerification().then(function() {
    console.log("Enviado");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}