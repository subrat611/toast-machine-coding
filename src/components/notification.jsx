/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./notification.module.css";
import { CircleAlert, CircleCheck, CircleX, Info, X } from "lucide-react";

const icons = {
  success: <CircleCheck size={20} />,
  info: <Info size={20} />,
  warning: <CircleAlert size={20} />,
  error: <CircleX size={20} />,
};

const Notification = (props) => {
  const { type = "success", message = "", onClose = () => {} } = props;

  return (
    <div className={`${styles.notificationWrapper} ${styles[type]}`}>
      <div className={styles.notificationContent}>
        {icons[type]}
        <span>{message}</span>
      </div>
      <X size={20} className={styles.notificationClose} />
    </div>
  );
};

export default Notification;
