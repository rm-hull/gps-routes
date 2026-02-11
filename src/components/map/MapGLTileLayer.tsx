import L from "leaflet";
import "@maplibre/maplibre-gl-leaflet";
import {
  createLayerComponent,
  LeafletContextInterface,
} from "@react-leaflet/core";

type MapGLTileLayerProps = {
  url: string | Record<string, unknown>;
  minZoom?: number;
  maxZoom?: number;
  attribution?: string;
};

const createMaplibreLayer = (
  props: MapGLTileLayerProps,
  context: LeafletContextInterface,
) => {
  const MaplibreFactory = (L as any).maplibreGL;
  if (!MaplibreFactory) {
    // plugin not loaded — fall back to an empty LayerGroup so react-leaflet keeps working
    // eslint-disable-next-line no-console
    console.warn("maplibre-gl-leaflet plugin not available on L");
    return { instance: new L.LayerGroup(), context };
  }

  const options: any = { style: props.url };
  if (props.minZoom !== undefined) options.minZoom = props.minZoom;
  if (props.maxZoom !== undefined) options.maxZoom = props.maxZoom;
  if (props.attribution) options.attribution = props.attribution;

  const instance = MaplibreFactory(options) as unknown as L.Layer;
  return { instance, context };
};

const updateMaplibreLayer = (
  layer: any,
  props: MapGLTileLayerProps,
  prevProps: MapGLTileLayerProps,
) => {
  if (props.url !== prevProps.url) {
    if (typeof layer.setStyle === "function") {
      try {
        layer.setStyle(props.url);
      } catch (e) {
        // ignore
      }
    }
  }

  if (props.minZoom !== prevProps.minZoom && layer.options) {
    layer.options.minZoom = props.minZoom;
  }
  if (props.maxZoom !== prevProps.maxZoom && layer.options) {
    layer.options.maxZoom = props.maxZoom;
  }
  if (props.attribution !== prevProps.attribution && layer.getAttribution) {
    try {
      layer.getAttribution = () => props.attribution;
    } catch (e) {
      // ignore
    }
  }
};

const MapGLTileLayer = createLayerComponent<any, MapGLTileLayerProps>(
  createMaplibreLayer,
  updateMaplibreLayer,
);

export default MapGLTileLayer;
