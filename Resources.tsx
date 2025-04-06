import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useToast } from '@/hooks/use-toast';

const performanceData = [
  { subject: 'Algebra', classA: 85, classB: 78, classC: 82 },
  { subject: 'Geometry', classA: 75, classB: 82, classC: 79 },
  { subject: 'Trigonometry', classA: 90, classB: 85, classC: 81 },
  { subject: 'Statistics', classA: 82, classB: 79, classC: 76 },
];

const Reports = () => {
  const { toast } = useToast();

  const handleGenerateReports = () => {
    toast({
      title: "AI Report Generator",
      description: "Generating detailed performance reports with Power BI integration...",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout title="REPORTS & ANALYTICS" subtitle="View performance metrics and analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="REPORT OPTIONS" className="md:col-span-1">
          <div className="space-y-3">
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Subject Performance</h3>
              <p className="text-sm text-gray-600 mt-1">Compare performance across different subjects</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Generate Report
              </button>
            </div>
            
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Class Comparison</h3>
              <p className="text-sm text-gray-600 mt-1">Compare performance across different classes</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Generate Report
              </button>
            </div>
            
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Student Progress</h3>
              <p className="text-sm text-gray-600 mt-1">Track individual student progress over time</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Generate Report
              </button>
            </div>
            
            <div className="border-l-4 border-l-green-500 p-4 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>AI-Powered Analytics</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Generate comprehensive reports with insights</p>
              <button 
                onClick={handleGenerateReports}
                className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline"
              >
                Generate AI Reports
              </button>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard title="PERFORMANCE BY SUBJECT" className="md:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="classA" name="Grade 10-A" fill="#264143" />
                <Bar dataKey="classB" name="Grade 10-B" fill="#de5499" />
                <Bar dataKey="classC" name="Grade 10-C" fill="#e99f4c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="POWER BI DASHBOARDS">
          <div className="border rounded-md p-5 bg-white">
            <h3 className="font-medium flex items-center">
              <span>Interactive Analytics Dashboard</span>
              <span className="feature-badge ml-2">Power BI</span>
            </h3>
            <p className="text-sm text-gray-600 mt-2">Access interactive Power BI dashboards for deep analytics on student performance, attendance trends, and subject-wise insights.</p>
            <div className="mt-4 flex items-center justify-center border rounded-md p-4 bg-gray-50">
              <img src="https://via.placeholder.com/400x200?text=Power+BI+Dashboard+Preview" alt="Power BI Dashboard" className="max-w-full h-auto rounded" />
            </div>
            <div className="mt-4">
              <button className="primary-button py-2 px-4 w-full">
                OPEN POWER BI DASHBOARD
              </button>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard title="AI INSIGHTS">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 p-4 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Performance Insights</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Google Gemini has analyzed your class data and found that students perform better on assessments when they complete practice problems beforehand.</p>
            </div>
            
            <div className="border-l-4 border-l-yellow-500 p-4 bg-yellow-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Learning Gap Alert</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Several students are struggling with the same algebraic concepts. Consider revisiting these topics or providing supplementary materials.</p>
            </div>
            
            <div className="border-l-4 border-l-blue-500 p-4 bg-blue-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Multilingual Reports</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Generated reports can be automatically translated to support diverse parent communication needs.</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Generate Multilingual Reports
              </button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default Reports;