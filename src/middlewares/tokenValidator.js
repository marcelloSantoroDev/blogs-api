const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const tokenValidator = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const { data } = jwt.verify(token, secret);
        const user = await userService.getUserByEmail(data);

        if (!user) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        
        req.user = user;
    
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = tokenValidator;