import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ConsignmentDocument = HydratedDocument<Consignment>

@Schema()
export class Consignment {
  @Prop()
  name: string

  @Prop()
  shortName: string

  @Prop()
  registrationDate: Date

  @Prop()
  leader: string
}

export const ConsignmentSchema = SchemaFactory.createForClass(Consignment)
