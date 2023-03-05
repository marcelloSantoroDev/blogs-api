const express = require('express');

const router = express.Router();

const { blogPostController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', tokenValidator, blogPostController.createblogPost);
router.get('/', tokenValidator, blogPostController.getAll);

module.exports = router;