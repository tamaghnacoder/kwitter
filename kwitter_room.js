var firebaseConfig = {
    apiKey: "AIzaSyBOurciTMIGxIkr8sYgZShK8O_igyDN5nk",
    authDomain: "kwitter-78de6.firebaseapp.com",
    databaseURL: "https://kwitter-78de6-default-rtdb.firebaseio.com",
    projectId: "kwitter-78de6",
    storageBucket: "kwitter-78de6.appspot.com",
    messagingSenderId: "763417833308",
    appId: "1:763417833308:web:a75328ffcf817546cfdb99",
    measurementId: "G-HZW0RFLD54"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function logout() {
localStorage.removeItem("user_name");
window.location="index.html";
}