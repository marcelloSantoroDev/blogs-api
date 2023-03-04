const { Category } = require('../models');

const createCategory = async ({ name }) => {
    if (!name) {
        return { type: 'NAME_NOT_FOUND', message: '"name" is required' };
    }

    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory };
};

module.exports = {
    createCategory,
};