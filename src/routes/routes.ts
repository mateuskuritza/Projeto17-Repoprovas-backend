import express from "express";
const router = express.Router();
import testsRouter from "./tests";
import coursesRouter from "./courses";
import categoriesRouter from "./categories";
import periodsRouter from "./periods";
import { populateAll } from "../controllers/populateAll";

router.use("/tests", testsRouter);
router.use("/courses", coursesRouter);
router.use("/categories", categoriesRouter);
router.use("/periods", periodsRouter);
router.get("/populate", populateAll);

export default router;