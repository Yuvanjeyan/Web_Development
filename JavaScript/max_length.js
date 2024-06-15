var msg=prompt("Enter the tweet");
num=140;
if(msg<=num){
    alert(msg);
}
else{
    alert("You have written "+msg.length+
          "charactesrs and you left "+num-msg.length+"characters");
}