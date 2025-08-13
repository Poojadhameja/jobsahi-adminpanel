const CardComponent = ({ stat }) => {
  return (
    <div
      className={`bg-[#F8FBFF] p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center`}
    >
      {/* Icon/Image */}
      <div className="mb-3">
        {stat.image ? (
          <img src={stat.image} alt={stat.title} className="w-16 h-16 object-contain" />
        ) : (
          stat.icon && <stat.icon className={stat.iconColor} size={48} />
        )}
      </div>

      {/* Title */}
      <p className="text-base font-medium text-gray-700 mb-1 text-center">
        {stat.title}
      </p>

      {/* Count */}
      <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
      <p className="text-sm text-gray-500">{stat.text}</p>
    </div>

  );
};

export default CardComponent;
