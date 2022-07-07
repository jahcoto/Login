import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

//Importamos los roters
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//Routing
//Con el USE podemos usar cualquiera de los 4 verbos de http sin tener que indicar cual es
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 4009;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});