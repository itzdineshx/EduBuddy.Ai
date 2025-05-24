
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Home, 
  Settings, 
  Sparkles,
  ChevronLeft
} from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <Sidebar className="bg-gray-800 border-gray-700">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-white font-semibold text-lg">turbolearn ai</span>
          <ChevronLeft className="h-4 w-4 text-gray-400 ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={true}
              className="text-white bg-gray-700 hover:bg-gray-600"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-700">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
          <Sparkles className="h-4 w-4 mr-2" />
          Upgrade to Premium
        </Button>
        
        <div className="mt-4 flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">F</span>
          </div>
          <span className="text-gray-300 text-sm">Free Fire</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
