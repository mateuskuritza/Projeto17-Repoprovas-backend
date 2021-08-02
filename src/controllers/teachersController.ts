import { Request, Response } from "express";
import * as teachersServices from "../services/teachersServices";
import schema from "../schemas/Teachers";

export async function createTeacher(req: Request, res: Response) {
    try {
        const teacher = req.body;
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const newTeacher = await teachersServices.createTeacher(teacher);
        res.status(201).send(newTeacher);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}