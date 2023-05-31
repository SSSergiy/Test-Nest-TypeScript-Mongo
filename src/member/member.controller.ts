import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import mongoose from 'mongoose'
import { ConsignmentService } from 'src/consignment/consignment.service'
import { CreateConsignmentDto } from 'src/consignment/dto/create.dto'
import { CreateMemberDto } from './dto/create.dto'
import { MemberService } from './member.service'

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService, private readonly consignmentService: ConsignmentService) {}
  @Get()
  getAll() {
    return this.memberService.getAll().populate('consignment')
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.memberService.getOne(id)
  }

  @Post()
  create(@Body() body: CreateMemberDto) {
    if (!mongoose.isValidObjectId(body.consignment) || !this.consignmentService.getOne(body.consignment)) {
      throw new BadRequestException('consignment is not correct')
    }

    return this.memberService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateMemberDto) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.memberService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.memberService.delete(id)
  }
}
