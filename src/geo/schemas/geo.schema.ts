import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Connection, Flag, TZ } from '../interfaces/geo.interface';

export type GeoDocument = HydratedDocument<Geo>;

@Schema()
export class Geo {
  @Prop({ unique: true })
  ip!: string;

  @Prop()
  success: boolean;

  @Prop()
  type: string;

  @Prop()
  continent: string;

  @Prop()
  continent_code: string;

  @Prop()
  country: string;

  @Prop()
  country_code: string;

  @Prop()
  region: string;

  @Prop()
  region_code: string;

  @Prop()
  city: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  is_eu: boolean;

  @Prop()
  postal: string;

  @Prop()
  calling_code: string;

  @Prop()
  capital: string;

  @Prop()
  borders: string;

  @Prop(
    raw({
      img: { type: String },
      emoji: { type: String },
      emoji_unicode: { type: String },
    }),
  )
  flag: Flag;

  @Prop(
    raw({
      asn: { type: Number },
      org: { type: String },
      isp: { type: String },
      domain: { type: String },
    }),
  )
  connection: Connection;

  @Prop(
    raw({
      id: { type: String },
      abbr: { type: String },
      is_dst: { type: Boolean },
      offset: { type: Number },
      utc: { type: String },
      current_time: { type: String },
    }),
  )
  timezone: TZ;
}

export const GeoSchema = SchemaFactory.createForClass(Geo);
