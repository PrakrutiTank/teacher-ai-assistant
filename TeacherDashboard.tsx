import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import DashboardButton from '@/components/dashboard/DashboardButton';
import StatCard from '@/components/dashboard/StatCard';
import AiFeatureCard from '@/components/dashboard/AiFeatureCard';
import { 
  AssignmentIcon, 
  PerformanceIcon, 
  ResourcesIcon, 
  ClassIcon, 
  ReportIcon,
  AiIcon,
  AttendanceIcon,
  ChatbotIcon,
  PlagiarismIcon,
  HandwritingIcon
} from '@/components/icons';
import { useToast } from '@/hooks/use-toast';

const TeacherDashboard = () => {
  const { toast } = useToast();

  const handleAiFeatureClick = (feature: string) => {
    toast({
      title: "AI Feature Activated",
      description: `${feature} feature is now processing...`,
      duration: 3000,
    });
  };

  return (
    <DashboardLayout title="TEACHER DASHBOARD">
      {/* Teacher Details */}
      <div className="dashboard-card p-6 mb-6 animate-fade-in">
        <h2 className="card-title text-lg">TEACHER PROFILE</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1">
            <div className="teacher-details-grid text-sm">
              <p><span className="font-medium">NAME:</span> Jane Smith</p>
              <p><span className="font-medium">SUBJECT:</span> Mathematics</p>
              <p><span className="font-medium">CLASS:</span> Grade 10</p>
              <p><span className="font-medium">EXPERIENCE:</span> 5 years</p>
              <p><span className="font-medium">EMAIL:</span> j.smith@edutrack.edu</p>
              <p><span className="font-medium">CONTACT:</span> (555) 123-4567</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-3">QUICK STATS</h3>
            <div className="grid grid-cols-2 gap-3">
              <StatCard value={92} label="Average Score" trend={{ value: 5, isPositive: true }} />
              <StatCard value={87} label="Attendance %" trend={{ value: 2, isPositive: true }} />
              <StatCard value={24} label="Assignments" />
              <StatCard value={5} label="Active Projects" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Highlight */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          <AiIcon /> <span className="ml-2">AI-POWERED FEATURES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AiFeatureCard
            title="Automated Assignment Grading"
            description="Use AI to grade objective assignments and provide initial feedback on subjective work."
            icon={<AssignmentIcon />}
            action={{
              label: "Start Grading",
              onClick: () => handleAiFeatureClick("Automated Grading")
            }}
          />
          <AiFeatureCard
            title="Plagiarism Detection"
            description="Scan student submissions to detect plagiarism and ensure originality."
            icon={<PlagiarismIcon />}
            action={{
              label: "Check Submissions",
              onClick: () => handleAiFeatureClick("Plagiarism Detection")
            }}
          />
          <AiFeatureCard
            title="Handwriting Recognition"
            description="Upload scanned handwritten assignments for automatic digitization."
            icon={<HandwritingIcon />}
            action={{
              label: "Upload Scans",
              onClick: () => handleAiFeatureClick("Handwriting Recognition")
            }}
          />
          <AiFeatureCard
            title="AI Teaching Assistant"
            description="Deploy an AI chatbot to answer student questions and provide additional support."
            icon={<ChatbotIcon />}
            action={{
              label: "Configure Assistant",
              onClick: () => handleAiFeatureClick("AI Teaching Assistant")
            }}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Manage Assignments */}
        <DashboardCard title="ASSIGNMENT MANAGEMENT">
          <div className="space-y-3">
            <DashboardButton 
              label="CREATE ASSIGNMENT" 
              to="/assignments/create"
              icon={<AssignmentIcon />}
            />
            <DashboardButton 
              label="REVIEW SUBMISSIONS" 
              to="/assignments/review"
              icon={<AssignmentIcon />}
              aiPowered
            />
            <DashboardButton 
              label="GENERATE QUESTIONS" 
              to="/assignments/generate"
              icon={<AssignmentIcon />}
              aiPowered
            />
          </div>
        </DashboardCard>

        {/* Student Performance */}
        <DashboardCard title="STUDENT PERFORMANCE">
          <div className="space-y-3">
            <DashboardButton 
              label="VIEW ATTENDANCE" 
              to="/performance/attendance"
              icon={<AttendanceIcon />}
            />
            <DashboardButton 
              label="VIEW MARKS" 
              to="/performance/marks"
              icon={<PerformanceIcon />}
            />
            <DashboardButton 
              label="PERFORMANCE ANALYTICS" 
              to="/performance/analytics"
              icon={<PerformanceIcon />}
              aiPowered
            />
          </div>
        </DashboardCard>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Learning Resources */}
        <DashboardCard title="LEARNING RESOURCES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DashboardButton 
              label="UPLOAD MATERIALS" 
              to="/resources/upload"
              icon={<ResourcesIcon />}
            />
            <DashboardButton 
              label="RESOURCE LIBRARY" 
              to="/resources/library"
              icon={<ResourcesIcon />}
            />
            <DashboardButton 
              label="AI CONTENT GENERATOR" 
              to="/resources/generate"
              icon={<ResourcesIcon />}
              aiPowered
            />
            <DashboardButton 
              label="MATERIAL SUMMARIZER" 
              to="/resources/summarize"
              icon={<ResourcesIcon />}
              aiPowered
            />
          </div>
        </DashboardCard>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Class Management */}
        <DashboardCard title="CLASS MANAGEMENT">
          <div className="space-y-3">
            <DashboardButton 
              label="CLASS SCHEDULE" 
              to="/class-management/schedule"
              icon={<ClassIcon />}
            />
            <DashboardButton 
              label="STUDENT ROSTER" 
              to="/class-management/roster"
              icon={<ClassIcon />}
            />
            <DashboardButton 
              label="SMART TIMETABLE" 
              to="/class-management/timetable"
              icon={<ClassIcon />}
              aiPowered
            />
          </div>
        </DashboardCard>

        {/* Reports */}
        <DashboardCard title="REPORTS">
          <div className="space-y-3">
            <DashboardButton 
              label="PERFORMANCE REPORTS" 
              to="/reports/performance"
              icon={<ReportIcon />}
              aiPowered
            />
            <DashboardButton 
              label="GRADEBOOK" 
              to="/reports/gradebook"
              icon={<ReportIcon />}
            />
            <DashboardButton 
              label="POWER BI INSIGHTS" 
              to="/reports/power-bi"
              icon={<ReportIcon />}
              aiPowered
            />
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
