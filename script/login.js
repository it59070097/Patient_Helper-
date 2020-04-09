firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var user = firebase.auth().currentUser;
      if (user != null) {
          window.location.replace("home.html");
      }
  } 
});

function login(){
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  console.log(email)
  console.log(password)
  firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/wrong-password') {
      window.alert('Wrong password.');
    } else {
      window.alert(errorMessage);
    }
    console.log(error);
  });
}
function regispage(){
  window.location.replace("register.html");
}