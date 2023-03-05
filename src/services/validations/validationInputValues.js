const { emailSchema } = require('./schemas');
const { User } = require('../../models');

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

const validateBlogPost = ({ title, content, categoryIds }) => {
    const bodyList = [title, content];
    const hasUndefined = bodyList.some((item) => item === undefined);
    if (hasUndefined || !categoryIds) {
        return { type: 'MISSING_VALUES', message: 'Some required fields are missing' };
    }
    if (categoryIds.length !== 2) {
         return { type: 'INVALID_CATEGORIES', message: 'one or more "categoryIds" not found' };
    }
    return { type: null, message: '' };
};

module.exports = {
    validateLoginEmail,
    existingUserCheck,
    validateBlogPost,
};