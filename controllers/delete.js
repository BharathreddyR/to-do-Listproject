const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const demo = require('../models/createmodel')
router.delete('/tasks/:id', async (req, res) => {
    try {
        let tasksId = req.params.id

        const data = await demo.findByIdAndDelete({ _id: tasksId })
        res.send(data)
    } catch (err) {
        res.send(err.message)

    }
})

module.exports = router