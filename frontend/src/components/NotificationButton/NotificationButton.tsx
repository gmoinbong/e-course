'use client'
import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';

const NotificationButton = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative pl-12 min-w-max">
      <button
        className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none flex items-center justify-center font-bold"
        onClick={toggleNotifications}
      >
        <BsBell className='w-6' />
      </button>
      {showNotifications && (
        <div className="absolute right-0 mt-2 py-2 bg-white border rounded shadow-md ">
          <p>Empty..</p>
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
