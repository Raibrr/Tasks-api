const { Router} = require('express');
const { urlencoded,json } = require('body-parser');
const v1 = require('./v1')

const router = Router()
      .use(json())
      .use(urlencoded({extended : true}))
      .use('/v1', v1)

module.exports = router;