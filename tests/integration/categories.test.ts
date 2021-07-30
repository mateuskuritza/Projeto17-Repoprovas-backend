import "../../src/setup";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import { clearDatabase, populateCategories, populatePeriods } from "../utils/database";

import factories from "../factories/factories";
const test = supertest(app);

beforeAll(async () => {
    await init();
    await clearDatabase();
    await populateCategories();
    await populatePeriods();
});

afterAll(async () => {
    await getConnection().close();
});


describe("GET /categories", () => {
    it("should return status 200", async () => {
        const result = await test.get("/categories");
        expect(result.status).toEqual(200);
    })
    it("should return array of categories", async () => {
        const result = await test.get("/categories");
        expect(result.body[0]).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            tests: expect.any(Array)
        })
    })
})