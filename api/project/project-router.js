// build your `/api/projects` router here
const express = require('express')
const { validateProject } = require('../project/project-middleware')
const Project = require('./project-model')

const router = express.Router()

router.post('/', validateProject, (req, res, next) =>{
    const project = req.body
    Project.createProject(project)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(next)
})

router.get('/', (req, res, next) =>{
   Project.getProject()
   .then(projects =>{
       res.json(projects)
   })
   .catch(next)
})


module.exports = router;
