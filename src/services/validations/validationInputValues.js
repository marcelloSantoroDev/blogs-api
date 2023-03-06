const { emailSchema } = require('./schemas');
const { User, Category, BlogPost } = require('../../models');

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

const validateBlogPostUpdate = async ({ title, content, userId, blogPostId }) => {
    if (!title || !content) {
        return { type: 'INVALID_VALUES', message: 'Some required fields are missing' };
    }

    const postToUpdate = await BlogPost.findOne({ where: { id: blogPostId } });
    const isThisUserAuthorized = postToUpdate.dataValues.userId === userId;
    if (!isThisUserAuthorized) {
        return { type: 'UNAUTHORIZED_USER', message: 'Unauthorized user' };
    }

    return { type: null, message: '' };
};

const validateBlogPostDeletion = async ({ userId, blogPostId }) => {
    const postToDelete = await BlogPost.findOne({ where: { id: blogPostId } });
    if (!postToDelete) {
        return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };
    }

    const isThisUserAuthorized = postToDelete.dataValues.userId === userId;
    if (!isThisUserAuthorized) {
        return { type: 'UNAUTHORIZED_USER', message: 'Unauthorized user' };
    }

    return { type: null, message: '' };
};

module.exports = {
    validateLoginEmail,
    existingUserCheck,
    validateBlogPost,
    validateBlogPostUpdate,
    validateBlogPostDeletion,
};