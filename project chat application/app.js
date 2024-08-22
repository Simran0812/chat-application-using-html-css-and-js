const samSelectorBtn = document.querySelector('#sam-selector');
const ruhiSelectorBtn = document.querySelector('#ruhi-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');

const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'sam' ? 'blue-bg' : 'grey-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
</div>
`;

let messageSender = 'sam';

const updateMessageSender = (name) => {
    messageSender = name;
    chatHeader.innerText = `${messageSender} chatting...`;
    chatInput.placeholder = `Type here, ${messageSender}`;

    if (name === 'ruhi') {
        samSelectorBtn.classList.remove('active-person');
        ruhiSelectorBtn.classList.add('active-person');
    } else if (name === 'sam') {
        ruhiSelectorBtn.classList.remove('active-person');
        samSelectorBtn.classList.add('active-person');
    }

    chatInput.focus();
};

samSelectorBtn.onclick = () => updateMessageSender('sam');
ruhiSelectorBtn.onclick = () => updateMessageSender('ruhi');

const sendMessage = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    };

    chatMessages.innerHTML += createChatMessageElement(message);  // Add the message to the chat window
    chatInput.value = '';  // Clear the input field after sending the message
};

chatInputForm.addEventListener('submit', sendMessage)
document.addEventListener('DOMContentLoaded', function() {
    const chatInputForm = document.getElementById('chat-input-form'); // Replace with your selector
    if (chatInputForm) {
        chatInputForm.addEventListener('submit', sendMessage);
        console.log(message); // This will show the message object in the console.
    } else {
        console.error('Chat input form not found!');
    }
});
console.log(message);  // This will show the message object in the console.

