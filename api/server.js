// build your server here and require it from index.js
const express = require('express');

const ProjectRouter = require('./project/project-router')
const ResourceRouter = require('./resource/resource-router')
const TaskRouter = require('./task/task-router')

const server = express()


server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

server.use((err, req, res, next) =>{ // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server; 