const express = require('express');

const router = express.Router();

const { blogPostController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

router.get('/search', tokenValidator, blogPostController.search);
router.post('/', tokenValidator, blogPostController.createblogPost);
router.get('/', tokenValidator, blogPostController.getAll);
router.get('/:id', tokenValidator, blogPostController.getById);
router.put('/:id', tokenValidator, blogPostController.updateBlogPost);
router.delete('/:id', tokenValidator, blogPostController.deleteBlogPost);

module.exports = router;