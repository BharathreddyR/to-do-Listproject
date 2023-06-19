const express =require('express');
const router =express.Router();


const user = require('./controllers/sever');
router.use('/user',user);

module.exports = router
