const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', userController.createUser);
router.get('/', tokenValidator, userController.getAll);
router.get('/:id', tokenValidator, userController.getById);
router.delete('/me', tokenValidator, userController.deleteUser);

module.exports = router;