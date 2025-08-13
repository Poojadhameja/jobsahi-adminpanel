import React from 'react';

const ActionButtons = ({ 
  handleExportData, 
  handleSendNotification, 
  handleAddStudent 
}) => {
  return (
    <div className="flex justify-end space-x-3 mb-6">
      {/* Export Data */}
      <button
        onClick={handleExportData}
        className="flex items-center px-4 py-2 border border-blue-400 rounded-xl text-blue-600 font-semibold hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:opacity-90 transition"
      >
        📊 <span className="ml-2">Export Data</span>
      </button>
      
      {/* Send Bulk Notification */}
      <button 
        onClick={handleSendNotification}
        className="flex items-center px-4 py-2 border border-blue-400 rounded-xl text-blue-600 font-semibold hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:opacity-90 transition"
      >
        📩 <span className="ml-2">Send Bulk Notification</span>
      </button>
      
      {/* Add Student */}
      <button
        onClick={handleAddStudent}
        className="flex items-center px-4 py-2 border border-blue-400 rounded-xl text-blue-600 font-semibold hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:opacity-90 transition"
      >
        ➕ <span className="ml-2">Add Student</span>
      </button>
    </div>
  );
};

export default ActionButtons;