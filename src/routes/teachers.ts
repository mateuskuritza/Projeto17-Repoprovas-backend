import express from "express";
const router = express.Router();
import * as teachersController from "../controllers/teachersController";

router.use("/", teachersController.getAll);

export default router;