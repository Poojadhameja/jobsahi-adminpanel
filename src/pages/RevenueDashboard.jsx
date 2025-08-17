import React, { useState } from 'react';
import {
    Home,
    Users,
    FileText,
    DollarSign,
    BarChart3,
    MessageSquare,
    Bell,
    Settings,
    Search,
    User,
    ChevronDown
} from 'lucide-react';
import CardComponent from '../components/cardcomponents.jsx';
const RevenueDashboard = () => {
    const revenueCards = [
        {
            title: 'Total Revenue',
            amount: '₹2,50,000',
            text: '+12% from last month',
            color: 'bg-blue-50',
            iconColor: 'text-blue-500'
        },
        {
            title: 'Employer Revenue',
            amount: '₹1,50,000',
            text: '+5.5% from last month',
            color: 'bg-green-50',
            iconColor: 'text-green-500'
        },
        {
            title: 'Institute Revenue',
            amount: '₹50,000',
            text: '+55.7% from last month',
            color: 'bg-purple-50',
            iconColor: 'text-purple-500'
        },
        {
            title: 'Student Revenue',
            amount: '₹20,000',
            text: '+2.2% from last month',
            color: 'bg-orange-50',
            iconColor: 'text-orange-500'
        }
    ];

    const analyticsData = [
        { label: 'Recently', value: '₹50,000' },
        { label: 'Today', value: '₹40,000' },
        { label: 'Wallets', value: '₹16,000' }
    ];
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Main Dashboard Content */}
                <div className="flex-1 p-6 bg-white">
                    {/* Filters */}
                    <div className="mb-8 bg-[#F6FAFF] rounded-lg p-6 border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters & Analytics</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Date Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 3 months</option>
                                    <option>Custom range</option>
                                </select>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>All Methods</option>
                                    <option>Razorpay</option>
                                    <option>Stripe</option>
                                    <option>Wallet</option>
                                </select>
                            </div>

                            {/* User Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                    <option>Select user type</option>
                                    <option>Student</option>
                                    <option>Employer</option>
                                    <option>Institute</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Cards */}
                    <div className="mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {revenueCards.map((stat, index) => (
                                <CardComponent key={index} stat={stat} />
                            ))}
                        </div>
                    </div>

                    {/* Analytics Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Payment Method Analytics */}
                        <div className="lg:col-span-3 bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Payment Method Analytics</h3>
                            <p className="text-sm text-gray-600 mb-8">Revenue breakdown by payment methods</p>

                            <div className="space-y-6">
                                {analyticsData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-blue-500' :
                                                index === 1 ? 'bg-purple-500' : 'bg-green-500'
                                                }`}></div>
                                            <span className="text-base font-medium text-gray-900">{item.label}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                                            <div className="text-sm text-gray-500">{item.percentage}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RevenueDashboard;