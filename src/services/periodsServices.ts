import { getRepository } from "typeorm";
import Periods from "../entities/Periods";

export async function allPeriodsWithSubjects() {
    return await getRepository(Periods).find({ relations: ["subjects"] });
}