const express = require('express')
const app = express();
const port = 9000;
const socket = require('socket.io')
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
const cors= require('cors')
require('dotenv').config();


app.use(express.json())
app.use(cors())
app.use(cookieparser());

const connection = async(req,res)=> {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is connected...')
    } catch (error) {
        console.error(error);
    }
}
connection();
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})