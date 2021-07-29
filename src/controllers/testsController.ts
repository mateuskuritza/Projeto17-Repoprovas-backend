import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Tests from "../entities/Tests";
import schema from "../schemas/Test";

const relations = ["category", "teacher", "course", "subject"];

export async function createTest(req: Request, res: Response) {
    try {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const test = await getRepository(Tests).save(req.body);
        res.status(201).send(test);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const allTests = await getRepository(Tests).find({ relations });
        res.status(200).send(allTests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getTestById(req: Request, res: Response) {
    try {
        const test = await getRepository(Tests).findOne({
            where: {
                id: req.params.id
            },
            relations
        });
        if (!test) return res.sendStatus(404);
        res.status(200).send(test);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getBySubjectId(req: Request, res: Response) {
    try {
        const tests = await getRepository(Tests).find({
            where: {
                subjectId: req.params.id
            },
            relations
        });
        res.status(200).send(tests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getByTeacherId(req: Request, res: Response) {
    try {
        const tests = await getRepository(Tests).find({
            where: {
                teacherId: req.params.id
            },
            relations
        });
        res.status(200).send(tests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}