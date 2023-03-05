const { User, BlogPost, Category, sequelize } = require('../models');
const { validateBlogPost } = require('./validations/validationInputValues');

const getAll = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
    
        return { type: null, message: blogPosts };
};

const createblogPost = async ({ title, content, categoryIds, id }) => {
    const error = validateBlogPost({ title, content, categoryIds });
    if (error.type) return error;
    const result = await sequelize.transaction(async (t) => {
        const newBlogPost = await BlogPost
        .create({
                title,
                content,
                userId: id,
                published: Date.now(),
                updated: Date.now() }, { transaction: t });
        return newBlogPost;
    });

    return { type: null, message: result };
};

module.exports = {
    getAll,
    createblogPost,
};