import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    name:String

    @IsNotEmpty()
    @IsNumber()
    telephoneNumber:Number
}
