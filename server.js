const http = require('http');
const firebase = require('firebase');
const socketio = require('socket.io');

const firebaseConfig = {
  apiKey: 'AIzaSyC3U1AuZCH1F-LtlJ5Nf6CgUowvOUyPTUM',
  authDomain: 'nifty-canyon-304318.firebaseapp.com',
  databaseURL: 'https://nifty-canyon-304318-default-rtdb.firebaseio.com',
  projectId: 'nifty-canyon-304318',
  storageBucket: 'nifty-canyon-304318.appspot.com',
  messagingSenderId: '163958925667',
  appId: '1:163958925667:web:dcd364087dd524b87acb56',
  measurementId:'G-WXZRDB2FZR'
};

firebase.initializeApp(firebaseConfig);

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Mundo!');
});

const io = socketio(server);
const chatRef = firebase.database().ref('chat');

io.on('connection', socket => {
  console.log('Un usuario se ha conectado');

  socket.on('chatMessage', message => {
    chatRef.push({
      message: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  });

  chatRef.limitToLast(10).on('value', snapshot => {
    const messages = [];
    snapshot.forEach(childSnapshot => {
      const message = childSnapshot.val();
      messages.push(`${message.timestamp}: ${message.message}`);
    });
    io.emit('chatHistory', messages.reverse());
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`El servidor está escuchando en el puerto ${process.env.PORT || 3000}`);
});
