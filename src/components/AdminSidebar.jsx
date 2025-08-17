import React from 'react';
import { 
  Home, 
  Users, 
  Shield, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  User
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import "../index.css"

const AdminSidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/AdminDashboard' },
    { icon: Users, label: 'Management', path: '/MainDashboard' },
    { icon: Shield, label: 'Job & Course Control', path: '/Job&CourseControlDashboard' },
    { icon: FileText, label: 'Business & Revenue Plans', path: '/BusinessRevenuePanelDashboard'},
    { icon: BarChart3, label: 'Reports & Analytics Center', path: '/ReportsAnalytics' },
    { icon: MessageSquare, label: 'Messaging & Campaigns', path: '/MessagingCampaigns' },
    { icon: Settings, label: 'Form & Automation', path: '/FormAutomation' },
    { icon: Settings, label: 'System Settings & Configuration', path: '/SystemSettings' },
    { icon: User, label: 'Admin Tools & Logs', path: '/AdminTools' }
  ];

  return (
    <div className="h-full w-64 bg-customBlue text-white fixed flex flex-col justify-between">
      <div>
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          JOBSAHI
        </div>
        <nav className="flex flex-col mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-6 py-3 text-sm rounded-xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'font-semibold text-customBlue'
                    : 'text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div
                     className="absolute left-2 top-0 h-full w-full z-0 rounded-tl-full rounded-bl-full bg-[#ffffff] text-white clip-sidebar"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="w-full p-4 text-xs text-blue-200">
        <p>Jobsahi job portal Admin dashboard @2025 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default AdminSidebar;