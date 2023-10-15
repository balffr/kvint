import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GeoService } from './geo.service';
import { CreateGeoDto } from './dto/create-geo.dto';

@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get()
  findAll(@Query('limit') limit, @Query('skip') skip) {
    return this.geoService.findAll(limit, skip);
  }

  @Post()
  create(@Body() createGeoDto: CreateGeoDto) {
    return this.geoService.create(createGeoDto);
  }
}
