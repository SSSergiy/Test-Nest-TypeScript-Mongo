import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Consignment } from 'src/consignment/consignment.schema'
import { Member } from 'src/member/member.schema'

export type DonateDocument = HydratedDocument<Donate>

@Schema()
export class Donate {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Member' })
  member: Member

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Consignment' })
  consignment: Consignment

  @Prop()
  amount: number

  @Prop()
  date: Date
}

export const DonateSchema = SchemaFactory.createForClass(Donate)
