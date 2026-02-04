// #create a new Element and set its content 
const newParagraph = document.createElement("p");
newParagraph.textContent="this is a dynamically created paragraph";
console.log(newParagraph);
document.body.appendChild(newParagraph);

append the new element to the container 
const container= document.getElementById("container");
container.appendChild(newParagraph);

const rev= document.querySelector("#container p");
rev.remove();

// or 
// remove Element
//remove the first paragraph of container
document.querySelector("#container p").remove();

// add image

const image = document.createElement("img");
image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp");
image.setAttribute("alt","K.R Mangalam");
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

// date 
let date = new Date()
console. log (date);

setInterval(()=>
    letdate = new Date()
console.log(date);

let hour = date. getHours () ;
let min=date.getMinutes();
let second= date.getSeconds ();

let clock = document.getElementById
("digi-clock");

clock.textContent=hour + ":" + min + ":" + second;