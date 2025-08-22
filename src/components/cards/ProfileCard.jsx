import React, { useState } from 'react';
import { MoreVertical, User } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'verified': return 'bg-green-100 text-green-700';
      case 'placement ready': return 'bg-green-50 text-green-600';
      case 'in progress': return 'bg-yellow-100 text-yellow-700';
      case 'pending': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCourseColor = (index) => {
    const colors = [
      'bg-purple-500 text-white',
      'bg-teal-600 text-white',
      'bg-green-500 text-white',
      'bg-blue-500 text-white',
      'bg-indigo-500 text-white'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md mx-auto gap-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {getInitials(profile.name)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{profile.name}</h3>
            <p className="text-gray-500 text-sm">{profile.email}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Profile Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Course:</span>
          <span className="text-gray-900 font-semibold">{profile.course}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">CGPA:</span>
          <span className="text-gray-900 font-semibold">{profile.cgpa}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Region:</span>
          <span className="text-gray-900 font-semibold">{profile.region}</span>
        </div>
      </div>

      {/* Course Tags */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {profile.courses?.map((course, index) => (
          <span 
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${getCourseColor(index)}`}
          >
            {course}
          </span>
        ))}
      </div>

      {/* Status Badges */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {profile.statuses?.map((status, index) => (
          <span 
            key={index}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(status)}`}
          >
            {status}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-100 text-blue-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
            View Profile
          </button>
          <button className="bg-green-100 text-green-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
            Resume
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Certificate
          </button>
          <button className="bg-green-50 text-green-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Progress
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileCards = () => {
  const [profiles] = useState([
    {
      name: "Arjun Sharma",
      email: "arjun.sharma@email.com",
      course: "Electrician",
      cgpa: "8.7/10.0",
      region: "North India",
      courses: ["Electrician", "Electrician", "Electrician"],
      statuses: ["Verified", "Placement Ready"]
    },
    {
      name: "Priya Patel",
      email: "priya.patel@email.com",
      course: "Plumber",
      cgpa: "9.2/10.0",
      region: "West India",
      courses: ["Plumber", "Safety Training"],
      statuses: ["Verified", "In Progress"]
    },
    {
      name: "Raj Kumar",
      email: "raj.kumar@email.com",
      course: "Carpenter",
      cgpa: "8.5/10.0",
      region: "South India",
      courses: ["Carpenter", "Advanced Woodwork"],
      statuses: ["Pending", "Placement Ready"]
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    course: "",
    cgpa: "",
    region: "",
    courses: [""],
    statuses: [""]
  });

  const handleAddProfile = () => {
    // In a real app, this would add to the profiles array
    console.log("New profile:", newProfile);
    setEditMode(false);
    // Reset form
    setNewProfile({
      name: "",
      email: "",
      course: "",
      cgpa: "",
      region: "",
      courses: [""],
      statuses: [""]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Profiles</h1>
          <button 
            onClick={() => setEditMode(!editMode)}
            className="bg-purple-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-purple-600 transition-colors"
          >
            {editMode ? 'Cancel' : 'Add New Profile'}
          </button>
        </div>

        {editMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Add New Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newProfile.name}
                onChange={(e) => setNewProfile({...newProfile, name: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={newProfile.email}
                onChange={(e) => setNewProfile({...newProfile, email: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Course"
                value={newProfile.course}
                onChange={(e) => setNewProfile({...newProfile, course: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="CGPA (e.g., 8.5/10.0)"
                value={newProfile.cgpa}
                onChange={(e) => setNewProfile({...newProfile, cgpa: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Region"
                value={newProfile.region}
                onChange={(e) => setNewProfile({...newProfile, region: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={handleAddProfile}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Add Profile
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;