import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

conectarDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});