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

  async findAll() {
    return this.itemsModele.find()
  }

  async findOne(id: number) {
    return //this.itemsModele.findById(id)
  }

  async update(id: String, updateItemDto: UpdateItemDto) {}

  async remove(id: number) {
    return //this.itemsModele.remove(id);
  }
}
