var name=prompt("What is your name?");

name1=name.slice(0,1).toUpperCase();
name2=name.slice(1,name.length).toLowerCase();
name=name1+name2
alert("Hello "+name);