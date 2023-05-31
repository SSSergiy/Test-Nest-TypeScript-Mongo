import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Consignment, ConsignmentDocument } from './consignment.schema'
import { CreateConsignmentDto } from './dto/create.dto'

@Injectable()
export class ConsignmentService {
  constructor(@InjectModel(Consignment.name) private consignmentModel: Model<ConsignmentDocument>) {}

  getAll(name?:string) {
    if (name) return this.consignmentModel.find().where("name").regex(name)
    
    return this.consignmentModel.find()
  }

  getOne(id: string) {
    return this.consignmentModel.findById(id)
  }

  async create(createConsignmentDto: CreateConsignmentDto) {
    const newCat = new this.consignmentModel(createConsignmentDto)
    return await newCat.save()
  }

  async update(id: string, createConsignmentDto: CreateConsignmentDto) {
    return await this.consignmentModel.updateOne({ _id: id }, createConsignmentDto)
  }

  async delete(id: string) {
    return await this.consignmentModel.deleteOne({ _id: id })
  }
}
