import { getRepository } from "typeorm";
import Tests from "../../src/entities/Tests";
import Test from "../../src/interfaces/Itest";

export async function createTest(data: Test): Promise<Tests> {
    const newTest = await getRepository(Tests).save(data);
    return newTest;
}
