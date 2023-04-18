import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !text || !banner) {
            res.status(400).send({ message: "Submit all fields for registration" });
        }

        await createService({
            title,
            text,
            banner,
            user: { _id: "643eeba840fb3a689e0487e9" }
        });
        res.status(201).send({ message: 'news created' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const findAll = async (req, res) => {
    try {

        const news = await findAllService();

        if (news.length === 0) {
            return res.status(404).send({ message: "the collection of news is empty" });
        }
        res.status(200).send(news);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

export { create, findAll };