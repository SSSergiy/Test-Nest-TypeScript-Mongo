import { Module } from '@nestjs/common'
import { PropertyService } from './property.service'
import { PropertyController } from './property.controller'
import { Property, PropertySchema } from './property.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { NewsPaper, NewsPaperSchema } from './schema/newsPaper.schema'
import { Placement, PlacementSchema } from './schema/placement.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
      { name: NewsPaper.name, schema: NewsPaperSchema },

      { name: Placement.name, schema: PlacementSchema },
    ]),
  ],
  providers: [PropertyService],
  controllers: [PropertyController],
})
export class PropertyModule {}
