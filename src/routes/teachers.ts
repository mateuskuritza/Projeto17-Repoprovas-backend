import express from "express";
const router = express.Router();
import * as teachersController from "../controllers/teachersController";

router.post("/", teachersController.createTeacher);

export default router;