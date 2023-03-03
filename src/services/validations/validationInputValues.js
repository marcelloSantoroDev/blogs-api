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

module.exports = {
    validateLoginEmail,
    existingUserCheck,
};