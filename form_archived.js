
//The core Firebase JS SDK is always required and must be listed first 
src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js";

//TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-analytics.js"></script>


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB2IuEftaeqrU6LdSjXbun1nvtIlb932fs",
    authDomain: "fitbot-by-timmy.firebaseapp.com",
    databaseURL: "https://fitbot-by-timmy-default-rtdb.firebaseio.com",
    projectId: "fitbot-by-timmy",
    storageBucket: "fitbot-by-timmy.appspot.com",
    messagingSenderId: "80000126783",
    appId: "1:80000126783:web:ea76b4c66cac5a86760d8a",
    measurementId: "G-C0GYWQXGLK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
  document.getElementById("submitButton").onclick = function() {
        function writeUserData() {
            firebase.database().ref("User").set({
                id: process.env.id,
                name: document.getElementById("nameField").value,
                age: document.getElementById("ageField").value,
                gender: document.getElementById("genderField").value,
                weight: document.getElementById("weightField").value,
                height: document.getElementById("heightField").value
            })
            //getUserData();
        }
  }

