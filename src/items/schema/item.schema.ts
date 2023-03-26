import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<Items>;

@Schema()
export class Items {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  stok: number;

  @Prop()
  breed: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);