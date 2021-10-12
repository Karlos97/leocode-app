import { NotificationType } from "../../types/notificationType";
import { StateType } from "../../types/stateType";

export const selectNotificationData = (state: StateType): NotificationType => {
  const { notification } = state.notifications;
  return notification;
};

export const selectShowNotification = (state: StateType): boolean => {
  const { show } = state.notifications;
  return show;
};
