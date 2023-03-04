const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { type, message } = await categoryService.createCategory({ name });

    if (type) {
        return res.status(400).json({ message });
    }

    return res.status(201).json(message);
};

const getAll = async (_req, res) => {
    const { message } = await categoryService.getAll();

    return res.status(200).json(message);
};

module.exports = {
    createCategory,
    getAll,
};