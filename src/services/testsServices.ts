import { getRepository } from "typeorm";
import Tests from "../entities/Tests";
import ITest from "../interfaces/Itest";

const relations = ["category", "subject", "teacher"];

export async function testsBySubjectId(subjectId: number) {
    return await getRepository(Tests).find({
        where: {
            subjectId: subjectId
        },
        relations
    });
}

export async function testsByTeacherId(teacherId: number) {
    return await getRepository(Tests).find({
        where: {
            teacherId: teacherId
        },
        relations
    });
}

export async function newTest(test: ITest) {
    return await getRepository(Tests).save(test);
}