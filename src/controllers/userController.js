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

const getAll = async (_req, res) => {
    const { message } = await userService.getAll();
    return res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.getById(id);

    if (type) {
        return res.status(404).json({ message });
    }

    return res.status(200).json(message);
};

const deleteUser = async (req, res) => {
    const { id } = req.user;
    await userService.deleteUser(id);
    return res.status(204).end();
};

module.exports = {
    createUser,
    getAll,
    getById,
    deleteUser,
};