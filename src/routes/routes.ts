import express from "express";
const router = express.Router();
import teachersRouter from "./teachers";

router.use("/teachers", teachersRouter);

export default router;