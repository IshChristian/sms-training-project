const mongoose = require('mongoose');
const express = require('express')
const Router = express.Router()

const teacherrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})
const teacheModel = mongoose.model('teacher', teacherrSchema) 

Router.get('/', async (req, res) => {
    try {
        const data = await teacheModel.find()
        res.status(200).json(data)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
})

Router.post('/create', async (req, res) => {
    const { name, age, level } = req.body;
    try{
        const data = new teacheModel(
            {
            name,
            age,
            level
            }
        )
        const result = await data.save()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message: error})
    }
})

Router.put('/update/:id', async (req, res) => {
    const { name, age, level } = req.body;
    const {id} = req.params
    try {
        const data = await teacheModel.updateOne(
            {_id: id}, {$set: {name, age, level}}
        )
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error})
    }
})

Router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
    try {
        const data = await teacheModel.deleteOne({_id: id})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error})
    }
})

module.exports = Router