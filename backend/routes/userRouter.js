import express from "express";

const userRouter = express.Router();

//Importamos el controller del Usuario
import { getUsers, createUser, getUser } from '../controller/userController.js';

//metodo get
userRouter.get("/", getUsers);

//metodo post
userRouter.post("/", createUser);
userRouter.post("/login", getUser);

export default userRouter;