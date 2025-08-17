import React, { useState } from 'react';
import { Search, Building2, MoreHorizontal, Eye, Check, X, Users, BookOpen, Award, MessageSquare, TrendingUp, BarChart3, CheckCircle, XCircle, ArrowLeft, Phone, MoreVertical, Paperclip, Link, Send } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Menu } from "@headlessui/react";

const InstituteManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
    const [localSearchQuery, setLocalSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    // Stats for institutes
    const [active, setActive] = useState("Verify / Approve Institute");

    // Sample data
    const sampleInstitutes = [
        { id: 1, name: 'Mumbai Tech College', students: 2500, courses: 25, established: '1995' },
        { id: 2, name: 'Delhi Engineering Institute', students: 1800, courses: 18, established: '2001' },
        { id: 3, name: 'Bangalore Skills Academy', students: 3200, courses: 32, established: '1988' }
    ];
    // Sample pending institutes for approval
    const pendingInstitutes = [
        {
            id: 1,
            name: 'Shri Technology Institute',
            email: 'technical.institute@email.com',
            location: 'Mumbai, Maharashtra',
            established: '2015',
            students: '2,500+',
            courses: 'Electrical',
            status: 'PENDING REVIEW'
        },
        {
            id: 2,
            name: 'Advanced Engineering College',
            email: 'info@aecollege.edu',
            location: 'Pune, Maharashtra',
            established: '2018',
            students: '1,800+',
            courses: 'Mechanical, Computer Science',
            status: 'PENDING REVIEW'
        },
        {
            id: 3,
            name: 'Digital Skills Academy',
            email: 'contact@digitalskills.in',
            location: 'Bangalore, Karnataka',
            established: '2020',
            students: '1,200+',
            courses: 'IT, Data Science',
            status: 'PENDING REVIEW'
        }
    ];

    const courseList = [
        { name: 'Electrician (Level 1)', category: 'Vocational', enrolled: 152, certificates: 'Active', status: 'Active' },
        { name: 'Computer Basics', category: 'Digital Skills', enrolled: 95, certificates: 'Inactive', status: 'Inactive' }
        // { name: 'Web Development', category: 'IT Skills', enrolled: 203, certificates: 'Active', status: 'Active' },
        // { name: 'Mobile Repair', category: 'Technical', enrolled: 78, certificates: 'Pending', status: 'Active' },
    ];

    const enrollmentIssues = [
        { course: 'Computer Basics', certificate: 95, status: 'View details' },
        { course: 'Computer Basics', certificate: 87, status: 'Inactive' }
        // { course: 'Web Development', certificate: 120, status: 'View details' },
        // { course: 'Mobile Repair', certificate: 45, status: 'Pending' },
    ];

    const enrollmentTrends = [
        { month: 'Feb', enrollments: 200 },
        { month: 'Feb', enrollments: 280 },
        { month: 'Mar', enrollments: 320 },
        { month: 'Apr', enrollments: 450 },
        { month: 'May', enrollments: 520 },
    ];

    const certificateData = [
        { month: 'J', certificates: 280 },
        { month: 'F', certificates: 320 },
        { month: 'M', certificates: 350 },
        { month: 'A', certificates: 380 },
        { month: 'M', certificates: 420 },
        { month: 'J', certificates: 280 },
    ];


    const handleLocalSearch = (e) => {
        setLocalSearchQuery(e.target.value);
    };


    const tabs = [
        "Verify / Approve Institute",
        "Course & Enrollment Monitoring",
        "Placement-Ready Students",
        "Certificate Issuance",
        "Message Specific Institute",
    ];

    const handleClick = (tab) => {
        setActive(tab);
        console.log("Clicked:", tab);
    };

    const handleInstituteAction = (action, instituteId) => {
        console.log(`${action} institute with ID: ${instituteId}`);
        // Add your logic here for approve/reject/view details
    };


    const handleInputChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'student') {
            setStudentData(prev => ({ ...prev, [name]: value }));
        } else if (type === 'notification') {
            setNotificationData(prev => ({ ...prev, [name]: value }));
        }
    };
    const [selectedContact, setSelectedContact] = useState({
        name: 'Yashu Mukhija',
        role: 'Electrician Apprentice',
        avatar: 'Y'
    });
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Contact list data
    const contactList = [
        {
            name: 'Yashu Mukhija',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: 'Fri',
            avatar: 'Y',
            active: false
        },
        {
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'P',
            active: true
        },
        {
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'P',
            active: false
        },
        {
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'P',
            active: false
        },
        {
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'P',
            active: false
        }, {
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'P',
            active: false
        }
    ];

    // Click handlers
    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        console.log('Selected contact:', contact.name);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            // Here you would typically send the message to your backend
            setNewMessage('');
            // You could also add the message to a messages array state
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleBackClick = () => {
        console.log('Back button clicked');
        // You could navigate back or clear selected contact
    };

    const handlePhoneClick = () => {
        console.log('Phone call to:', selectedContact.name);
        // Implement phone call functionality
        alert(`Calling ${selectedContact.name}...`);
    };

    const handleMoreClick = () => {
        console.log('More options clicked');
        // Show dropdown menu or more options
        alert('More options menu');
    };

    const handleAttachmentClick = () => {
        console.log('Attachment clicked');
        // Open file picker
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
    };

    const handleLinkClick = () => {
        console.log('Link button clicked');
        // Show link sharing options
        alert('Link sharing options');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        console.log('Searching for:', e.target.value);
    };

    // Filter contacts based on search term
    const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Function to render content based on active tab
    // Render content based on active tab
    const renderTabContent = () => {
        switch (active) {
            case "Verify / Approve Institute":
                return (
                    <div className="mt-10">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-500 rounded-full p-1 mr-3">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Pending Institute Approvals</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pendingInstitutes.map((institute) => (
                                <div key={institute.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-600 rounded-lg p-3 mr-4">
                                            <span className="text-white font-bold text-lg">ST</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{institute.name}</h3>
                                            <p className="text-gray-600 text-sm">{institute.email}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between">
                                            <span className="font-medium">Location:</span>
                                            <span className="text-gray-600">{institute.location}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Established:</span>
                                            <span className="text-gray-600">{institute.established}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Students:</span>
                                            <span className="text-gray-600">{institute.students}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Courses:</span>
                                            <span className="text-gray-600">{institute.courses}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                                            {institute.status}
                                        </span>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => console.log('View details:', institute.name)}
                                            className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                                        >
                                            <Eye className="w-4 h-4 inline mr-1" />
                                            View Details
                                        </button>

                                        <button
                                            onClick={() => console.log('Approve:', institute.id)}
                                            className="flex-1 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                                        >
                                            <Check className="w-4 h-4 inline mr-1" />
                                            Approve
                                        </button>

                                        <button
                                            onClick={() => console.log('Reject:', institute.id)}
                                            className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                                        >
                                            <X className="w-4 h-4 inline mr-1" />
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

    case "Course & Enrollment Monitoring":
    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                    <Check className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Course & enrollment</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Course List */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-base font-semibold mb-3">Course List</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-medium text-gray-700">Course Name</th>
                                        <th className="px-3 py-2 text-left font-medium text-gray-700">Category</th>
                                        <th className="px-3 py-2 text-left font-medium text-gray-700">Enrolled</th>
                                        <th className="px-3 py-2 text-left font-medium text-gray-700">Status</th>
                                        <th className="px-3 py-2 text-left font-medium text-gray-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-3 py-2">Electrician (Level 1)</td>
                                        <td className="px-3 py-2 text-gray-600">Vocational</td>
                                        <td className="px-3 py-2">152</td>
                                        <td className="px-3 py-2">
                                            <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-3 py-2">Computer Basics</td>
                                        <td className="px-3 py-2 text-gray-600">Digital Skills</td>
                                        <td className="px-3 py-2">95</td>
                                        <td className="px-3 py-2">
                                            <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-800">
                                                Inactive
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Enrollment Issues */}
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <h3 className="text-sm font-semibold mb-2">Enrollment Issues</h3>
                        <table className="w-full text-xs">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-2 py-1 text-left font-medium text-gray-700">Course</th>
                                    <th className="px-2 py-1 text-left font-medium text-gray-700">Certificate</th>
                                    <th className="px-2 py-1 text-left font-medium text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-2 py-1">Computer Basics</td>
                                    <td className="px-2 py-1">95</td>
                                    <td className="px-2 py-1">
                                        <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                            Viewdetails
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-2 py-1">Computer Basics</td>
                                    <td className="px-2 py-1">87</td>
                                    <td className="px-2 py-1">
                                        <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-800">
                                            Inactive
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Enrollment Trends */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-semibold">Enrollment Trends</h3>
                            <select className="text-xs border border-gray-300 rounded px-2 py-1">
                                <option>By Date</option>
                                <option>By Month</option>
                                <option>By Year</option>
                            </select>
                        </div>
                        <div className="h-44">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={enrollmentTrends}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 600]} />
                                    <Line type="monotone" dataKey="enrollments" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Certificate Issuance Status */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-base font-semibold mb-3">Certificate Issuance Status</h3>
                        <div className="h-44">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={certificateData}>
                                    <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 500]} />
                                    <Bar dataKey="certificates" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

            case "Placement-Ready Students":
                return (
                    <div className="mt-5">
                        {/* Header */}
                        <div className="flex items-center mb-6">
                            <div className="bg-green-500 rounded-full p-2 mr-3">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Placement Ready Student
                            </h2>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Course</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Course</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Placement Drive</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    {[
                                        { name: "Emily Wilson", course: "Computer Science", degree: "M.Sc.", date: "05 Mar, 2024", status: "Placed" },
                                        { name: "Daniel Brown", course: "Business Administration", degree: "MBA", date: "12 Feb, 2024", status: "Eligible" },
                                        { name: "Jessica Taylor", course: "Business Administration", degree: "MBA", date: "25 Jan, 2024", status: "Placed" },
                                        { name: "David Lee", course: "Data Science", degree: "M.Sc.", date: "08 Dec, 2023", status: "Eligible" },
                                        { name: "Sophia Martinez", course: "Data Science", degree: "M.Sc.", date: "15 Nov, 2023", status: "Placed" },
                                    ].map((student, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-gray-700">{student.course}</td>
                                            <td className="px-6 py-4 text-gray-700">{student.degree}</td>
                                            <td className="px-6 py-4 text-gray-700">{student.date}</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${student.status === "Placed"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-green-100 text-green-700"
                                                        }`}
                                                >
                                                    {student.status}
                                                </span>
                                            </td>
                                            {/* Action menu */}
                                            <td className="px-6 py-4 text-right">
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <Menu.Button className="p-2 rounded-full hover:bg-gray-100">
                                                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                                                    </Menu.Button>
                                                    <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? "bg-gray-100" : ""
                                                                            } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                                                                        onClick={() => alert(`Edit ${student.name}`)}
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? "bg-gray-100" : ""
                                                                            } block w-full text-left px-4 py-2 text-sm text-red-600`}
                                                                        onClick={() => alert(`Delete ${student.name}`)}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Menu>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case "Certificate Issuance":
                return (
                    <div className="mt-10">
                        {/* Header */}
                        <div className="flex items-center mb-6">
                            <span className="text-green-600 text-2xl mr-2">✅</span>
                            <h2 className="text-xl font-semibold text-gray-800">Certificate Issuance</h2>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-lg shadow border border-gray-200">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 text-left">
                                        <th className="px-6 py-3 font-medium text-gray-900">Student</th>
                                        <th className="px-6 py-3 font-medium text-gray-900">Course</th>
                                        <th className="px-6 py-3 font-medium text-gray-900">Completion Date</th>
                                        <th className="px-6 py-3 font-medium text-gray-900">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        {
                                            name: "Ravi Verma",
                                            institute: "SPI Tech Institute",
                                            course: "Data Science for Beginners",
                                            date: "March 8, 2024"
                                        },
                                        {
                                            name: "Priya Rao",
                                            institute: "Xaviers Institute",
                                            course: "Web Development Bootcamp",
                                            date: "March 4, 2024"
                                        },
                                        {
                                            name: "Ananya Das",
                                            institute: "National IT Academy",
                                            course: "Full-Stack Developer",
                                            date: "February 26, 2024"
                                        },
                                        {
                                            name: "Shrey Sen",
                                            institute: "Crescent Institute",
                                            course: "Data Science for Beginners",
                                            date: "February 20, 2024"
                                        },
                                        {
                                            name: "Brevo Sen",
                                            institute: "Crescent Institute",
                                            course: "Data Science for Beginners",
                                            date: "February 20, 2024"
                                        }
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{row.name}</div>
                                                <div className="text-gray-500 text-xs">{row.institute}</div>
                                            </td>
                                            <td className="px-6 py-4">{row.course}</td>
                                            <td className="px-6 py-4">{row.date}</td>
                                            <td className="px-6 py-4 flex items-center space-x-2">
                                                {/* Status Badge */}
                                                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Issued</span>

                                                {/* Dropdown Menu */}
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <Menu.Button className="p-1 rounded-full hover:bg-gray-100">
                                                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                                                    </Menu.Button>
                                                    <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                                                                    >
                                                                        View
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                                                                    >
                                                                        Download
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${active ? "bg-gray-100" : ""}`}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Menu>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case "Message Specific Institute":
                return (
                    <div className="mt-10 h-screen flex">
                        {/* Left Sidebar - Contact List */}
                        <div className="w-1/3 bg-white border-r border-gray-200">
                            {/* Search Bar */}
                            <div className="p-4 border-b border-gray-200">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Contact List */}
                            <div className="overflow-y-auto">
                                {filteredContacts.map((contact, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleContactClick(contact)}
                                        className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors ${contact.active ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                                            } ${selectedContact?.name === contact.name ? 'bg-gray-100' : ''}`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${contact.avatar === 'Y' ? 'bg-green-500' : 'bg-green-600'
                                            }`}>
                                            {contact.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-sm">{contact.name}</h4>
                                                    <p className="text-xs text-gray-500">{contact.role}</p>
                                                </div>
                                                <span className="text-xs text-gray-500">{contact.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">{contact.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Chat Area */}
                        <div className="flex-1 flex flex-col">
                            {/* Chat Header */}
                            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <ArrowLeft
                                        className="w-5 h-5 text-gray-600 mr-3 cursor-pointer hover:text-gray-800 transition-colors"
                                        onClick={handleBackClick}
                                    />
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${selectedContact?.avatar === 'Y' ? 'bg-green-500' : 'bg-green-600'
                                        }`}>
                                        {selectedContact?.avatar || 'Y'}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{selectedContact?.name || 'Select a contact'}</h3>
                                        <p className="text-sm text-gray-500">{selectedContact?.role || ''}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone
                                        className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                                        onClick={handlePhoneClick}
                                    />
                                    <MoreVertical
                                        className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
                                        onClick={handleMoreClick}
                                    />
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                                <div className="text-center mb-4">
                                    <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-lg">Today</span>
                                </div>

                                {/* Incoming Message */}
                                <div className="flex items-start mb-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2 ${selectedContact?.avatar === 'Y' ? 'bg-green-500' : 'bg-green-600'
                                        }`}>
                                        {selectedContact?.avatar || 'Y'}
                                    </div>
                                    <div className="max-w-xs">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm text-gray-800">Good Morning!</p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 ml-3">10:30 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-start mb-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2 ${selectedContact?.avatar === 'Y' ? 'bg-green-500' : 'bg-green-600'
                                        }`}>
                                        {selectedContact?.avatar || 'Y'}
                                    </div>
                                    <div className="max-w-xs">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm text-gray-800">
                                                Hello, I submitted my application for the Electrician Apprentice position
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 ml-3">10:30 AM</p>
                                    </div>
                                </div>

                                {/* Outgoing Message */}
                                <div className="flex justify-end mb-4">
                                    <div className="max-w-xs">
                                        <div className="bg-blue-500 text-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm">Good Morning!</p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
                                    </div>
                                </div>

                                <div className="flex justify-end mb-4">
                                    <div className="max-w-xs">
                                        <div className="bg-blue-500 text-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm">
                                                Thank you for your application.<br />
                                                We will review it and get back to you soon.
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
                                    </div>
                                </div>

                                {/* Incoming Message */}
                                <div className="flex items-start mb-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2 ${selectedContact?.avatar === 'Y' ? 'bg-green-500' : 'bg-green-600'
                                        }`}>
                                        {selectedContact?.avatar || 'Y'}
                                    </div>
                                    <div className="max-w-xs">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm text-gray-800">
                                                Thank you for considering my application. I look forward to hearing from you.
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 ml-3">10:30 AM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="bg-white border-t border-gray-200 p-4">
                                <div className="flex items-center space-x-3">
                                    <Paperclip
                                        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                                        onClick={handleAttachmentClick}
                                    />
                                    <Link
                                        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                                        onClick={handleLinkClick}
                                    />
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            placeholder="Type something..."
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <Send
                                        className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
                                        onClick={handleSendMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div className="mt-20 text-center text-gray-500">Select a tab to view content</div>;
        }
    };


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
            <div className="p-5 bg-white min-h-screen">

                <div className="absolute w-[1050px] h-[50px] flex space-x-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleClick(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
        ${active === tab
                                    ? "bg-[#3C6E91] text-white shadow-sm"
                                    : "bg-[#F6FAFF] text-gray-700 border border-gray-200 shadow-sm"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area */}
                <div className="max-w-8xl mx-auto p-6 m-20 bg-[#F6FAFF] min-h-screen ">
                    {renderTabContent()}
                </div>
            </div>



        </div>
    );
};

export default InstituteManagementDashboard;