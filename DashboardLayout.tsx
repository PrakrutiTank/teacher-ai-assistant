import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title, 
  subtitle = "Class management portal"
}) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <div className="navigation-bar py-3 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="logo text-xl text-white">
            EDUTRACK
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`nav-link text-white hover:underline ${
                location.pathname === '/' ? 'underline' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/class-management" 
              className={`nav-link text-white hover:underline ${
                location.pathname === '/class-management' ? 'underline' : ''
              }`}
            >
              Classes
            </Link>
            <div className="relative">
              <Link 
                to="#" 
                className="nav-link text-white hover:underline"
              >
                Messages
              </Link>
              <span className="notification-badge">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="dashboard-header p-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-edutrack-light tracking-tight">{title}</h1>
          <p className="text-edutrack-light mt-1 opacity-90 tracking-wide">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12 flex-grow">
        {children}
      </div>

      {/* Footer */}
      <div className="footer py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 tracking-wide text-edutrack-light">EDUTRACK</h3>
              <p className="text-edutrack-light opacity-80 tracking-wide">Educational management system</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 tracking-wide text-edutrack-light">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline opacity-80 hover:opacity-100 tracking-wide text-edutrack-light">Dashboard</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100 tracking-wide text-edutrack-light">Calendar</Link></li>
                <li><Link to="/resources" className="hover:underline opacity-80 hover:opacity-100 tracking-wide text-edutrack-light">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 tracking-wide text-edutrack-light">TEACHER SUPPORT</h3>
              <p className="opacity-80 tracking-wide text-edutrack-light">support@edutrack.edu</p>
              <p className="opacity-80 tracking-wide text-edutrack-light">Ext. 5555</p>
            </div>
          </div>
          <div className="border-t border-edutrack-darkBorder mt-8 pt-8 text-center opacity-80 tracking-wide text-edutrack-light">
            <p>&copy; 2025 EDUTRACK. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
