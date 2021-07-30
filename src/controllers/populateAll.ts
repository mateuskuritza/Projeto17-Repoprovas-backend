import Categories from "../../src/entities/Categories";
import Periods from "../../src/entities/Periods";
import Courses from "../../src/entities/Courses";
import Subjects from "../../src/entities/Subjects";
import Teachers from "../../src/entities/Teachers";
import Tests from "../../src/entities/Tests";

import factories from "../../tests/factories/factories";

import { getRepository } from "typeorm";
import { Request, Response } from "express";

export async function populateCategories() {
    const allCategoriesNames = ["P1", "P2", "P3", "2ch", "Outras"];
    for (let i = 0; i < allCategoriesNames.length; i++) {
        const category = new Categories();
        category.name = allCategoriesNames[i];
        await getRepository(Categories).save(category);
    }

}

export async function populatePeriods() {
    const allPeriods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Eletiva"];
    for (let i = 0; i < allPeriods.length; i++) {
        const period = new Periods();
        period.name = allPeriods[i];
        await getRepository(Periods).save(period);
    }
}

export async function populateAll(req: Request, res: Response) {
    try {
        await getRepository(Categories).query("TRUNCATE categories RESTART IDENTITY CASCADE");
        await getRepository(Tests).query("TRUNCATE tests RESTART IDENTITY CASCADE");
        await getRepository(Teachers).query("TRUNCATE teachers RESTART IDENTITY CASCADE");
        await getRepository(Subjects).query("TRUNCATE subjects RESTART IDENTITY CASCADE");
        await getRepository(Periods).query("TRUNCATE periods RESTART IDENTITY CASCADE");
        await getRepository(Courses).query("TRUNCATE courses RESTART IDENTITY CASCADE");
        await populateCategories();
        await populatePeriods();
        /*await factories.course.createCourse({ name: "Curso legal" });
        //await factories.subject.createSubject({ name: "Mecanica", periodId: 1 });
        await factories.subject.createSubject({ name: "Elétrica", periodId: 11 });
        await factories.teacher.createTeacher({ name: "Nome do professor" });
        await factories.test.createTest({ name: "Teste de Elétrica", categoryId: 7, teacherId: 3, subjectId: 5, courseId: 1, pdf: "link do pdf" });
        await factories.test.createTest({ name: "Teste de Elétrica", categoryId: 5, teacherId: 3, subjectId: 5, courseId: 2, pdf: "link do pdf 2" });
        */res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}