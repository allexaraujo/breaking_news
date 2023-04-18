const userService = require('../services/user.service')
const moongose = require('mongoose');

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "Submit all fields for registration" })
    }

    const user = await userService.create(req.body);

    if (!user) {
        return res.status(400).send({ messa: "Error creating Users" })
    }

    res.status(201).send({
        message: "User created Successfully",
        user

    });

}

const findAll = async (req, res) => {
    const users = await userService.findAll();
    if (users === 0) {
        return res.status(404).send({ message: "This collection of users is empty" });
    }

    res.send(users);

}

const findById = async (req, res) => {
    const { id } = req.params;

    if (!moongose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: `Invalid id: ${id}` })
    }
    const user = await userService.getFindById(id);

    if (!user) {
        return res.status(404).send({ message: `not found user for id ${id}` })
    }
    res.send(user);
}

module.exports = { create, findAll, findById };