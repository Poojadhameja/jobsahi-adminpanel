// import React, { useState } from 'react';
// import {
//   Home,
//   Users,
//   Shield,
//   FileText,
//   BarChart3,
//   MessageSquare,
//   Settings,
//   User,
//   Menu,
//   X
// } from 'lucide-react';
// import { NavLink } from 'react-router-dom';

// const AdminSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

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
//     <>
//       {/* Mobile/Tablet Top Bar */}
//       <div className="sm:hidden bg-customBlue text-white px-3 py-3 fixed top-5 left-0 z-40 flex items-center justify-center">
//       {/* Mobile/Tablet Toggle Button (separate, right side) */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="sm:hidden fixed text-white"
//       >
//         {isOpen ? <X size={26} /> : <Menu size={26} />}
//       </button>
//    </div>
//       {/* Sidebar for Desktop */}
//       <div className="hidden sm:flex h-full w-64 bg-customBlue text-white fixed flex-col justify-between">
//         <div>
//           <div className="p-8 font-bold border-b border-gray-700">
//             JOBSAHI
//           </div>
//           <nav className="flex flex-col mt-2 space-y-0">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `relative flex items-center gap-2 px-5 py-3 text-sm rounded-xl transition-all duration-300 ${
//                     isActive
//                       ? 'font-semibold text-customBlue bg-white'
//                       : 'text-white'
//                   }`
//                 }
//               >
//                 <item.icon size={18} />
//                 <span className="truncate">{item.label}</span>
//               </NavLink>
//             ))}
//           </nav>
//             <div className="w-64 px-2 py-60 text-xs text-blue-200">
//           <p>Jobsahi job portal Admin dashboard ©2025</p>
//         </div>
//         </div>

//       </div>

//       {/* Sidebar Drawer for Mobile/Tablet */}
//       {isOpen && (
//         <div className="sm:hidden fixed inset-0 z-20 flex">
//           <div className="w-full bg-customBlue text-white flex flex-col justify-between">
//             <div>
//               <div className="p-8 font-bold border-b border-gray-700">
//                 JOBSAHI
//               </div>
//               <nav className="flex flex-col mt-2 space-y-0">
//                 {menuItems.map((item, index) => (
//                   <NavLink
//                     key={index}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)} // close after clicking
//                     className={({ isActive }) =>
//                       `relative flex items-center gap-3 px-6 py-3 text-sm rounded-xl transition-all duration-300 ${
//                         isActive
//                           ? 'font-semibold text-customBlue bg-white'
//                           : 'text-white'
//                       }`
//                     }
//                   >
//                     <item.icon size={18} />
//                     <span className="truncate">{item.label}</span>
//                   </NavLink>
//                 ))}
//               </nav>
//               <div className="w-full px-2 py-8 text-xs text-blue-200">
//               <p>Jobsahi job portal Admin dashboard ©2025</p>
//             </div>
//             </div>

//           </div>

//           {/* Overlay background to close drawer */}
//           <div
//             className="flex-1 bg-black bg-opacity-50"
//             onClick={() => setIsOpen(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AdminSidebar;

import React, { useState, useEffect } from "react";
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
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setIsOpen(true); // always open on tablet/desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/AdminDashboard" },
    { icon: Users, label: "Management", path: "/MainDashboard" },
    {
      icon: Shield,
      label: "Job & Course Control",
      path: "/Job&CourseControlDashboard",
    },
    {
      icon: FileText,
      label: "Business & Revenue Plans",
      path: "/BusinessRevenuePanelDashboard",
    },
    {
      icon: BarChart3,
      label: "Reports & Analytics Center",
      path: "/ReportsAnalytics",
    },
    {
      icon: MessageSquare,
      label: "Messaging & Campaigns",
      path: "/MessagingCampaigns",
    },
    { icon: Settings, label: "Form & Automation", path: "/FormAutomation" },
    {
      icon: Settings,
      label: "System Settings & Configuration",
      path: "/SystemSettings",
    },
    { icon: User, label: "Admin Tools & Logs", path: "/AdminTools" },
  ];

  return (
    <>
      {/* Toggle Button - Always visible on top left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-0 z-10 p-0 bg-customBlue text-white rounded-lg sm:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-customBlue text-white transition-transform duration-300 z-30 
        ${
          isOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full sm:translate-x-0 sm:w-20"
        }
        flex flex-col justify-between`}
      >
        <div>
          {/* Sidebar Header */}
          <div
            className={`p-4 font-bold border-b border-gray-700 
  ${isOpen ? "flex items-center justify-between" : "block text-center"}`}
          >
            <span>JOBSAHI</span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-white mt-2 ${isOpen ? "" : "block mx-auto"}`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col mt-2 space-y-0">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 px-5 py-3 text-sm rounded-xl transition-all duration-300 ${
                    isActive
                      ? "font-semibold text-customBlue bg-white"
                      : "text-white"
                  }`
                }
                onClick={() => isMobile && setIsOpen(false)} // auto-close only on mobile
              >
                <item.icon size={18} />
                <span
                  className={`truncate ${!isOpen && "hidden sm:inline-block"}`}
                >
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="w-full px-2 py-6 text-xs text-blue-200 text-center">
          <p>Jobsahi job portal Admin dashboard ©2025</p>
        </div>
      </div>

      {/* Overlay background for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
