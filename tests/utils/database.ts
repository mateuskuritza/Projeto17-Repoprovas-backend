import Categories from "../../src/entities/Categories";
import Periods from "../../src/entities/Periods";
import Courses from "../../src/entities/Courses";
import Subjects from "../../src/entities/Subjects";
import Teachers from "../../src/entities/Teachers";
import Tests from "../../src/entities/Tests";

import { getRepository } from "typeorm";

export async function populateCategories() {
    const allCategoriesNames = ["P1", "P2", "P3", "2ch", "Outras"];
    for (let i = 0; i < allCategoriesNames.length; i++) {
        const category = new Categories();
        category.name = allCategoriesNames[i];
        await getRepository(Categories).save(category);
    }

}

export async function populatePeriods() {
    const allPeriods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Eletiva"];
    for (let i = 0; i < allPeriods.length; i++) {
        const period = new Periods();
        period.name = allPeriods[i];
        await getRepository(Periods).save(period);
    }
}

export async function clearDatabase() {
    await getRepository(Categories).query("TRUNCATE categories RESTART IDENTITY CASCADE");
    await getRepository(Tests).query("TRUNCATE tests RESTART IDENTITY CASCADE");
    await getRepository(Teachers).query("TRUNCATE teachers RESTART IDENTITY CASCADE");
    await getRepository(Subjects).query("TRUNCATE subjects RESTART IDENTITY CASCADE");
    await getRepository(Periods).query("TRUNCATE periods RESTART IDENTITY CASCADE");
    await getRepository(Courses).query("TRUNCATE courses RESTART IDENTITY CASCADE");
    await populateCategories();
    await populatePeriods();
}
