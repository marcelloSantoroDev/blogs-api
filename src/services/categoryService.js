const { Category } = require('../models');

const createCategory = async ({ name }) => {
    if (!name) {
        return { type: 'NAME_NOT_FOUND', message: '"name" is required' };
    }

    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory };
};

const getAll = async () => {
    const categories = await Category.findAll();
    return { type: null, message: categories };
};

module.exports = {
    createCategory,
    getAll,
};