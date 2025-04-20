const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

// connect to MongoDB
const mongoose = require('mongoose');
const mongoDB = require('./config/connection');
mongoDB();

// Router
const teacherRouter = require("./controller/teacher")
const courseRouter = require("./controller/course")
const studentRouter = require("./controller/students")
const auth = require('./controller/auth')

app.use('/teacher', teacherRouter);
app.use('/course', courseRouter);
app.use('/student', studentRouter);
app.use('/auth', auth);


app.listen(8888, () => {
    console.log('Server is running on port 8888');
})