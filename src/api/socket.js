import io from "socket.io-client";

const socket = io("wss://echo.websocket.org/", {
  transports: ["websocket"]
});

// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on("reconnect_attempt", () => {
  console.log("reconnect_attempt");
  socket.io.opts.transports = ["polling", "websocket"];
});
export default socket;
