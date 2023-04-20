import { Router } from "express";
import { create, findAll } from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middelware.js";



const route = Router();


route.post('/', authMiddleware, create);
route.get('/', findAll);

export default route;
