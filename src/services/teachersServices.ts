import { getRepository } from "typeorm";
import Teachers from "../entities/Teachers";

export async function createTeacher(teacher: Teachers) {
    return await getRepository(Teachers).save(teacher);
}