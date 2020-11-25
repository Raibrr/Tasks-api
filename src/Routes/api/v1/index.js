const { Router } = require('express');
const user = require('./user')
const tasks = require('./tasks')

const router = Router();
router.use('/users', user);
router.use('/user', tasks);

module.exports = router;