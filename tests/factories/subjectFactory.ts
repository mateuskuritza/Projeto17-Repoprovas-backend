import Subjects from "../../src/entities/Subjects";
import { getRepository } from "typeorm";
import Subject from "../../src/interfaces/Isubject";

export async function createSubject(data: Subject): Promise<Subjects> {
    const newSubject = await getRepository(Subjects).save(data);
    return newSubject
}
