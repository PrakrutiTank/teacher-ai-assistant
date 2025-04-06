import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useToast } from '@/hooks/use-toast';

const AssignmentManagement = () => {
  const { toast } = useToast();

  const handleGenerateAssignment = () => {
    toast({
      title: "AI Assignment Generator",
      description: "Generating a new assignment using Google Gemini AI...",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout title="ASSIGNMENT MANAGEMENT" subtitle="Create and manage student assignments">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="UPCOMING ASSIGNMENTS" className="md:col-span-2">
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Quadratic Equations Problem Set</h3>
                  <p className="text-sm text-gray-600">Due: April 15, 2025</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Math</span>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                20 problems covering various applications of quadratic equations.
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">Assigned to: Grade 10-A</span>
                <span className="text-xs text-gray-500">Submissions: 12/25</span>
              </div>
            </div>
            
            <div className="border rounded-md p-4 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Algebra Mid-Term Project</h3>
                  <p className="text-sm text-gray-600">Due: April 20, 2025</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Math</span>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                Group project applying algebraic concepts to real-world problems.
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">Assigned to: Grade 10-A, 10-B</span>
                <span className="text-xs text-gray-500">Submissions: 8/50</span>
              </div>
            </div>
            
            <div className="border rounded-md p-4 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Geometry Quiz</h3>
                  <p className="text-sm text-gray-600">Due: April 12, 2025</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Math</span>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                Online quiz covering triangles, circles, and coordinate geometry.
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">Assigned to: Grade 10-C</span>
                <span className="text-xs text-gray-500">Submissions: 20/25</span>
              </div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard title="AI TOOLS">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 p-3 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Generate Assignment</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Use Google Gemini to create customized assignments</p>
              <button 
                onClick={handleGenerateAssignment}
                className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline"
              >
                Create Now
              </button>
            </div>
            
            <div className="border-l-4 border-l-green-500 p-3 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Auto-Grade Submissions</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Let AI evaluate objective questions automatically</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Start Grading
              </button>
            </div>
            
            <div className="border-l-4 border-l-green-500 p-3 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Plagiarism Check</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Verify the originality of student submissions</p>
              <button className="mt-2 text-sm text-edutrack-secondary font-medium hover:underline">
                Check Submissions
              </button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default AssignmentManagement;
