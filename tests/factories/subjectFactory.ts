import Subjects from "../../src/entities/Subjects";
import { getRepository } from "typeorm";
import Subject from "../../src/interfaces/Isubject";
import faker from "faker/locale/pt_BR";

export async function createSubject(data: Subject = { name: faker.name.findName(), periodId: 1, courseId: 1 }): Promise<Subjects> {
    const newSubject = await getRepository(Subjects).save(data);
    return newSubject
}
