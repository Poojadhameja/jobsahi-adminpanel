import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './components/navigation/AdminSidebar.jsx';
import AdminDashboard from './pages/Dashboard/AdminDashboard.jsx';
import MainDashboard from './pages/Dashboard/MainDashboard.jsx';
import JobCourseControlDashboard from './pages/Dashboard/Job&CourseControlDashborad.jsx';
import BusinessRevenuePanelDashboard from './pages/Dashboard/BusinessRevenuePanelDashboard.jsx';
import ReportsAnalytics from './pages/ReportsAnalytics/ReportsAnalytics.jsx';
import MessagingCampaigns from './pages/Messaging/MessagingCampaigns.jsx';
import FormAutomation from './pages/Tools/FormAutomation.jsx';
import SystemSettings from './pages/Settings/SystemSettings.jsx';
import AdminTools from './pages/Tools/AdminTools.jsx';
// import other components...

function App() {
  return (
    <Router>
      <div className="grid sm:flex md:flex min-h-screen">
        <AdminSidebar /> {/* Use AdminSidebar for admin routes */}

       <div className="px-2 py-2 flex sm:flex md:flex lg:flex xl:flex 2xl:flex sm:ml-64 lg:ml-64 flex-1">

          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/MainDashboard" element={<MainDashboard />} />
            <Route path='/Job&CourseControlDashboard' element={<JobCourseControlDashboard/>}/>
            <Route path='/BusinessRevenuePanelDashboard' element={<BusinessRevenuePanelDashboard/>}/>
            <Route path='/ReportsAnalytics' element={<ReportsAnalytics/>}/>
            <Route path='/MessagingCampaigns' element={<MessagingCampaigns/>}/>
            <Route path='/FormAutomation' element={<FormAutomation/>}/>
            <Route path='/SystemSettings' element={<SystemSettings/>}/>
            <Route path='/AdminTools' element={<AdminTools/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;