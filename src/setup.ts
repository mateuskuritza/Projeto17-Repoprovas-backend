import dotenv from "dotenv";
import path from "path";

const { NODE_ENV } = process.env;

const envPath: string = NODE_ENV === "test" ? "test.env" : ".env";

dotenv.config({ path: path.resolve(".", envPath) });