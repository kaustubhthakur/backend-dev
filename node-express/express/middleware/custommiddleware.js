const reqlogger= (req,res)=> {
    const dx = new Date().toISOString();
    const method = req.method
    const url = req.url
    const userGaen = req.get('user-agent');
}
const asyncHandler = (fn)=> (req,res,next)=> {
    Promise.resolve(fn(req,res,next)).catch(next);
}