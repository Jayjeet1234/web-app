
var firebaseConfig = {
    apiKey: "AIzaSyB0JE1dB2dBro2IGDqWKVVkb6bb4V5PZ2w",
    authDomain: "kwitter-39741.firebaseapp.com",
    databaseURL:"https://kwitter-39741-default-rtdb.firebaseio.com/",
    projectId: "kwitter-39741",
    storageBucket: "kwitter-39741.appspot.com",
    messagingSenderId: "862386904628",
    appId: "1:862386904628:web:374b712b43ea47b76fb461",
    measurementId: "G-ZMN04PD4BF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "index2.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "index2.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  