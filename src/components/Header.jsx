import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = ({ 
  placeholder = "Search by name, position",
  userRole = "Admin",
  showNotification = true,
  onSearch,
  onNotificationClick,
  onUserClick,
  onDropdownClick 
}) => {
  return (
    <header className="bg-white  px-4 py-2">
      <div className="flex items-center ">
        
        {/* Search Bar */}
        <div className="flex-1 relative max-w-7xl">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            onChange={onSearch}
          />
        </div>
        
        {/* User Info */}
        <div className="absolute flex items-center justify-end left-0 right-0 px-10 gap-4">

          {/* Notification Icon */}
          {showNotification && (
            <Bell 
              className="text-green-600 cursor-pointer" 
              size={20}
              onClick={onNotificationClick}
            />
          )}
          
          <span className="text-sm text-black">{userRole}</span>
          
         <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4 text-black cursor-pointer hover:text-blue-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  onClick={onDropdownClick} // 👈 Click function here
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M5 8l7 7 7-7"
  />
</svg>

          
          {/* User Avatar */}
          <div 
            className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer transition-colors"
            onClick={onUserClick}
          >
            <User size={14} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;