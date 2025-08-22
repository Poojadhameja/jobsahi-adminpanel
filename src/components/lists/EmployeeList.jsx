import React from 'react';
import { Mail, Phone, MapPin, DollarSign, Calendar, MoreVertical } from 'lucide-react';

const EmployeeList = ({ employees, getTagColor }) => {
  return (
    <div className="space-y-4 p-6">
      {employees.map((employee) => (
        <div key={employee.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            {/* Employee Info */}
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {employee.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{employee.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {employee.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-gray-400" />
                    <span>{employee.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-gray-400" />
                    <span className="font-medium">{employee.salary}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Department:</span>
                    <span className="font-medium">{employee.department}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Position:</span>
                    <span className="font-medium">{employee.position}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Experience:</span>
                    <span className="font-medium">{employee.experience}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {employee.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;