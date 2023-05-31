import { Module } from '@nestjs/common'
import { ConsignmentService } from './consignment.service'
import { ConsignmentController } from './consignment.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Consignment, ConsignmentSchema } from './consignment.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Consignment.name, schema: ConsignmentSchema }])],
  providers: [ConsignmentService],
  controllers: [ConsignmentController],
  exports: [ConsignmentService],
})
export class ConsignmentModule {}
