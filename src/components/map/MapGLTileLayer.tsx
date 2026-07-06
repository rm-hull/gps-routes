import {
  createLayerComponent,
  LeafletContextInterface,
} from "@react-leaflet/core";
import L from "leaflet";
import "@maplibre/maplibre-gl-leaflet";

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
     
    console.warn("maplibre-gl-leaflet plugin not available on L");
    return { instance: new L.LayerGroup(), context };
  }

  const options: Record<string, unknown> = { style: props.url };
  if (props.minZoom !== undefined) options.minZoom = props.minZoom;
  if (props.maxZoom !== undefined) options.maxZoom = props.maxZoom;
  if (props.attribution) options.attribution = props.attribution;

  const instance = MaplibreFactory(options) as unknown as L.Layer;
  return { instance, context };
};

const updateMaplibreLayer = (
  layer: L.Layer,
  props: MapGLTileLayerProps,
  prevProps: MapGLTileLayerProps,
) => {
  if (props.url !== prevProps.url) {
    if (typeof (layer as any).setStyle === "function") {
      try {
        (layer as any).setStyle(props.url);
      } catch {
        // ignore
      }
    }
  }

  if (props.minZoom !== prevProps.minZoom && (layer.options as any)) {
    (layer.options as any).minZoom = props.minZoom;
  }
  if (props.maxZoom !== prevProps.maxZoom && (layer.options as any)) {
    (layer.options as any).maxZoom = props.maxZoom;
  }
  if (props.attribution !== prevProps.attribution && (layer as any).getAttribution) {
    try {
      (layer as any).getAttribution = () => props.attribution ?? null;
    } catch {
      // ignore
    }
  }
};

const MapGLTileLayer = createLayerComponent<L.Layer, MapGLTileLayerProps>(
  createMaplibreLayer,
  updateMaplibreLayer,
);

export default MapGLTileLayer;
