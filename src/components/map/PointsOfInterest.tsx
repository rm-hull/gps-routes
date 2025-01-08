// import type { GeoHit } from "instantsearch.js";
// import { useGeoSearch } from "react-instantsearch";
// import { LeafletEvent } from "leaflet";
// import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
// import { useEffect } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
// import { SearchResult } from "@/components/SearchResult";
// import { Result } from "@/types";

export function PointsOfInterest() {
  // const { items, refine } = useGeoSearch<GeoHit<Result>>();

  // const onViewChange = ({ target }: LeafletEvent) => {
  //   refine({
  //     northEast: target.getBounds().getNorthEast(),
  //     southWest: target.getBounds().getSouthWest(),
  //   });
  // };

  // const map = useMap();

  // useEffect(() => {
  //   refine({
  //     northEast: map.getBounds().getNorthEast(),
  //     southWest: map.getBounds().getSouthWest(),
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useMapEvents({ zoom: onViewChange, dragend: onViewChange });

  return (
    <MarkerClusterGroup
      chunkedLoading
      showCoverageOnHover={false}
      removeOutsideVisibleBounds
    >
      {/* {items.map((item) => (
        <Marker key={item.objectID} position={item._geoloc}>
          <Popup closeButton={false} maxWidth={400}>
            <SearchResult hit={item} shadow={false} />
          </Popup>
        </Marker>
      ))} */}
    </MarkerClusterGroup>
  );
}
