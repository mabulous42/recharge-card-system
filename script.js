let display = document.getElementById('generated-card');
let network = document.getElementById('network');
let amount = document.getElementById('amount');
let recharge = document.getElementById('loadCardInput');
let randomNumber =  Math.floor(Math.random() * 1000000000000000);

function generateCard() {

    if (network.value === "empty" && amount.value === "not-selected") {
        alert("Please Specify your network provider and the amount to recharge amount");
    }

    else if (amount.value === "not-selected") {
        alert("Please select an amount");
    }

    else if (network.value === "empty") {
        alert("Please select a network provider");
    }

    else {
        display.innerText = randomNumber;
    }
}

function loadAirtime() {
    
    if (network.value === "mtn" && recharge.value.startsWith("*555*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successful");
    } 
    else if (network.value === "mtn" && recharge.value.startsWith("*555*") != '*555*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("invalid recharge pin");
    }
    else if (network.value === "glo" && recharge.value.startsWith("*123*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successful");
    }
    else if (network.value === "airtel" && recharge.value.startsWith("*126*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successful");
    }
    else if (network.value === "etisalat" && recharge.value.startsWith("*232*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successful");
    }
     else {
        alert("recharge failed");
    }
}