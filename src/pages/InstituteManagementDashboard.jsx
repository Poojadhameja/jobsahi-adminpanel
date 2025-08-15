import React, { useState } from 'react';
import { Search, Building2, ChevronDown } from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
import ActionButtons from '../components/ActionButtons.jsx';
import SearchGradient from "../../src/assets/icons/search-gradient.png";

const InstituteManagementDashboard = ({ searchQuery: globalSearchQuery }) => {
    const [localSearchQuery, setLocalSearchQuery] = useState('');
   const [activeTab, setActiveTab] = useState(0);



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
    { title: 'Verify / Approve Institute' },
    { title: 'Course & Enrollment Monitoring' },
    { title: 'Placement - Ready Students' },
    { title: 'Certificate Issuance' },
    { title: 'Message Specific Institute' }
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
            <div className="p-3 bg-white min-h-full">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsData.map((stat, index) => (
                            <CardComponent key={index} stat={stat} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstituteManagementDashboard;