
import React, { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarTrigger,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Home, 
  Settings, 
  Mic, 
  Youtube, 
  FileText, 
  FolderPlus,
  MoreHorizontal,
  Sparkles
} from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardContent from '@/components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900">
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
