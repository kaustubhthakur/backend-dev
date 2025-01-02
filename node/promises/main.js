// function solve(time){
//     return new Promise((resolve)=> setTimeout(resolve,time))
// }
// console.log('prime')
// solve(1000).then(() =>console.log("ddjkfdlsjl"))
// console.log('time')


function ans(x,y)
{
    return new Promise((resolve,reject)=> {
        if(x==0)
        {
            reject('dsakdjhskjdskd')
        }
        else 
        {
            resolve(x/y);
        }
    })
}
ans(10,2).then(res=>console.log(res)).catch(error=>console.log(error));