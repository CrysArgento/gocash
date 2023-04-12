// Configurar Firebase
var config = {
  apiKey: "AIzaSyC3U1AuZCH1F-LtlJ5Nf6CgUowvOUyPTUM",
  authDomain: "nifty-canyon-304318.firebaseapp.com",
  databaseURL: "https://nifty-canyon-304318-default-rtdb.firebaseio.com",
  storageBucket: "nifty-canyon-304318.appspot.com"
};

firebase.initializeApp(config);

// Obtener una referencia a la base de datos de Firebase
var database = firebase.database();

// Obtener una referencia al formulario y al campo de entrada del mensaje
var messageForm = document.getElementById('message-form');
var messageInput = document.getElementById('message-input');

// Escuchar los cambios en los mensajes del chat
database.ref('messages').on('child_added', function(snapshot) {
  var message = snapshot.val();
  var messageElement = document.createElement('div');
  messageElement.textContent = message.text;
  document.getElementById('messages').appendChild(messageElement);
});

// Enviar un mensaje al chat
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var message = messageInput.value;
  messageInput.value = '';
  database.ref('messages').push({
    text: message
  });
});
// Agrega un listener para el evento "child_added" que se dispara cada vez que se agrega un nuevo mensaje a la lista
messagesRef.on("child_added", function(snapshot) {
  // Obtiene los datos del mensaje que se ha agregado
  var message = snapshot.val();
  
  // Agrega el mensaje a la lista de mensajes
  var messageList = document.getElementById("message-list");
  var messageListItem = document.createElement("li");
  messageListItem.innerText = message.sender + ": " + message.text;
  messageList.appendChild(messageListItem);
});
