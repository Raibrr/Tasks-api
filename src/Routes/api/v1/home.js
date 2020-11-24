const {ValidationError} = require('joi')
const { Router } = require('express');
const { listAll,list, save } = require('../../../Controller/UserController');
const {userValidation} = require('../../../Validation/UserVlidation');


const router = Router();
router.get('/', async (req, res) => {
  try {
      const response = await listAll();
    res.status(200).json(response);
  } catch (error) {
      console.log(error);
      res.status(500)
  }
});

router.get('/:id', async (req, res) => {
  try {
      const response = await list();
      res.status(200).json(response)
  } catch (error) {
      console.log(error)
      res.status(500)
  }
});

router.post('/', async (req, res) => {
  try {
    const { error, value } = await userValidation(req.body);
    console.log(value);

    if (error) {
      throw error;
    }

    const response = await save(value);
    res.status(201).json(response);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(422).json(err.details)
    }
    console.log(err)
    res.status(500).end();
    }
});

module.exports = router;