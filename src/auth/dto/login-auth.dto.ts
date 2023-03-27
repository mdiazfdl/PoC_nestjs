import { IsEmail, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    email:String

    @MinLength(8)
    @MaxLength(14)
    password:String
}
