const { userService } = require('../services');
const tokenGenerator = require('../utils/tokenGenerator');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await userService.createUser({ displayName, email, password, image });

    if (type === 'INVALID_VALUE') return res.status(400).json({ message });
    if (type === 'EXISTING_USER') return res.status(409).json({ message });

    const token = tokenGenerator(email);

    return res.status(201).json({ token });
};

module.exports = {
    createUser,
};