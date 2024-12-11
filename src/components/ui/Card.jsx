import React from 'react';

const Card = ({ 
  children, 
  className = '',
  hover = false,
  shadow = true
}) => {
  const baseClass = 'card';
  const hoverClass = hover ? 'card--hover' : '';
  const shadowClass = shadow ? 'card--shadow' : '';
  
  return (
    <div className={`${baseClass} ${hoverClass} ${shadowClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;