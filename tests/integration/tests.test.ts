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


describe("POST /tests", () => {
    it("should return status 201 and created test", async () => {
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const newSubject = await factories.subject.createSubject();
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: 1, courseId: newCourse.id, teacherId: newTeacher.id, subjectId: newSubject.id }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(201);
        expect(result.body).toEqual({
            id: 1,
            ...newTestData
        })
    })
    it("should return status 400 invalid name", async () => {
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const newSubject = await factories.subject.createSubject();
        const newTestData = { name: "fakeName", pdf: "fakeLink", categoryId: 1, courseId: newCourse.id, teacherId: newTeacher.id, subjectId: newSubject.id }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(400);
    })
    it("should return status 400 invalid categoryId format", async () => {
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: "a", courseId: 1, teacherId: 1, subjectId: 1 }
        const result = await test.post("/tests").send(newTestData);
        const teste = await test.get("/tests");
        expect(result.status).toEqual(400);
    })
    it("should return status 400 invalid courseId format", async () => {
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: 1, courseId: "a", teacherId: 1, subjectId: 1 }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(400);
    })
    it("should return status 400 invalid teacherId format", async () => {
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: 1, courseId: 1, teacherId: "a", subjectId: 1 }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(400);
    })
    it("should return status 400 invalid subjectId format", async () => {
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: 1, courseId: 1, teacherId: 1, subjectId: "a" }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(400);
    })
    it("should return status 500 course id not registered", async () => {
        clearDatabase();
        const newTestData = { name: "2020.1", pdf: "fakeLink", categoryId: 1, courseId: 10, teacherId: 1, subjectId: 1 }
        const result = await test.post("/tests").send(newTestData);
        expect(result.status).toEqual(500);
    })
})

describe("GET /tests/teacher/:id", () => {
    it("should return status 200", async () => {
        await clearDatabase();
        await populateCategories()
        await populatePeriods();
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const newSubject = await factories.subject.createSubject();
        const newTest = await factories.test.createTest();
        const result = await test.get("/tests/teacher/" + newTeacher.id);
        expect(result.status).toEqual(200);
    })
    it("should return status 400 invalid id", async () => {
        const result = await test.get("/tests/teacher/a");
        expect(result.status).toEqual(400);
    })
    it("should return status 404 if number of tests is 0", async () => {
        await clearDatabase();
        await populateCategories()
        await populatePeriods();
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const result = await test.get("/tests/teacher/1");
        expect(result.status).toEqual(404);
    })
})

describe("GET /tests/subject/:id", () => {
    it("should return status 200", async () => {
        await clearDatabase();
        await populateCategories()
        await populatePeriods();
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const newSubject = await factories.subject.createSubject();
        const newTest = await factories.test.createTest();
        const result = await test.get("/tests/subject/" + newTeacher.id);
        expect(result.status).toEqual(200);
    })
    it("should return status 400 invalid id", async () => {
        const result = await test.get("/tests/subject/a");
        expect(result.status).toEqual(400);
    })
    it("should return status 404 if number of tests is 0", async () => {
        await clearDatabase();
        await populateCategories()
        await populatePeriods();
        const newCourse = await factories.course.createCourse();
        const newTeacher = await factories.teacher.createTeacher();
        const newSubject = await factories.subject.createSubject();
        const result = await test.get("/tests/subject/1");
        expect(result.status).toEqual(404);
    })
})