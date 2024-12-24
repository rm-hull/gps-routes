import axios from "axios";
import { Feature, FeatureCollection, LineString } from "geojson";
import { gpx, kml } from "@tmcw/togeojson";
import { latLng, latLngBounds, LatLngBounds } from "leaflet";

export type GeoJSONCollection = FeatureCollection<LineString> | undefined;

export enum SupportedMimeTypes {
  GPX = "application/gpx+xml",
  KML = "application/vnd.google-earth.kml+xml",
}

export const fetchGeoJSON = async (
  url: string | undefined,
  type: SupportedMimeTypes
): Promise<GeoJSONCollection> => {
  if (url === undefined) {
    return undefined;
  }

  const resp = await axios.get(url);
  const dom = new DOMParser().parseFromString(resp.data, "text/xml");
  return (
    type === "application/gpx+xml" ? gpx(dom) : kml(dom)
  ) as GeoJSONCollection;
};

export const lineString = (feat: Feature): boolean =>
  feat.geometry.type === "LineString";

export const getBounds = (
  data: GeoJSONCollection
): LatLngBounds | undefined => {
  if (data === undefined) {
    return undefined;
  }

  const coords = data.features
    .filter(lineString)
    .flatMap((feat) =>
      feat.geometry.coordinates.map(([lng, lat]) => latLng(lat, lng))
    );

  return latLngBounds(coords);
};
