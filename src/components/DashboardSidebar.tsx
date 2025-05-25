
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
  Home
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, tool?: string) => {
    if (path === '/playground' && tool) {
      navigate(path, { state: { tool } });
    } else if (path === '/settings') {
      navigate('/settings');
    } else if (path === '/dashboard') {
      navigate('/dashboard');
    } else {
      navigate(path);
    }
  };

  const isActive = (path: string, tool?: string) => {
    if (path === '/settings') {
      return location.pathname === '/settings';
    }
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (path === '/playground' && tool) {
      return location.pathname === '/playground';
    }
    return location.pathname === path;
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'notes', name: 'Notes', icon: FileText, path: '/playground', tool: 'notes' },
    { id: 'chatbot', name: 'Chat Bot', icon: MessageSquare, path: '/playground', tool: 'chat' },
    { id: 'podcast', name: 'Podcast', icon: Mic, path: '/playground', tool: 'podcast' },
    { id: 'flashcards', name: 'Flashcards', icon: BookOpen, path: '/playground', tool: 'flashcards' },
    { id: 'quiz', name: 'Quiz', icon: HelpCircle, path: '/playground', tool: 'quiz' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <Sidebar className="border-r border-border bg-background">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-foreground font-bold text-xl">EduBuddy.ai</span>
          </div>
          <ThemeToggle />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton 
                isActive={isActive(item.path, item.tool)}
                className={`w-full justify-start transition-all duration-200 ${
                  isActive(item.path, item.tool)
                    ? 'bg-primary/10 text-primary border-l-4 border-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                } rounded-lg py-3 px-4 font-medium mb-1`}
                onClick={() => handleNavigation(item.path, item.tool)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-6 border-t border-border">
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl mb-4 shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => navigate('/pricing')}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Upgrade to Premium
        </Button>
        
        <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-xl border border-border">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <div className="flex-1">
            <p className="text-foreground font-medium text-sm">Free Fire</p>
            <p className="text-muted-foreground text-xs">Free Plan</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
