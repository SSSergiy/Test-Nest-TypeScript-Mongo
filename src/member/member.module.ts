import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConsignmentModule } from 'src/consignment/consignment.module'
import { MemberController } from './member.controller'
import { Member, MemberSchema } from './member.schema'
import { MemberService } from './member.service'

@Module({
  imports: [ConsignmentModule, MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }])],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
