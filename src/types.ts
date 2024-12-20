import { Hit } from "algoliasearch/lite";

type Nearby = {
  objectID: string;
  ref: string;
  description: string;
};

type Image = {
  src: string;
  title: string;
  caption: string;
};

export interface Result extends Hit {
  ref: string;
  created_at: string;
  title: string;
  description: string;
  headline_image_url: string;
  video_url?: string;
  distance_km: string;
  country?: string;
  county?: string;
  region?: string;
  district?: string;
  postcode?: string;
  _geocode: {
    lat: number;
    lng: number;
  };
  nearby: Nearby[];
  images: Image[];
}
