const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./app');


const normalizePort = val => {
    let port = parseInt(val, 10);

    if(isNaN(port)) {
        //named pipe
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}

const onError = error => {
    if(error.svscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated priviledges");
            process.exit(1);
            break;
        case "EADDRINUSE": 
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    } 
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("listening on " + bind);
}

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port)

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);