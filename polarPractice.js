//import "https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";

const eqxn = document.querySelector(".eqxn");
let temp = document.querySelector(".temp");

function chooseFunction() {
    let fns = ['sin', 'cos'];
    return fns[Math.round(Math.random())];
}

function chooseA() {
    return Math.round(Math.random()*10);
}

function chooseB() {
    return 1 + Math.round(Math.random()*9);
}

function chooseSign(onlyNegative) {
    if (Math.random() < 0.5 && onlyNegative) {return "-"}
    if (onlyNegative) {return null}
    return "+";
}

function randomLemniscate() {
    return chooseA() + " " + chooseSign() + " " + chooseB() + chooseFunction() + "\u03B8";
}

function randomRose() {
    return chooseSign(true) + chooseB() + chooseFunction() + chooseB() + "\u03B8";
}

function chooseRandomFn() {
    //console.clear();
    if (Math.random() > 0.5) {return randomRose()}
    return randomLemniscate();
}

function pushEqxn() {
    let fn = chooseRandomFn();
    console.log("fjskl")
    eqxn.innerHTML = " ";
    eqxn.insertAdjacentText('beforeend', fn);
}

temp.addEventListener('mousedown', pushEqxn);

var elt = document.querySelector('.calculator');
var calculator = Desmos.GraphingCalculator(elt, {keypad: false, expressions: false, polarMode: true});
calculator.setExpression({ id: 'graph1', latex: "r=5\\cos\\theta" });