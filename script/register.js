function register() {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let confirmpassword = document.getElementById("confirmpassword").value
  let email = document.getElementById("email").value
  var errorMessage = ""
  var errorCode = ""
  console.log(username)
  console.log(password)
  console.log(confirmpassword)
  console.log(email)
  if (password == confirmpassword) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
        // ...
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var user = firebase.auth().currentUser;
            
            if (user != null) {
                let uid = user.uid
                console.log(uid)
                console.log(username)
                firestore.collection("user").doc("66666666").set({
                  username: "username",
                  password: "password",
                  email: "email"
                });
                firebase.auth().signOut().then(function() {
                // Sign-out successful.
                // window.location.replace("login.html");
                }).catch(function(error) {
                    // An error happened.
                });
            }
        } 
      });
}else{
      window.alert("password not math")
  }
}
function loginpage(){
  window.location.replace("login.html");
}