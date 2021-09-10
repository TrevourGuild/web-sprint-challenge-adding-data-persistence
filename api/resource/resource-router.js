// build your `/api/resources` router here
const express = require('express')
const { validateResource } = require('./resource-middleware')
const Resource = require('./resource-model')

const router = express.Router()

router.post('/', validateResource, (req, res, next) =>{
    const resource = req.body

    Resource.createResource(resource)
    .then(resource =>{
        res.status(201).json(resource)
    })
    .catch(next)
})

router.get('/', (req, res, next) =>{
    Resource.getResource()
    .then(resources =>{
        res.json(resources)
    })
    .catch(next)
})

module.exports = router;