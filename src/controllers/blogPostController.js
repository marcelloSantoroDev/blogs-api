const { blogPostService } = require('../services');

const getAll = async (_req, res) => {
    const { message } = await blogPostService.getAll();

    return res.status(200).json(message);
};

const createblogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const { type, message } = await blogPostService
    .createblogPost({ title, content, categoryIds, id });
    
    if (type) {
        return res.status(400).json({ message });
    }

    return res.status(201).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await blogPostService.getById(id);
    
    if (type) {
        return res.status(404).json({ message });
    }

    return res.status(200).json(message);
};

const updateBlogPost = async (req, res) => {
    const userId = req.user.id;
    const blogPostId = req.params.id;
    const { title, content } = req.body;
    const { type, message } = await blogPostService
    .updateBlogPost({ title, content, userId, blogPostId });

    if (type === 'UNAUTHORIZED_USER') return res.status(401).json({ message });
    if (type === 'INVALID_VALUES') return res.status(400).json({ message });

    return res.status(200).json(message);
};

module.exports = {
    getAll,
    createblogPost,
    getById,
    updateBlogPost,
};