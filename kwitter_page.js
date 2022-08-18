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
console.log(firebase)

function logout(){
    window.location="index.html"
  }
room_name=localStorage.getItem("room_name")
user_name=localStorage.getItem("user_name")




  function send(){
    message=document.getElementById("message_box").value
    firebase.database().ref(room_name).push({
    name:user_name,
    msg:message,
    like:0
    })
    document.getElementById("message_box").value=""
  }


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name']
messages=message_data['msg']
like=message_data['like']
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
message_with_tag="<h4 class='message_h4'>"+messages+"</h4>"
like_button="<button id="+firebase_message_id+" class='btn btn-primary' onclick='update_like(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();
function update_like(message_id){
  button_id=message_id
  likes=document.getElementById(button_id).value
  updated_likes=Number(likes)+1
  firebase.database().ref(room_name).child(message_id).update({
   like:updated_likes
  })
}