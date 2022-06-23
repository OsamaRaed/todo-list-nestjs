import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { ConfigModule } from '@nestjs/config';
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TodosModule } from "./todos/todos.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/user.model";
import { Todo } from "./todos/todo.model";
import { ConfigModule } from "@nestjs/config";
import { ConfigModuleModule } from './config-module/config-module.module';
import { CatsModule } from './cats/cats.module';
import * as dotenv from 'dotenv'

dotenv.config();
@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Todo]
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        AuthModule, UsersModule, TodosModule, ConfigModuleModule, CatsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
