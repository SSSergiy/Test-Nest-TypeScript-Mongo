import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateNewsPaperDto } from './dto/create-newsPaper.dto.'
import { CreatePlacementDto } from './dto/create-placement.dto'
import { CreatePropertyDto } from './dto/create.dto'
import { Property, PropertyDocument } from './property.schema'
import { NewsPaper, NewsPaperDocument } from './schema/newsPaper.schema'
import { Placement, PlacementDocument } from './schema/placement.schema'

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private memberModel: Model<PropertyDocument>,
    @InjectModel(NewsPaper.name) private newspaperModel: Model<NewsPaperDocument>,
    @InjectModel(Placement.name) private placementModel: Model<PlacementDocument>
  ) {}

  getAll() {
    return this.memberModel.find().populate('type')
  }

  getOne(id: string) {
    return this.memberModel.findById(id)
  }

  async create(createPropertyDto: CreatePropertyDto) {
    if (createPropertyDto.type instanceof CreateNewsPaperDto) {
      const type = new this.newspaperModel(createPropertyDto.type)
      createPropertyDto.typeModel = 'NewsPaper'
      createPropertyDto.type = await type.save()
      console.log('newspaper')
    } else if (createPropertyDto.type instanceof CreatePlacementDto) {
      createPropertyDto.typeModel = 'Placement'

      const type = new this.placementModel(createPropertyDto.type)
      createPropertyDto.type = await type.save()
      console.log('placement')
    }

    const newCat = new this.memberModel(createPropertyDto)
    return await newCat.save()
  }

  async update(id: string, createPropertyDto: CreatePropertyDto) {
    return await this.memberModel.updateOne({ _id: id }, createPropertyDto)
  }

  async delete(id: string) {
    return await this.memberModel.deleteOne({ _id: id })
  }
}
