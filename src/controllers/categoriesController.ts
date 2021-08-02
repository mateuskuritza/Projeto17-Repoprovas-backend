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
/*
export async function getTestsByCategoryId(req: Request, res: Response) {
    try {
        const subjectTests = await getRepository(Categories).findOne({
            where: {
                id: req.params.id
            },
            relations: ["tests", "tests.teacher"]
        });
        if (!subjectTests) return res.sendStatus(404);
        res.status(200).send(subjectTests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}*/