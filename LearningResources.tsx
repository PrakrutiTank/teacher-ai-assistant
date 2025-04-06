import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useToast } from '@/hooks/use-toast';

const resourceCategories = [
  { id: 1, name: 'Lesson Plans', count: 15 },
  { id: 2, name: 'Worksheets', count: 24 },
  { id: 3, name: 'Presentations', count: 8 },
  { id: 4, name: 'Video Lectures', count: 12 },
  { id: 5, name: 'Assessment Materials', count: 18 },
];

const recentResources = [
  { id: 1, title: 'Quadratic Equations Slideshow', type: 'Presentation', date: 'Apr 05, 2025', size: '2.4 MB' },
  { id: 2, title: 'Geometry Formulas Cheat Sheet', type: 'Worksheet', date: 'Apr 03, 2025', size: '1.1 MB' },
  { id: 3, title: 'Algebra Concepts Video Lecture', type: 'Video', date: 'Mar 29, 2025', size: '45.8 MB' },
  { id: 4, title: 'Trigonometry Practice Problems', type: 'Worksheet', date: 'Mar 25, 2025', size: '3.2 MB' },
];

const LearningResources = () => {
  const { toast } = useToast();

  const handleAiGenerate = () => {
    toast({
      title: "AI Content Generator",
      description: "Generating custom learning materials using Google Gemini...",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout title="LEARNING RESOURCES" subtitle="Manage educational content for your classes">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="RESOURCE CATEGORIES" className="md:col-span-1">
          <ul className="divide-y divide-gray-200">
            {resourceCategories.map((category) => (
              <li key={category.id} className="py-3 flex justify-between items-center">
                <span className="text-sm">{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{category.count}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="primary-button py-2 px-3 text-center w-full">
              UPLOAD NEW RESOURCE
            </button>
          </div>
        </DashboardCard>
        
        <DashboardCard title="RECENT UPLOADS" className="md:col-span-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentResources.map((resource) => (
                  <tr key={resource.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{resource.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{resource.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{resource.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="AI CONTENT GENERATION">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 p-4 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Generate Learning Materials</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Use Google Gemini AI to create customized learning materials for your students based on their learning needs.</p>
              <button 
                onClick={handleAiGenerate}
                className="mt-3 text-sm text-edutrack-secondary font-medium hover:underline"
              >
                Generate Content
              </button>
            </div>
            
            <div className="border-l-4 border-l-green-500 p-4 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Content Summarization</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Automatically create summaries of complex learning materials to help students grasp key concepts.</p>
              <button className="mt-3 text-sm text-edutrack-secondary font-medium hover:underline">
                Summarize Content
              </button>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard title="CONTENT SHARING">
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Share with Other Teachers</h3>
              <p className="text-sm text-gray-600 mt-2">Collaborate with colleagues by sharing your best learning resources with them.</p>
              <button className="mt-3 primary-button py-2 px-3 text-sm">
                OPEN SHARING CENTER
              </button>
            </div>
            
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Distribute to Students</h3>
              <p className="text-sm text-gray-600 mt-2">Send materials directly to your students or specific student groups.</p>
              <button className="mt-3 primary-button py-2 px-3 text-sm">
                DISTRIBUTE NOW
              </button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default LearningResources;
