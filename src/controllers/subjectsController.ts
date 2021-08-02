import { Request, Response } from "express";
import * as subjectsServices from "../services/subjectsServices";
import schema from "../schemas/Subjects";

export async function createSubject(req: Request, res: Response) {
    try {
        const subject = req.body;
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const newSubject = await subjectsServices.createSubject(subject);
        res.status(201).send(newSubject);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}