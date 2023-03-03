const { loginService } = require('../services');
const tokenGenerator = require('../utils/tokenGenerator');

const createUser = async (req, res) => {
    const { type, message } = await loginService.createUser(req.body);
    
    if (type) {
        return res.status(400).json({ message });
    }

    const token = tokenGenerator(req.body.email);

    return res.status(200).json({ token });
};

module.exports = {
    createUser,
};