//! To type the keys
const buttons = document.querySelectorAll(".calcButtons");
const textScreen = document.getElementById("textScreen");
let input ='';

buttons.forEach((nButton) => {
    nButton.addEventListener("click",inputNumbers);

    function inputNumbers() {
          input += nButton.innerText;
          textScreen.value = input;
    };
});

//! To equal equations
const equal = document.getElementById("equal");
equal.addEventListener("click", equalSign);

function equalSign() {
    
}



//! To clear the calculator
const clear = document.getElementById("clear");
clear.addEventListener("click", clearAll);

function clearAll() {
input ="";
textScreen.value ="";
}