function login(){
    username=document.getElementById("user_name").value
    window.location="kwitter_room.html"
    localStorage.setItem("user_name",username)
}