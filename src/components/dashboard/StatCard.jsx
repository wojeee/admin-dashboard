// src/components/dashboard/StatCard.jsx
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, trend, icon: Icon }) => {
  const isPositive = trend > 0;
  
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        {Icon && (
          <div className="stat-card__icon">
            <Icon size={20} />
          </div>
        )}
      </div>
      
      <div className="stat-card__value">{value}</div>
      
      <div className={`stat-card__trend ${isPositive ? 'stat-card__trend--positive' : 'stat-card__trend--negative'}`}>
        {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span>{Math.abs(trend)}%</span>
      </div>
    </div>
  );
};

export default StatCard;