import React, { useState } from 'react';
import { Search, Download, CheckCircle, Briefcase, CreditCard, Star, FileText, Shield, Menu, Eye, Check, X } from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
import Student1 from "../../src/assets/images/student1.png";

const EmployerManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
    const [localSearchQuery, setLocalSearchQuery] = useState('');
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
    const menuItems = [
        {
            id: 'approve-reject',
            label: 'Approve/Reject',
            icon: <CheckCircle className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'job-tracking',
            label: 'Job Tracking',
            icon: <Briefcase className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'payments',
            label: 'Payments',
            icon: <CreditCard className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'ratings',
            label: 'Ratings',
            icon: <Star className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'resume-usage',
            label: 'Resume Usage',
            icon: <FileText className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'fraud-control',
            label: 'Fraud Control',
            icon: <Shield className="w-4 h-4" />,
            bgColor: 'bg-blue-500 hover:bg-blue-600'
        }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };
    // Stats for employers
    const statsData = [
        { title: 'Total Employers', count: '1234', text: '+5% from last month', image: Student1 },
        { title: 'Pending Approvals', count: '23', text: '+3% from last month', image: Student1 },
        { title: 'Active Jobs', count: '5,678', text: '+8% from last month', image: Student1 },
        { title: 'Monthly Revenue', count: '$4,567', text: '+10% from last month', image: Student1 }
    ];
    const [applications, setApplications] = useState([
        {
            id: 1,
            companyName: "TechCorp Solutions",
            contactPerson: "Rahul Kumar",
            email: "rahul@techcorp.com",
            phone: "+91 9874563210",
            website: "techcorp.com",
            industry: "Technology",
            employeeCount: "100-500 employees",
            appliedDate: "01-01-2025",
            documents: ["Business License", "Tax Certificate", "Company Profile"],
            status: "pending"
        },
        {
            id: 2,
            companyName: "TechCorp Solutions",
            contactPerson: "Rahul Kumar",
            email: "rahul@techcorp.com",
            phone: "+91 9874563210",
            website: "techcorp.com",
            industry: "Technology",
            employeeCount: "100-500 employees",
            appliedDate: "01-01-2025",
            documents: ["Business License", "Tax Certificate", "Company Profile"],
            status: "pending"
        }
    ]);

    const handleApprove = (id) => {
        setApplications(apps =>
            apps.map(app =>
                app.id === id ? { ...app, status: 'approved' } : app
            )
        );
    };

    const handleReject = (id) => {
        setApplications(apps =>
            apps.map(app =>
                app.id === id ? { ...app, status: 'rejected' } : app
            )
        );
    };

    const handleReview = (id) => {
        console.log(`Reviewing application ${id}`);
    };
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
            <div className="flex justify-end space-x-3 mb-6  items-center top-40px right-20px">
                <button
                    onClick={handleExportData}
                    className="absolute border-2 border-[#5C9A24] flex items-center rounded-md  transition-colors duration-200 w-[126px] h-[24px]  bg-transparent font-['Plus_Jakarta_Sans'] font-medium text-base leading-5 text-[#5C9A24]">
                    <Download
                        className="mr-2"
                        size={12}
                        style={{ color: '#5C9A24' }}
                    />
                    Export Data
                </button>
            </div>

            {/* Stats Cards */}
            <div className="p-3 bg-white min-h-full">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsData.map((stat, index) => (
                            <CardComponent key={index} stat={stat} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-end items-center p-5 mb-7">

                    {/* Main Dropdown Button */}
                    <div className="relative">
                        <button
                            onClick={toggleMenu}
                            className="bg-[#0B537D] hover:bg-[#0B537D] text-white p-3 rounded-lg shadow-lg transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>

                        {/* Enhanced Dropdown Menu - Increased Size */}
                        {isOpen && (
                            <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleItemClick(item)}
                                        className="w-full text-left px-6 py-4 hover:bg-[#0B537D] text-blue-700 hover:text-[#FFFFFF] transition-colors duration-150 flex items-center space-x-4  border-gray-100 last:border-b-0 group"
                                    >
                                        <div className="text-blue-500 group-hover:text-blue-600 text-lg">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-base">{item.label}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Selected Item Display */}
                    {/* {selectedItem && (
                        <div className="mt-10 p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Selected Option:</h4>
                            <div className="flex items-center space-x-3 text-blue-600">
                                {selectedItem.icon}
                                <span className="font-medium">{selectedItem.label}</span>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">
                                You have selected {selectedItem.label}. This would typically navigate to the {selectedItem.label.toLowerCase()} section.
                            </p>
                        </div>
                    )} */}

                </div>
<div className="max-w-6xl mx-auto p-6 bg-[#F6FAFF] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Pending Recruiter Approvals</h1>
            <p className="text-gray-600 text-sm mt-1">Review and approve new employer registrations</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
          Pending
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6">
        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              {/* Left Section - Company Info */}
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </div>
                
                {/* Company Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">{app.companyName}</h2>
                  <p className="text-gray-700 font-medium mb-3">{app.contactPerson}</p>
                  
                  {/* Contact Info */}
                  <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
                    <span>{app.email}</span>
                    <span>{app.phone}</span>
                    <span>{app.website}</span>
                  </div>
                  
                  {/* Tags and Applied Date */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {app.industry}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {app.employeeCount}
                    </span>
                    <span className="text-gray-600 text-sm">Applied: {app.appliedDate}</span>
                  </div>
                  
                  {/* Documents */}
                  <div>
                    <p className="text-gray-700 text-sm mb-2 font-medium">Documents submitted:</p>
                    <div className="flex gap-3">
                      {app.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
                          <FileText className="w-4 h-4" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Section - Action Buttons */}
              <div className="flex flex-col gap-2 ml-4">
                <button
                  onClick={() => handleReview(app.id)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Review
                </button>
                
                <button
                  onClick={() => handleApprove(app.id)}
                  disabled={app.status !== 'pending'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    app.status === 'approved'
                      ? 'bg-green-600 text-white cursor-default'
                      : app.status === 'pending'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  {app.status === 'approved' ? 'Approved' : 'Approve'}
                </button>
                
                <button
                  onClick={() => handleReject(app.id)}
                  disabled={app.status !== 'pending'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    app.status === 'rejected'
                      ? 'bg-red-600 text-white cursor-default'
                      : app.status === 'pending'
                      ? 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <X className="w-4 h-4" />
                  {app.status === 'rejected' ? 'Rejected' : 'Reject'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (when no applications) */}
      {applications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pending applications</h3>
          <p className="text-gray-600">All recruiter applications have been processed.</p>
        </div>
      )}
    </div>
            </div>
        </div>
    );
};

export default EmployerManagementDashboard;