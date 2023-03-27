import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/schema/users.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private readonly usersmodel: Model<UsersDocument>){}

  async register(registerAuthDto:RegisterAuthDto){
    const { password } = registerAuthDto;
    const plainToHash = await hash(password, 10);
    registerAuthDto = {...registerAuthDto, password:plainToHash};
    return this.usersmodel.create(registerAuthDto);
  }

  async login(loginAuthDto:LoginAuthDto){
    const { email, password } = loginAuthDto;
    const findUser = await this.usersmodel.findOne({email});
    if(!findUser) throw new HttpException('USER_NOT_FOUND',404);
    const checkPassword = await compare(password,findUser.password);
    if(!checkPassword) throw new HttpException('INVALID_PASSWORD',403);
    return findUser;
  }

}
