import express from "express";
const router = express.Router();
import * as categoriesController from "../controllers/categoriesController";

router.post("/", categoriesController.createAllCategories);
router.get("/", categoriesController.getAll);

export default router;