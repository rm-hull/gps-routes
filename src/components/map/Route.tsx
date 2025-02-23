import * as L from "leaflet";
import { CircleMarker, Polyline, Tooltip, useMap } from "react-leaflet";
import { useCallback, useEffect, useRef, useState } from "react";
import { GeoJSONCollection, getBounds, lineString } from "@/services/geojson";
import { getPointOnLine } from "@/utils/geometry";

type RouteProps = {
  data: GeoJSONCollection;
};

export function Route({ data }: RouteProps) {
  const timeoutHandle = useRef<number>(0);
  const map = useMap();
  const [hoverPosition, setHoverPosition] = useState<L.LatLng | undefined>(
    undefined
  );

  useEffect(() => {
    const bounds = getBounds(data);
    if (bounds !== undefined) {
      map.flyToBounds(bounds);
    }
  }, [data, map]);

  const handleMouseMove = useCallback(
    (event: L.LeafletMouseEvent) => {
      window.clearTimeout(timeoutHandle.current);
      const point = getPointOnLine(data, event);
      setHoverPosition(point);
    },
    [data]
  );

  const handleMouseOut = useCallback(() => {
    timeoutHandle.current = window.setTimeout(() => {
      setHoverPosition(undefined);
    }, 2000);
  }, []);

  return (
    <>
      {data?.features.filter(lineString).map((feat, index) => (
        <Polyline
          key={index}
          color="purple"
          opacity={0.6}
          weight={5}
          lineJoin="round"
          positions={
            feat.geometry.coordinates.map(([lng, lat]) => [lat, lng]) ?? []
          }
          eventHandlers={{
            mousemove: handleMouseMove,
            mouseout: handleMouseOut,
          }}
        />
      ))}
      {hoverPosition?.alt && (
        <CircleMarker
          center={hoverPosition}
          color="purple"
          fill
          fillColor="purple"
          opacity={0.6}
          radius={8}
        >
          <Tooltip permanent direction="right" offset={[10, 0]}>
            Alt: {hoverPosition.alt.toFixed(0)} m
          </Tooltip>
        </CircleMarker>
      )}
    </>
  );
}
