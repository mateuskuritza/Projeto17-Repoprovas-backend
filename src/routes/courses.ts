import express from "express";
const router = express.Router();
import * as coursesController from "../controllers/coursesController";

router.get("/", coursesController.getAll);
router.get("/:id/teachers", coursesController.getTeachers);
router.get("/:id/subjects", coursesController.getSubjects);


export default router;