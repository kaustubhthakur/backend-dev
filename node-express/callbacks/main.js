// const fs = require('fs')
// function solve(name,callbackfn)
// {
// console.log(`hello ${name}`)
// callbackfn()
// }
// function address()
// {
//     console.log('kaus')
// }
// // solve('kaustubh thakur',address)
// fs.readFile('input.txt','utf8',(err,data)=> {
//    if(err)
//    {
//     console.error("error",err)
//     return 
//    }
//    console.log(data);
// })


// callback hell 
const fs = require('fs')
fs.readFile('input.txt', "utf8", (err, data) => {
    if (err) {
        console.error("error", err)
        return
    }
    const dx = data.toUpperCase();
    fs.writeFile('output.txt', dx, (err) => {
        if (err) {
            console.error("error", err)
            return
        }
        console.log('data written to new file')
        fs.readFile('output.txt','utf8',(err,data)=>{
            if(err)
            {
                console.error(err);
            }
        })

    })
})
