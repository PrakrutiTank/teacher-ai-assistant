import React from 'react';

interface AiFeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action: {
    label: string;
    onClick: () => void;
  };
}

const AiFeatureCard: React.FC<AiFeatureCardProps> = ({
  title,
  description,
  icon,
  action
}) => {
  return (
    <div className="dashboard-card p-5 border-l-4 border-l-green-500 animate-fade-in">
      <div className="flex items-start">
        {icon && <div className="text-green-500 mr-4 mt-1">{icon}</div>}
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="font-semibold text-edutrack-primary">{title}</h3>
            <span className="ai-badge ml-2">AI</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <button 
            onClick={action.onClick}
            className="text-sm font-medium text-edutrack-secondary hover:underline"
          >
            {action.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiFeatureCard;
