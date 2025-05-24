
import React from 'react';
import { 
  SidebarProvider
} from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import PlaygroundContent from '@/components/PlaygroundContent';

const Playground = () => {
  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col">
            <PlaygroundContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Playground;
