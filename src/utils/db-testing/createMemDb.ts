import { Sequelize } from "sequelize-typescript";
import { User } from "../../users/user.model";
import { Todo } from "../../todos/todo.model";

import * as dotenv from "dotenv";

dotenv.config();


export async function createMemDB(): Promise<Sequelize> {
    return new Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TEST_NAME,
        models: [User, Todo]
    });
}