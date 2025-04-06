import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', average: 75, attendance: 90 },
  { month: 'Feb', average: 78, attendance: 92 },
  { month: 'Mar', average: 81, attendance: 88 },
  { month: 'Apr', average: 79, attendance: 85 },
  { month: 'May', average: 82, attendance: 91 },
  { month: 'Jun', average: 85, attendance: 93 },
];

const studentData = [
  { id: 1, name: 'Alex Johnson', average: 92, attendance: 95, trend: '+3%' },
  { id: 2, name: 'Maria Garcia', average: 88, attendance: 90, trend: '+2%' },
  { id: 3, name: 'David Lee', average: 75, attendance: 85, trend: '-1%' },
  { id: 4, name: 'Sophia Chen', average: 95, attendance: 98, trend: '+4%' },
  { id: 5, name: 'Jamal Wilson', average: 82, attendance: 92, trend: '+5%' },
  { id: 6, name: 'Emma Davis', average: 78, attendance: 87, trend: '0%' },
];

const StudentPerformance = () => {
  return (
    <DashboardLayout title="STUDENT PERFORMANCE" subtitle="Track and analyze student progress">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard title="CLASS PERFORMANCE" className="md:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="average" 
                  stroke="#de5499" 
                  fill="#de5499" 
                  fillOpacity={0.3} 
                  name="Avg. Score" 
                  unit="%" 
                />
                <Area 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#264143" 
                  fill="#264143" 
                  fillOpacity={0.3} 
                  name="Attendance" 
                  unit="%" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
        
        <DashboardCard title="PERFORMANCE INSIGHTS">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 p-3 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>AI Analysis</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Class average has improved by 3.5% this month</p>
            </div>
            
            <div className="border-l-4 border-l-green-500 p-3 bg-green-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>Growth Areas</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">Algebra concepts show strongest improvement</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 p-3 bg-yellow-50 rounded-r-md">
              <h3 className="font-medium flex items-center">
                <span>At-Risk Students</span>
                <span className="ai-badge ml-2">AI</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">3 students may need additional support</p>
            </div>
          </div>
        </DashboardCard>
      </div>
      
      <DashboardCard title="STUDENT TRACKER">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Score</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {studentData.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.average}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.attendance}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${student.trend.startsWith('+') ? 'text-green-600' : student.trend.startsWith('-') ? 'text-red-600' : 'text-gray-500'}`}>
                      {student.trend}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-edutrack-secondary hover:underline cursor-pointer">
                    View Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </DashboardLayout>
  );
};

export default StudentPerformance;