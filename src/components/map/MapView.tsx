import { LatLng } from "leaflet";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  ScaleControl,
} from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import { CurrentLocation } from "./controls/CurrentLocation";

type MapViewProps = {
  center?: Pick<LatLng, "lat" | "lng">;
};

export function MapView({ center }: MapViewProps) {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      attributionControl={false}
      style={{
        width: "50vw",
        height: "60vh",
        borderRadius: "10px",
        boxShadow: "var(--chakra-shadows-md)",
      }}
    >
      <CurrentLocation />

      <LayersControl position="topright">
        <LayersControl.BaseLayer name="ESRI World TopoMap" checked>
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
    </MapContainer>
  );
}
