import { Module } from '@nestjs/common';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Geo, GeoSchema } from './schemas/geo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Geo.name, schema: GeoSchema }])],
  controllers: [GeoController],
  providers: [GeoService],
})
export class GeoModule {}
