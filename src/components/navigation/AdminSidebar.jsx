// import React from 'react';
// import { 
//   Home, 
//   Users, 
//   Shield, 
//   FileText, 
//   BarChart3, 
//   MessageSquare, 
//   Settings, 
//   User
// } from 'lucide-react';
// import { NavLink } from 'react-router-dom';
// import "../index.css"

// const AdminSidebar = () => {
//   const menuItems = [
//     { icon: Home, label: 'Dashboard', path: '/AdminDashboard' },
//     { icon: Users, label: 'Management', path: '/MainDashboard' },
//     { icon: Shield, label: 'Job & Course Control', path: '/Job&CourseControlDashboard' },
//     { icon: FileText, label: 'Business & Revenue Plans', path: '/BusinessRevenuePanelDashboard'},
//     { icon: BarChart3, label: 'Reports & Analytics Center', path: '/ReportsAnalytics' },
//     { icon: MessageSquare, label: 'Messaging & Campaigns', path: '/MessagingCampaigns' },
//     { icon: Settings, label: 'Form & Automation', path: '/FormAutomation' },
//     { icon: Settings, label: 'System Settings & Configuration', path: '/SystemSettings' },
//     { icon: User, label: 'Admin Tools & Logs', path: '/AdminTools' }
//   ];

//   return (
//     <div className="h-full w-64 bg-customBlue text-white fixed flex flex-col justify-between ">
//     <div>
//     <div className="p-2 sm:p-7 md:p-7 lg:p-7 xl:p-7 2xl:p-7 text-xs sm:text-md md:text-md lg:text-md xl:text-md 2xl-md font-bold border-b border-gray-700">
//       <span className="hidden sm:inline">JOBSAHI</span>
//     </div>
//     <nav className="flex flex-col mt-2 sm:mt-2 space-y-1 sm:space-y-1">
//       {menuItems.map((item, index) => (
//         <NavLink
//           key={index}
//           to={item.path}
//           className={({ isActive }) =>
//             `relative flex items-center gap-2 sm:gap-3 px-5 sm:px-5 md:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-xs rounded-xl overflow-hidden transition-all duration-300 ${
//               isActive
//                 ? 'font-semibold text-customBlue'
//                 : 'text-white'
//             }`
//           }
//         >
//           {({ isActive }) => (
//             <>
//               {isActive && (
//                 <div
//                  className="absolute left-1 sm:left-2 top-0 h-full w-full z-0 rounded-tl-full rounded-bl-full bg-[#ffffff] text-white clip-sidebar"
//                 />
//               )}
//               <div className="relative z-10 flex items-center gap-2 sm:gap-3">
//                 <item.icon size={16} className="sm:w-5 sm:h-5" />
//                 <span className="hidden sm:inline truncate">{item.label}</span>
//               </div>
//             </>
//           )}
//         </NavLink>
//       ))}
//     </nav>
//   </div>
//   <div className="w-full p-2 sm:p-3 md:p-4 text-xs text-blue-200">
//     <p className="hidden sm:block">Jobsahi job portal Admin dashboard @2025 All Rights Reserved</p>
//   </div>
//     </div>
//   );
// };

// export default AdminSidebar;
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Shield, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  User,
  Menu, 
  X 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Mobile/Tablet Top Bar */}
      <div className="sm:hidden bg-customBlue text-white px-3 py-3 fixed top-5 left-0 z-40 flex items-center justify-center">
      {/* Mobile/Tablet Toggle Button (separate, right side) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="sm:hidden fixed text-white"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
   </div>
      {/* Sidebar for Desktop */}
      <div className="hidden sm:flex h-full w-64 bg-customBlue text-white fixed flex-col justify-between">
        <div>
          <div className="p-8 font-bold border-b border-gray-700">
            JOBSAHI
          </div>
          <nav className="flex flex-col mt-2 space-y-0">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 px-5 py-3 text-sm rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'font-semibold text-customBlue bg-white'
                      : 'text-white'
                  }`
                }
              >
                <item.icon size={18} />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>
            <div className="w-64 px-2 py-60 text-xs text-blue-200">
          <p>Jobsahi job portal Admin dashboard ©2025</p>
        </div>
        </div>
      
      </div>

      {/* Sidebar Drawer for Mobile/Tablet */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-20 flex">
          <div className="w-full bg-customBlue text-white flex flex-col justify-between">
            <div>
              <div className="p-8 font-bold border-b border-gray-700">
                JOBSAHI
              </div>
              <nav className="flex flex-col mt-2 space-y-0">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => setIsOpen(false)} // close after clicking
                    className={({ isActive }) =>
                      `relative flex items-center gap-3 px-6 py-3 text-sm rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'font-semibold text-customBlue bg-white'
                          : 'text-white'
                      }`
                    }
                  >
                    <item.icon size={18} />
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                ))}
              </nav>
              <div className="w-full px-2 py-8 text-xs text-blue-200">
              <p>Jobsahi job portal Admin dashboard ©2025</p>
            </div>
            </div>
            
          </div>

          {/* Overlay background to close drawer */}
          <div 
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
