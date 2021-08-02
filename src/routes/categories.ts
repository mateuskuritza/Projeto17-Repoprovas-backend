import express from "express";
const router = express.Router();
import * as categoriesController from "../controllers/categoriesController";

router.get("/", categoriesController.getAll);

export default router;