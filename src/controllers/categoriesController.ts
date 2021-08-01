import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Categories from "../entities/Categories";

export async function getAll(req: Request, res: Response) {
    try {
        const allCategories = await getRepository(Categories).find();
        res.status(200).send(allCategories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getTestsByCategoryId(req: Request, res: Response) {
    try {
        const subject = await getRepository(Categories).findOne({
            where: {
                id: req.params.id
            },
            relations: ["tests", "tests.teacher"]
        });
        if (!subject) return res.sendStatus(404);
        res.status(200).send(subject);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}