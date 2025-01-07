import { Hit } from "algoliasearch/lite";

export type Nearby = {
  objectID: string;
  ref: string;
  description: string;
};

export type Image = {
  src: string;
  title: string;
  caption: string;
};

export type Detail = {
  subtitle: string;
  content: string;
};

export interface Result extends Hit {
  ref: string;
  created_at: string;
  title: string;
  description: string;
  headline_image_url: string;
  video_url?: string;
  gpx_url?: string;
  distance_km: string;
  country?: string;
  state?: string;
  county?: string;
  region?: string;
  district?: string;
  postcode?: string;
  display_address?: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  nearby: Nearby[];
  images: Image[];
  details: Detail[];
}
