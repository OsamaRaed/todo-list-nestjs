import { TodoService } from './todos.service';
import { Todo } from "./todo.model";
import { Sequelize } from "sequelize-typescript";
import { createMemDB } from "../utils/db-testing/createMemDb";

describe('CatsService', () => {
    let todoService: TodoService;
    let memDb : Sequelize;

    
    beforeEach(async () => {
        memDb = await createMemDB();
        todoService = new TodoService(Todo);
    });
    
    beforeEach(async () => {
        // Creation of our universes
        // marvel = await Universe.create({ id: 1, name: 'marvel' });
        // dc = await Universe.create({ id: 2, name: 'dc' });
    });
    
    afterEach(async () => {
        // clean out the database after every test
        await memDb.truncate();
    });
    
    afterAll(() => {
        memDb.close();
    })

    describe('findAll', () => {
        it('should return an empty array of cats', async () => {
            
            
            // jest.spyOn(todoService, 'findAll').mockImplementation(() => []);
            // expect(todoService.).toStrictEqual([]);
        });
    });
    describe('create', () => {
        it('should return an object cat', async () => {
            // todoService. ;
            // jest.spyOn(todoService, 'findAll').mockImplementation(() => []);
            // expect(todoService. ).toStrictEqual([]);
        });
    });
});