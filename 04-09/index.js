"use strict";

window.addEventListener("load", function() {

   let heading = document.getElementById("heading");
   heading.addEventListener("click",function(){
    let alert = document.querySelector(".panel .alert");
    alert.style.color = "red";
    alert.innerHTML = "Hello World";
   },false);
    

}, false); 