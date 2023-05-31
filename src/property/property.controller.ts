import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import mongoose from 'mongoose'
import { CreatePropertyDto } from './dto/create.dto'
import { PropertyService } from './property.service'

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  getAll() {
    return this.propertyService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.propertyService.getOne(id)
  }

  @Post()
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreatePropertyDto) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.propertyService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('id is not correct')
    }
    return this.propertyService.delete(id)
  }
}
