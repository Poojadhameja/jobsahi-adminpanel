// import React from 'react';

// const StudentList = ({ students, getTagColor }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
//       {students.map((student) => (
//         <div 
//           key={student.id} 
//           className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
//           style={{ 
//             width: '327px', 
//             height: '326px',
//             border: '1px solid rgba(11, 83, 125, 0.15)',
//             borderRadius: '5px'
//           }}
//         >
//           {/* Header Section with Avatar and Basic Info */}
//           <div className="absolute top-2.5 left-4 right-4 h-14 flex items-center space-x-3">
//             <div 
//               className="rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
//               style={{
//                 width: '48px',
//                 height: '48px',
//                 background: 'linear-gradient(135deg, #6C6BCF 0%, #8B5CF6 100%)'
//               }}
//             >
//               {student.name.split(' ').map(n => n[0]).join('')}
//             </div>
//             <div className="flex-1">
//               <h3 
//                 className="font-semibold leading-tight"
//                 style={{ 
//                   fontSize: '14px',
//                   color: 'rgba(0, 0, 0, 0.9)',
//                   fontFamily: 'Plus Jakarta Sans, sans-serif'
//                 }}
//               >
//                 {student.name}
//               </h3>
//               <p 
//                 className="mt-1"
//                 style={{ 
//                   fontSize: '11px',
//                   color: 'rgba(0, 0, 0, 0.6)',
//                   fontFamily: 'Plus Jakarta Sans, sans-serif'
//                 }}
//               >
//                 {student.email}
//               </p>
//             </div>
//           </div>

//           {/* Info Section - Labels */}
//           <div 
//             className="absolute"
//             style={{
//               left: '20px',
//               top: '87px',
//               width: '58px',
//               height: '95px'
//             }}
//           >
//             <div 
//               className="font-semibold leading-4"
//               style={{
//                 fontSize: '12px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Course:
//               <br /><br />
//               CGPA:
//               <br /><br />
//               Region:
//             </div>
//           </div>

//           {/* Info Section - Values */}
//           <div 
//             className="absolute"
//             style={{
//               right: '20px',
//               top: '87px',
//               width: '93px',
//               height: '75px',
//               textAlign: 'right'
//             }}
//           >
//             <div 
//               className="font-semibold leading-4"
//               style={{
//                 fontSize: '12px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               {student.course}
//               <br /><br />
//               {student.grade}
//               <br /><br />
//               {student.technology}
//             </div>
//           </div>

//           {/* Skills Tags Section */}
//           <div className="absolute flex gap-3" style={{ left: '20px', top: '201px' }}>
//             {student.tags.slice(0, 3).map((tag, tagIndex) => {
//               const backgrounds = ['#6C6BCF', 'rgba(11, 83, 125, 0.8)', 'rgba(92, 154, 36, 0.8)'];
//               return (
//                 <div
//                   key={tagIndex}
//                   className="flex items-center justify-center text-white font-semibold"
//                   style={{
//                     width: '71px',
//                     height: '17px',
//                     background: backgrounds[tagIndex],
//                     border: '1px solid rgba(11, 83, 125, 0.15)',
//                     borderRadius: '6px',
//                     fontSize: '7px',
//                     fontFamily: 'Plus Jakarta Sans, sans-serif'
//                   }}
//                 >
//                   {tag}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Status Badges */}
//           <div className="absolute flex gap-8" style={{ left: '38px', top: '235px' }}>
//             <span 
//               className="flex items-center justify-center font-semibold"
//               style={{
//                 width: '63px',
//                 height: '19px',
//                 background: 'rgba(92, 154, 36, 0.15)',
//                 borderRadius: '6px',
//                 fontSize: '10px',
//                 color: '#5B9821',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Verified
//             </span>
//             <span 
//               className="flex items-center justify-center font-semibold"
//               style={{
//                 width: '93px',
//                 height: '19px',
//                 background: 'rgba(92, 154, 36, 0.15)',
//                 borderRadius: '6px',
//                 fontSize: '8px',
//                 color: '#5B9821',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Placement Ready
//             </span>
//           </div>

