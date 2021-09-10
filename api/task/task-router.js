// build your `/api/tasks` router here
const express = require('express')
const { validateTask } = require('./task-middleware')
const Task = require('./task-model')

const router = express.Router()

router.post('/', validateTask, (req, res, next) =>{
    const task = req.body

    Task.createTask(task)
    .then(task =>{
        res.status(201).json(task)
    })
    .catch(next)
})

router.get('/', (req, res, next) =>{
    Task.getTask()
    .then(tasks =>{
        res.json(tasks)
    })
    .catch(next)
})


module.exports = router

