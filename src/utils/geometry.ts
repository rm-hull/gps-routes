import * as L from "leaflet";
import { GeoJSONCollection, lineString } from "@/services/geojson";

export function getPointOnLine(
  data: GeoJSONCollection,
  event: L.LeafletMouseEvent
): L.LatLng | undefined {
  if (data === undefined) {
    return undefined;
  }

  const point = event.latlng;
  let minDistanceSq = Infinity;
  let closestPoint = undefined;

  data.features.filter(lineString).forEach((feat) => {
    feat.geometry.coordinates.forEach(([lng, lat, alt]) => {
      const dx = point.lng - lng;
      const dy = point.lat - lat;
      const distanceSq = dx * dx + dy * dy;

      if (distanceSq < minDistanceSq) {
        minDistanceSq = distanceSq;
        closestPoint = L.latLng(lat, lng, alt);
      }
    });
  });

  return closestPoint;
}
