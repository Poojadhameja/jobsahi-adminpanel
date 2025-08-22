/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
    Star
} from 'lucide-react';

import Job from "../../assets/images/job.png";
import Course from "../../assets/images/Course.png";
import Content from "../../assets/images/Content.png";
import Posts from "../../assets/images/Post.png";

const JobControlDashboard = () => {
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
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        <button onClick={() => handleReview(id)} className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 text-gray-600 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleAnalytics(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 transition-colors">Analytics</button>
                        <button onClick={() => handleEditPromotion(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors">Edit Promotion</button>
                        <button onClick={() => handleRemove(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-red-500 text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors">Remove</button>
                    </div>
                );

            case 'Active':
                return (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        <button onClick={() => handleReview(id)} className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 text-gray-600 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handleAnalytics(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors">Analytics</button>
                        <button onClick={() => handleArchive(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-red-500 text-white rounded text-xs sm:text-sm hover:bg-gray-600 transition-colors">Archive</button>
                    </div>
                );

            case 'Pending':
                return (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        <button onClick={() => handleReview(id)} className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 text-gray-600 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handlePromote(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors">Promote</button>
                        <button onClick={() => handleReject(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-red-500 text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors">Reject</button>
                    </div>
                );

            default:
                return (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        <button onClick={() => handleReview(id)} className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 text-gray-600 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors">Review</button>
                        <button onClick={() => handleApprove(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 transition-colors">Approve</button>
                        <button onClick={() => handlePromote(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors">Promote</button>
                        <button onClick={() => handleRemove(id)} className="px-2 py-1 sm:px-3 sm:py-1 bg-red-500 text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors">Remove</button>
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
        <></>
    );
};

export default JobControlDashboard;