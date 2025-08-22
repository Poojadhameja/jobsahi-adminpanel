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
    {
      id: 1,
      name: "Tech Corp",
      contact: "hr@techcorp.com",
      openings: 15,
      location: "Mumbai",
    },
    {
      id: 2,
      name: "Innovation Labs",
      contact: "jobs@innovation.com",
      openings: 8,
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Digital Solutions",
      contact: "careers@digital.com",
      openings: 12,
      location: "Delhi",
    },
  ];

  // Export CSV
  const handleExportData = () => {
    const headers = [
      "ID",
      "Company Name",
      "Contact",
      "Open Positions",
      "Location",
    ];
    const csvContent = [
      headers.join(","),
      ...sampleEmployers.map((e) =>
        [e.id, e.name, e.contact, e.openings, e.location].join(",")
      ),
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
    {
      id: "approve-reject",
      label: "Approve/Reject",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      id: "job-tracking",
      label: "Job Tracking",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "payments",
      label: "Payments",
      icon: <CreditCard className="w-4 h-4" />,
    },
    { id: "ratings", label: "Ratings", icon: <Star className="w-4 h-4" /> },
    {
      id: "resume-usage",
      label: "Resume Usage",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "fraud-control",
      label: "Fraud Control",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  // Stats
  const statsData = [
    {
      title: "Total Employers",
      count: "1234",
      text: "+5% from last month",
      image: Student1,
    },
    {
      title: "Pending Approvals",
      count: "23",
      text: "+3% from last month",
      image: Student1,
    },
    {
      title: "Active Jobs",
      count: "5,678",
      text: "+8% from last month",
      image: Student1,
    },
    {
      title: "Monthly Revenue",
      count: "$4,567",
      text: "+10% from last month",
      image: Student1,
    },
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
    setApplications((apps) =>
      apps.map((a) => (a.id === id ? { ...a, status: "approved" } : a))
    );
  };

  const handleReject = (id) => {
    setApplications((apps) =>
      apps.map((a) => (a.id === id ? { ...a, status: "rejected" } : a))
    );
  };

  const handleReview = (id) => {
    console.log(`Reviewing application ${id}`);
  };

  return (
    <div className="p-3 sm:p-6 relative">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0B537D] mb-2">
          Employer Management
        </h1>
        <p className="text-[#0B537D] text-xs sm:text-sm">
          Manage employer partnerships, job postings, and recruitment activities
        </p>
      </div>

      {/* Export Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleExportData}
          className="border-2 border-[#5C9A24] flex items-center rounded-lg px-3 sm:px-4 py-2 transition-colors duration-200 bg-white font-medium text-xs sm:text-sm text-[#4a8020] hover:bg-gray-50"
        >
          <Download className="mr-2" size={14} style={{ color: "#4a8020" }} />
          Export Data
        </button>
      </div>

      {/* Stats Section */}
      <div className="p-2 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((stat, index) => (
              <CardComponent key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="max-w-7xl mx-auto p-3 sm:p-6 mt-8 bg-[#F6FAFF] rounded-lg">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Pending Recruiter Approvals
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Review and approve new employer registrations
                </p>
              </div>
            </div>

            {/* Status Badge & Dropdown */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-200 text-[#5C9A24] rounded-full text-xs sm:text-sm font-medium">
                {applications.filter((a) => a.status === "pending").length}{" "}
                Pending
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMenu}
                  className="bg-[#0B537D] hover:bg-[#094a6d] text-white p-2 sm:p-3 rounded-lg shadow-lg transition-colors"
                >
                  <Menu size={18} />
                </button>
                {isOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 sm:w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#0B537D] text-gray-700 hover:text-white transition-colors flex items-center space-x-3 sm:space-x-4 border-b border-gray-100 last:border-b-0 group"
                      >
                        <div className="text-[#0B537D] group-hover:text-white">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-xs sm:text-sm">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                        {app.companyName}
                      </h2>
                      <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        {app.contactPerson}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm mb-3">
                        <span className="hover:text-blue-600 cursor-pointer break-all">
                          {app.email}
                        </span>
                        <span>{app.phone}</span>
                        <span className="hover:text-blue-600 cursor-pointer break-all">
                          {app.website}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                        <span className="px-2 sm:px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                          {app.industry}
                        </span>
                        <span className="px-2 sm:px-3 py-1 bg-[#F6FAFF] text-blue-700 rounded-full text-xs sm:text-sm">
                          {app.employeeCount}
                        </span>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Applied: {app.appliedDate}
                        </span>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm mb-2 font-medium">
                        Documents submitted:
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {app.documents.map((doc, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-green-50 text-green-700 rounded-lg text-xs sm:text-sm border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
                          >
                            <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-row lg:flex-col gap-2">
                    <button
                      onClick={() => handleReview(app.id)}
                      className="flex items-center gap-2 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 min-w-[90px] sm:min-w-[120px] justify-center text-xs sm:text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Review
                    </button>
                    <button
                      onClick={() => handleApprove(app.id)}
                      disabled={app.status !== "pending"}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg min-w-[90px] sm:min-w-[120px] justify-center text-xs sm:text-sm ${
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
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg min-w-[90px] sm:min-w-[120px] justify-center text-xs sm:text-sm ${
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
            ))}
          </div>

          {/* Empty State */}
          {applications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                No pending applications
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                All recruiter applications have been processed.
              </p>
            </div>
          )}

          {/* Selected Menu Item */}
          {selectedItem && (
            <div className="fixed bottom-4 right-4 p-3 sm:p-4 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 max-w-xs sm:max-w-sm">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                Navigation:
              </h4>
              <div className="flex items-center space-x-2 sm:space-x-3 text-blue-600">
                {selectedItem.icon}
                <span className="font-medium text-xs sm:text-sm">
                  {selectedItem.label}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerManagementDashboard;
