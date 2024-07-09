import { FunctionComponent, useEffect } from "react";
import { useNotify } from "react-admin";
import { useRegisterSW } from "virtual:pwa-register/react";

const OfflineNotification: FunctionComponent = () => {
  const {
    offlineReady: [offlineReady],
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });
  const notify = useNotify();

  useEffect(() => {
    if (offlineReady) {
      notify(`offline`, { type: "warning" });
    }
  }, [offlineReady, notify]);

  return null;
};

export default OfflineNotification;
