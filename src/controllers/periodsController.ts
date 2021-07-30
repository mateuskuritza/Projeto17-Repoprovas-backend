import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Periods from "../entities/Periods";

export async function getAll(req: Request, res: Response) {
    try {
        const allCategories = await getRepository(Periods).find({ relations: ["subjects"] });
        res.status(200).send(allCategories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}