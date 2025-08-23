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
import Header from '../../components/navigation/Header.jsx';
import NavigationTabs from "../../components/navigation/NavigationTabs.jsx";
import JobControlDashboard from '../../pages/Jobs/JobControlDashboard.jsx';
import CourseControlDashboard from '../../pages/Jobs/CourseControlDashboard.jsx';
import CardComponent from '../../components/cards/cardcomponents.jsx';
import Job from "../../assets/images/job.png";
import Course from "../../assets/images/Course.png";
import Content from "../../assets/images/Content.png";
import Posts from "../../assets/images/Post.png";

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
            statusColor: 'bg-red-100 text-black',
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
            statusColor: 'bg-blue-100 text-black',
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
            statusColor: 'bg-[#BEE16D] text-black',
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
            statusColor: 'bg-green-200 text-black',
            description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
        }
    ];

    // Initialize jobs state
    React.useEffect(() => {
        setJobs(initialJobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => handleReview(id)} className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleAnalytics(id)} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">Analytics</button>
                        <button onClick={() => handleEditPromotion(id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">Edit Promotion</button>
                        <button onClick={() => handleRemove(id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">Remove</button>
                    </div>
                );

            case 'Active':
                return (
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => handleReview(id)} className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handleAnalytics(id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">Analytics</button>
                        <button onClick={() => handleArchive(id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-gray-600 transition-colors">Archive</button>
                    </div>
                );

            case 'Pending':
                return (
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => handleReview(id)} className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handlePromote(id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">Promote</button>
                        <button onClick={() => handleReject(id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">Reject</button>
                    </div>
                );

            default:
                return (
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => handleReview(id)} className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handlePromote(id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">Promote</button>
                        <button onClick={() => handleRemove(id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">Remove</button>
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
        { title: 'Total Job Posts', value: '15,847', color: 'bg-blue-100 text-blue-800', image: Job },
        { title: 'Active Courses', value: '8,234', color: 'bg-green-100 text-green-800', image: Course },
        { title: 'Flagged Content', value: '342', color: 'bg-yellow-100 text-yellow-800', image: Content },
        { title: 'Promoted Posts', value: '1,425', color: 'bg-purple-100 text-purple-800', image: Posts }
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
      <div className="flex flex-col h-full bg-white">
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

    {/* Page Title */}
    <div className="px-4 sm:px-6 lg:px-8 py-4 text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B537D]">
            Job & Course Control
        </h1>
        <p className="text-[#0B537D] text-xs sm:text-sm lg:text-base mt-1">
            Manage job postings, course approvals, and content quality control
        </p>
    </div>

    {/* Stats Cards */}
    <div className="px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
                <CardComponent key={index} stat={stat} />
            ))}
        </div>
    </div>

    {/* Navigation Tabs */}
    <div className="relative w-full max-w-full sm:max-w-md md:max-w-md lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 bg-white rounded-2xl flex justify-center items-center overflow-x-auto">
          <NavigationTabs
            navigationTabs={navigationTabs}
            activeNavTab={activeNavTab}
            setActiveNavTab={setActiveNavTab}
          />
        </div>


    {/* Dashboard Content */}
    <div className="flex-1 px-2 sm:px-4 lg:px-6 mb-4 sm:mb-6">
        {renderDashboardContent()}
    </div>

    {/* Job Management Section */}
    <div className="px-4 sm:px-6 lg:px-8 mb-6">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search Jobs by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
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
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                >
                    <option>All Companies</option>
                    <option>TechCorp Solution</option>
                </select>
            </div>
        </div>

        {/* Bulk Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0B537D] hover:bg-[#094461] text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base" onClick={handleBulkPromote}>
                ⚡ Bulk Promote
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5B9821] hover:bg-[#4a7a1c] text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base" onClick={handleBulkApprove}>
                ✅ Bulk Approve
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF5F38] hover:bg-[#e54e31] text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base" onClick={handleBulkRemove}>
                ❌ Bulk Remove
            </button>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {jobs.map((job) => (
                <div key={job.id} className="bg-[#F6FAFF] rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm w-full">
                    {/* Job Header */}
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0">
                            <div className="text-gray-600 text-xs sm:text-sm mb-1 truncate">{job.company}</div>
                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg line-clamp-2">{job.title}</h3>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ml-2 ${job.statusColor}`}>
                            {job.status}
                        </span>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                        <div className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3 sm:w-4 sm:h-4" />{job.location}</div>
                        <div className="flex items-center gap-1 truncate"><Star className="w-3 h-3 sm:w-4 sm:h-4" />{job.salary}</div>
                        <div className="flex items-center gap-1 truncate"><Users className="w-3 h-3 sm:w-4 sm:h-4" />{job.experience}</div>
                        <div className="flex items-center gap-1 truncate"><Clock className="w-3 h-3 sm:w-4 sm:h-4" />{job.daysAgo}</div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                        {job.description}
                    </p>

                    {/* Actions */}
                    {renderActionButtons(job)}
                </div>
            ))}
        </div>
    </div>
</div>

    );
};

export default JobCourseControlDashboard;