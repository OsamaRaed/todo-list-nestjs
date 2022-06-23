import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { AuthGuard } from "./auth.guard";

@Module({
    imports: [
        UsersModule,
    ],
    providers: [AuthService,AuthGuard],
    exports: [AuthService,AuthGuard]
})
export class AuthModule {
}