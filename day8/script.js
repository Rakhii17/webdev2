
// id traversal
const heading = document.getElementById("my heading");
console.log(heading);


heading.style.color="tomtato";
heading.style.backgroundColor="yellow";

// class transversal
const para= document.getElementsByClassName("para");
console.log(para);

for(let i=0;i<para.length;i++){
para[i].style.backgroundColor="cyan";
}

// query selector
const qs= document.querySelector("#content p");
console.log(qs);
qs.textcontent ="lorem ipsum dolor sit amet";