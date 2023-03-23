function generateCard() {
    let display = document.getElementById('generated-card');
    display.innerText = Math.floor(Math.random() * 1000000000000000);
}