const { loginService } = require('../services');
const tokenGenerator = require('../utils/tokenGenerator');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await loginService.login({ email, password });
    
    if (type) {
        return res.status(400).json({ message });
    }

    const token = tokenGenerator(req.body.email);

    return res.status(200).json({ token });
};

module.exports = {
    login,
};