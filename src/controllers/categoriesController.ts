import { Request, Response } from "express";
import * as categoriesServices from "../services/categoriesServices";

export async function getAll(req: Request, res: Response) {
    try {
        const allCategories = await categoriesServices.getAllCategories();
        res.status(200).send(allCategories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}