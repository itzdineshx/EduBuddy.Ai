
import React from 'react';
import { 
  SidebarProvider
} from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import SettingsContent from '@/components/SettingsContent';

const Settings = () => {
  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col">
            <SettingsContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Settings;
