import io from "socket.io-client";

const socket = io("http://localhost", {
  transports: ["websocket"]
});

// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on("reconnect_attempt", () => {
  socket.close();
  console.log("Connection has been closed");
  // socket.io.opts.transports = ["polling", "websocket"];
});
export default socket;
