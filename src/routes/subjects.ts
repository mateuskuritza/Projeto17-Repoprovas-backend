import express from "express";
const router = express.Router();
import * as subjectsController from "../controllers/subjectsController";

router.post("/", subjectsController.createSubject);

export default router;