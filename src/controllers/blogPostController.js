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

module.exports = {
    getAll,
    createblogPost,
};