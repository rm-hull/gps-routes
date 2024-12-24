import { Polyline, Popup } from "react-leaflet";
import { GeoJSONCollection, lineString } from "../../services/geojson";

type RouteProps = {
  data: GeoJSONCollection;
};

export function Route({ data }: RouteProps) {
  if (data === undefined) {
    return undefined;
  }

  return (
    <>
      {data.features.filter(lineString).map((feat, index) => (
        <Polyline
          key={index}
          pathOptions={{
            color: "purple",
            opacity: 0.6,
            weight: 5,
            lineJoin: "round",
          }}
          positions={
            feat.geometry.coordinates.map(([lng, lat]) => [lat, lng]) ?? []
          }
        >
          <Popup>{feat.properties?.name}</Popup>
        </Polyline>
      ))}
    </>
  );
}
