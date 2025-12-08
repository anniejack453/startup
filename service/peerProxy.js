const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });


  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    socket.currentStory = null;

    socket.on('message', (data) => {
        const msg = JSON.parse(data);

        if (msg.type === "join-story") {
            socket.currentStory = msg.storyId;
            socketServer.clients.forEach((client) => {
                if (
                    client !== socket &&
                    client.readyState === WebSocket.OPEN &&
                    client.currentStory === msg.storyId
                ) {
                    client.send(JSON.stringify({
                      type: "user-joined",
                      storyId: msg.storyId
                    }));
                }
            });
          return;
        }
    });
    socketServer.on('close', (code, reason) => {
        console.log('WS closed', {
          code,
          reason: reason.toString(),
          wasClean: code === 1000
        });
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };