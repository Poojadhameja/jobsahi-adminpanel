/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Search, Users, ChevronDown } from 'lucide-react';
import CardComponent from '../../components/cards/cardcomponents.jsx';
import ActionButtons from '../../components/buttons/ActionButtons.jsx';
import AddStudentModal from '../../components/modals/AddStudentModal.jsx';
import NotificationModal from '../../components/modals/NotificationModal.jsx';
import StudentList from '../../components/lists/StudentList.jsx';
import Student from "../../assets/images/student.png";
import Verified from "../../assets/images/verified.png";
import Folder from "../../assets/images/folder.png";
import Target from "../../assets/images/target.png";
import SearchGradient from "../../assets/icons/search-gradient.png";


const StudentManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
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
  const [selectedValues, setSelectedValues] = useState({
    Courses: "All Courses",
    "Placement Status": "All Status",
    Skills: "All Skills",
    Experience: "All Experience",
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownOptions = {
    Courses: ["All Courses", "Web Development", "Data Science", "AI & ML"],
    "Placement Status": ["All Status", "Placed", "Pending", "Not Placed"],
    Skills: ["All Skills", "React", "Java", "Python", "SQL"],
    Experience: ["All Experience", "0-1 Years", "2-3 Years", "3+ Years"],
  };
  const handleSelect = (tab, option) => {
    setSelectedValues((prev) => ({ ...prev, [tab]: option }));
    setOpenDropdown(null);
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
  const handleApplyFilter = () => {
    // Your filter logic here
    console.log("Filters applied");
  };

  // Export Data Function
  const handleExportData = () => {
    const dataToExport = [
      ['ID', 'Name', 'Email', 'Grade', 'Phone'],
      ...Students.map(student => [
        student.id,
        student.name,
        student.email,
        student.grade,
        student.phone
      ])
    ];
    const filename = 'students_data.csv';

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
    alert(`Notification "${notificationData.title}" sent to ${notificationData.recipients} students successfully!`);
    setShowNotificationModal(false);
    setNotificationData({ title: '', message: '', recipients: 'all' });
  };

  // Add Student Function
  const handleAddStudent = () => {
    setShowAddStudentForm(true);
  };

  const submitStudent = (e) => {
    e.preventDefault();
    alert(`Student "${studentData.name}" added successfully!`);
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

  const getTagColor = (tag) => {
    return "bg-blue-500 text-white";
  };

  // Stats for students
  const statsData = [
    { title: "Total Students", count: "15,847", image: Student },
    { title: "Verified Profiles", count: "2,456", image: Verified },
    { title: "Placement Ready", count: "342", image: Folder },
    { title: "Successfully Placed", count: "23,891", image: Target }
  ];

  const filterTabs = ['Courses', 'Placement Status', 'Skills', 'Experience'];

  return (
    <div className="p-5">
      <div className="mb-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B537D] mb-2 text-center">
          Student Management
        </h1>
        <p className="text-[#0B537D] text-center text-xs sm:text-sm lg:text-base">
          Manage student profiles, track progress, and monitor placements
        </p>
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

      {/* Stats Cards */}
      <div className="bg-white min-h-screen px-3 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {statsData.map((stat, index) => (
              <CardComponent key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Filters and Tabs */}
        <div className="max-w-8xl mx-auto py-4">
          <div className="bg-[#F8FBFF] border border-[#0e6aa81a] rounded-2xl flex items-start pt-5 px-3 gap-40 justify-right lg:justify-between min-h-[150px]">
            {/* Left section: Advanced Filters label */}
            <div className="flex items-center space-x-1 mb-6">
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

            <div className="flex flex-col space-y-5">
              {/* Filter Tabs Row */}
              <div className="flex gap-5 space-x-5">
                {filterTabs.map((tab) => (
                  <div key={tab} className="relative flex flex-col">
                    <span className="text-[#0E6BA8] font-semibold text-xs mb-1">
                      {tab}
                    </span>
                    <div
                      onClick={() =>
                        setOpenDropdown(openDropdown === tab ? null : tab)
                      }
                      className="flex items-center bg-[#E6F1FA] border border-[#0e6aa81a] text-gray-700 px-4 py-2 rounded-lg cursor-pointer min-w-[150px]"
                    >
                      <span className="text-sm">{selectedValues[tab]}</span>
                      <ChevronDown size={16} className="ml-auto text-gray-500" />
                    </div>

                    {/* Dropdown Menu */}
                    {openDropdown === tab && (
                      <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {dropdownOptions[tab].map((option) => (
                          <div
                            key={option}
                            onClick={() => handleSelect(tab, option)}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Buttons Row */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() =>
                    setSelectedValues({
                      Courses: "All Courses",
                      "Placement Status": "All Status",
                      Skills: "All Skills",
                      Experience: "All Experience",
                    })
                  }
                  className="px-4 py-2 text-sm bg-[#f1f5f9] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Clear All
                </button>

                <button
                  className="px-4 py-2 text-sm bg-[#0B537D] text-white rounded-md hover:bg-[#0B537D]"
                  onClick={handleApplyFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>


          {/* Dynamic Content Section */}
          <div className="p-6 border-b border-gray-100 px-3 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center font-semibold text-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '32px',
                  lineHeight: '40px',
                  fontWeight: 600
                }}>
                <Users className="mr-2 text-blue-600" size={24} />
                All Student Profiles
              </h2>
              <div className="relative w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                  <input
                    type="text"
                    placeholder="Search by name, email, or student ID..."
                    value={localSearchQuery}
                    onChange={handleLocalSearch}
                    className="w-full pl-9 pr-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Student List */}
          <div className="min-h-full bg-white px-3 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
            <div className="max-w-8xl mx-auto">
              <StudentList students={Students} getTagColor={getTagColor} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default StudentManagementDashboard;