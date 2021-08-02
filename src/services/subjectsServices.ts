import { getRepository } from "typeorm";
import Subjects from "../entities/Subjects";

export async function createSubject(subject: Subjects) {
    return await getRepository(Subjects).save(subject);
}