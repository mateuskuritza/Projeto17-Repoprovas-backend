import express from "express";
const router = express.Router();
import testsRouter from "./tests";
import teachersRouter from "./teachers";
import subjectsRouter from "./subjects";
import coursesRouter from "./courses";
import categoriesRouter from "./categories";
import periodsRouter from "./periods";

router.use("/tests", testsRouter);
router.use("/teachers", teachersRouter);
router.use("/subjects", subjectsRouter);
router.use("/courses", coursesRouter);
router.use("/categories", categoriesRouter);
router.use("/periods", periodsRouter);


export default router;