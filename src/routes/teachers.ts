import express from "express";
const router = express.Router();
import * as teachersController from "../controllers/teachersController";

router.get("/:id", teachersController.getTeacherById);
router.get("/", teachersController.getAll);

router.post("/", teachersController.createTeacher);

export default router;