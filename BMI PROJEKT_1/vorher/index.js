"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {

    let button = document.getElementById("calculate");
    button.addEventListener("click",function(){
        let m = document.getElementById("height").value;
        m = m.replace(",",".");
        let kg = document.getElementById("weight").value;
        let bmi = kg/(m*m);

        alert(bmi);

    },false);

    let mInput = document.getElementById("height");
    let kgInput = document.getElementById("weight");

    let calculateBmi = function(){
        let m = mInput.value.replace(",",".");
        let kg = kgInput.value;
        let bmi = kg/(m*m);
        let resultObj = document.getElementById("result");
        resultObj.innerText = (bmi+"").replace(".",",");
    };

    mInput.addEventListener("change",calculateBmi,false);
    kgInput.addEventListener("change",calculateBmi,false);
    mInput.addEventListener("keyup",calculateBmi,false);
    kgInput.addEventListener("keyup",calculateBmi,false);
  },false);