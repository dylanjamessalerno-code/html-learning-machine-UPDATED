let brain = {};
let wordsknown = 0; 

function handleChat() {
    const inputField = document.getElementById('user-input');
    const sentence = inputField.value.trim();
    if (sentence !== "") {
        learn(sentence);
        respond(sentence);
        inputField.value = "";
    }
}

function learn(sentence) {
    const wordsArray = sentence.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
    wordsArray.forEach(word => {
        if (word && !brain[word]) {
            brain[word] = true;
            wordsknown++; 
        }
    });
}

function respond(sentence) {
    const chatBox = document.getElementById('chat-box');
    let botReply = "";

    if (/[?!.]/.test(sentence)) {
        const allWords = Object.keys(brain);
        if (allWords.length > 0) {
            const randomLength = Math.floor(Math.random() * Math.min(wordsknown, 10)) + 1;
            const randomStructure = Array.from({length: randomLength}, () => 
                allWords[Math.floor(Math.random() * allWords.length)]
            ).join(" ");
            botReply = randomStructure;
        } else {
            botReply = "I don't know enough words yet!";
        }
    } else {
        botReply = "Learned!";
    }

    chatBox.innerHTML += `<p><b>You:</b> ${sentence}</p>`;
    chatBox.innerHTML += `<p><b>Bot:</b> ${botReply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
