import mongoose from 'mongoose';
import userService from '../services/user.service.js';

export const validId = (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: `Invalid id: ${id}` })
    }
    next();

};

export const validUser = async (req, res, next) => {

    const { id } = req.params;

    const user = await userService.getFindById(id);

    if (!user) {
        return res.status(404).send({ message: `not found user for id ${id}` })
    }

    req.id = id;
    req.user = user;

    next();

};

export default { validId, validUser };