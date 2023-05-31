import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { NewsPaper } from './schema/newsPaper.schema'
import { Placement } from './schema/placement.schema'

export type PropertyDocument = HydratedDocument<Property>

@Schema()
export class Property {
  @Prop()
  price: number
  @Prop({ type: mongoose.Schema.Types.ObjectId, refPath: 'typeModel', required: true })
  type: NewsPaper | Placement
  @Prop({ type: String, required: true, enum: ['NewsPaper', 'Placement'] })
  typeModel: string
}

export const PropertySchema = SchemaFactory.createForClass(Property)
