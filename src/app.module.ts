import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConsignmentModule } from './consignment/consignment.module'
import { MemberModule } from './member/member.module'
import { DonateModule } from './donate/donate.module'
import { PropertyModule } from './property/property.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017'), ConsignmentModule, MemberModule, DonateModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
