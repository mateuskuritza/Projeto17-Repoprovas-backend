import { getRepository } from "typeorm";
import Tests from "../../src/entities/Tests";
import Test from "../../src/interfaces/Itest";
import faker from "faker/locale/pt_BR";

export async function createTest(data: Test = { name: "2020.1", categoryId: 1, teacherId: 1, subjectId: 1, courseId: 1, pdf: faker.name.findName() }): Promise<Tests> {
    const newTest = await getRepository(Tests).save(data);
    return newTest;
}