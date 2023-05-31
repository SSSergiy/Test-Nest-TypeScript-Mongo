import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import mongoose from 'mongoose'
import { MemberService } from 'src/member/member.service'
import { DonateService } from './donate.service'
import { CreateDonateDto } from './dto/create.dto'

@Controller('donate')
export class DonateController {
  constructor(private readonly donateService: DonateService, private readonly memberService: MemberService) {}
  @Get()
  getAll() {
    return this.donateService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.donateService.getOne(id)
  }

  @Post()
  create(@Body() body: CreateDonateDto) {
    if (!mongoose.isValidObjectId(body.member) || !this.memberService.getOne(body.member.id)) {
      throw new BadRequestException('member is not correct')
    }

    return this.donateService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateDonateDto) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.donateService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.donateService.delete(id)
  }
}
