import React from 'react';
import StatCard from './StatCard';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const statsData = [
    {
      title: "Total Users",
      value: "2,543",
      icon: Users,
      trend: 12.5
    },
    {
      title: "Revenue",
      value: "$45,231",
      icon: DollarSign,
      trend: 8.2
    },
    {
      title: "Active Products",
      value: "1,234",
      icon: ShoppingCart,
      trend: -3.1
    },
    {
      title: "Monthly Growth",
      value: "15.3%",
      icon: TrendingUp,
      trend: 2.4
    }
  ];

  return (
    <section className="dashboard__section">
      <h2 className="dashboard__title">Dashboard Overview</h2>
      <div className="dashboard__grid">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;