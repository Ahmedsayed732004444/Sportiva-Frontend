import { useState, useEffect, useCallback } from "react";

export interface UserCoordinates {
  lat: number;
  lng: number;
}

export type LocationPermissionStatus = "idle" | "requesting" | "granted" | "denied";

export const useLocationPermission = () => {
  const [coords, setCoords] = useState<UserCoordinates | null>(null);
  const [status, setStatus] = useState<LocationPermissionStatus>("idle");
  const [isInitialCheckComplete, setIsInitialCheckComplete] = useState(false);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus("denied");
      setIsInitialCheckComplete(true);
      return;
    }

    setStatus("requesting");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setStatus("granted");
        setIsInitialCheckComplete(true);
      },
      () => {
        setStatus("denied");
        setCoords(null);
        setIsInitialCheckComplete(true);
      },
      { enableHighAccuracy: false, timeout: 3000 }
    );
  }, []);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  return { coords, status, requestLocation, isInitialCheckComplete };
};
