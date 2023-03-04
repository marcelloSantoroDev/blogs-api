const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { type, message } = await categoryService.createCategory({ name });

    if (type) {
        return res.status(404).json({ message });
    }

    return res.status(200).json(message);
};

module.exports = {
    createCategory,
};