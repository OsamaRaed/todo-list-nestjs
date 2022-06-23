import { Body, Controller, Get, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller('cats')
export class CatsController {
    
    constructor(private catService: CatsService) {
    }
    
    @Get()
    findAll() {
        return this.catService.findAll();
    }
    
    @Post()
    create(@Body() body) {
        this.catService.create(body);
    }
}