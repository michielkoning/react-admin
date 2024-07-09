import { FunctionComponent } from "react";
import { Snackbar } from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";

export const OfflineNotification: FunctionComponent = () => {
  const {
    offlineReady: [offlineReady],
  } = useRegisterSW();

  return (
    <Snackbar
      open={offlineReady}
      message="Offline"
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    />
  );
};
