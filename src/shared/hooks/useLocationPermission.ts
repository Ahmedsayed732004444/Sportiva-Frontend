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
  const [isBlockedByBrowser, setIsBlockedByBrowser] = useState(false);

  const requestLocation = useCallback(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setStatus("denied");
      setIsInitialCheckComplete(true);
      return;
    }

    setStatus("requesting");
    setIsBlockedByBrowser(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setStatus("granted");
        setIsBlockedByBrowser(false);
        setIsInitialCheckComplete(true);
      },
      (error) => {
        setStatus("denied");
        setCoords(null);
        setIsInitialCheckComplete(true);
        if (error.code === error.PERMISSION_DENIED) {
          setIsBlockedByBrowser(true);
        }
      },
      { enableHighAccuracy: false, timeout: 5000 }
    );
  }, []);

  // Check permissions API if available
  useEffect(() => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "denied") {
            setIsBlockedByBrowser(true);
          }
          permissionStatus.onchange = () => {
            if (permissionStatus.state === "granted") {
              requestLocation();
            } else if (permissionStatus.state === "denied") {
              setIsBlockedByBrowser(true);
              setStatus("denied");
            }
          };
        })
        .catch(() => {
          // ignore
        });
    }
  }, [requestLocation]);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  return {
    coords,
    status,
    requestLocation,
    isInitialCheckComplete,
    isBlockedByBrowser,
  };
};
