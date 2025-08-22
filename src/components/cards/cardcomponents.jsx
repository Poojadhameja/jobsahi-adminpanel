import React from 'react';
import { Users, Clock, Briefcase, DollarSign } from 'lucide-react';

const CardComponent = ({ stat }) => {
  const getIcon = (type) => {
    const iconProps = { size: 48, className: "text-blue-500" };
    switch (type) {
      case 'employers':
        return <Users {...iconProps} />;
      case 'approvals':
        return <Clock {...iconProps} />;
      case 'jobs':
        return <Briefcase {...iconProps} />;
      case 'revenue':
        return <DollarSign {...iconProps} />;
      default:
        return <Users {...iconProps} />;
    }
  };

  const getChangeColor = (change) => {
    return change.startsWith('+') ? 'text-green-500' : 'text-red-500';
  };

  return (
  <div className="bg-[#F6FAFF] p-4 sm:p-6 border border-gray-300 rounded-2xl shadow-sm flex flex-col items-center justify-center w-full">
  
  {/* Icon/Image - Responsive sizing */}
  <div className="mb-2 sm:mb-3">
    {stat.image ? (
      <img src={stat.image} alt={stat.title} className="w-12 h-12 sm:w-12 sm:h-12 object-contain" />
    ) : stat.icon ? (
      <stat.icon className={stat.iconColor} size={window.innerWidth >= 640 ? 48 : 36} />
    ) : (
      getIcon(stat.type)
    )}
  </div>

  {/* Title - Responsive text */}
  <p className="text-xs sm:text-base text-gray-700 mb-1 text-center leading-tight">
    {stat.title}
  </p>

  {/* Main Value - Consolidated and responsive */}
  <p className="text-lg sm:text-lg lg:text-lg font-bold text-gray-900 mb-1">
    {stat.value || stat.count || stat.amount}
  </p>

  {/* Secondary Info - Responsive text */}
  {stat.change ? (
    <p className={`text-xs sm:text-sm ${getChangeColor(stat.change)} mt-1 text-center`}>
      {stat.change} from last month
    </p>
  ) : stat.growth ? (
    <p className="text-xs sm:text-sm text-gray-500 text-center">{stat.growth}</p>
  ) : (
    <p className="text-xs sm:text-sm text-gray-500 text-center">{stat.text}</p>
  )}
</div>
  );
};

export default CardComponent;