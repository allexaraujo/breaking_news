const mongoose = require('mongoose');
const userService = require('../services/user.service');


const validId = (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: `Invalid id: ${id}` })
    }
    next();

};

const validUser = async (req, res, next) => {

    const { id } = req.params;

    const user = await userService.getFindById(id);

    if (!user) {
        return res.status(404).send({ message: `not found user for id ${id}` })
    }

    req.id = id;
    req.user = user;

    next();

};

module.exports = { validId, validUser }