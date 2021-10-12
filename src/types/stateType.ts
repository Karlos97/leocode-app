import { NotificationType } from "./notificationType";
import { UserType } from "./userType";

type NotificationsType = {
  notification: NotificationType;
  show: boolean;
};

export interface StateType {
  users: UserType;
  notifications: NotificationsType;
}
