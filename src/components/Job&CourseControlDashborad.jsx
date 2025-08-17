import React, { useState } from 'react';
import {
    Home,
    Users,
    Briefcase,
    Settings,
    MessageSquare,
    FileText,
    BarChart3,
    Search,
    Bell,
    Plus,
    Eye,
    Edit,
    Trash2,
    Calendar,
    MapPin,
    Clock,
    Building2,
    Star,
    X
} from 'lucide-react';
import Header from './Header.jsx';
import NavigationTabs from "./NavigationTabs.jsx";
import JobControlDashboard from '../pages/JobControlDashboard.jsx';
import CourseControlDashboard from '../pages/CourseControlDashboard.jsx';
import CardComponent from './cardcomponents.jsx';
import Job from "../../src/assets/images/job.png";
import Course from "../../src/assets/images/Course.png";
import Content from "../../src/assets/images/Content.png";
import Posts from "../../src/assets/images/Post.png";

const JobCourseControlDashboard = () => {
    const [activeNavTab, setActiveNavTab] = useState('Job');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [companyFilter, setCompanyFilter] = useState('All Companies');
    const [jobs, setJobs] = useState([]);

    const initialJobs = [
        {
            id: 1,
            title: 'APPRENTICE TRAINEE',
            company: 'TechCorp Solution',
            location: 'Kochi, India',
            salary: '₹12-18 LPA',
            experience: '0-5 openings',
            daysAgo: '2 days ago',
            status: 'Flagged',
            statusColor: 'bg-red-100 text-red-600',
            description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
        },
        {
            id: 2,
            title: 'APPRENTICE TRAINEE',
            company: 'TechCorp Solution',
            location: 'Pune Maharashtra',
            salary: '₹12-18 LPA',
            experience: '5 openings',
            daysAgo: '2 days ago',
            status: 'Promoted',
            statusColor: 'bg-blue-100 text-blue-600',
            description: 'We are hiring ITI Electrical pass-outs to assist in wiring, conduit installation, panel board setup, and electrical fault diagnosis. Candidates must have basic knowledge of...'
        },
        {
            id: 3,
            title: 'APPRENTICE TRAINEE',
            company: 'TechCorp Solution',
            location: 'Kochi, India',
            salary: '₹15-18 LPA',
            experience: '0-5 openings',
            daysAgo: '2 days ago',
            status: 'Pending',
            statusColor: 'bg-yellow-100 text-yellow-600',
            description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
        },
        {
            id: 4,
            title: 'APPRENTICE TRAINEE',
            company: 'TechCorp Solution',
            location: 'Kochi, India',
            salary: '₹12-18 LPA',
            experience: '0-5 openings',
            daysAgo: '2 days ago',
            status: 'Active',
            statusColor: 'bg-green-100 text-green-600',
            description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
        }
    ];

    // Initialize jobs state
    React.useEffect(() => {
        setJobs(initialJobs);
    }, []);

    // Button handlers
    const handleReview = (jobId) => {
        alert(`Reviewing job with ID: ${jobId}`);
    };

    const handleApprove = (jobId) => {
        setJobs(prevJobs =>
            prevJobs.map(job =>
                job.id === jobId
                    ? { ...job, status: 'Active', statusColor: 'bg-green-100 text-green-600' }
                    : job
            )
        );
    };

    const handleReject = (jobId) => {
        setJobs(prevJobs =>
            prevJobs.map(job =>
                job.id === jobId
                    ? { ...job, status: 'Rejected', statusColor: 'bg-red-100 text-red-600' }
                    : job
            )
        );
    };

    const handlePromote = (jobId) => {
        setJobs(prevJobs =>
            prevJobs.map(job =>
                job.id === jobId
                    ? { ...job, status: 'Promoted', statusColor: 'bg-blue-100 text-blue-600' }
                    : job
            )
        );
    };

    const handleEditPromotion = (jobId) => {
        alert(`Editing promotion for job with ID: ${jobId}`);
    };

    const handleAnalytics = (jobId) => {
        alert(`Viewing analytics for job with ID: ${jobId}`);
    };

    const handleRemove = (jobId) => {
        if (window.confirm('Are you sure you want to remove this job?')) {
            setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
        }
    };

    const handleArchive = (jobId) => {
        if (window.confirm('Are you sure you want to archive this job?')) {
            setJobs(prevJobs =>
                prevJobs.map(job =>
                    job.id === jobId
                        ? { ...job, status: 'Archived', statusColor: 'bg-gray-100 text-gray-600' }
                        : job
                )
            );
        }
    };

    // Function to render action buttons based on status
    const renderActionButtons = (job) => {
        const { id, status } = job;

        switch (status) {
            case 'Promoted':
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleReview(id)}
                            className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors"
                        >
                            Review
                        </button>
                        <button
                            onClick={() => handleAnalytics(id)}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                        >
                            Analytics
                        </button>
                        <button
                            onClick={() => handleEditPromotion(id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                            Edit Promotion
                        </button>
                        <button
                            onClick={() => handleRemove(id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                );

            case 'Active':
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleReview(id)}
                            className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors"
                        >
                            Review
                        </button>
                        <button
                            onClick={() => handleApprove(id)}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handleAnalytics(id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                            Analytics
                        </button>
                        <button
                            onClick={() => handleArchive(id)}
                            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
                        >
                            Archive
                        </button>
                    </div>
                );

            case 'Pending':
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleReview(id)}
                            className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors"
                        >
                            Review
                        </button>
                        <button
                            onClick={() => handleApprove(id)}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handlePromote(id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                            Promote
                        </button>
                        <button
                            onClick={() => handleReject(id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                        >
                            Reject
                        </button>
                    </div>
                );

            default:
                // For Flagged, Rejected, or any other status
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleReview(id)}
                            className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors"
                        >
                            Review
                        </button>
                        <button
                            onClick={() => handleApprove(id)}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handlePromote(id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                            Promote
                        </button>
                        <button
                            onClick={() => handleRemove(id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                );
        }
    };

    // Navigation tabs configuration
    const navigationTabs = [
        {
            id: 'Job',
            label: 'Job Posting Control',
            icon: Users,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            activeBgColor: 'bg-green-500',
            activeIconColor: 'text-white'
        },
        {
            id: 'Course',
            label: 'Course Oversight',
            icon: Briefcase,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            activeBgColor: 'bg-blue-500',
            activeIconColor: 'text-white'
        }
    ];

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
    const handleBulkPromote = () => {
        console.log('Bulk Promote clicked');
        // Add your bulk promote logic here
    };

    const handleBulkApprove = () => {
        console.log('Bulk Approve clicked');
        // Add your bulk approve logic here
    };

    const handleBulkRemove = () => {
        console.log('Bulk Remove clicked');
        // Add your bulk remove logic here
    };

    const stats = [
        { title: 'Total Jobs', value: '15,847', color: 'bg-blue-100 text-blue-800', image: Job },
        { title: 'Active Jobs', value: '8,234', color: 'bg-green-100 text-green-800', image: Course },
        { title: 'Pending Reviews', value: '342', color: 'bg-yellow-100 text-yellow-800', image: Content },
        { title: 'Total Users', value: '1,425', color: 'bg-purple-100 text-purple-800', image: Posts }
    ];

    // Render the appropriate dashboard component based on active tab
    const renderDashboardContent = () => {
        switch (activeNavTab) {
            case 'Job':
                return <JobControlDashboard searchQuery={searchQuery} />;
            case 'Course':
                return <CourseControlDashboard searchQuery={searchQuery} />;
            default:
                return <JobControlDashboard searchQuery={searchQuery} />;
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
                    onDropdownClick={() => console.log('Dropdown clicked')}
                />
                <div className="flex-1 overflow-hidden">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">
                            Job & Course Control
                        </h1>
                        <p className="text-[#0B537D] text-center text-sm">
                            Manage job postings, course approvals, and content quality control
                        </p>
                    </div>
                </div>
                {/* Stats Cards */}
                <div className="p-2 bg-white min-h-screen">
                    <div className="max-w-8xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <CardComponent key={index} stat={stat} />
                            ))}
                        </div>
                    </div>
                    {/* Navigation Tabs */}
                    <div className="relative px-6 py-6 bg-white rounded-2xl flex justify-center items-center">
                        <NavigationTabs
                            navigationTabs={navigationTabs}
                            activeNavTab={activeNavTab}
                            setActiveNavTab={setActiveNavTab}
                        />
                    </div>
                    {/* Dashboard Content */}
                    {renderDashboardContent()}
                    <div className="w-full max-w-6xl mx-auto bg-[#F6FAFF] border border-[#F6FAFF] rounded-lg p-6">
                        {/* Header */}
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-purple-600 rounded mr-3 flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-xl font-semibold text-gray-800">Job Posting Management</h1>
                        </div>

                        {/* Search and Filter Bar */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search Jobs by title"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Urgent</option>
                                <option>Promoted</option>
                            </select>

                            <select
                                value={companyFilter}
                                onChange={(e) => setCompanyFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>All Companies</option>
                                <option>TechCorp Solution</option>
                            </select>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-6">
                            <button
                                className="bg-[#0B537D] hover:bg-[#094461] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                onClick={handleBulkPromote}
                            >
                                ⚡ Bulk Promote
                            </button>

                            <button
                                className="bg-[#5B9821] hover:bg-[#4a7a1c] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                onClick={handleBulkApprove}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Bulk Approve
                            </button>

                            <button
                                className="bg-[#FF5F38] hover:bg-[#e54e31] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                onClick={handleBulkRemove}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Bulk Remove
                            </button>
                        </div>

                        {/* Job Listings Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {jobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                                    {/* Job Header */}
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="text-gray-600 text-sm mb-1">{job.company}</div>
                                            <h3 className="font-semibold text-gray-800 text-lg">{job.title}</h3>
                                        </div>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${job.statusColor}`}>
                                            {job.status}
                                        </span>
                                    </div>

                                    {/* Job Details */}
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4" />
                                            {job.salary}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {job.experience}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.daysAgo}
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                        {job.description}
                                    </p>

                                    {/* Dynamic Action Buttons */}
                                    {renderActionButtons(job)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCourseControlDashboard;