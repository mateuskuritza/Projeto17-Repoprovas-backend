import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Courses from "../entities/Courses";

export async function createCourse(req: Request, res: Response) {
    try {
        const course = await getRepository(Courses).save(req.body);
        res.status(201).send(course);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const allCourses = await getRepository(Courses).find();
        res.status(200).send(allCourses);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}