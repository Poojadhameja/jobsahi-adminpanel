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
    <div className="bg-[#F6FAFF] p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
      
      {/* Icon/Image */}
      <div className="mb-3">
        {stat.image ? (
          <img src={stat.image} alt={stat.title} className="w-16 h-16 object-contain" />
        ) : stat.icon ? (
          <stat.icon className={stat.iconColor} size={48} />
        ) : (
          getIcon(stat.type)
        )}
      </div>

      {/* Title */}
      <p className="text-base font-medium text-gray-700 mb-1 text-center">
        {stat.title}
      </p>

      {/* Count/Value */}
      <p className="text-3xl font-bold text-gray-900">{stat.value || stat.count}</p>
      
      {/* Additional text or change indicator */}
      {stat.change ? (
        <p className={`text-sm ${getChangeColor(stat.change)} mt-1`}>
          {stat.change} from last month
        </p>
      ) : (
        <p className="text-sm text-gray-500">{stat.text}</p>
      )}
    </div>
  );
};

export default CardComponent;