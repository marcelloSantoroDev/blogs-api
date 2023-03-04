const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', userController.createUser);
router.get('/', tokenValidator, userController.getAll);

module.exports = router;