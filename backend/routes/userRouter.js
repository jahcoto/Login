import express from "express";

const userRouter = express.Router();

//metodo get
userRouter.get("/", (req, res) => {
    res.json({
        "msg": "Desde API/USUARIOS"
    })
});

//metodo post
userRouter.post("/", (req, res) => {
    res.send({
        "msg": "Desde POST/API/USUARIOS"
    })
});

export default userRouter;