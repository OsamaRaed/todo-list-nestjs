import { Controller, Get, Request, Post, Put, Param, Delete, UseGuards, Body } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { TodoService } from "./todos/todos.service";
import { LoginDto } from "./auth/dto/loginDto";
import { SignupDto } from "./auth/dto/signupDto";
import { CreateTodoDto } from "./todos/dto/createTodoDto";
import { UpdateTodoDto } from "./todos/dto/updateTodoDto";
import { AuthGuard } from "./auth/auth.guard";

@Controller()
export class AppController {
    constructor(private authService: AuthService, private todoService: TodoService) {
    }
    
    @Post("auth/login")
    async login(@Body() body: LoginDto) {
        return this.authService.login(body);
    }
    
    @Post("auth/signup")
    async signup(@Body() body: SignupDto) {
        return this.authService.signup(body);
    }
    
    @UseGuards(AuthGuard)
    @Get("todos")
    async getTodos(@Request() req) {
        return this.todoService.findAll(req.body.user.id);
    }

    @UseGuards(AuthGuard)
    @Post("todos")
    async postTodos(@Request() req, @Body() body: CreateTodoDto) {
        return await this.todoService.create(req.body.user.id, body);
    }

    @UseGuards(AuthGuard)
    @Put("todos/:id")
    async updateTodos(@Request() req, @Body() body: UpdateTodoDto, @Param() params) {
        return this.todoService.update(req.body.user.id, params.id, body);
    }

    @UseGuards(AuthGuard)
    @Delete("todos/:id")
    async deleteTodos(@Param() params,@Request() req) {
        return this.todoService.remove(req.body.user.id,params.id);
    }
}
