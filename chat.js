const socket = io();

const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messages = document.querySelector('#messages');

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message === '') return;
  socket.emit('chatMessage', message);
  messageInput.value = '';
});

socket.on('chatMessage', message => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messages.appendChild(messageElement);
});