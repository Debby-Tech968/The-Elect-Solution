import React from "react";

const Card = ({ className, children, icon }) => {
  return (
    <div className={className}>
      {/* Icon (optional) */}
      {icon && (
        <div className="mb-3">
          <img src={icon} alt="icon" className="w-10 h-10" />
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
};

export default Card;
