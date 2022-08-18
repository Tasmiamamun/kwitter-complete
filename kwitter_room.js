var firebaseConfig = {
      apiKey: "AIzaSyBb_BD8W76nX4s82DZWI8UevTIzvHihymk",
      authDomain: "kwitter-app-437c3.firebaseapp.com",
      databaseURL: "https://chatapp-e9540-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-437c3",
      storageBucket: "kwitter-app-437c3.appspot.com",
      messagingSenderId: "908067943409",
      appId: "1:908067943409:web:68ce30bcc995d3a4f20a50"
    };
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("user_name")
document.getElementById("welcome").innerHTML="Welcome: "+username
function add_room(){
  room_name=document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding_room_name"
  })
  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
Room_names=childKey
console.log("Room_name"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML+=row
  }); }); }
  getData()
  function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name",name)
    window.location="kwitter_page.html"
  }
  function logout(){
  window.location="index.html"
}