import { FC } from "react";
import classes from "./Notification.module.scss";
import { NotificationType } from "../../types/notificationType";



const Notification: FC<NotificationType> = ({ status, title, message }) => {
  let specialClasses: string = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
