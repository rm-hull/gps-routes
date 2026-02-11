import {
  LayersControl,
  MapContainer,
  ScaleControl,
  TileLayer,
} from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import L from "leaflet";
import { CurrentLocation } from "./controls/CurrentLocation";
import MapGLTileLayer from "./MapGLTileLayer";
import { Route } from "./Route";
import { PointsOfInterest } from "./PointsOfInterest";
import { GeoJSONCollection, getBounds } from "@/services/geojson";

import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

type MapViewProps = {
  route?: GeoJSONCollection;
};

// Remove the _getIconUrl property from the prototype of L.Icon.Default
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export function MapView({ route }: MapViewProps) {
  const bounds = getBounds(route);

  return (
    <MapContainer
      center={bounds?.getCenter() ?? [54.4287, -2.9613]}
      zoom={bounds ? undefined : 15}
      bounds={bounds}
      scrollWheelZoom={true}
      attributionControl={false}
      maxZoom={20}
    >
      <CurrentLocation />

      <LayersControl position="topright">
        <LayersControl.BaseLayer name="Alidade smooth">
          <MapGLTileLayer url="https://tiles-eu.stadiamaps.com/styles/alidade_smooth.json" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenFreeMap" checked>
          <MapGLTileLayer url="https://tiles.openfreemap.org/styles/liberty" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Carto Voyager">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Ordnance Survey Outdoor">
          <TileLayer
            url="https://api.destructuring-bind.org/mapproxy/wmts/wmts/leisure_3857/grid_3857/{z}/{x}/{y}.png"
            tileSize={256}
            maxZoom={16}
            maxNativeZoom={15}
            opacity={0.8}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="ESRI World TopoMap">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="ESRI World Imagery">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenTopoMap">
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            maxZoom={15}
            maxNativeZoom={15}
          />
        </LayersControl.BaseLayer>
        {/* <LayersControl.BaseLayer name="Stadia Alidade Smooth Dark">
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stadia Alidade Satellite">
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg" />
        </LayersControl.BaseLayer> */}
        <LayersControl.BaseLayer name="MTB Map">
          <TileLayer url="http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name="Waymarked Hiking Trails">
          <TileLayer url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Waymarked Cycling Trails">
          <TileLayer url="https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Waymarked MTB Trails">
          <TileLayer url="https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="NASA (GIBS) Snow Cover">
          <TileLayer
            url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_NDSI_Snow_Cover/default//GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.png"
            maxZoom={8}
          />
        </LayersControl.Overlay>
      </LayersControl>
      <FullscreenControl />
      <ScaleControl position="bottomright" />
      {/* <Ruler /> */}

      <PointsOfInterest />
      <Route data={route} />
    </MapContainer>
  );
}
