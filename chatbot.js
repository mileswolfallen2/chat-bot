const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value;
    if (userMessage) {
        addMessage("You: " + userMessage);
        userInput.value = "";

        // Here, you'll normally connect to your backend/API
        getBotResponse(userMessage);
    }
});

function addMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
}

function getBotResponse(message) {
    // Simple static responses for demonstration
    let botResponse;
    if (message.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I help you?";
    } else {
        botResponse = "I'm sorry, I didn't understand that.";
    }
    
    addMessage("Bot: " + botResponse);
}
