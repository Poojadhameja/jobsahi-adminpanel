import React from 'react';

const StudentList = ({ students, getTagColor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {students.map((student) => (
        <div 
          key={student.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
          style={{ 
            width: '327px', 
            height: '326px',
            border: '1px solid rgba(11, 83, 125, 0.15)',
            borderRadius: '5px'
          }}
        >
          {/* Header Section with Avatar and Basic Info */}
          <div className="absolute top-2.5 left-4 right-4 h-14 flex items-center space-x-3">
            <div 
              className="rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #6C6BCF 0%, #8B5CF6 100%)'
              }}
            >
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h3 
                className="font-semibold leading-tight"
                style={{ 
                  fontSize: '14px',
                  color: 'rgba(0, 0, 0, 0.9)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                {student.name}
              </h3>
              <p 
                className="mt-1"
                style={{ 
                  fontSize: '11px',
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                {student.email}
              </p>
            </div>
          </div>

          {/* Info Section - Labels */}
          <div 
            className="absolute"
            style={{
              left: '20px',
              top: '87px',
              width: '58px',
              height: '95px'
            }}
          >
            <div 
              className="font-semibold leading-4"
              style={{
                fontSize: '12px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Course:
              <br /><br />
              CGPA:
              <br /><br />
              Region:
            </div>
          </div>

          {/* Info Section - Values */}
          <div 
            className="absolute"
            style={{
              right: '20px',
              top: '87px',
              width: '93px',
              height: '75px',
              textAlign: 'right'
            }}
          >
            <div 
              className="font-semibold leading-4"
              style={{
                fontSize: '12px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              {student.course}
              <br /><br />
              {student.grade}
              <br /><br />
              {student.technology}
            </div>
          </div>

          {/* Skills Tags Section */}
          <div className="absolute flex gap-3" style={{ left: '20px', top: '201px' }}>
            {student.tags.slice(0, 3).map((tag, tagIndex) => {
              const backgrounds = ['#6C6BCF', 'rgba(11, 83, 125, 0.8)', 'rgba(92, 154, 36, 0.8)'];
              return (
                <div
                  key={tagIndex}
                  className="flex items-center justify-center text-white font-semibold"
                  style={{
                    width: '71px',
                    height: '17px',
                    background: backgrounds[tagIndex],
                    border: '1px solid rgba(11, 83, 125, 0.15)',
                    borderRadius: '6px',
                    fontSize: '7px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif'
                  }}
                >
                  {tag}
                </div>
              );
            })}
          </div>

          {/* Status Badges */}
          <div className="absolute flex gap-8" style={{ left: '38px', top: '235px' }}>
            <span 
              className="flex items-center justify-center font-semibold"
              style={{
                width: '63px',
                height: '19px',
                background: 'rgba(92, 154, 36, 0.15)',
                borderRadius: '6px',
                fontSize: '10px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Verified
            </span>
            <span 
              className="flex items-center justify-center font-semibold"
              style={{
                width: '93px',
                height: '19px',
                background: 'rgba(92, 154, 36, 0.15)',
                borderRadius: '6px',
                fontSize: '8px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Placement Ready
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute flex gap-3" style={{ left: '11px', top: '277px' }}>
            <button 
              className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
              style={{
                width: '63px',
                height: '33px',
                background: 'rgba(11, 83, 125, 0.3)',
                border: '1px solid #F2FBE9',
                borderRadius: '6px',
                fontSize: '8px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              View Profile
            </button>
            <button 
              className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
              style={{
                width: '65px',
                height: '33px',
                background: 'rgba(92, 154, 36, 0.3)',
                border: '1px solid #F2FBE9',
                borderRadius: '6px',
                fontSize: '8px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Resume
            </button>
            <button 
              className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
              style={{
                width: '64px',
                height: '33px',
                background: 'rgba(11, 83, 125, 0.3)',
                border: '1px solid #F2FBE9',
                borderRadius: '6px',
                fontSize: '8px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Certificate
            </button>
            <button 
              className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
              style={{
                width: '63px',
                height: '33px',
                background: 'rgba(92, 154, 36, 0.3)',
                border: '1px solid #F2FBE9',
                borderRadius: '6px',
                fontSize: '8px',
                color: 'rgba(0, 0, 0, 0.7)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Progress
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StudentList;