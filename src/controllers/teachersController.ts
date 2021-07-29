import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Teachers from "../entities/Teachers";
import schema from "../schemas/Teachers";

export async function getAll(req: Request, res: Response) {
    try {
        const allTeachers = await getRepository(Teachers).find();
        res.status(200).send(allTeachers);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getTeacherById(req: Request, res: Response) {
    try {
        const teacher = await getRepository(Teachers).findOne({
            where: {
                id: req.params.id
            }
        });
        if (!teacher) return res.sendStatus(404);
        res.status(200).send(teacher);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function createTeacher(req: Request, res: Response) {
    try {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send("invalid body");
        const teacher = await getRepository(Teachers).save(req.body);
        res.status(201).send(teacher);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}