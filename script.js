let display = document.getElementById('generated-card');
let network = document.getElementById('network');
let amount = document.getElementById('amount');
let recharge = document.getElementById('loadCardInput');
let randomNumber = Math.floor(Math.random() * 1000000000000000);

function generateCard() {

    if (network.value === "empty" && amount.value === "not-selected") {
        alert("Please Specify your network provider and the recharge amount");
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
    // console.log(recharge.value.startsWith('*555*'));
    // console.log(recharge.value.includes(randomNumber));
    // console.log(recharge.value.endsWith('#'));

    if (recharge.value === '') {
        alert("Please enter the recharge numbers before you proceed")
    } 
    else if (network.value === "mtn" && recharge.value.startsWith("*555*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successfully");
    }      
    else if (network.value === "glo" && recharge.value.startsWith("*123*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successfully");
    }    
    else if (network.value === "airtel" && recharge.value.startsWith("*126*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successfully");
    }
    else if (network.value === "etisalat" && recharge.value.startsWith("*232*") && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert(network.value.toUpperCase() + " #" + amount.value + " Recharged Successfully");
    }
    else if (!(recharge.value.startsWith('*555') || recharge.value.startsWith('*123') || recharge.value.startsWith('*126*') || recharge.value.startsWith('*232')) && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("Invalid network recharge code");
    }
    else if (!(recharge.value.includes(randomNumber))) {
        alert("Invalid Recharge Pin")
    }  
    else if (recharge.value.endsWith('#') != '#') {
        alert("# is missing")
    }
    else {
        alert("recharge failed");
    }
}