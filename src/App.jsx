import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar.jsx'; // Import the AdminSidebar component
import AdminDashboard from './pages/AdminDashboard.jsx';
import MainDashboard from './components/MainDashboard.jsx';
import JobCourseControlDashboard from './components/Job&CourseControlDashborad.jsx';
import BusinessRevenuePanelDashboard from './components/BusinessRevenuePanelDashboard.jsx';
// import other components...

function App() {
  return (
    <Router>
      <div className="flex">
        <AdminSidebar /> {/* Use AdminSidebar for admin routes */}
        {/* Main content area */}
        <div className="ml-64 flex-1 p-4">
          <Routes>
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/MainDashboard" element={<MainDashboard />} />
            <Route path='/Job&CourseControlDashboard' element={<JobCourseControlDashboard/>}/>
            <Route path='/BusinessRevenuePanelDashboard' element={<BusinessRevenuePanelDashboard/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;