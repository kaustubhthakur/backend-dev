const express = require('express')
const app = express();
const port = 9000;
const socket = require('socket.io')
const http = require('http')


const server = http.createServer(app);
const io = socket(server)
app.use(express.static('public'))
server.listen(port, () => {
    console.log(`server is running on port ${port}...`)
})

io.on("connection",(socket)=> {
    console.log('user is connected...');
})