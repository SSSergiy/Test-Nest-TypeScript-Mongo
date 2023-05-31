import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put,Query } from '@nestjs/common'
import mongoose from 'mongoose'

import { ConsignmentService } from './consignment.service'
import { CreateConsignmentDto } from './dto/create.dto'
import { ApiQuery } from '@nestjs/swagger'

@Controller('consignment')
export class ConsignmentController {
  constructor(private readonly consignmentService: ConsignmentService) {}
  @Get()
    @ApiQuery({name:"name",required:false,type:String})
  getAll(@Query("name") name:string) {
    return this.consignmentService.getAll(name)
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.consignmentService.getOne(id)
  }

  @Post()
  create(@Body() body: CreateConsignmentDto) {
    return this.consignmentService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateConsignmentDto) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.consignmentService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.consignmentService.delete(id)
  }
}
