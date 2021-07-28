import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database/database";

export async function init() {
    await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

import routes from "./routes/routes";
app.use("/", routes);

export default app;
