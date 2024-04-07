import React from "react";

const NotificationModal = ({ msg }) => {
  return (
    <div className="text-sm font-bold bg-blue-700 text-white text-center p-5 md:p-2">
      {msg}
    </div>
  );
};

export default NotificationModal;
