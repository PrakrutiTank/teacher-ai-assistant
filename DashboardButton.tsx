import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardButtonProps {
  label: string;
  to: string;
  icon?: React.ReactNode;
  className?: string;
  aiPowered?: boolean;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ 
  label, 
  to,
  icon,
  className = "",
  aiPowered = false
}) => {
  return (
    <Link 
      to={to}
      className={`primary-button py-3 px-4 text-center cursor-pointer flex items-center justify-center space-x-2 ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      {aiPowered && <span className="ai-badge ml-2">AI</span>}
    </Link>
  );
};

export default DashboardButton;
