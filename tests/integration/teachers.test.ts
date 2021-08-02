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

describe("POST /teachers", () => {
    it("should return status 201", async () => {
        const newCourse = await factories.course.createCourse();
        const result = await test.post("/teachers").send({ name: "fakeName", courseId: newCourse.id });
        expect(result.status).toEqual(201);
    })
    it("should return status 400 invalid body", async () => {
        const newCourse = await factories.course.createCourse();
        const result = await test.post("/teachers").send({ name: "1", courseId: newCourse.id });
        expect(result.status).toEqual(400);
    })
    it("should return status 500 invalid course id", async () => {
        const newCourse = await factories.course.createCourse();
        const result = await test.post("/teachers").send({ name: "fakeName", courseId: newCourse.id + 1 });
        expect(result.status).toEqual(500);
    })
})