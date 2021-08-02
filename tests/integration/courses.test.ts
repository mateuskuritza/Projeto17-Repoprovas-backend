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

beforeEach(async () => {
    await clearDatabase();
    await populateCategories();
    await populatePeriods();
})

afterAll(async () => {
    await getConnection().close();
});


describe("GET /courses", () => {
    it("should return status 200", async () => {
        const result = await test.get("/courses");
        expect(result.status).toEqual(200);
    })
    it("should return array of courses", async () => {
        const fakeName = "fakeName";
        await factories.course.createCourse({ name: fakeName });
        const result = await test.get("/courses");
        expect(result.body[0]).toStrictEqual({
            id: 1,
            name: fakeName
        })
    })
})

describe("GET /:id/teachers", () => {
    it("should return status 200", async () => {
        const result = await test.get("/courses/1/teachers");
        expect(result.status).toEqual(200);
    })
    it("should return status 400 invalid id", async () => {
        const result = await test.get("/courses/a/teachers");
        expect(result.status).toEqual(400);
    })
    it("should return course with array of teachers", async () => {
        const fakeName = "fakeName";
        const newCourse = await factories.course.createCourse({ name: fakeName });
        const result = await test.get("/courses/1/teachers");
        expect(result.body).toStrictEqual({
            id: newCourse.id,
            name: newCourse.name,
            teachers: []
        });
    })
})

describe("GET /:id/subjects", () => {
    it("should return status 200", async () => {
        const result = await test.get("/courses/1/subjects");
        expect(result.status).toEqual(200);
    })
    it("should return status 400 invalid id", async () => {
        const result = await test.get("/courses/a/subjects");
        expect(result.status).toEqual(400);
    })
    it("should return course with array of subjects", async () => {
        const fakeName = "fakeName";
        const newCourse = await factories.course.createCourse({ name: fakeName });
        const result = await test.get("/courses/1/subjects");
        expect(result.body).toStrictEqual({
            id: newCourse.id,
            name: newCourse.name,
            subjects: []
        });
    })
})