import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar.jsx'; // Import the AdminSidebar component
import AdminDashboard from './pages/AdminDashboard.jsx';
import StudentManagementDashboard from './pages/StudentManagementDashboard.jsx'; // Import the StudentManagementDashboard component
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
            <Route path="/StudentManagementDashboard" element={<StudentManagementDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;