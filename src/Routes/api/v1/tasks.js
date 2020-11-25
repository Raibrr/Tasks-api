const { Router } = require('express');
const { listAllTasks } = require('../../../Controller/TasksController');

const router = Router();
router.get('/tasks', async (req, res) => {
    try {
        const response = await listAllTasks();
        res.status(200).json(response);
        return response;
        
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

module.exports = router;