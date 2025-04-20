const mongoose = require('mongoose');
const express = require('express')
const Router = express.Router()

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
const courseModel = mongoose.model('course', courseSchema) 

Router.get('/', async (req, res) => {
    try {
        const data = await courseModel.find()
        res.status(200).json(data)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
})

Router.post('/create', async (req, res) => {
    const { name } = req.body;
    try{
        const data = new courseModel(
            {
            name,
            }
        )
        const result = await data.save()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message: error})
    }
})

Router.put('/update/:id', async (req, res) => {
    const { name } = req.body;
    const {id} = req.params
    try {
        const data = await courserModel.updateOne(
            {_id: id}, {$set: {name}}
        )
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error})
    }
})

Router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
    try {
        const data = await courserModel.deleteOne({_id: id})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error})
    }
})

module.exports = Router