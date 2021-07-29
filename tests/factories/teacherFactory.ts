import { getRepository } from "typeorm";
import Teachers from "../../src/entities/Teachers";
import Teacher from "../../src/interfaces/Iteacher";

export async function createTeacher(data: Teacher): Promise<Teachers> {
    const newTeacher = await getRepository(Teachers).save(data);
    return newTeacher
}
