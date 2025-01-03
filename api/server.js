const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 9000;
app.use(express.json())

const connection = async()=> {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is running...')
    } catch (error) {
        console.log(error)
    }
}

app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})