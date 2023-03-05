const { User, BlogPost, Category } = require('../models');

const getAll = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
    
        return { type: null, message: blogPosts };
};

module.exports = {
    getAll,
};