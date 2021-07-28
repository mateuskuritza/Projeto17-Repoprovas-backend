import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Teachers from "../entities/Teachers";

export async function getAll(req: Request, res: Response) {
    const allTeachers = await getRepository(Teachers).find();
    res.status(200).send(allTeachers);
}