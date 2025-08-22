// src/components/NavigationTabs.jsx
import React from "react";

const NavigationTabs = ({ navigationTabs, activeNavTab, setActiveNavTab }) => {
  return (
    <div>
      {/* Tabs Header */}
      <div 
        className="flex justify-center items-center box-border mx-auto w-full p-3"
        style={{
          height: '46px',
          background: '#F6FAFF',
          border: '1px solid rgba(11, 83, 125, 0.15)',
          borderRadius: '30px'
        }}
      >
      {/* Tabs Header */}
      <div 
        className="flex items-center justify-center"
        style={{
          height: '36px',
          gap: '18px'
        }}
      >
        {navigationTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeNavTab === tab.id;
          
          return (
            <div
              key={tab.id}
              onClick={() => setActiveNavTab(tab.id)}
              className="relative cursor-pointer"
              style={{
                width: '230px',
                height: '36px'
              }}
            >
              {/* Tab background */}
              <div 
                className="absolute box-border"
                style={{
                  width: '230px',
                  height: '36px',
                  left: '0px',
                  top: '0px',
                  background: '#FFFFFF',
                  border: '1px solid #D9D9D9',
                  borderRadius: '30px'
                }}
              />
              
              {/* Icon circle */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  width: '30px',
                  height: '30px',
                  left: '3.5px',
                  top: '3px',
                  background: isActive ? '#5C9A24' : 'rgba(92, 154, 36, 0.2)',
                  borderRadius: '50%'
                }}
              >
                {React.createElement(Icon, {
                  size: 12,
                  style: {
                    color: isActive ? '#FFFFFF' : '#5C9A24'
                  }
                })}
              </div>
              
              {/* Tab text */}
              <span
                className="absolute flex items-center justify-center"
                style={{
                  width: '190px',
                  height: '18px',
                  left: '40px',
                  top: '9px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: isActive ? 700 : 400,
                  fontSize: '14px',
                  lineHeight: '18px',
                  color: '#5C9A24',
                  textAlign: 'center'
                }}
              >
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>            
    </div>
    </div>
  );
};

export default NavigationTabs;