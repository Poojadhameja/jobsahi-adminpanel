// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Building,
  ToggleLeft
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import StatsCard from '../../components/cards/cardcomponents.jsx';
import Header from '../../components/navigation/Header.jsx';// Import the Header component

const AdminDashboard = () => {
  const statsData = [
    {
      title: 'Total Students',
      count: '15,847',
      icon: GraduationCap,
      borderColor: 'border-l-green-500',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      title: 'Applied Job',
      count: '2,456',
      icon: Briefcase,
      borderColor: 'border-l-teal-500',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      title: 'Interview Job',
      count: '342',
      icon: Building,
      borderColor: 'border-l-orange-500',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      title: 'Active Jobs',
      count: '23,891',
      icon: ToggleLeft,
      borderColor: 'border-l-blue-500',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600'
    }
  ];

  // Sample data for charts
  const applicationData = [
    { month: 'Jan', applications: 1500 },
    { month: 'Feb', applications: 1900 },
    { month: 'Mar', applications: 1600 },
    { month: 'Apr', applications: 1500 },
    { month: 'May', applications: 2100 },
    { month: 'Jun', applications: 3100 }
  ];

  const skillsData = [
    { name: 'JavaScript', value: 30, color: '#3B82F6' },
    { name: 'Python', value: 20, color: '#8B5CF6' },
    { name: 'Java', value: 15, color: '#10B981' },
    { name: 'React', value: 15, color: '#F59E0B' },
    { name: 'Node.js', value: 10, color: '#EF4444' },
    { name: 'Others', value: 10, color: '#A78BFA' }
  ];

  const funnelData = [
    {
      count: '8.5K',
      title: 'Applications',
      subtitle: 'Ready for placement',
      bgColor: 'bg-green-500',
      lightBg: 'bg-green-50'
    },
    {
      count: '3.2K',
      title: 'Interviews',
      subtitle: 'Shortlisted candidates',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50'
    },
    {
      count: '1.6K',
      title: 'Offers',
      subtitle: 'Job offers extended',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-50'
    },
    {
      count: '1.2K',
      title: 'Hired',
      subtitle: 'Successfully placed',
      bgColor: 'bg-red-500',
      lightBg: 'bg-red-50'
    }
  ];

  // Handler functions for header interactions
  const handleSearch = (e) => {
    console.log('Search:', e.target.value);
    // Add your search logic here
  };

  const handleNotificationClick = () => {
    console.log('Notification clicked');
    // Add your notification logic here
  };

  const handleUserClick = () => {
    console.log('User profile clicked');
    // Add your user profile logic here
  };

  return (
    <div className="min-h-screen w-full max-w-screen-full bg-white ">
      {/* Header Component */}
      <Header
        placeholder="Search by name, position"
        userRole="Admin"
        showNotification={true}
        onSearch={handleSearch}
        onNotificationClick={handleNotificationClick}
        onUserClick={handleUserClick}
        onDropdownClick={() => console.log('Dropdown clicked')} // Example handler
      />

      {/* Dashboard Content */}
      <main className="px-3 py-4 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
        {/* Dashboard Overview Header */}
        <div className="mb-8 text-center border border-gray-300 rounded-lg p-6 bg-[#F6FAFF]">
          <h2 className="text-lg font-semibold text-[#0B537D] mb-2">Dashboard Overview</h2>
          <p className="text-[#0B537D]">Monitor your platform's key metrics and performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Placement Success Funnel */}
       <div className="bg-[#F6FAFF] p-6 rounded-lg shadow-sm border mb-8">
          <h3 className="text-md font-semibold text-gray-900 mb-6">Placement Success Funnel</h3>
          <div className="grid grid-cols-4 md:grid-cols-4 md:text-xs gap-6">
            {funnelData.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-md">{item.count}</span>
                </div>
                <div>
                  <p className="text-gray-900 text-xs mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-9">
          {/* Applications Chart */}
          <div className="bg-[#F6FAFF] p-4 sm:p-6 rounded-lg shadow-sm border">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
              Applications Trend (Last 6 Months)
            </h3>
            <ResponsiveContainer width="100%" height={200} className="sm:h-[250px]">
              <AreaChart data={applicationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0B537D" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0B537D" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  className="text-xs sm:text-sm"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  domain={[0, 4000]}
                  ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]}
                  className="text-xs sm:text-sm"
                />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '0.875rem'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="applications"
                  stroke="#0B537D"
                  strokeWidth={2}
                  fill="url(#colorApplications)"
                  dot={{ fill: '#0B537D', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: '#0B537D' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Distribution */}
          <div className="bg-[#F6FAFF] p-4 sm:p-6 rounded-lg shadow-sm border">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
              Top Skills in Demand
            </h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  className="sm:inner-radius-[70px] sm:outer-radius-[110px]"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name) => [`${value}`, name]}
                  labelFormatter={() => ''}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '0.75rem',
                    padding: '6px 10px',
                  }}
                  itemStyle={{
                    color: 'white',
                    fontSize: '0.75rem',
                  }}
                  cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                  className="sm:text-sm"
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend under chart */}
            <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center text-xs sm:text-sm text-gray-700">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2 flex-shrink-0"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <span className="truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;