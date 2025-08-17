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
const CourseControlDashboard = () => {
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
                status: 'Urgent',
                statusColor: 'bg-red-100 text-red-600',
                description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
            },
            {
                id: 2,
                title: 'APPRENTICE TRAINEE',
                company: 'TechCorp Solution',
                location: 'Kochi, India',
                salary: '₹12-18 LPA',
                experience: '0-5 openings',
                daysAgo: '2 days ago',
                status: 'Promoted',
                statusColor: 'bg-blue-100 text-blue-600',
                description: 'We are hiring IT technician trainees and the student must conduct installation, planned board change, and electrical fault diagnosis. Candidates must have basic knowledge of...'
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
            // alert(`Job ${jobId} approved and status changed to Active`);
        };
    
        const handlePromote = (jobId) => {
            setJobs(prevJobs =>
                prevJobs.map(job =>
                    job.id === jobId
                        ? { ...job, status: 'Promoted', statusColor: 'bg-blue-100 text-blue-600' }
                        : job
                )
            );
            // alert(`Job ${jobId} promoted`);
        };
    
        const handleRemove = (jobId) => {
            if (window.confirm('Are you sure you want to remove this job?')) {
                setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
                // alert(`Job ${jobId} removed`);
            }
        };

    return (
        <></>
    );

}
export default CourseControlDashboard;