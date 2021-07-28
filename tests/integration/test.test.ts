import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});