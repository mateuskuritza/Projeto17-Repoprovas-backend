import Courses from "../../src/entities/Courses";
import { getRepository } from "typeorm";
import Course from "../../src/interfaces/Icourse";

export async function createCourse(data: Course): Promise<Courses> {
    const newCourse = await getRepository(Courses).save(data);
    return newCourse
}
