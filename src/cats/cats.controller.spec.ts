import { CatsService } from './cats.service';
import { Cat } from "./cat.class";

describe('CatsService', () => {
    let catsService: CatsService;
    
    beforeEach(() => {
        catsService = new CatsService();
    });
    
    describe('findAll', () => {
        it('should return an empty array of cats', async () => {
            jest.spyOn(catsService, 'findAll').mockImplementation(() => []);
            expect(catsService.findAll()).toStrictEqual([]);
        });
    });
    describe('create', () => {
        it('should return an object cat', async () => {
            const cat = new Cat();
            cat.name = "test";
            catsService.create(cat);
            jest.spyOn(catsService, 'findAll').mockImplementation(() => [cat]);
            expect(catsService.findAll()).toStrictEqual([cat]);
        });
    });
});