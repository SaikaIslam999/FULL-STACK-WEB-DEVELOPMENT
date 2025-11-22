let para1 = document.createElement("p");
para1.innerText = "Hey I'm! red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let heading1 =  document.createElement("h1");
heading1.innerText = "I'm a blue h3!"
document.querySelector("body").append(heading1);
heading1.classList.add("blue");

let div =  document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
let para2 = document.createElement("p");
para2.innerText = "ME TOO!"
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);