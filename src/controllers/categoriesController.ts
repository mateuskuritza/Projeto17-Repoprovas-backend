import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Categories from "../entities/Categories";

export async function getAll(req: Request, res: Response) {
    try {
        const allCategories = await getRepository(Categories).find({ relations: ["tests"] });
        res.status(200).send(allCategories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}