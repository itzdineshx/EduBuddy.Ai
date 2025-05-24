
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  FileText, 
  MessageSquare,
  Mic,
  BookOpen,
  HelpCircle,
  Settings, 
  Sparkles,
  ChevronLeft
} from 'lucide-react';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'notes', name: 'Notes', icon: FileText, path: '/dashboard' },
    { id: 'chatbot', name: 'Chat Bot', icon: MessageSquare, path: '/playground' },
    { id: 'podcast', name: 'Podcast', icon: Mic, path: '/playground' },
    { id: 'flashcards', name: 'Flashcards', icon: BookOpen, path: '/playground' },
    { id: 'quiz', name: 'Quiz', icon: HelpCircle, path: '/playground' },
    { id: 'transcript', name: 'Transcript', icon: FileText, path: '/playground' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <Sidebar className="bg-gray-950 border-gray-800">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-white font-bold text-xl">turbolearn ai</span>
          <ChevronLeft className="h-4 w-4 text-gray-400 ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton 
                isActive={location.pathname === item.path}
                className={`text-white ${
                  location.pathname === item.path 
                    ? 'bg-gray-800 border-l-4 border-purple-500' 
                    : 'text-gray-300 hover:text-white'
                } hover:bg-gray-800/50 rounded-xl py-3 px-4 font-medium`}
                onClick={() => navigate(item.path)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-6">
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl mb-4"
          onClick={() => navigate('/pricing')}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Upgrade to Premium
        </Button>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">Free Fire</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
