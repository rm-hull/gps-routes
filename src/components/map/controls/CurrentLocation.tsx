import { useEffect } from "react";
import { IoMdLocate } from "react-icons/io";
import { Circle, Marker } from "react-leaflet";
import { useCurrentLocation } from "../../../hooks/useCurrentLocation";
import { locateIcon } from "../../../icons";
import { Control } from "@/components/map/Control";
import { ControlButton } from "@/components/ControlButton";
import { useErrorToast } from "@/hooks/useErrorToast";

interface CurrentLocationProps {
  active?: boolean;
}

export function CurrentLocation({ active }: CurrentLocationProps) {
  // const { settings } = useGeneralSettings();
  const { activate, location } = useCurrentLocation();
  useEffect(() => {
    if (active === true) {
      activate();
    }
  }, [active, activate]);

  useErrorToast("gps-error", "Error determining GPS location", location.error);

  const locationIsActive = location.active && !location.pending;
  return (
    <>
      {location.position !== undefined && (
        <>
          <Circle
            center={location.position}
            pathOptions={{ fillColor: "lightblue" }}
            radius={location.accuracy ?? 10}
            stroke={false}
          />
          <Marker
            position={location.position}
            icon={locateIcon(
              `rgba(240,0,0,${locationIsActive ? 0.6 : 0.3})`,
              locationIsActive ? "pulse" : "",
            )}
          >
            {/* <NearestInfo
              latLng={location.position}
              accuracy={location.accuracy}
              timestamp={location.timestamp}
              render={PopupPassthrough}
            />*/}
          </Marker>
        </>
      )}
      <Control prepend position="topright">
        <ControlButton
          onClick={activate}
          color={location.active ? "rgba(240,0,0,0.6)" : undefined}
        >
          <IoMdLocate />
        </ControlButton>
      </Control>
    </>
  );
}
