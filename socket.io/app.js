const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket) {
  console.log('A user has connected');
  socket.on('disconnect', function() {
    console.log('A user has disconected');
  })
});

http.listen(3000, function() {
  console.log("Listening on port 3000");
})