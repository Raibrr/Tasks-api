const {Router} = require('express');
const {list, save} = require('../../../Controller/UserController');


const router = Router();
console.log('El usercont',list)
router.get('/', async (req, res) => {
  try {
      const response = await list();
      res.status(200).json(response)
  } catch (error) {
      console.log(error);
      res.status(500)
  }
});

module.exports = router;