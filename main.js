var p1=document.getElementById("player1_name_input").value;
var p2=document.getElementById("player2_name_input").value;
function add_user(){
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2)
}