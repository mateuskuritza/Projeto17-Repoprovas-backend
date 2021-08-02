import Courses from "../../src/entities/Courses";
import { getRepository } from "typeorm";
import Course from "../../src/interfaces/Icourse";
import faker from "faker/locale/pt_BR";

export async function createCourse(data: Course = { name: faker.name.findName() }): Promise<Courses> {
    const newCourse = await getRepository(Courses).save(data);
    return newCourse
}
