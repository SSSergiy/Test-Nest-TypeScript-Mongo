import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateMemberDto } from './dto/create.dto'
import { Member, MemberDocument } from './member.schema'

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<MemberDocument>) {}

  getAll() {
    return this.memberModel.find()
  }

  getOne(id: string) {
    return this.memberModel.findById(id)
  }

  async create(createMemberDto: CreateMemberDto) {
    const newCat = new this.memberModel(createMemberDto)
    return await newCat.save()
  }

  async update(id: string, createMemberDto: CreateMemberDto) {
    return await this.memberModel.updateOne({ _id: id }, createMemberDto)
  }

  async delete(id: string) {
    return await this.memberModel.deleteOne({ _id: id })
  }
}
