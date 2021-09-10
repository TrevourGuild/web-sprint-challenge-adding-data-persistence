const validateResource = (req, res, next) =>{
    const {resource_name} = req.body
    if(!resource_name){
        next({status: 400, message: 'invalid name and description'})
    } else{
        next()
    }
}


module.exports = {
    validateResource
}