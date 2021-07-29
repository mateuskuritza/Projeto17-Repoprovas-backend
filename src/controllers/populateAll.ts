import Categories from "../../src/entities/Categories";
import Periods from "../../src/entities/Periods";
import Courses from "../../src/entities/Courses";
import Subjects from "../../src/entities/Subjects";
import Subjects_teachers from "../../src/entities/Teachers_subjects_subjects";
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
    await populateCategories();
    await populatePeriods();
    await factories.course.createCourse({ name: "Curso legal" });
    await factories.subject.createSubject({ name: "Mecanica", periodId: 1 });
    await factories.teacher.createTeacher({ name: "Nome do professor" });
    await factories.test.createTest({ name: "Teste de Mecanica", categoryId: 1, teacherId: 1, subjectId: 1, courseId: 1, pdf: "link do pdf" });
    res.sendStatus(201);
}