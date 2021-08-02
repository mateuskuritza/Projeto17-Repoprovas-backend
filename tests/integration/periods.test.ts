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


describe("GET /periods", () => {
    it("should return status 200", async () => {
        const result = await test.get("/periods");
        expect(result.status).toEqual(200);
    })
    it("should return array of periods with subjects", async () => {
        const result = await test.get("/periods");
        expect(result.body[0]).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            subjects: []
        })
    })
})