import Periods from "../../src/entities/Periods";
import { getRepository } from "typeorm";
import Period from "../../src/interfaces/Iperiod";

export async function createPeriod(data: Period): Promise<Periods> {
    const newPeriod = await getRepository(Periods).save(data);
    return newPeriod
}
