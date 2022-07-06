import express from "express";

const userRouter = express.Router();

//Importamos el controller del Usuario
import { getUsers, createUser } from '../controller/userController.js';

//metodo get
userRouter.get("/", getUsers);

//metodo post
userRouter.post("/", createUser);

export default userRouter;