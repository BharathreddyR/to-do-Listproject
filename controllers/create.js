const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const demo = require('../models/createmodel')
router.post('/tasks', async (req, res) => {
    try {
        const reqestBody =req.body
        let { title, description, dueDate, completed
        } = reqestBody
        let userData = {
            title,
            description,
            dueDate,
            completed
        }
        const data = await demo.create(userData)
        console.log(data)
        res.send(data)
    } catch (err) {
        res.send(err.message)

    }
})

module.exports = router


