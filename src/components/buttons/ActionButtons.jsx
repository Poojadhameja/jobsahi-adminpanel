import React from "react";

const ActionButtons = ({ 
  handleExportData, 
  handleSendNotification, 
  handleAddStudent 
}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-end gap-3 p-4 mb-6 w-full">
      {/* Export Data */}
      <button
        onClick={handleExportData}
        className="flex items-center justify-center px-4 py-2 border-2 border-blue-400 rounded-xl text-sm font-semibold text-blue-600 
                   hover:bg-gradient-to-r hover:from-[#5c9a24] hover:to-[#0B537D] hover:text-white hover:border-transparent transition-all duration-200 w-full sm:w-auto"
      >
        <span className="mr-2">📊</span>
        <span>Export Data</span>
      </button>
      
      {/* Send Bulk Notification */}
      <button 
        onClick={handleSendNotification}
        className="flex items-center justify-center px-4 py-2 border-2 border-blue-400 rounded-xl text-sm font-semibold text-blue-600 
                   hover:bg-gradient-to-r hover:from-[#5c9a24] hover:to-[#0B537D] hover:text-white hover:border-transparent transition-all duration-200 w-full sm:w-auto"
      >
        <span className="mr-2">📩</span>
        <span className="whitespace-nowrap">Send Notification</span>
      </button>
      
      {/* Add Student */}
      <button
        onClick={handleAddStudent}
        className="flex items-center justify-center px-4 py-2 border-2 border-blue-400 rounded-xl text-sm font-semibold text-blue-600 
                   hover:bg-gradient-to-r hover:from-[#5c9a24] hover:to-[#0B537D] hover:text-white hover:border-transparent transition-all duration-200 w-full sm:w-auto"
      >
        <span className="mr-2">➕</span>
        <span>Add Student</span>
      </button>
    </div>
  );
};

export default ActionButtons;
