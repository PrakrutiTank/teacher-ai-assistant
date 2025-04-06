import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  children,
  className = "" 
}) => {
  return (
    <div className={`dashboard-card p-6 ${className}`}>
      <h2 className="card-title text-lg">{title}</h2>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
