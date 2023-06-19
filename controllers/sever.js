const express = require('express');
const router = express.Router();

const create = require('./create');
router.use('/hello',create);
const get =require('./get')
router.use('/get_tasks',get);

const update =require('./update')
router.use('/update',update);

const remove =require('./delete')
router.use('/ddd',remove)


module.exports = router