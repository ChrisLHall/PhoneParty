;(function() {
  var Player = function (startPlayerID, startSocket) {
    var info = Player.generateNewInfo(startPlayerID)
    var socket = startSocket

    // Define which variables and methods can be accessed
    return {
    info: info,
      socket: socket,
    }
  }

  Player.generateNewInfo = function (playerID) {
    return {
      playerid: playerID
    }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Player
  } else {
    window.Player = Player
  }
})();
