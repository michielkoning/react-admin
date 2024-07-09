import { Fragment, FunctionComponent } from "react";
import { Snackbar, Button, SnackbarOrigin } from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";

export const PwaNotifications: FunctionComponent = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const anchorOrigin: SnackbarOrigin = {
    horizontal: "center",
    vertical: "bottom",
  };

  return (
    <>
      <Snackbar
        onClose={() => setOfflineReady(false)}
        open={offlineReady}
        message="No connection"
        anchorOrigin={anchorOrigin}
      />
      <Snackbar
        onClose={() => setNeedRefresh(false)}
        open={needRefresh}
        message="New content available"
        anchorOrigin={anchorOrigin}
        action={
          <Fragment>
            <Button size="small" onClick={() => updateServiceWorker(true)}>
              Update
            </Button>
          </Fragment>
        }
      />
    </>
  );
};
