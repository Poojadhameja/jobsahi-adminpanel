import React, { useState } from 'react';
import { Users, Briefcase, Building2, Plus, BarChart3 } from 'lucide-react';
import Header from '../components/Header.jsx';
import NavigationTabs from "../components/NavigationTabs.jsx";
import RevenueDashboard from "../pages/RevenueDashboard.jsx";

const BusinessRevenuePanelDashboard = () => {
    const [activeNavTab, setActiveNavTab] = useState('student');
    const [searchQuery, setSearchQuery] = useState('');

    const navigationTabs = [
        {
            id: 'revenue',
            label: 'Revenue Dashboard',
            icon: Users,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            activeBgColor: 'bg-green-500',
            activeIconColor: 'text-white'
        },
        {
            id: 'orders',
            label: 'Order history & Logs',
            icon: Plus,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            activeBgColor: 'bg-green-500',
            activeIconColor: 'text-white'
        },
        {
            id: 'subscription',
            label: 'Subscription Plans',
            icon: BarChart3,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            activeBgColor: 'bg-green-500',
            activeIconColor: 'text-white'
        },
        {
            id: 'featured',
            label: 'Featured Content',
            icon: BarChart3,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            activeBgColor: 'bg-green-500',
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

    // Render the appropriate dashboard component based on active tab
    const renderDashboardContent = () => {
        switch (activeNavTab) {
            case 'revenue':
                return <RevenueDashboard searchQuery={searchQuery} />;
            //   case 'employer':
            //     return <EmployerManagementDashboard searchQuery={searchQuery} />;
            //   case 'institute':
            //     return <InstituteManagementDashboard searchQuery={searchQuery} />;
            default:
                return <RevenueDashboard searchQuery={searchQuery} />;
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
                {/* Page Title */}
                <div className="px-6 py-4 bg-white">
                    <h1 className="text-2xl font-bold text-[#0B537D] mb-2 text-center">Business & Revenue Panel</h1>
                    <p className="text-[#0B537D] text-center text-sm">Manage your revenue streams, subscriptions, and featured content</p>
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
            </div>
        </div>
    );
};

export default BusinessRevenuePanelDashboard;