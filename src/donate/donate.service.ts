import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Member, MemberDocument } from 'src/member/member.schema'
import { Donate, DonateDocument } from './donate.schema'
import { CreateDonateDto } from './dto/create.dto'

@Injectable()
export class DonateService {
  constructor(@InjectModel(Donate.name) private donateModel: Model<DonateDocument>, @InjectModel(Member.name) private memberModel: Model<MemberDocument>) {}

  getAll() {
    return this.donateModel.find().populate('member', 'fullName').populate('consignment', 'name')
  }

  getOne(id: string) {
    return this.donateModel.findById(id)
  }

  async create(createDonateDto: CreateDonateDto) {
    console.log(createDonateDto)

    const newCat = new this.donateModel(createDonateDto).set('consignment', (await this.memberModel.findById(createDonateDto.member).populate('consignment')).consignment)
    return await newCat.save()
  }

  async update(id: string, createDonateDto: CreateDonateDto) {
    return await this.donateModel.updateOne({ _id: id }, createDonateDto)
  }

  async delete(id: string) {
    return await this.donateModel.deleteOne({ _id: id })
  }
}
