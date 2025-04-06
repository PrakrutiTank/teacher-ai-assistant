import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useToast } from '@/hooks/use-toast';

const classSchedule = [
  { id: 1, className: 'Grade 10-A', subject: 'Algebra', day: 'Monday', time: '9:00 AM - 10:30 AM', room: 'Room 101' },
  { id: 2, className: 'Grade 10-B', subject: 'Geometry', day: 'Monday', time: '11:00 AM - 12:30 PM', room: 'Room 102' },
  { id: 3, className: 'Grade 10-C', subject: 'Algebra', day: 'Tuesday', time: '9:00 AM - 10:30 AM', room: 'Room 103' },
  { id: 4, className: 'Grade 10-A', subject: 'Trigonometry', day: 'Wednesday', time: '9:00 AM - 10:30 AM', room: 'Room 101' },
  { id: 5, className: 'Grade 10-B', subject: 'Statistics', day: 'Thursday', time: '11:00 AM - 12:30 PM', room: 'Room 104' },
];

const ClassManagement = () => {
  const { toast } = useToast();

  const handleGenerateTimetable = () => {
    toast({
      title: "AI Timetable Generator",
      description: "Optimizing class schedule based on teacher availability and classroom resources...",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout title="CLASS MANAGEMENT" subtitle="Manage your classes and schedules">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="CLASSES" className="md:col-span-1">
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Grade 10-A</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">25 Students</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Advanced Mathematics</p>
            </li>
            <li className="py-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Grade 10-B</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">28 Students</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Regular Mathematics</p>
            </li>
            <li className="py-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Grade 10-C</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">22 Students</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Regular Mathematics</p>
            </li>
          </ul>
          <div className="mt-4">
            <button className="primary-button py-2 px-4 w-full">
              MANAGE CLASSES
            </button>
          </div>
        </DashboardCard>
        
        <DashboardCard title="CLASS SCHEDULE" className="md:col-span-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classSchedule.map((schedule) => (
                  <tr key={schedule.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.className}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{schedule.subject}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{schedule.day}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{schedule.time}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{schedule.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="ATTENDANCE TRACKER">
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-white">
              <h3 className="font-medium">Today's Attendance</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="border p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-edutrack-secondary">92%</div>
                  <div className="text-sm text-gray-500">Grade 10-A</div>
                </div>
                <div className="border p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-edutrack-secondary">88%</div>
                  <div className="text-sm text-gray-500">Grade 10-B</div>
                </div>
                <div className="border p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-edutrack-secondary">95%</div>
                  <div className="text-sm text-gray-500">Grade 10-C</div>
                </div>
                <div className="border p-3 rounded-md text-center bg-edutrack-light bg-opacity-30">
                  <div className="text-2xl font-bold text-edutrack-primary">91.7%</div>
                  <div className="text-sm text-gray-500">Overall</div>
                </div>
              </div>
              <div className="mt-4">
                <button className="primary-button py-2 px-4 w-full">
                  MARK ATTENDANCE
                </button>
              </div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard title="SMART TIMETABLE">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 p-4 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>AI Timetable Generator</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">Generate optimized class schedules based on teacher availability, room resources, and student learning patterns.</p>
              <button 
                onClick={handleGenerateTimetable}
                className="mt-3 text-sm text-edutrack-secondary font-medium hover:underline"
              >
                Generate Optimized Schedule
              </button>
            </div>
            
            <div className="border-l-4 border-l-blue-500 p-4 bg-blue-50 rounded-r-md">
              <h3 className="font-medium">Schedule Notifications</h3>
              <p className="text-sm text-gray-600 mt-2">Automatically notify students and parents about class schedules and any changes.</p>
              <button className="mt-3 text-sm text-edutrack-secondary font-medium hover:underline">
                Configure Notifications
              </button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default ClassManagement;