import { LeafletEvent } from "leaflet";
import { useEffect } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { ResultCard } from "../search/ResultCard";
import { useSearch } from "@/hooks/useSearch";

export function PointsOfInterest() {
  const { boundingBox, store } = useSearch();

  const onViewChange = ({ target }: LeafletEvent) => {
    boundingBox({
      northEast: target.getBounds().getNorthEast(),
      southWest: target.getBounds().getSouthWest(),
    });
  };

  const map = useMap();

  useEffect(() => {
    boundingBox({
      northEast: map.getBounds().getNorthEast(),
      southWest: map.getBounds().getSouthWest(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMapEvents({ zoom: onViewChange, dragend: onViewChange });

  return (
    <MarkerClusterGroup
      chunkedLoading
      showCoverageOnHover={false}
      removeOutsideVisibleBounds
    >
      {store.response?.hits?.map((item) => (
        <Marker key={item.objectID} position={item._geoloc}>
          <Popup closeButton={false} maxWidth={400}>
            <ResultCard hit={item} shadow={false} />
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}
