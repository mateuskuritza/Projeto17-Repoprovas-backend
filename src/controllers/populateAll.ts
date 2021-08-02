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

export async function clearDatabase() {
    await getRepository(Categories).query("TRUNCATE categories RESTART IDENTITY CASCADE");
    await getRepository(Tests).query("TRUNCATE tests RESTART IDENTITY CASCADE");
    await getRepository(Teachers).query("TRUNCATE teachers RESTART IDENTITY CASCADE");
    await getRepository(Subjects).query("TRUNCATE subjects RESTART IDENTITY CASCADE");
    await getRepository(Periods).query("TRUNCATE periods RESTART IDENTITY CASCADE");
    await getRepository(Courses).query("TRUNCATE courses RESTART IDENTITY CASCADE");
}

export async function resetDatabase(req: Request, res: Response) {
    await clearDatabase();
    await populateCategories();
    await populatePeriods();
    res.status(200).send("Database clear");
}

export async function populateAll(req: Request, res: Response) {
    try {

        await populateCategories();
        await populatePeriods();

        await factories.course.createCourse({ name: "Curso legal" });
        await factories.course.createCourse({ name: "Curso chato" });
        await factories.course.createCourse({ name: "Curso mais ou menos" });

        await factories.subject.createSubject({ name: "Matéria legal 1", periodId: 1, courseId: 1 });
        await factories.subject.createSubject({ name: "Matéria legal 2", periodId: 2, courseId: 1 });
        await factories.subject.createSubject({ name: "Matéria legal 3", periodId: 11, courseId: 1 });

        await factories.subject.createSubject({ name: "Matéria chata 1", periodId: 3, courseId: 2 });
        await factories.subject.createSubject({ name: "Matéria chata 4", periodId: 3, courseId: 2 });
        await factories.subject.createSubject({ name: "Matéria chata 2", periodId: 6, courseId: 2 });
        await factories.subject.createSubject({ name: "Matéria chata 3", periodId: 9, courseId: 2 });

        await factories.subject.createSubject({ name: "Matéria mais ou menos 1", periodId: 2, courseId: 3 });
        await factories.subject.createSubject({ name: "Matéria mais ou menos 2", periodId: 4, courseId: 3 });
        await factories.subject.createSubject({ name: "Matéria mais ou menos 3", periodId: 10, courseId: 3 });

        await factories.teacher.createTeacher({ name: "Professor legal 1", courseId: 1 });
        await factories.teacher.createTeacher({ name: "Professor legal 2", courseId: 1 });
        await factories.teacher.createTeacher({ name: "Professor legal 3", courseId: 1 });

        await factories.teacher.createTeacher({ name: "Professor chato 1", courseId: 2 });
        await factories.teacher.createTeacher({ name: "Professor chato 2", courseId: 2 });
        await factories.teacher.createTeacher({ name: "Professor chato 3", courseId: 2 });

        await factories.teacher.createTeacher({ name: "Professor mais ou menos 1", courseId: 3 });
        await factories.teacher.createTeacher({ name: "Professor mais ou menos 2", courseId: 3 });
        await factories.teacher.createTeacher({ name: "Professor mais ou menos 3", courseId: 3 });

        await factories.test.createTest({ name: "2018.1", categoryId: 1, teacherId: 1, subjectId: 1, courseId: 1, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2018.2", categoryId: 2, teacherId: 2, subjectId: 2, courseId: 1, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2019.1", categoryId: 3, teacherId: 3, subjectId: 3, courseId: 1, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });

        await factories.test.createTest({ name: "2019.2", categoryId: 2, teacherId: 4, subjectId: 4, courseId: 2, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2020.1", categoryId: 3, teacherId: 5, subjectId: 5, courseId: 2, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2020.2", categoryId: 4, teacherId: 6, subjectId: 6, courseId: 2, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });

        await factories.test.createTest({ name: "2021.1", categoryId: 3, teacherId: 7, subjectId: 7, courseId: 3, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2021.2", categoryId: 4, teacherId: 8, subjectId: 8, courseId: 3, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2017.2", categoryId: 5, teacherId: 9, subjectId: 9, courseId: 3, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        await factories.test.createTest({ name: "2017.1", categoryId: 1, teacherId: 9, subjectId: 9, courseId: 3, pdf: "https://www.buds.com.ua/images/Lorem_ipsum.pdf" });
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}