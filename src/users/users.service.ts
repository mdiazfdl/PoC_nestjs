import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModele: Model<UsersDocument>){

  }
  async create(createUserDto: CreateUserDto) {
    return this.usersModele.create(createUserDto)
  }

  async findAll() {
    return this.usersModele.find()
  }

  async findOne(id: number) {
    //return this.usersModele.findById(id)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} User`;
  }

  async remove(id: number) {
    //return `This action removes a #${id} User`;
  }
}
