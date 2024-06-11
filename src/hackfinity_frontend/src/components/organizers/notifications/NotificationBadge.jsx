import React, { useState } from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationDialog from "../../organizers/notifications/NotificationBadge";

export default function NotificationBadge() {
  const [openNotificationsDialog, setOpenNotificationsDialog] = useState(false);

  // Mock notifications data
  const notifications = [
    { id: 1, message: "Notification 1", is_read: false },
    { id: 2, message: "Notification 2", is_read: true },
    { id: 3, message: "Notification 3", is_read: false },
  ];

  const handleNotificationsBadgeClick = () => {
    setOpenNotificationsDialog(true);
  };

  const handleClose = () => {
    setOpenNotificationsDialog(false);
  };

  const unreadNotifications = notifications.filter(
    (notification) => !notification.is_read
  );

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        onClick={handleNotificationsBadgeClick}
      >
        <NotificationsIcon color="primary" />
      </Badge>
      <NotificationDialog
        open={openNotificationsDialog}
        onClose={handleClose}
        notifications={notifications}
        refreshNotifications={() => {}} // Placeholder for the refresh function
      />
    </>
  );
}
