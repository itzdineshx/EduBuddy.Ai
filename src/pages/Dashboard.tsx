
import React from 'react';
import { 
  SidebarProvider
} from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardContent from '@/components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col">
            <DashboardContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
