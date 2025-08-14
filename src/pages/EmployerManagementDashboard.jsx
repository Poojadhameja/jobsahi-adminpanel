import React, { useState } from 'react';
import { Search, Briefcase, Download } from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
import Student1 from "../../src/assets/images/student1.png";

const EmployerManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  // Sample data
  const sampleEmployers = [
    { id: 1, name: 'Tech Corp', contact: 'hr@techcorp.com', openings: 15, location: 'Mumbai' },
    { id: 2, name: 'Innovation Labs', contact: 'jobs@innovation.com', openings: 8, location: 'Bangalore' },
    { id: 3, name: 'Digital Solutions', contact: 'careers@digital.com', openings: 12, location: 'Delhi' }
  ];

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'student') {
      setStudentData(prev => ({ ...prev, [name]: value }));
    } else if (type === 'notification') {
      setNotificationData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleLocalSearch = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleExportData = () => {
    // Create CSV content
    const headers = ['ID', 'Company Name', 'Contact', 'Open Positions', 'Location'];
    const csvContent = [
      headers.join(','),
      ...sampleEmployers.map(employer => 
        [employer.id, employer.name, employer.contact, employer.openings, employer.location].join(',')
      )
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'employers_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats for employers
  const statsData = [
    { title: 'Total Employers', count: '1234', text: '+5% from last month', image: Student1 },
    { title: 'Pending Approvals', count: '23', text: '+3% from last month', image: Student1},
    { title: 'Active Jobs', count: '5,678', text: '+8% from last month',  image: Student1},
    { title: 'Monthly Revenue', count: '$4,567', text: '+10% from last month',  image: Student1 }
  ];

  return (
    <div className="p-5 relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">
          Employer Management
        </h1>
        <p className="text-[#0B537D] text-center text-sm">
          Manage employer partnerships, job postings, and recruitment activities
        </p>
      </div>

      {/* Export Button with Custom CSS Styling */}
      <div className="mb-6 relative">
        <button
          onClick={handleExportData}
          className="absolute border-2 border-[#5C9A24] rounded-md flex items-center justify-center transition-colors duration-200 w-[126px] h-[24px] right-[20px] top-0 bg-transparent font-['Plus_Jakarta_Sans'] font-medium text-base leading-5 text-[#5C9A24]">
          <Download 
            className="mr-2" 
            size={12} 
            style={{ color: '#5C9A24' }}
          />
          Export Data
        </button>
      </div>

      {/* Stats Cards */}
      <div className="p-3 bg-white min-h-screen">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <CardComponent key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center font-semibold text-black" 
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '32px',
                  lineHeight: '40px',
                  fontWeight: 600
                }}>
              <Briefcase className="mr-2 text-blue-600" size={24} />
              All Employer Profiles
            </h2>
            <div className="relative w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1-2 text-blue-500" size={20} />
                <input
                  type="text"
                  placeholder="Search by company name, contact, or location..."
                  value={localSearchQuery}
                  onChange={handleLocalSearch}
                  className="w-full pl-9 pr-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Employer List */}
        <div className="min-h-full bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6">
              {sampleEmployers.map((employer) => (
                <div key={employer.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{employer.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Contact:</span> {employer.contact}
                        </div>
                        <div>
                          <span className="font-medium">Open Positions:</span> {employer.openings}
                        </div>
                        <div>
                          <span className="font-medium">Location:</span> {employer.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Recruiting</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerManagementDashboard;