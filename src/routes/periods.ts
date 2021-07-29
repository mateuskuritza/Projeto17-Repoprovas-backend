import express from "express";
const router = express.Router();
import * as periodsController from "../controllers/periodsController";

router.get("/", periodsController.getAll);

export default router;