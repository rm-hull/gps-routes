import { useEffect } from "react";
import { useMap } from "react-leaflet";

export function ResizeFix() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();

    // Invalidate size immediately and whenever the container is resized/visible
    const invalidate = () => setTimeout(() => map.invalidateSize(), 0);

    invalidate();

    const ro = new ResizeObserver(() => invalidate());
    ro.observe(container as Element);

    return () => ro.disconnect();
  }, [map]);

  return null;
}
