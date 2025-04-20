const mongoose = require('mongoose');
const express = require("express");
const Router = express.Router();

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    className: {  // Changed from 'class' to 'className'
        type: String,
        required: true
    }
})

const studentModel = mongoose.model('student', studentSchema);

Router.get("/get-all-students", async (req, res) => {
    try {
        const data = await studentModel.find();
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

Router.post("/add-student", async (req, res) => {
    const { name, gender, className } = req.body;  // Changed from 'class' to 'className'
    try{
        const data = new studentModel({
            name,
            gender,
            className  // Changed from 'class' to 'className'
        })
        const result = await data.save();
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

Router.put('/update/:id', async (req, res) => {
    const {name, gender, className} = req.body  // Changed from 'class' to 'className'
    const {id} = req.params
    try{
        const data = await studentModel.updateOne({_id: id}, {$set: {name, gender, className}})  // Changed from 'class' to 'className'
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

Router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
    try{
        const data = await studentModel.deleteOne({_id: id})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = Router;