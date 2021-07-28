import { getConnectionManager } from "typeorm";;

export default async function connect() {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
        type: "postgres",
        url: process.env.DATABASE_URL,
        name: "default",
        entities: ["src/entities/*.ts"]
    });
    await connection.connect();
    return connection;
}