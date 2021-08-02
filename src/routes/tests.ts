import express from "express";
const router = express.Router();
import * as testsController from "../controllers/testsController";

router.post("/", testsController.createTest);

router.get("/teacher/:id", testsController.getByTeacherId);
router.get("/subject/:id", testsController.getBySubjectId);
//router.get("/:id", testsController.getTestById);
//router.get("/", testsController.getAll);


export default router;