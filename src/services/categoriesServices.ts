import Categories from "../entities/Categories";
import { getRepository } from "typeorm";

export async function getAllCategories() {
    return await getRepository(Categories).find();
}