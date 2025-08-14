import React, { useState } from 'react';
import { Search, Building2, ChevronDown } from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
import ActionButtons from '../components/ActionButtons.jsx';
import AddStudentModal from '../components/AddStudentModal.jsx';
import NotificationModal from '../components/NotificationModal.jsx';
import Student from "../../src/assets/images/student.png";
import Verified from "../../src/assets/images/verified.png";
import Folder from "../../src/assets/images/folder.png";
import Target from "../../src/assets/images/target.png";
import SearchGradient from "../../src/assets/icons/search-gradient.png";

const InstituteManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    address: ''
  });
  const [notificationData, setNotificationData] = useState({
    title: '',
    message: '',
    recipients: 'all'
  });

  // Sample data
  const sampleInstitutes = [
    { id: 1, name: 'Mumbai Tech College', students: 2500, courses: 25, established: '1995' },
    { id: 2, name: 'Delhi Engineering Institute', students: 1800, courses: 18, established: '2001' },
    { id: 3, name: 'Bangalore Skills Academy', students: 3200, courses: 32, established: '1988' }
  ];

  // Export Data Function
  const handleExportData = () => {
    const dataToExport = [
      ['ID', 'Institute', 'Students', 'Courses', 'Established'],
      ...sampleInstitutes.map(institute => [
        institute.id,
        institute.name,
        institute.students,
        institute.courses,
        institute.established
      ])
    ];
    const filename = 'institutes_data.csv';

    const csvContent = dataToExport.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Send Bulk Notification Function
  const handleSendNotification = () => {
    setShowNotificationModal(true);
  };

  const submitNotification = (e) => {
    e.preventDefault();
    alert(`Notification "${notificationData.title}" sent to ${notificationData.recipients} institutes successfully!`);
    setShowNotificationModal(false);
    setNotificationData({ title: '', message: '', recipients: 'all' });
  };

  // Add Institute Function
  const handleAddStudent = () => {
    setShowAddStudentForm(true);
  };

  const submitStudent = (e) => {
    e.preventDefault();
    alert(`Institute "${studentData.name}" added successfully!`);
    setShowAddStudentForm(false);
    setStudentData({ name: '', email: '', phone: '', grade: '', address: '' });
  };

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

  // Stats for institutes
  const statsData = [
    { title: "Total Institutes", count: "485", image: Student },
    { title: "Accredited", count: "392", image: Verified },
    { title: "Active Courses", count: "2,156", image: Folder },
    { title: "Graduated Students", count: "45,672", image: Target }
  ];

  const filterTabs = ['Courses', 'Placement Status', 'Skills', 'Experience'];

  return (
    <div className="p-5">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">
          Institute Management
        </h1>
        <p className="text-[#0B537D] text-center text-sm">
          Manage educational institutions, courses, and academic partnerships
        </p>
      </div>

      {/* Action Buttons Component */}
      <ActionButtons 
        handleExportData={handleExportData}
        handleSendNotification={handleSendNotification}
        handleAddStudent={handleAddStudent}
      />

      {/* Add Institute Form Modal Component */}
      <AddStudentModal 
        showAddStudentForm={showAddStudentForm}
        setShowAddStudentForm={setShowAddStudentForm}
        studentData={studentData}
        handleInputChange={handleInputChange}
        submitStudent={submitStudent}
      />

      {/* Send Notification Modal Component */}
      <NotificationModal 
        showNotificationModal={showNotificationModal}
        setShowNotificationModal={setShowNotificationModal}
        notificationData={notificationData}
        handleInputChange={handleInputChange}
        submitNotification={submitNotification}
      />

      {/* Stats Cards */}
      <div className="p-2 bg-gray-50 min-h-screen">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <CardComponent key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Filters and Tabs */}
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-[#F8FBFF] rounded-2xl p-4 flex items-center justify-between">
            {/* Left section: Advanced Filters label */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img
                  src={SearchGradient}
                  alt="Filters"
                  className="w-5 h-5 object-contain"
                />
                <span
                  className="text-[#004D73] font-semibold text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Advanced Filters
                </span>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex items-center justify-center space-x-4">
                {filterTabs.map((tab) => (
                  <div key={tab} className="flex flex-col">
                    <span className="text-[#0E6BA8] font-semibold text-xs mb-1">
                      {tab}
                    </span>
                    <div className="flex items-center bg-[#E6F1FA] text-gray-700 px-3 py-1.5 rounded-lg cursor-pointer min-w-[150px]">
                      <span className="text-sm">
                        {tab === "Courses"
                          ? "All Courses"
                          : tab === "Placement Status"
                          ? "All Status"
                          : tab === "Skills"
                          ? "All Skills"
                          : "All Experience"}
                      </span>
                      <ChevronDown size={16} className="ml-auto text-gray-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right section: Buttons */}
            <div className="flex items-center justify-end space-x-3">
              <button
                className="px-4 py-1.5 text-sm bg-[#f1f5f9] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Clear All
              </button>
              <button
                className="px-4 py-1.5 text-sm bg-[#1d4ed8] text-white rounded-md hover:bg-[#1e40af]"
              >
                Apply Filter
              </button>
            </div>
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
              <Building2 className="mr-2 text-blue-600" size={24} />
              All Institute Profiles
            </h2>
            <div className="relative w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                <input
                  type="text"
                  placeholder="Search by institute name, location, or courses..."
                  value={localSearchQuery}
                  onChange={handleLocalSearch}
                  className="w-full pl-9 pr-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Institute List */}
        <div className="min-h-full bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6">
              {sampleInstitutes.map((institute) => (
                <div key={institute.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{institute.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Students:</span> {institute.students}
                        </div>
                        <div>
                          <span className="font-medium">Courses:</span> {institute.courses}
                        </div>
                        <div>
                          <span className="font-medium">Established:</span> {institute.established}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Accredited</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Partner</span>
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

export default InstituteManagementDashboard;