import React, { useState } from 'react';
import { Search, Bell, Settings, Users, BookOpen, TrendingUp, BarChart3, MessageSquare,Clock, AlertTriangle, Wrench, HelpCircle, Briefcase, Building2, CheckCircle, FileText, Award, ChevronDown,DollarSign } from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
import Student from "../../src/assets/images/student.png";
import Verified from "../../src/assets/images/verified.png";
import Folder from "../../src/assets/images/folder.png";
import Target from "../../src/assets/images/target.png";
import Student1 from "../../src/assets/images/student1.png";
import SearchGradient from "../../src/assets/icons/search-gradient.png";
import Header from '../components/Header.jsx';
import NavigationTabs from "../components/NavigationTabs.jsx";
import ActionButtons from '../components/ActionButtons.jsx';
import AddStudentModal from '../components/AddStudentModal.jsx';
import NotificationModal from '../components/NotificationModal.jsx';
import StudentList from '../components/StudentList.jsx';
// import EmployeeManagement from './EmployerManagementDashboard.jsx'; // Import the EmployerManagement component

const StudentManagementDashboard = () => {
  const [selectedFilterTab, setSelectedFilterTab] = useState('Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNavTab, setActiveNavTab] = useState('student');
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

  // Sample data for different tabs
  const sampleStudents = [
    { id: 1, name: 'John Doe', email: 'john@email.com', grade: '12th', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', grade: 'Undergraduate', phone: '098-765-4321' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', grade: 'Postgraduate', phone: '555-123-4567' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@email.com', grade: 'PhD', phone: '444-555-6666' }
  ];

  const sampleEmployers = [
    { id: 1, name: 'Tech Corp', contact: 'hr@techcorp.com', openings: 15, location: 'Mumbai' },
    { id: 2, name: 'Innovation Labs', contact: 'jobs@innovation.com', openings: 8, location: 'Bangalore' },
    { id: 3, name: 'Digital Solutions', contact: 'careers@digital.com', openings: 12, location: 'Delhi' }
  ];

  const sampleInstitutes = [
    { id: 1, name: 'Mumbai Tech College', students: 2500, courses: 25, established: '1995' },
    { id: 2, name: 'Delhi Engineering Institute', students: 1800, courses: 18, established: '2001' },
    { id: 3, name: 'Bangalore Skills Academy', students: 3200, courses: 32, established: '1988' }
  ];

  // Export Data Function
  const handleExportData = () => {
    let dataToExport = [];
    let filename = '';
    
    switch(activeNavTab) {
      case 'student':
        dataToExport = [
          ['ID', 'Name', 'Email', 'Grade', 'Phone'],
          ...sampleStudents.map(student => [
            student.id,
            student.name,
            student.email,
            student.grade,
            student.phone
          ])
        ];
        filename = 'students_data.csv';
        break;
      case 'employer':
        dataToExport = [
          ['ID', 'Company', 'Contact', 'Openings', 'Location'],
          ...sampleEmployers.map(employer => [
            employer.id,
            employer.name,
            employer.contact,
            employer.openings,
            employer.location
          ])
        ];
        filename = 'employers_data.csv';
        break;
      case 'institute':
        dataToExport = [
          ['ID', 'Institute', 'Students', 'Courses', 'Established'],
          ...sampleInstitutes.map(institute => [
            institute.id,
            institute.name,
            institute.students,
            institute.courses,
            institute.established
          ])
        ];
        filename = 'institutes_data.csv';
        break;
      default:
        return;
    }

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
    const targetType = activeNavTab === 'student' ? 'students' : 
                      activeNavTab === 'employer' ? 'employers' : 'institutes';
    alert(`Notification "${notificationData.title}" sent to ${notificationData.recipients} ${targetType} successfully!`);
    setShowNotificationModal(false);
    setNotificationData({ title: '', message: '', recipients: 'all' });
  };

  // Add Student Function
  const handleAddStudent = () => {
    setShowAddStudentForm(true);
  };

  const submitStudent = (e) => {
    e.preventDefault();
    const entityType = activeNavTab === 'student' ? 'Student' : 
                      activeNavTab === 'employer' ? 'Employer' : 'Institute';
    alert(`${entityType} "${studentData.name}" added successfully!`);
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

  const navigationTabs = [
    {
      id: 'student',
      label: 'Student Management',
      icon: Users,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      activeBgColor: 'bg-green-500',
      activeIconColor: 'text-white'
    },
    {
      id: 'employer',
      label: 'Employer Management',
      icon: Briefcase,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      activeBgColor: 'bg-blue-500',
      activeIconColor: 'text-white'
    },
    {
      id: 'institute',
      label: 'Institute Management',
      icon: Building2,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      activeBgColor: 'bg-purple-500',
      activeIconColor: 'text-white'
    }
  ];

  const filterTabs = ['Courses', 'Placement Status', 'Skills', 'Experience'];

  const getStatsForTab = () => {
    switch(activeNavTab) {
      case 'student':
        return [
          { title: "Total Students", count: "15,847", image: Student },
          { title: "Verified Profiles", count: "2,456", image: Verified },
          { title: "Placement Ready", count: "342", image: Folder },
          { title: "Successfully Placed", count: "23,891", image: Target }
        ];
      case 'employer':
        return [
          { title: 'Total Employers', count: '1234', text: '+5% from last month', image: Student1 },
          { title: 'Pending Approvals', count: '23', text: '+3% from last month', image: Student1},
          { title: 'Active Jobs', count: '5,678', text: '+8% from last month',  image: Student1},
          { title: 'Monthly Revenue', count: '$4,567', text: '+10% from last month',  image: Student1 }
        ];
      case 'institute':
        return [
          { title: "Total Institutes", count: "485", image: Student },
          { title: "Accredited", count: "392", image: Verified },
          { title: "Active Courses", count: "2,156", image: Folder },
          { title: "Graduated Students", count: "45,672", image: Target }
        ];
      default:
        return [];
    }
  };

  // Handler functions for header interactions
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNotificationClick = () => {
    console.log('Notification clicked');
  };

  const handleUserClick = () => {
    console.log('User profile clicked');
  };

  const Students = [
    {
      id: 1,
      name: "Arjun Sharma",
      email: "arjun.sharma@email.com",
      course: "Electrician",
      grade: "8.7/10.0",
      technology: "Electrical Systems",
      college: "North India Technical Institute",
      tags: ["Electrician", "Certified", "Advanced"]
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      course: "Web Development",
      grade: "9.2/10.0",
      technology: "React.js",
      college: "Mumbai Tech College",
      tags: ["Frontend", "JavaScript", "React"]
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul.kumar@email.com",
      course: "Carpenter",
      grade: "8.5/10.0",
      technology: "East India",
      college: "Kolkata Trade School",
      tags: ["Carpenter", "Woodwork", "Furniture"]
    }
  ];

  const getTagColor = (tag) => {
    return "bg-blue-500 text-white";
  };

  // Get title and description based on active tab
  const getTabContent = () => {
    switch(activeNavTab) {
      case 'student':
        return {
          title: 'Student Management',
          description: 'Manage student profiles, track progress, and monitor placements',
          searchPlaceholder: 'Search by name, email, or student ID...',
          listTitle: 'All Student Profiles',
          icon: Users
        };
      case 'employer':
        return {
          title: 'Employer Management',
          description: 'Manage employer partnerships, job postings, and recruitment activities',
          searchPlaceholder: 'Search by company name, contact, or location...',
          listTitle: 'All Employer Profiles',
          icon: Briefcase
        };
      case 'institute':
        return {
          title: 'Institute Management',
          description: 'Manage educational institutions, courses, and academic partnerships',
          searchPlaceholder: 'Search by institute name, location, or courses...',
          listTitle: 'All Institute Profiles',
          icon: Building2
        };
      default:
        return {
          title: 'Management Dashboard',
          description: 'Select a tab to manage different entities',
          searchPlaceholder: 'Search...',
          listTitle: 'All Profiles',
          icon: Users
        };
    }
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    const content = getTabContent();
    
    switch(activeNavTab) {
      case 'student':
        return (
          <div className="min-h-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <StudentList students={Students} getTagColor={getTagColor} />
            </div>
          </div>
        );
      case 'employer':
        return (
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
        );
      case 'institute':
        return (
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
        );
      default:
        return (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <p>Select a tab to view content</p>
          </div>
        );
    }
  };

  const tabContent = getTabContent();

  return (
    <div className="relative flex h-full bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Header 
          placeholder="Search by name, position"
          userRole="Admin"
          showNotification={true}
          onSearch={handleSearch}
          onNotificationClick={handleNotificationClick}
          onUserClick={handleUserClick}
          onDropdownClick={() => console.log('Dropdown clicked')}
        />

        {/* Navigation Tabs */}
        <div className="relative px-6 py-6 bg-gray-50 rounded-2xl flex justify-center items-center">
          <NavigationTabs
            navigationTabs={navigationTabs}
            activeNavTab={activeNavTab}
            setActiveNavTab={setActiveNavTab}
          />
        </div>

        {/* Tab Panel Content */}
        <div className="p-5">
          <div className="mb-6">
            <div className="">
              <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">
                {tabContent.title}
              </h1>
              <p className="text-[#0B537D] text-center text-sm">
                {tabContent.description}
              </p>
            </div>
          </div>

          {/* Action Buttons Component */}
          <ActionButtons 
            handleExportData={handleExportData}
            handleSendNotification={handleSendNotification}
            handleAddStudent={handleAddStudent}
          />

          {/* Add Student Form Modal Component */}
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

          {/* Stats Cards - Dynamic based on active tab */}
          <div className="p-2 bg-gray-50 min-h-screen">
            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getStatsForTab().map((stat, index) => (
                  <CardComponent key={index} stat={stat} />
                ))}
              </div>
            </div>

            {/* Filters and Tabs - Only show for student and institute tabs */}
            {(activeNavTab === 'student' || activeNavTab === 'institute') && (
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
            )}

            {/* Dynamic Content Section */}
            {(activeNavTab === 'student' || activeNavTab === 'institute') && (
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center font-semibold text-black" 
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '32px',
                        lineHeight: '40px',
                        fontWeight: 600
                      }}>
                    <tabContent.icon className="mr-2 text-blue-600" size={24} />
                    {tabContent.listTitle}
                  </h2>
                  <div className="relative w-full max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                      <input
                        type="text"
                        placeholder={tabContent.searchPlaceholder}
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full pl-9 pr-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Render Tab-Specific Content */}
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagementDashboard;