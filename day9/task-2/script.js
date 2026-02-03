const task2=document.getElementsByClassName("important");
console.log(task2);
for (let i=0;i<task2.length;i++){
    task2[i].style.color="purple";
    task2[i].style.fontSize="50px";
}
console.log(task2.length);