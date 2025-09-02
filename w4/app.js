const form = document.getElementById("nameInputBox");
const nameInput = document.getElementById("userName");
const messageHolder = document.getElementById("outputMessage");


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameValue = nameInput.value;
    const greetingCard = `Hello, welcome back ${nameValue}.`;
    messageHolder.textContent = greetingCard; //output.textContent, looked it up for a lil while  on google after checking the other app.js', it's a nice little line
    form.reset();
});