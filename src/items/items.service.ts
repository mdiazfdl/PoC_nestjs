import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/item.schema';
import { Model } from 'mongoose'

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Items.name) private itemsModele: Model<ItemsDocument>){

  }
  async create(createItemDto: CreateItemDto) {
    return this.itemsModele.create(createItemDto)
  }

  findAll() {
    return this.itemsModele.find()
  }

  findOne(id: number) {
    return this.itemsModele.findById(id)
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
