import userService from '../services/user.service.js';

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "Submit all fields for registration" });
        }

        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ messa: "Error creating Users" });
        }

        res.status(201).send({
            message: "User created Successfully",
            user: {
                name,
                username,
                email,
                avatar,
                background
            }
        });
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error: ${error.message}` });
    }

}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAll();

        if (users === 0) {
            return res.status(404).send({ message: "This collection of users is empty" });
        }

        res.send(users);
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error: ${error.message}` });
    }

}

const findById = async (req, res) => {
    try {
        const { id, user } = req;
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error: ${error.message}` });
    }

}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message: "Submit at least one field for update" });
        }

        const { id, user } = req;

        await userService.update(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        )

        res.send({ message: "User successfully updated" });
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error: ${error.message}` });
    }

}

export default { create, findAll, findById, update };