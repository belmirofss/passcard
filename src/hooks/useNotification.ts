import { useContext } from "react";
import { NotificationContext } from "../contexts/Notification";

export const useNotification = () => {
  return useContext(NotificationContext);
};
