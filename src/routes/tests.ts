import express from "express";
const router = express.Router();
import * as testsController from "../controllers/testsController";

router.post("/", testsController.createTest);

router.get("/teacher/:id", testsController.getByTeacherId);
router.get("/subject/:id", testsController.getBySubjectId);

export default router;