const express = require("express");
const { connect } = require("mongoose");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { info, warn, log, error, indent } = require('pretty-console-logs');

const app = express();
const server = createServer(app);
const io = new Server(server);

try {
    connect("mongodb://root:root@localhost:27017/realtime").then(() => {
        info("DATABASE: Connected");
        server.listen(3333, ()=> {
            info("SERVER: http://localhost:3333")
        })
    })
} catch(err) {
    error(err)
}