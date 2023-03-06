const { emailSchema } = require('./schemas');
const { User, Category } = require('../../models');

const validateLoginEmail = (email) => {
    const { error } = emailSchema.validate(email);

    if (error) {
        return { type: 'INVALID_EMAIL', message: 'Invalid fields' };
    }

    return { type: null, message: '' };
};

const existingUserCheck = async (email) => {
    const getUser = await User.findOne({ where: { email } });

    if (!getUser) {
        return { type: 'USER_NOT_FOUND', message: 'Invalid fields' };
    }

    return { type: null, message: '' };
};

const allCategoriesExist = async (categoryIds) => {
    const checkCategory = await Promise
    .all(categoryIds.map((id) => Category.findOne({ where: { id } })));

    return checkCategory.some((category) => !category);
};

const validateBlogPost = async ({ title, content, categoryIds }) => {
    const categoriesHasSomeUndefined = await allCategoriesExist(categoryIds);
    if (categoriesHasSomeUndefined) {
         return { type: 'INVALID_CATEGORIES', message: 'one or more "categoryIds" not found' };
    }
    const bodyList = [title, content];
    const hasUndefined = bodyList.some((item) => item === undefined || item === '');
    if (hasUndefined) {
        return { type: 'MISSING_VALUES', message: 'Some required fields are missing' };
    }
    return { type: null, message: '' };
};

module.exports = {
    validateLoginEmail,
    existingUserCheck,
    validateBlogPost,
};