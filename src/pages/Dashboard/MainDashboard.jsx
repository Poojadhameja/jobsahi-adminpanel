import React, { useState } from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import Header from "../../components/navigation/Header.jsx";
import NavigationTabs from "../../components/navigation/NavigationTabs.jsx";
import StudentManagementDashboard from "../../pages/Management/StudentManagementDashboard.jsx";
import EmployerManagementDashboard from "../../pages/Management/EmployerManagementDashboard.jsx";
import InstituteManagementDashboard from "../../pages/Management/InstituteManagementDashboard.jsx";

const MainDashboard = () => {
  const [activeNavTab, setActiveNavTab] = useState("student");
  const [searchQuery, setSearchQuery] = useState("");

  // Navigation tabs configuration
  const navigationTabs = [
    {
      id: "student",
      label: "Student Management",
      icon: Users,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      activeBgColor: "bg-green-500",
      activeIconColor: "text-white",
    },
    {
      id: "employer",
      label: "Employer Management",
      icon: Briefcase,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      activeBgColor: "bg-blue-500",
      activeIconColor: "text-white",
    },
    {
      id: "institute",
      label: "Institute Management",
      icon: Building2,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      activeBgColor: "bg-purple-500",
      activeIconColor: "text-white",
    },
  ];

  // Handler functions for header interactions
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked");
  };

  const handleUserClick = () => {
    console.log("User profile clicked");
  };

  // Render the appropriate dashboard component based on active tab
  const renderDashboardContent = () => {
    switch (activeNavTab) {
      case "student":
        return <StudentManagementDashboard searchQuery={searchQuery} />;
      case "employer":
        return <EmployerManagementDashboard searchQuery={searchQuery} />;
      case "institute":
        return <InstituteManagementDashboard searchQuery={searchQuery} />;
      default:
        return <StudentManagementDashboard searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="relative flex h-full bg-white">
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
          onDropdownClick={() => console.log("Dropdown clicked")} // Example handler
        />

        {/* Navigation Tabs */}
       <div className="relative w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 bg-white rounded-2xl flex justify-center items-center overflow-x-auto">
  <NavigationTabs
    navigationTabs={navigationTabs}
    activeNavTab={activeNavTab}
    setActiveNavTab={setActiveNavTab}
  />
</div>

        {/* Dashboard Content */}
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default MainDashboard;
