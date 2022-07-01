// Write your code here!
let x = document.getElementById("main");
x.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id","victory");

const newContent = document.createTextNode("YOUR-NAME is the champion");

newHeader.appendChild(newContent);