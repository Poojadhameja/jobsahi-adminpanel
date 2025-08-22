/* eslint-disable no-unused-vars */
import React from 'react';

const StudentList = ({ students, getTagColor }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-4 md:gap-80 lg:gap-80 px-2 sm:px-4 md:px-6">
      {students.map((student) => (
        <div 
          key={student.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative border border-blue-900/15 mx-auto"
          style={{ 
            width: '100%', 
            maxWidth: '327px',
            minWidth: '280px',
            height: '326px',
            borderRadius: '5px'
          }}
        >
          {/* Header Section with Avatar and Basic Info */}
          <div className="absolute top-2.5 left-4 right-4 h-14 flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-sm flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0B537D 0%, #0B537D 100%)'
              }}
            >
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <h3 
                className="font-semibold leading-tight text-black/90 truncate"
                style={{ 
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                {student.name}
              </h3>
              <p 
                className="mt-1 text-black/60 truncate"
                style={{ 
                  fontSize: '11px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                {student.email}
              </p>
            </div>
          </div>

          {/* Info Section - Labels */}
          <div className="absolute left-5 font-semibold leading-4 text-black/70"
            style={{
              top: '87px',
              width: '58px',
              height: '95px',
              fontSize: '12px',
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}
          >
            Course:
            <br /><br />
            CGPA:
            <br /><br />
            Region:
          </div>

          {/* Info Section - Values */}
          <div 
            className="absolute right-5 font-semibold leading-4 text-right text-black/70"
            style={{
              top: '87px',
              width: '93px',
              height: '75px',
              fontSize: '12px',
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}
          >
            <div className="truncate">{student.course}</div>
            <br /><br />
            <div className="truncate">{student.grade}</div>
            <br /><br />
            <div className="truncate">{student.technology}</div>
          </div>

          {/* Skills Tags Section */}
          <div className="absolute left-5 flex gap-2 sm:gap-3 flex-wrap" style={{ top: '201px', maxWidth: 'calc(100% - 40px)' }}>
            {student.tags.slice(0, 3).map((tag, tagIndex) => {
              const backgrounds = ['#6C6BCF', 'rgba(11, 83, 125, 0.8)', 'rgba(92, 154, 36, 0.8)'];
              return (
                <div
                  key={tagIndex}
                  className="min-w-[60px] w-auto max-w-[71px] h-[17px] flex items-center justify-center text-white font-semibold border border-blue-900/15 rounded-md px-2"
                  style={{
                    background: backgrounds[tagIndex],
                    fontSize: '7px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif'
                  }}
                >
                  <span className="truncate">{tag}</span>
                </div>
              );
            })}
          </div>

          {/* Status Badges */}
          <div className="absolute left-[38px] flex gap-4 sm:gap-8 flex-wrap" style={{ top: '235px', maxWidth: 'calc(100% - 76px)' }}>
            <span 
              className="min-w-[60px] w-auto max-w-[63px] h-[19px] flex items-center justify-center font-semibold bg-green-600/15 rounded-md text-green-700 px-2"
              style={{
                fontSize: '10px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate">Verified</span>
            </span>
            <span 
              className="min-w-[80px] w-auto max-w-[93px] h-[19px] flex items-center justify-center font-semibold bg-green-600/15 rounded-md text-green-700 px-2"
              style={{
                fontSize: '8px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate">Placement Ready</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute left-[11px] right-[11px] flex gap-2 sm:gap-3" style={{ top: '277px' }}>
            <button 
              className="flex-1 min-w-[50px] max-w-[63px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-blue-900/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate px-1">View Profile</span>
            </button>
            <button 
              className="flex-1 min-w-[50px] max-w-[65px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-green-600/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate px-1">Resume</span>
            </button>
            <button 
              className="flex-1 min-w-[50px] max-w-16 h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-blue-900/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate px-1">Certificate</span>
            </button>
            <button 
              className="flex-1 min-w-[50px] max-w-[63px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-green-600/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              <span className="truncate px-1">Progress</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;