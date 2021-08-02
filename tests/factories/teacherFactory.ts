import { getRepository } from "typeorm";
import Teachers from "../../src/entities/Teachers";
import Teacher from "../../src/interfaces/Iteacher";
import faker from "faker/locale/pt_BR";

export async function createTeacher(data: Teacher = { name: faker.name.findName(), courseId: 1 }): Promise<Teachers> {
    const newTeacher = await getRepository(Teachers).save(data);
    return newTeacher
}
