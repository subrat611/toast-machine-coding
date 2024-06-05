/* eslint-disable no-unused-vars */

import { useCallback, useState } from "react";
import Notification from "../components/notification";

const useNotification = (position = "top-left") => {
  const [notification, setNotificaiton] = useState(null);

  let timer;

  const handler = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotificaiton(notificationProps);

    timer = setTimeout(() => {
      setNotificaiton(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComp = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComp, handler };
};

export default useNotification;
