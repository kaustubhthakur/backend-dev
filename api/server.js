const express = require('express')
const app = express();
const port = 9000;
app.use(express.json())


app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})