export type Image = {
  src: string;
  title: string;
  caption: string;
};

export type Detail = {
  subtitle: string;
  content: string;
};

export type GeoLoc = {
  lat: number;
  lng: number;
};

export type BoundingBox = {
  minLat: number;
  minLng: number;
  maxLat: number;
  maxLng: number;
};

export type Summary = {
  objectID: string;
  ref: string;
  title: string;
  description: string;
  headline_image_url?: string;
  distance_km?: number;
  _geoloc: GeoLoc;
};

export type Result = {
  objectID: string;
  ref: string;
  title: string;
  description: string;
  headline_image_url?: string | null;
  distance_km?: number;
  _geoloc: GeoLoc;
  created_at: string;
  video_url?: string | null;
  gpx_url?: string;
  country?: string | null;
  state?: string | null;
  county?: string | null;
  region?: string | null;
  district?: string | null;
  postcode?: string | null;
  display_address?: string | null;
  nearby?: Summary[];
  images?: Image[];
  details?: Detail[];
  estimated_duration?: string | null;
  difficulty?: string | null;
  terrain?: string[] | null;
  points_of_interest?: string[] | null;
  facilities?: string[] | null;
  route_type?: string | null;
  activities?: string[] | null;
};

export type SortField = "distance_km" | "difficulty" | "estimated_duration" | "title" | "relevance";
export type SortDirection = "ASC" | "DESC";

export type Sort = {
  field: SortField;
  direction: SortDirection;
};

export type SearchRequest = {
  query: string;
  offset: number;
  limit: number;
  boundingBox?: BoundingBox;
  nearby?: {
    place?: string;
    center?: GeoLoc;
    distanceKm: number;
  };
  facets?: Record<string, string[] | undefined>;
  truncateText?: boolean;
  skipFacets?: boolean;
  sort?: Sort;
};

export type SearchResponse = {
  hits: Summary[];
  total: number;
  boundingBox?: BoundingBox;
  facets?: Record<string, Record<string, number>>;
  attribution?: string[];
  offset: number;
  limit: number;
  hasMore: boolean;
  nextOffset?: number;
  sort?: Sort;
};

export type RefData = {
  facets?: Record<string, Record<string, number>>;
  attribution?: string[];
};

export type ErrorResponse = {
  error: {
    code: string;
    message: string;
    field?: string;
  };
};
