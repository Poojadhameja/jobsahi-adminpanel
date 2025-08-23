// import React, { useState } from 'react';
// import { Building, Search, Download, CheckCircle, Briefcase, CreditCard, Star, FileText, Shield, Menu, Eye, Check, X } from 'lucide-react';
// import CardComponent from '../components/cardcomponents.jsx';
// import Student1 from "../../src/assets/images/student1.png";

// const EmployerManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
//   const [localSearchQuery, setLocalSearchQuery] = useState('');
//   const [showDropdownMenu, setShowDropdownMenu] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   // Sample data
//   const sampleEmployers = [
//     { id: 1, name: 'Tech Corp', contact: 'hr@techcorp.com', openings: 15, location: 'Mumbai' },
//     { id: 2, name: 'Innovation Labs', contact: 'jobs@innovation.com', openings: 8, location: 'Bangalore' },
//     { id: 3, name: 'Digital Solutions', contact: 'careers@digital.com', openings: 12, location: 'Delhi' }
//   ];

//   const handleInputChange = (e, type) => {
//     const { name, value } = e.target;
//     if (type === 'student') {
//       setStudentData(prev => ({ ...prev, [name]: value }));
//     } else if (type === 'notification') {
//       setNotificationData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleLocalSearch = (e) => {
//     setLocalSearchQuery(e.target.value);
//   };

//   const handleExportData = () => {
//     // Create CSV content
//     const headers = ['ID', 'Company Name', 'Contact', 'Open Positions', 'Location'];
//     const csvContent = [
//       headers.join(','),
//       ...sampleEmployers.map(employer =>
//         [employer.id, employer.name, employer.contact, employer.openings, employer.location].join(',')
//       )
//     ].join('\n');

