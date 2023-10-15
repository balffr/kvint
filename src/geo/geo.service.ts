import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Geo } from './schemas/geo.schema';
import { Model, FilterQuery } from 'mongoose';
import { CreateGeoDto } from './dto/create-geo.dto';

@Injectable()
export class GeoService {
  constructor(@InjectModel(Geo.name) private geoModel: Model<Geo>) {}

  async findAll(limit: number = 50, skip: number = 0): Promise<Geo[]> {
    return this.geoModel.find().limit(limit).skip(skip).exec();
  }

  async create(createGeoDto: CreateGeoDto): Promise<Geo> {
    const existingGeo = await this.findOne({ ip: createGeoDto.ip });
    if (existingGeo) {
      throw new ConflictException('The record already exists in the database');
    }
    const createdGeo = new this.geoModel(createGeoDto);
    return createdGeo.save();
  }

  async findOne(filter: FilterQuery<Geo>): Promise<Geo> {
    return this.geoModel.findOne(filter).exec();
  }
}