//           {/* Action Buttons */}
//           <div className="absolute flex gap-3" style={{ left: '11px', top: '277px' }}>
//             <button 
//               className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
//               style={{
//                 width: '63px',
//                 height: '33px',
//                 background: 'rgba(11, 83, 125, 0.3)',
//                 border: '1px solid #F2FBE9',
//                 borderRadius: '6px',
//                 fontSize: '8px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               View Profile
//             </button>
//             <button 
//               className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
//               style={{
//                 width: '65px',
//                 height: '33px',
//                 background: 'rgba(92, 154, 36, 0.3)',
//                 border: '1px solid #F2FBE9',
//                 borderRadius: '6px',
//                 fontSize: '8px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Resume
//             </button>
//             <button 
//               className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
//               style={{
//                 width: '64px',
//                 height: '33px',
//                 background: 'rgba(11, 83, 125, 0.3)',
//                 border: '1px solid #F2FBE9',
//                 borderRadius: '6px',
//                 fontSize: '8px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Certificate
//             </button>
//             <button 
//               className="flex items-center justify-center font-semibold hover:opacity-80 transition-opacity"
//               style={{
//                 width: '63px',
//                 height: '33px',
//                 background: 'rgba(92, 154, 36, 0.3)',
//                 border: '1px solid #F2FBE9',
//                 borderRadius: '6px',
//                 fontSize: '8px',
//                 color: 'rgba(0, 0, 0, 0.7)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif'
//               }}
//             >
//               Progress
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default StudentList;



import React from 'react';

const StudentList = ({ students, getTagColor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {students.map((student) => (
        <div 
          key={student.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative border border-blue-900/15"
          style={{ 
            width: '327px', 
            height: '326px',
            borderRadius: '5px'
          }}
        >
          {/* Header Section with Avatar and Basic Info */}
          <div className="absolute top-2.5 left-4 right-4 h-14 flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #6C6BCF 0%, #8B5CF6 100%)'
              }}
            >
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h3 
                className="font-semibold leading-tight text-black/90"
                style={{ 
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                {student.name}
              </h3>
              <p 
                className="mt-1 text-black/60"
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
            {student.course}
            <br /><br />
            {student.grade}
            <br /><br />
            {student.technology}
          </div>

          {/* Skills Tags Section */}
          <div className="absolute left-5 flex gap-3" style={{ top: '201px' }}>
            {student.tags.slice(0, 3).map((tag, tagIndex) => {
              const backgrounds = ['#6C6BCF', 'rgba(11, 83, 125, 0.8)', 'rgba(92, 154, 36, 0.8)'];
              return (
                <div
                  key={tagIndex}
                  className="w-[71px] h-[17px] flex items-center justify-center text-white font-semibold border border-blue-900/15 rounded-md"
                  style={{
                    background: backgrounds[tagIndex],
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
          <div className="absolute left-[38px] flex gap-8" style={{ top: '235px' }}>
            <span 
              className="w-[63px] h-[19px] flex items-center justify-center font-semibold bg-green-600/15 rounded-md text-green-700"
              style={{
                fontSize: '10px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Verified
            </span>
            <span 
              className="w-[93px] h-[19px] flex items-center justify-center font-semibold bg-green-600/15 rounded-md text-green-700"
              style={{
                fontSize: '8px',
                color: '#5B9821',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Placement Ready
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute left-[11px] flex gap-3" style={{ top: '277px' }}>
            <button 
              className="w-[63px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-blue-900/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              View Profile
            </button>
            <button 
              className="w-[65px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-green-600/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Resume
            </button>
            <button 
              className="w-16 h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-blue-900/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              Certificate
            </button>
            <button 
              className="w-[63px] h-[33px] flex items-center justify-center font-semibold hover:opacity-80 transition-opacity bg-green-600/30 border border-green-50 rounded-md text-black/70"
              style={{
                fontSize: '8px',
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