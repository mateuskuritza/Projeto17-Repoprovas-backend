import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Categories from "../entities/Categories";
import Periods from "../entities/Periods";

export async function getAll(req: Request, res: Response) {
    try {
        const allCategories = await getRepository(Categories).find();
        res.status(200).send(allCategories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function createAllCategories(req: Request, res: Response) {
    try {/*
        const allCategoriesNames = ["P1", "P2", "P3", "2ch", "Outras"];
        for (let i = 0; i < allCategoriesNames.length; i++) {
            const category = new Categories();
            category.name = allCategoriesNames[i];
            await getRepository(Categories).save(category);
        }
        const allPeriods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Eletiva"];
        for (let i = 0; i < allPeriods.length; i++) {
            const period = new Periods();
            period.name = allPeriods[i];
            await getRepository(Periods).save(period);
        }*/
        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}