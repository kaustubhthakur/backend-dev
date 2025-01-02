const solve = require('events')
const dx = new solve();
dx.on('registered',(name=> {
    console.log(`hello ${name}`)
}))
dx.emit('registered',"kaustubh thakur")