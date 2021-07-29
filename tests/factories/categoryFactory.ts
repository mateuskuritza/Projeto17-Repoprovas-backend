import { getRepository } from "typeorm";
import Category from "../../src/interfaces/Icategory";
import Categories from "../../src/entities/Categories";

export async function createCategory(data: Category): Promise<Categories> {
    const newCategory = await getRepository(Categories).save(data);
    return newCategory
}
