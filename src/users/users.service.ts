import { ConflictException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import * as bcrypt from "bcrypt";
import { SignupDto } from "../auth/dto/signupDto";


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {
    }
    
    async findOne(email: string): Promise<User> {
        // console.log(await this.userModel.findOne({
        //     where: {
        //         email: email
        //     }
        // }))
        return await this.userModel.findOne({
            where: {
                email: email
            }
        });
    }
    
    async create(user: SignupDto): Promise<void> {
        const existed = await this.findOne(user.email);
        if(existed){
            throw new ConflictException()
        }
        const hash = await bcrypt.hash(user.password, 10);
        const createdUser = await this.userModel.create({
            name: user.name,
            email: user.email,
            password: hash
        });
    }
}