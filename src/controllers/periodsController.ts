import { Request, Response } from "express";
import * as periodsServices from "../services/periodsServices";

export async function getAll(req: Request, res: Response) {
    try {
        const allPeriodsWithSubjects = await periodsServices.allPeriodsWithSubjects();
        res.status(200).send(allPeriodsWithSubjects);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}