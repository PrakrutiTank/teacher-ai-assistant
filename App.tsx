import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeacherDashboard from "./pages/TeacherDashboard";
import AssignmentManagement from "./pages/AssignmentManagement";
import StudentPerformance from "./pages/StudentPerformance";
import LearningResources from "./pages/LearningResources";
import ClassManagement from "./pages/ClassManagement";
import Reports from "./pages/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeacherDashboard />} />
          <Route path="/assignments" element={<AssignmentManagement />} />
          <Route path="/performance" element={<StudentPerformance />} />
          <Route path="/resources" element={<LearningResources />} />
          <Route path="/class-management" element={<ClassManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/welcome" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
