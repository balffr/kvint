export interface Flag {
  img: string;
  emoji: string;
  emoji_unicode: string;
}

export interface Connection {
  asn: number;
  org: string;
  isp: string;
  domain: string;
}

export interface TZ {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
}

export interface IGeo {
  readonly ip: string;
  readonly success: boolean;
  readonly type: string;
  readonly continent: string;
  readonly continent_code: string;
  readonly country: string;
  readonly country_code: string;
  readonly region: string;
  readonly region_code: string;
  readonly city: string;
  readonly latitude: string;
  readonly longitude: string;
  readonly is_eu: boolean;
  readonly postal: string;
  readonly calling_code: string;
  readonly capital: string;
  readonly borders: string;

  readonly flag: Flag;
  readonly connection: Connection;
  readonly timezone: TZ;
}
