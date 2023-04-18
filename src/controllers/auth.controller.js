import bcrypt from 'bcrypt';
import { generateToken, loginService } from '../services/auth.service.js';

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await loginService(email);

        if (!user) return res.status(404).send({ message: `Ops! some wrong. Please review yours datas` });
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).send({ message: `Ops! some wrong. Please review yours datas` });

        const token = generateToken(user.id);

        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ message: `Internal Server Error: ${error.message}` });
    }
}

export default login;