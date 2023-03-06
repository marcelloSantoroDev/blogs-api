const { User, BlogPost, Category, PostCategory, sequelize } = require('../models');
const {
    validateBlogPost,
    validateBlogPostUpdate,
    validateBlogPostDeletion,
} = require('./validations/validationInputValues');

const getAll = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
    
        return { type: null, message: blogPosts };
};

const createblogPost = async ({ title, content, categoryIds, id }) => {
    const error = await validateBlogPost({ title, content, categoryIds });
    if (error.type) {
        console.log(error);
        return error;
    } 
    const transaction = await sequelize.transaction();
    try {
        const newBlogPost = await BlogPost
            .create({ title, content, userId: id }, { transaction });
    
        const postId = newBlogPost.dataValues.id;

        await Promise.all(categoryIds
            .map((categoryId) => PostCategory.create({ postId, categoryId }, { transaction })));

        await transaction.commit();
        return { type: null, message: newBlogPost };
    } catch (e) {
        await transaction.rollback();
        return { type: 'erro', message: e.message };
        }
    };

    const getById = async (id) => {
        const blogPost = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
        if (!blogPost) {
            return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };
        }

        return { type: null, message: blogPost };
    };

    const updateBlogPost = async ({ title, content, userId, blogPostId }) => {
        const error = await validateBlogPostUpdate({ title, content, userId, blogPostId });

        if (error.type) {
            return error;
        }

        await BlogPost
        .update({ title, content }, { where: { id: blogPostId } });
        const updatedBlogPost = await BlogPost.findOne({ where: { id: blogPostId },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });

        return { type: null, message: updatedBlogPost };
    };

    const deleteBlogPost = async ({ userId, blogPostId }) => {
        const error = await validateBlogPostDeletion({ userId, blogPostId });

        if (error.type) {
            return error;
        }

        await BlogPost.destroy({ where: { id: blogPostId } });

        return { type: null, message: '' };
    };

module.exports = {
    getAll,
    createblogPost,
    getById,
    updateBlogPost,
    deleteBlogPost,
};