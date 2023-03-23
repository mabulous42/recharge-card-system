function generateCard() {
    let display = document.getElementById('generated-card');
    let network = document.getElementById('network');
    let amount = document.getElementById('amount');

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
        display.innerText = Math.floor(Math.random() * 1000000000000000);
    }
    
}