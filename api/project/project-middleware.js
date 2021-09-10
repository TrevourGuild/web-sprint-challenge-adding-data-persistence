const validateProject = (req, res, next) =>{
    const {project_name} = req.body
    if(!project_name){
        next({status: 400, message: 'invalid project name'})
    } else{
        next()
    }
}

module.exports = {
    validateProject
}