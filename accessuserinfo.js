/*Insert:
 <button onclick = "writeUserData()">Submit</button>
 <p id = "data"></p>
   into HTML,
   so that it calls the function(s) defined below.
*/


function writeUserData() {
    firebase.database().ref("User").set({
        id: process.env.id,
        name: document.getElementById("nameField").value,
        age: document.getElementById("ageField").value,
        gender: document.getElementById("genderField").value,
        weight: document.getElementById("weightField").value,
        height: document.getElementById("heightField").value
    })
    getUserData();
}


function getUserData() {
    firebase.database().ref("User").set({
        snapshot.forEach(function(childSnapshot))
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['name'] + "," + childData ['age']  "," + childData ['gender'] + "," + childData ['weight'] + "," + childData ['height']
        }
    })
}