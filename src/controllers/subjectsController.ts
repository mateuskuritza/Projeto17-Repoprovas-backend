import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Subjects from "../entities/Subjects";
import schema from "../schemas/Subjects";

const relations = ["tests", "tests.teacher"];

export async function createSubject(req: Request, res: Response) {
    try {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send("invalid body");
        const subject = await getRepository(Subjects).save(req.body);
        res.status(201).send(subject);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const allSubjects = await getRepository(Subjects).find({ relations });
        res.status(200).send(allSubjects);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getSubjectById(req: Request, res: Response) {
    try {
        const subject = await getRepository(Subjects).findOne({
            where: {
                id: req.params.id
            },
            relations
        });
        if (!subject) return res.sendStatus(404);
        res.status(200).send(subject);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}