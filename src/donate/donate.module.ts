import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MemberModule } from 'src/member/member.module'
import { Member, MemberSchema } from 'src/member/member.schema'
import { DonateController } from './donate.controller'
import { Donate, DonateSchema } from './donate.schema'
import { DonateService } from './donate.service'

@Module({
  imports: [
    MemberModule,
    MongooseModule.forFeature([
      { name: Donate.name, schema: DonateSchema },
      { name: Member.name, schema: MemberSchema },
    ]),
  ],
  controllers: [DonateController],
  providers: [DonateService],
})
export class DonateModule {}
