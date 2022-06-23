import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Todo } from "./todo.model";
import { TodoService } from "./todos.service";

@Module({
    imports: [SequelizeModule.forFeature([Todo])],
    providers: [TodoService],
    exports: [SequelizeModule,TodoService],
})
export class TodosModule {}
