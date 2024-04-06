import React from "react";

const NotificationModal = ({ msg }) => {
  return (
    <div className="text-sm font-bold bg-blue-700 text-white p-2 text-center">
      {msg}
    </div>
  );
};

export default NotificationModal;
