import { useSignalRNotifications } from "@/shared/hooks/useSignalRNotifications";

export const SignalRListener = () => {
  useSignalRNotifications();
  return null;
};
