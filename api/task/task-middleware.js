const validateTask = (req, res, next) =>{
    const {task_description} = req.body
    if(!task_description){
        next({status: 400, message: 'invalid task name'})
    } else{
        next()
    }
}

module.exports = {
    validateTask
}