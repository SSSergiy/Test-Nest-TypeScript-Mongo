import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Consignment } from 'src/consignment/consignment.schema'

export type MemberDocument = HydratedDocument<Member>

@Schema()
export class Member {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Consignment' })
  consignment: Consignment

  @Prop()
  fullName: string

  @Prop()
  birthday: Date

  @Prop()
  address: string

  @Prop()
  job: string

  @Prop()
  profession: string
}

export const MemberSchema = SchemaFactory.createForClass(Member)
