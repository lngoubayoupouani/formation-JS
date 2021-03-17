"use strict";

//HTML

//let v_age = 30;
//alert("ich bin " + age + " Jahre alt");

/*
function alterAusgeben(age){
    console.log("Ich heiße Lionel und bin " + age + " Jahre alt");
}


let  alterAusgeben = function(age){
    console.log("Ich heiße Lionel und bin " + age + " Jahre alt");
    return 50;
}

v_age = alterAusgeben(v_age);
console.log(v_age);
*/
/*
let f = function(){
    console.log("f() wurde ausgefuehrt");
}

let run = function(callback){
    console.log("run() wurde ausgefuehrt");
    callback();
}

//run(f);
run(function(){
    console.log("f() wurde ausgefuehrt");
});
*/
/*
setTimeout(function(){
    console.log("function wurde ausgeführt");
},2000);

setTimeout(function(){
    console.log("function -4000- wurde ausgeführt");
},4000);

setTimeout(() => {
    console.log("function -4000- wurde ausgeführt");
}, 4000);

console.log("fertig");
*/

/*
window.addEventListener("load",function(){
    document.getElementById("click-me").addEventListener("click",function(){
        console.log("button wurde ausgeführt");
    },false);
})
*/

/*
let counter =0;

setInterval(() => {
    counter = counter +1;
    console.log(counter);
}, 1000);

setInterval(function(){
    counter = counter +1;
    console.log(counter);
},1000);
*/

/*
window.addEventListener("load",function(){
    let heading = document.getElementById("heading");
    let counter = 0;
    heading.addEventListener("click",function(){
        counter = counter + 1;
        alert("überschrift wurde geklickt: " + counter);
    },false);

let h3s = document.getElementsByTagName("h3");
console.log(h3s);

},false);
*/

/*
window.addEventListener("load",function(){
    let heading = document.getElementById("heading");
    
    heading.addEventListener("mouseenter",function(){
        heading.innerText= "Überschrift von JS";
    },false);
    heading.addEventListener("mouseleave",function(){
        heading.innerText= "Überschrift";
    },false);

},false);

window.addEventListener("load",function(){
    let heading = document.getElementById("heading");
    let panel = document.getElementById("p");
    let counter = 0;

    heading.addEventListener("click",function(){
        counter = counter + 1;
        heading.innerText = "Überschrift " + counter;
    },false);
    console.log(panel.innerHTML);

},false);



window.addEventListener("load",function(){
    let heading = document.getElementById("heading");
    let panel = document.getElementById("p");

    heading.addEventListener("click",function(){
      heading.style.borderTop = "3px solid green";
    },false);

    //className est dangereux a utiliser. il faut plutot utiliser classList
    heading.addEventListener("mouseenter",function(){
        panel.className = "panel panel-danger";
      },false);
   

},false);



window.addEventListener("load",function(){
    let heading = document.getElementById("heading");
    let panel = document.getElementById("p");
    console.log(panel.classList);

    heading.addEventListener("click",function(){
      heading.style.borderTop = "3px solid green";
    },false);

    heading.addEventListener("mouseenter",function(){
        panel.classList.remove("panel-default");
        panel.classList.add("panel-danger");
      },false);
   

},false);

*/

//HTML2

/*

window.addEventListener("load", function(){

    let heading = document.getElementById("box__heading");
    heading.addEventListener("click", function(){
        let content = document.getElementById("box__content");
        content.classList.toggle("hide");
        let indicator = document.getElementById("box__indicator");
        indicator.classList.toggle("hidden");
    },false);

},false);
*/

window.addEventListener("load",function(){

    let heading = document.getElementById("box__heading");
    heading.addEventListener("click",function(){
        let content = document.getElementById("box__content");
        content.classList.toggle("hide");
        let indicator = document.getElementById("box__indicator");
        indicator.classList.toggle("hidden");
    },false);

},false);





