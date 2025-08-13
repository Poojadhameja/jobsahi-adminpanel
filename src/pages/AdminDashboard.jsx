import React, { useState } from 'react';
import { 
  GraduationCap,
  Briefcase,
  Building, 
  ToggleLeft
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import StatsCard from '../components/cardcomponents.jsx';
import Header from '../components/Header.jsx'; // Import the Header component

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
    <div className="min-h-screen bg-gray-50">
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
      <main className="p-6">
        {/* Dashboard Overview Header */}
        <div className="mb-8 text-center  border-blue-500 rounded-lg p-6 bg-blue-50/30">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Dashboard Overview</h2>
          <p className="text-blue-600/80">Monitor your platform's key metrics and performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Placement Success Funnel */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Placement Success Funnel</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {funnelData.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-lg">{item.count}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-9">
          {/* Applications Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Applications Trend (Last 6 Months)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={applicationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  domain={[0, 4000]}
                  ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="applications"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fill="url(#colorApplications)"
                  dot={{ fill: '#8B5CF6', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: '#8B5CF6' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Skills in Demand</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name) => [`${value}`, name]}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '0.85rem',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend under chart */}
            <div className="mt-4 flex flex-wrap gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  {skill.name}
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