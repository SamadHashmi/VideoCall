// const { Server } = require("socket.io");
// require("dotenv").config();
// const port = process.env.SERVER_PORT || 8000;
// console.log("firstport", port);






// const io = new Server(port, { cors: true });

// const emailToSocketIdMap = new Map();
// const socketIdToMailMap = new Map();
// io.on("connection", (socket) => {
//   socket.on("room:join", (data) => {
//     const { email, roomNo } = data;
//     emailToSocketIdMap.set(email, socket.id);
//     socketIdToMailMap.set(socket.id, email);
//     io.to(roomNo).emit("user:joined", { email, id: socket.id });

//     socket.join(roomNo);
//     io.to(socket.id).emit("room:join", data);
//   });
//   socket.on("user:call", ({ to, offer }) => {
//     io.to(to).emit("incoming:call", { from: socket.id, offer });
//   });
//   socket.on("call:accepted", ({ to, ans }) => {
//     io.to(to).emit("call:accepted", { from: socket.id, ans });
//   });

//   socket.on("peer:nego:needed", ({ to, offer }) => {
//     io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
//   });
//   socket.on("peer:nego:done", ({ to, ans }) => {
//     io.to(to).emit("peer:nego:final", { from: socket.id, ans });
//   });
// });
