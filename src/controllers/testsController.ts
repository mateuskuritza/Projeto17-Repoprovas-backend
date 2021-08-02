import { Request, Response } from "express";
import schema from "../schemas/Test";
import * as testsServices from "../services/testsServices";

export async function createTest(req: Request, res: Response) {
    try {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const newTest = await testsServices.newTest(req.body);
        res.status(201).send(newTest);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getBySubjectId(req: Request, res: Response) {
    try {
        const subjectId = Number(req.params.id);
        if (!subjectId) return res.status(400).send("id missing");
        const tests = await testsServices.testsBySubjectId(subjectId);
        if (tests.length === 0) return res.sendStatus(404);
        res.status(200).send(tests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getByTeacherId(req: Request, res: Response) {
    try {
        const teacherId = Number(req.params.id);
        if (!teacherId) return res.status(400).send("id missing");
        const tests = await testsServices.testsByTeacherId(teacherId);
        if (tests.length === 0) return res.sendStatus(404);
        res.status(200).send(tests);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}