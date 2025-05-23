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
    try {
        const results = calculations(input);
        textScreen.value = results;
        input = results.toString();
    } catch {
        textScreen.value = "ERROR";
        input = "";
}
}

function calculations(expr) {
    const math = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!math || isNaN(math[0])) throw new Error("Invalid expression");

    let result = parseFloat(math[0]);

    for (let i = 1; i < math.length; i += 2) {
        const operatorSymbol = math[i];
        const nextNumber = parseFloat(math[i + 1]);

        if (isNaN(nextNumber)) throw new Error("Invalid number");

        switch (operatorSymbol) {
            case "+": result += nextNumber; break;
            case "-": result -= nextNumber; break;
            case "*": result *= nextNumber; break;
            case "/": result /= nextNumber; break;
            default: throw new Error("Invalid operator");
        }
    }

    return result;
}



//! To clear the calculator
const clear = document.getElementById("clear");
clear.addEventListener("click", clearAll);

function clearAll() {
input ="";
textScreen.value ="";
}

//! Secret face

const secret = document.getElementById("secret");

const secretScripts = [
    "I see you have found this button.",
    "This IS a super secret button ya know.",
    "Very TOP SECRET",
    "Were you curious of the use of this button?",
    "Do you REALLY want to know?",
    "WELL TOO BAD!",
    "THE SECRETS STAY WITH ME.",
    "POOF",
];

let secretIndex = 0;

secret.addEventListener("click", superSecret);
function superSecret() {
    if (secretIndex < secretScripts.length) {
        textScreen.value = secretScripts[secretIndex];
    }else {
        textScreen.value = "";
        secret.style.display = "none";
    }
    secretIndex++;
}