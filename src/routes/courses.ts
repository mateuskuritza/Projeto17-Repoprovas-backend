import express from "express";
const router = express.Router();
import * as coursesController from "../controllers/coursesController";

router.get("/", coursesController.getAll);
router.get("/:id/teachers", coursesController.getTeachers);
router.get("/:id/subjects", coursesController.getSubjects);


//router.post("/", coursesController.createCourse);

export default router;