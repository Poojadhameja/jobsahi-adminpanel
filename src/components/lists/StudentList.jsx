import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 px-5">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-900/15 flex flex-col p-4"
        >
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-sm flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0B537D 0%, #0B537D 100%)'
              }}
            >
              {student.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-black/90 text-sm truncate">
                {student.name}
              </h3>
              <p className="text-xs text-black/60 truncate">{student.email}</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-2 text-xs text-black/70 mb-4">
            <div className="font-semibold space-y-2">
              <p>Course:</p>
              <p>CGPA:</p>
              <p>Region:</p>
            </div>
            <div className="text-right space-y-2">
              <p className="truncate">{student.course}</p>
              <p className="truncate">{student.grade}</p>
              <p className="truncate">{student.technology}</p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex gap-2 flex-wrap mb-3">
            {student.tags.slice(0, 3).map((tag, i) => {
              const backgrounds = ['#6C6BCF', 'rgba(11, 83, 125, 0.8)', 'rgba(92, 154, 36, 0.8)'];
              return (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-white font-semibold text-[10px] truncate"
                  style={{ background: backgrounds[i] }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Status Badges */}
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="px-2 py-1 text-[10px] font-semibold rounded-md bg-green-600/15 text-green-700">
              Verified
            </span>
            <span className="px-2 py-1 text-[10px] font-semibold rounded-md bg-green-600/15 text-green-700">
              Placement Ready
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto flex-wrap">
            <button className="flex-1 min-w-[70px] py-2 text-[10px] font-semibold bg-blue-900/30 border rounded-md text-black/70 hover:opacity-80">
              View Profile
            </button>
            <button className="flex-1 min-w-[70px] py-2 text-[10px] font-semibold bg-green-600/30 border rounded-md text-black/70 hover:opacity-80">
              Resume
            </button>
            <button className="flex-1 min-w-[70px] py-2 text-[10px] font-semibold bg-blue-900/30 border rounded-md text-black/70 hover:opacity-80">
              Certificate
            </button>
            <button className="flex-1 min-w-[70px] py-2 text-[10px] font-semibold bg-green-600/30 border rounded-md text-black/70 hover:opacity-80">
              Progress
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