//     // Create and download file
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     const url = URL.createObjectURL(blob);
//     link.setAttribute('href', url);
//     link.setAttribute('download', 'employers_data.csv');
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   const menuItems = [
//     {
//       id: 'approve-reject',
//       label: 'Approve/Reject',
//       icon: <CheckCircle className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     },
//     {
//       id: 'job-tracking',
//       label: 'Job Tracking',
//       icon: <Briefcase className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     },
//     {
//       id: 'payments',
//       label: 'Payments',
//       icon: <CreditCard className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     },
//     {
//       id: 'ratings',
//       label: 'Ratings',
//       icon: <Star className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     },
//     {
//       id: 'resume-usage',
//       label: 'Resume Usage',
//       icon: <FileText className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     },
//     {
//       id: 'fraud-control',
//       label: 'Fraud Control',
//       icon: <Shield className="w-4 h-4" />,
//       bgColor: 'bg-blue-500 hover:bg-blue-600'
//     }
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//   };
//   // Stats for employers
//   const statsData = [
//     { title: 'Total Employers', count: '1234', text: '+5% from last month', image: Student1 },
//     { title: 'Pending Approvals', count: '23', text: '+3% from last month', image: Student1 },
//     { title: 'Active Jobs', count: '5,678', text: '+8% from last month', image: Student1 },
//     { title: 'Monthly Revenue', count: '$4,567', text: '+10% from last month', image: Student1 }
//   ];
//   const [applications, setApplications] = useState([
//     {
//       id: 1,
//       companyName: "TechCorp Solutions",
//       contactPerson: "Rahul Kumar",
//       email: "rahul@techcorp.com",
//       phone: "+91 9874563210",
//       website: "techcorp.com",
//       industry: "Technology",
//       employeeCount: "100-500 employees",
//       appliedDate: "01-01-2025",
//       documents: ["Business License", "Tax Certificate", "Company Profile"],
//       status: "pending"
//     },
//     {
//       id: 2,
//       companyName: "TechCorp Solutions",
//       contactPerson: "Rahul Kumar",
//       email: "rahul@techcorp.com",
//       phone: "+91 9874563210",
//       website: "techcorp.com",
//       industry: "Technology",
//       employeeCount: "100-500 employees",
//       appliedDate: "01-01-2025",
//       documents: ["Business License", "Tax Certificate", "Company Profile"],
//       status: "pending"
//     }
//   ]);

//   const handleApprove = (id) => {
//     setApplications(apps =>
//       apps.map(app =>
//         app.id === id ? { ...app, status: 'approved' } : app
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setApplications(apps =>
//       apps.map(app =>
//         app.id === id ? { ...app, status: 'rejected' } : app
//       )
//     );
//   };

//   const handleReview = (id) => {
//     console.log(`Reviewing application ${id}`);
//   };
//   return (
//     <div className="p-5 relative">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">
//           Employer Management
//         </h1>
//         <p className="text-[#0B537D] text-center text-sm">
//           Manage employer partnerships, job postings, and recruitment activities
//         </p>
//       </div>

//       {/* Export Button with Custom CSS Styling */}
//      <div className="flex justify-end space-x-3 mb-6 items-center top-40px right-20px">
//   <button
//     onClick={handleExportData}
//     className="absolute border-2 border-[#5C9A24] flex items-center rounded-lg px-4 py-2 transition-colors duration-200 w-[136px] h-[40px] bg-white font-['Plus_Jakarta_Sans'] font-medium text-sm leading-5 text-[#4a8020] hover:bg-white hover:text-[#4a8020]">
//     <Download
//       className="mr-2"
//       size={14}
//       style={{ color: '#4a8020'}}
//     />
//     Export Data
//   </button>
// </div>

//       {/* Stats Cards */}
//       <div className="p-3 bg-white min-h-full">
//         <div className="max-w-8xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {statsData.map((stat, index) => (
//               <CardComponent key={index} stat={stat} />
//             ))}
//           </div>
//         </div>
//         <div className="max-w-8xl mx-auto p-6 m-10 bg-[#F6FAFF] min-h-screen ">
//       {/* Header with Menu */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
//             <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
//           </div>
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-900">Pending Recruiter Approvals</h1>
//             <p className="text-gray-600 text-sm mt-1">Review and approve new employer registrations</p>
//           </div>
//         </div>

//         {/* Status Badge and Menu */}
//         <div className="flex items-center gap-4">
//           <div className="px-4 py-2 bg-green-200 text-[#5C9A24] rounded-full text-sm font-medium">
//             {applications.filter(app => app.status === 'pending').length} Pending
//           </div>

//           {/* Main Dropdown Button */}
//           <div className="relative">
//             <button
//               onClick={toggleMenu}
//               className="bg-[#0B537D] hover:bg-[#094a6d] text-white p-3 rounded-lg shadow-lg transition-colors duration-200"
//               aria-label="Toggle menu"
//             >
//               <Menu size={24} />
//             </button>

//             {/* Enhanced Dropdown Menu */}
//             {isOpen && (
//               <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
//                 {menuItems.map((item, index) => (
//                   <button
//                     key={item.id}
//                     onClick={() => handleItemClick(item)}
//                     className="w-full text-left px-6 py-4 hover:bg-[#0B537D] text-gray-700 hover:text-white transition-colors duration-150 flex items-center space-x-4 border-b border-gray-100 last:border-b-0 group"
//                   >
//                     <div className="text-[#0B537D] group-hover:text-white text-lg">
//                       {item.icon}
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-base">{item.label}</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Applications List */}
//       <div className="space-y-6">
//         {applications.map((app) => (
//           <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
//             <div className="flex items-start justify-between">
//               {/* Left Section - Company Info */}
//               <div className="flex items-start gap-4">
//                 {/* Avatar */}
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
//                   <Building className="w-6 h-6 text-blue-600" />
//                 </div>

//                 {/* Company Details */}
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-1">
//                     <h2 className="text-lg font-semibold text-gray-900">{app.companyName}</h2>
//                     {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       app.status === 'approved' ? 'bg-green-100 text-green-800' :
//                       app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                       'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {app.status}
//                     </span> */}
//                   </div>
//                   <p className="text-gray-700 font-medium mb-3">{app.contactPerson}</p>

//                   {/* Contact Info */}
//                   <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
//                     <span className="hover:text-blue-600 cursor-pointer">{app.email}</span>
//                     <span>{app.phone}</span>
//                     <span className="hover:text-blue-600 cursor-pointer">{app.website}</span>
//                   </div>

//                   {/* Tags and Applied Date */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//                       {app.industry}
//                     </span>
//                     <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                       {app.employeeCount} employees
//                     </span>
//                     <span className="text-gray-600 text-sm">Applied: {app.appliedDate}</span>
//                   </div>

//                   {/* Documents */}
//                   <div>
//                     <p className="text-gray-700 text-sm mb-2 font-medium">Documents submitted:</p>
//                     <div className="flex gap-3 flex-wrap">
//                       {app.documents.map((doc, index) => (
//                         <div key={index} className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200 hover:bg-green-100 transition-colors cursor-pointer">
//                           <FileText className="w-4 h-4" />
//                           <span>{doc}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section - Action Buttons */}
//               <div className="flex flex-col gap-2 ml-4">
//                 <button
//                   onClick={() => handleReview(app.id)}
//                   className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 min-w-[120px] justify-center"
//                 >
//                   <Eye className="w-4 h-4" />
//                   Review
//                 </button>

//                 <button
//                   onClick={() => handleApprove(app.id)}
//                   disabled={app.status !== 'pending'}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 min-w-[120px] justify-center ${
//                     app.status === 'approved'
//                       ? 'bg-green-600 text-white cursor-default'
//                       : app.status === 'pending'
//                         ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-md'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                   }`}
//                 >
//                   <Check className="w-4 h-4" />
//                   {app.status === 'approved' ? 'Approved' : 'Approve'}
//                 </button>

//                 <button
//                   onClick={() => handleReject(app.id)}
//                   disabled={app.status !== 'pending'}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 min-w-[120px] justify-center ${
//                     app.status === 'rejected'
//                       ? 'bg-red-600 text-white cursor-default'
//                       : app.status === 'pending'
//                         ? 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 hover:shadow-md'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                   }`}
//                 >
//                   <X className="w-4 h-4" />
//                   {app.status === 'rejected' ? 'Rejected' : 'Reject'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State (when no applications) */}
//       {applications.length === 0 && (
//         <div className="text-center py-12">
//           <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <FileText className="w-8 h-8 text-gray-400" />
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No pending applications</h3>
//           <p className="text-gray-600">All recruiter applications have been processed.</p>
//         </div>
//       )}

//       {/* Selected Item Display (Optional - currently commented out) */}
//       {selectedItem && (
//         <div className="fixed bottom-4 right-4 p-4 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 max-w-sm">
//           <h4 className="text-sm font-semibold text-gray-800 mb-2">Navigation:</h4>
//           <div className="flex items-center space-x-3 text-blue-600">
//             {selectedItem.icon}
//             <span className="font-medium text-sm">{selectedItem.label}</span>
//           </div>
//         </div>
//       )}
//     </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerManagementDashboard;

import React, { useState, useEffect, useRef } from "react";
import {
  Building,
  Download,
  CheckCircle,
  Briefcase,
  CreditCard,
  Star,
  FileText,
  Shield,
  Menu,
  Eye,
  Check,
  X,
} from "lucide-react";
import CardComponent from "../../components/cards/cardcomponents";
import Student1 from "../../assets/images/Student1.png";

const EmployerManagementDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Sample Employers
  const sampleEmployers = [
    { id: 1, name: "Tech Corp", contact: "hr@techcorp.com", openings: 15, location: "Mumbai" },
    { id: 2, name: "Innovation Labs", contact: "jobs@innovation.com", openings: 8, location: "Bangalore" },
    { id: 3, name: "Digital Solutions", contact: "careers@digital.com", openings: 12, location: "Delhi" },
  ];

  // Export CSV
  const handleExportData = () => {
    const headers = ["ID", "Company Name", "Contact", "Open Positions", "Location"];
    const csvContent = [
      headers.join(","),
      ...sampleEmployers.map((e) => [e.id, e.name, e.contact, e.openings, e.location].join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "employers_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Dropdown Items
  const menuItems = [
    { id: "approve-reject", label: "Approve/Reject", icon: <CheckCircle className="w-4 h-4" /> },
    { id: "job-tracking", label: "Job Tracking", icon: <Briefcase className="w-4 h-4" /> },
    { id: "payments", label: "Payments", icon: <CreditCard className="w-4 h-4" /> },
    { id: "ratings", label: "Ratings", icon: <Star className="w-4 h-4" /> },
    { id: "resume-usage", label: "Resume Usage", icon: <FileText className="w-4 h-4" /> },
    { id: "fraud-control", label: "Fraud Control", icon: <Shield className="w-4 h-4" /> },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  // Stats
  const statsData = [
    { title: "Total Employers", count: "1234", text: "+5% from last month", image: Student1 },
    { title: "Pending Approvals", count: "23", text: "+3% from last month", image: Student1 },
    { title: "Active Jobs", count: "5,678", text: "+8% from last month", image: Student1 },
    { title: "Monthly Revenue", count: "$4,567", text: "+10% from last month", image: Student1 },
  ];

  // Applications State
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
      status: "pending",
    },
    {
      id: 2,
      companyName: "InnoTech Pvt Ltd",
      contactPerson: "Neha Sharma",
      email: "neha@innotech.com",
      phone: "+91 9988776655",
      website: "innotech.com",
      industry: "Software",
      employeeCount: "50-200 employees",
      appliedDate: "05-01-2025",
      documents: ["Business License", "Company Profile"],
      status: "pending",
    },
  ]);

  const handleApprove = (id) => {
    setApplications((apps) => apps.map((a) => (a.id === id ? { ...a, status: "approved" } : a)));
  };

  const handleReject = (id) => {
    setApplications((apps) => apps.map((a) => (a.id === id ? { ...a, status: "rejected" } : a)));
  };

  const handleReview = (id) => {
    console.log(`Reviewing application ${id}`);
  };

  return (
     <div className="min-h-screen bg-white">
      {/* Main Container - Full Width */}
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 xl:px-8 py-0">
        {/* Header - Compact */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3">
            <div>
              <h1 className="text-2xl lg:text-2xl font-bold text-[#0B537D]">Employer Management</h1>
              <p className="text-[rgb(11,83,125)] text-sm lg:text-base mt-1">
                Manage employer partnerships, job postings, and recruitment activities
              </p>
            </div>
          </div>
        </div>
        {/* Export Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleExportData}
          className="border-2 border-[#5C9A24] flex items-center rounded-lg px-4 py-2 transition-colors duration-200 bg-white font-medium text-sm text-[#4a8020] hover:bg-gray-50"
        >
          <Download className="mr-2" size={14} style={{ color: "#4a8020" }} />
          Export Data
        </button>
      </div>

        {/* Stats Section - Full Width */}
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {statsData.map((stat, index) => (
              <CardComponent key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Applications Section - Full Width */}
        <div className="bg-[#F6FAFF] rounded-xl p-4 lg:p-6">
          {/* Section Header - Compact */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                  Pending Recruiter Approvals
                </h2>
                <p className="text-gray-600 text-sm lg:text-base mt-1">
                  Review and approve new employer registrations
                </p>
              </div>
            </div>

            {/* Status Badge & Dropdown */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <div className="px-3 lg:px-4 py-2 bg-green-200 text-[#5C9A24] rounded-full text-sm font-medium">
                {applications.filter((a) => a.status === "pending").length} Pending
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMenu}
                  className="bg-[#0B537D] hover:bg-[#094a6d] text-white p-2 lg:p-3 rounded-lg shadow-lg transition-colors"
                >
                  <Menu size={20} />
                </button>
                {isOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 lg:w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="w-full text-left px-4 lg:px-6 py-3 lg:py-4 hover:bg-[#0B537D] text-gray-700 hover:text-white transition-colors flex items-center space-x-3 lg:space-x-4 border-b border-gray-100 last:border-b-0 group"
                      >
                        <div className="text-[#0B537D] group-hover:text-white">{item.icon}</div>
                        <span className="font-semibold text-sm lg:text-base">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Applications Grid - Optimized for Large Screens */}
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 hover:shadow-md transition-shadow"
              >
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">
                  {/* Company Info - 6 cols */}
                  <div className="lg:col-span-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{app.companyName}</h3>
                        <p className="text-gray-700 font-medium mb-2">{app.contactPerson}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="hover:text-blue-600 cursor-pointer truncate">{app.email}</p>
                          <p>{app.phone}</p>
                          <p className="hover:text-blue-600 cursor-pointer truncate">{app.website}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags & Info - 3 cols */}
                  <div className="lg:col-span-3">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-sm font-medium">
                          {app.industry}
                        </span>
                        <span className="px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-sm">
                          {app.employeeCount}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">Applied: {app.appliedDate}</p>
                      <div className="space-y-1">
                        <p className="text-gray-700 text-sm font-medium">Documents:</p>
                        <div className="flex flex-wrap gap-1">
                          {app.documents.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded text-xs border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span className="truncate">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions - 3 cols */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleReview(app.id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 w-full"
                      >
                        <Eye className="w-4 h-4" />
                        Review
                      </button>
                      <button
                        onClick={() => handleApprove(app.id)}
                        disabled={app.status !== "pending"}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg w-full ${
                          app.status === "approved"
                            ? "bg-green-600 text-white cursor-default"
                            : app.status === "pending"
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        {app.status === "approved" ? "Approved" : "Approve"}
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={app.status !== "pending"}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg w-full ${
                          app.status === "rejected"
                            ? "bg-red-600 text-white cursor-default"
                            : app.status === "pending"
                            ? "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <X className="w-4 h-4" />
                        {app.status === "rejected" ? "Rejected" : "Reject"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex items-start gap-4 flex-1 w-full sm:w-auto">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900">{app.companyName}</h3>
                        <p className="text-gray-700 font-medium mb-2">{app.contactPerson}</p>
                        <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-3">
                          <span className="hover:text-blue-600 cursor-pointer break-all">{app.email}</span>
                          <span>{app.phone}</span>
                          <span className="hover:text-blue-600 cursor-pointer break-all">{app.website}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-sm font-medium">
                            {app.industry}
                          </span>
                          <span className="px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-sm">
                            {app.employeeCount}
                          </span>
                          <span className="text-gray-600 text-sm">Applied: {app.appliedDate}</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2 font-medium">Documents submitted:</p>
                        <div className="flex gap-2 flex-wrap">
                          {app.documents.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-xs sm:text-sm border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
                            >
                              <FileText className="w-4 h-4" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleReview(app.id)}
                        className="flex items-center gap-2 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex-1 sm:flex-none sm:min-w-[120px] justify-center"
                      >
                        <Eye className="w-4 h-4" />
                        Review
                      </button>
                      <button
                        onClick={() => handleApprove(app.id)}
                        disabled={app.status !== "pending"}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg flex-1 sm:flex-none sm:min-w-[120px] justify-center ${
                          app.status === "approved"
                            ? "bg-green-600 text-white cursor-default"
                            : app.status === "pending"
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        {app.status === "approved" ? "Approved" : "Approve"}
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={app.status !== "pending"}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg flex-1 sm:flex-none sm:min-w-[120px] justify-center ${
                          app.status === "rejected"
                            ? "bg-red-600 text-white cursor-default"
                            : app.status === "pending"
                            ? "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <X className="w-4 h-4" />
                        {app.status === "rejected" ? "Rejected" : "Reject"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
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

      {/* Selected Menu Item - Fixed Position */}
      {selectedItem && (
        <div className="fixed bottom-4 right-4 p-4 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 max-w-xs z-50">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Navigation:</h4>
          <div className="flex items-center space-x-3 text-blue-600">
            {selectedItem.icon}
            <span className="font-medium text-sm">{selectedItem.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerManagementDashboard;
