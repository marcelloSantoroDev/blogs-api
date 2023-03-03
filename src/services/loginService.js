// const { User } = require('../models');
const { validateLoginEmail, existingUserCheck } = require('./validations/validationInputValues');

const login = async ({ email, password }) => {
    if (!email || !password) {
        return { type: 'INVALID_FIELDS', message: 'Some required fields are missing' };
    }

    const checkUser = await existingUserCheck(email);

    if (checkUser.type) {
        return checkUser;
    }
    
    const error = validateLoginEmail(email);

    if (error.type) {
        return error;
    }

    return { type: null, message: '' };
};

module.exports = {
    login,
};