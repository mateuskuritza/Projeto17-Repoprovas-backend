import express from "express";
const router = express.Router();
import * as coursesController from "../controllers/coursesController";

router.get("/", coursesController.getAll);

router.post("/", coursesController.createCourse);

export default router;