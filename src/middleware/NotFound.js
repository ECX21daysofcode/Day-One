const NotFound = (req,res)=>{
    return res.status(404).send('not found')
}
module.exports=NotFound;