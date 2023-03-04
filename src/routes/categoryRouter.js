const express = require('express');

const router = express.Router();

const { categoryController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', tokenValidator, categoryController.createCategory);

module.exports = router;