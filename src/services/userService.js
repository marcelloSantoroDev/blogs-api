const { User } = require('../models');
const { validateLoginEmail, existingUserCheck } = require('./validations/validationInputValues');

const createUser = async ({ displayName, email, password, image }) => {
    if (displayName.length <= 8) {
        return { type: 'INVALID_VALUE',
        message: '"displayName" length must be at least 8 characters long' };
    }
    const error = validateLoginEmail(email);

    if (error.type) {
        return { type: 'INVALID_VALUE', message: '"email" must be a valid email' };
    }

    if (password.length < 6) {
        return { type: 'INVALID_VALUE',
        message: '"password" length must be at least 6 characters long' };
    }

    const checkUser = await existingUserCheck(email);
    if (checkUser.type === null) {
        return { type: 'EXISTING_USER', message: 'User already registered' };
    }

    const newUser = await User.create({ displayName, email, password, image });
    return { type: null, message: newUser };
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: 'password' } });
    return { type: null, message: users };
};

const getById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });

    if (!user) {
        return { type: 'USER_NOT_FOUND', message: 'User does not exist' };
    }

    return { type: null, message: user };
};

    const deleteUser = async (id) => {
        await User.destroy({ where: { id } });
    };

module.exports = {
    createUser,
    getUserByEmail,
    getAll,
    getById,
    deleteUser,
};