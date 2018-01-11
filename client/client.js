function create () {
  window.glob = {
    otherPlayers: [],
  }

  socket = io.connect()
  // Start listening for events
  setEventHandlers()
}

function setEventHandlers () {
  // Socket connection successful
  socket.on('connect', onSocketConnected)

  // Socket disconnection
  socket.on('disconnect', onSocketDisconnect)

  // log in with cached ID
  socket.on('confirm id', onConfirmID)
  // New player message received
  socket.on('new player', onNewPlayer)

  socket.on('chat message', onReceiveChat)
}

// Socket connected
function onSocketConnected () {
  console.log('Connected to socket server')

  var preferredID = window.localStorage.getItem("preferredID")
  // Send local player data to the game server
  socket.emit('new player', { preferredID: preferredID })
}

// Socket disconnected
function onSocketDisconnect () {
  console.log('Disconnected from socket server')
}

function onConfirmID (data) {
  console.log("confirmed my ID: " + data.playerID)
  window.localStorage.setItem("preferredID", data.playerID)
}

// New player
function onNewPlayer (data) {
  console.log('New player connected:', data.playerID)

  glob.otherPlayers.push(remote)
}

// TEMP CHAT SYSTEM
function onReceiveChat(msg) {
    $('#messages').prepend($('<li>').text(msg));
}

create()
