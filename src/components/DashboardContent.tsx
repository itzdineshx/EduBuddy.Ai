
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Mic, 
  Youtube, 
  FileText,
  Upload,
  Plus,
  Clock,
  TrendingUp,
  BookOpen,
  Brain,
  Target,
  Award,
  Calendar,
  Zap,
  Users,
  Star
} from 'lucide-react';
import CreateNoteCard from '@/components/CreateNoteCard';
import NotesSection from '@/components/NotesSection';

const DashboardContent = () => {
  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recentActivity] = useState([
    { id: 1, type: 'note', title: 'Machine Learning Basics', time: '2 hours ago', status: 'completed', progress: 100 },
    { id: 2, type: 'quiz', title: 'Python Fundamentals Quiz', time: '1 day ago', status: 'in-progress', progress: 75 },
    { id: 3, type: 'podcast', title: 'Data Science Overview', time: '3 days ago', status: 'completed', progress: 100 },
    { id: 4, type: 'flashcard', title: 'JavaScript Concepts', time: '5 days ago', status: 'in-progress', progress: 60 }
  ]);

  const [stats] = useState({
    totalNotes: 24,
    totalQuizzes: 12,
    studyTime: '48h',
    streak: 7,
    weeklyGoal: 75,
    achievements: 12,
    rank: 'Gold'
  });

  const [weeklyProgress] = useState([
    { day: 'Mon', hours: 3 },
    { day: 'Tue', hours: 2.5 },
    { day: 'Wed', hours: 4 },
    { day: 'Thu', hours: 3.5 },
    { day: 'Fri', hours: 2 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 0 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAudioUpload = () => {
    toast({
      title: "🎵 Audio Upload Ready",
      description: "Transform your audio content into smart notes and flashcards!",
    });
  };

  const handleYouTubeUpload = () => {
    toast({
      title: "📺 YouTube Processor Active",
      description: "Extract knowledge from any YouTube video instantly!",
    });
  };

  const handleDocumentUpload = () => {
    toast({
      title: "📄 Document AI Ready",
      description: "Upload PDFs and documents for instant analysis!",
    });
  };

  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return '🌅 Good Morning';
    if (hour < 17) return '☀️ Good Afternoon';
    return '🌙 Good Evening';
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-accent/5 min-h-screen">
      {/* Enhanced Header */}
      <div className="glass-effect border-b border-border/50 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SidebarTrigger className="text-foreground hover:bg-accent/50 mr-4 rounded-xl" />
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                {greeting()}, Free Fire! 
                <div className="animate-bounce">👋</div>
              </h1>
              <p className="text-muted-foreground text-lg">Ready to supercharge your learning today?</p>
              <p className="text-sm text-muted-foreground mt-1">
                {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-sm font-semibold">
              🔥 {stats.streak} day streak
            </Badge>
            <Badge className="bg-gradient-to-r from-gold to-yellow-500 text-white px-4 py-2 text-sm font-semibold">
              👑 {stats.rank} Rank
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 p-6 hover-lift group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Study Notes</p>
                <p className="text-3xl font-bold text-foreground group-hover:text-blue-500 transition-colors">{stats.totalNotes}</p>
                <p className="text-xs text-green-500 font-medium">+3 this week</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 p-6 hover-lift group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Quizzes Completed</p>
                <p className="text-3xl font-bold text-foreground group-hover:text-green-500 transition-colors">{stats.totalQuizzes}</p>
                <p className="text-xs text-green-500 font-medium">98% avg score</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 p-6 hover-lift group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Study Time</p>
                <p className="text-3xl font-bold text-foreground group-hover:text-purple-500 transition-colors">{stats.studyTime}</p>
                <p className="text-xs text-green-500 font-medium">+8h this week</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 p-6 hover-lift group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Achievements</p>
                <p className="text-3xl font-bold text-foreground group-hover:text-orange-500 transition-colors">{stats.achievements}</p>
                <p className="text-xs text-green-500 font-medium">2 new badges</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-background to-accent/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Weekly Study Progress</h3>
              <p className="text-muted-foreground">Goal: 20 hours per week</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{stats.weeklyGoal}%</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <Progress value={stats.weeklyGoal} className="mb-4 h-3" />
          <div className="grid grid-cols-7 gap-4">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="text-center">
                <div className={`w-8 h-16 bg-gradient-to-t from-primary to-purple-500 rounded-lg mb-2 flex items-end justify-center relative overflow-hidden ${
                  day.hours === 0 ? 'opacity-20' : ''
                }`}>
                  <div 
                    className="bg-white/30 w-full rounded-lg transition-all duration-300"
                    style={{ height: `${(day.hours / 4) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{day.day}</p>
                <p className="text-xs font-bold text-foreground">{day.hours}h</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Enhanced Create Content Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Create New Content</h2>
              <p className="text-muted-foreground">Upload content and let AI generate study materials for you</p>
            </div>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <Plus className="h-4 w-4 mr-2" />
              Quick Create
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={handleAudioUpload}
              className="group bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border-2 border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Audio Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upload lectures, podcasts, or record live. Get transcriptions and AI-generated notes.
              </p>
              <div className="flex items-center text-purple-500 font-medium">
                <Upload className="h-4 w-4 mr-2" />
                Upload audio file
              </div>
              <Badge className="mt-3 bg-purple-500/20 text-purple-700 text-xs">Popular</Badge>
            </div>

            <div 
              onClick={handleYouTubeUpload}
              className="group bg-gradient-to-br from-red-500/10 to-orange-500/5 backdrop-blur-sm border-2 border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Youtube className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">YouTube Videos</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Paste any YouTube link and get comprehensive summaries with timestamps.
              </p>
              <div className="flex items-center text-red-500 font-medium">
                <Plus className="h-4 w-4 mr-2" />
                Paste YouTube URL
              </div>
              <Badge className="mt-3 bg-red-500/20 text-red-700 text-xs">Trending</Badge>
            </div>

            <div 
              onClick={handleDocumentUpload}
              className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border-2 border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Documents</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upload PDFs, PowerPoints, or any document. Extract key concepts instantly.
              </p>
              <div className="flex items-center text-blue-500 font-medium">
                <Upload className="h-4 w-4 mr-2" />
                Upload document
              </div>
              <Badge className="mt-3 bg-blue-500/20 text-blue-700 text-xs">New</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Recent Activity */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <Card key={item.id} className="p-4 hover-lift group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.type === 'note' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        item.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                        item.type === 'podcast' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-orange-500 to-orange-600'
                      } group-hover:scale-110 transition-transform`}>
                        {item.type === 'note' ? <FileText className="h-6 w-6 text-white" /> :
                         item.type === 'quiz' ? <Brain className="h-6 w-6 text-white" /> :
                         item.type === 'podcast' ? <Mic className="h-6 w-6 text-white" /> :
                         <BookOpen className="h-6 w-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                        <Progress value={item.progress} className="mt-2 h-2" />
                      </div>
                    </div>
                    <Badge 
                      className={`${
                        item.status === 'completed' ? 'bg-green-500/20 text-green-700' : 'bg-orange-500/20 text-orange-700'
                      }`}
                    >
                      {item.status === 'completed' ? '✓ Completed' : `${item.progress}% Done`}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Actions Sidebar */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white justify-start group">
                <BookOpen className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                Generate Flashcards
                <Badge className="ml-auto bg-white/20 text-white text-xs">AI</Badge>
              </Button>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white justify-start group">
                <Brain className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                Take a Quiz
                <Badge className="ml-auto bg-white/20 text-white text-xs">Smart</Badge>
              </Button>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white justify-start group">
                <Mic className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                Create Podcast
                <Badge className="ml-auto bg-white/20 text-white text-xs">New</Badge>
              </Button>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white justify-start group">
                <Target className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                Set Study Goals
                <Badge className="ml-auto bg-white/20 text-white text-xs">Pro</Badge>
              </Button>
            </div>

            {/* Study Streak Card */}
            <Card className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-purple-500/5 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{stats.streak} Day Streak!</h4>
                <p className="text-sm text-muted-foreground mb-4">Keep the momentum going</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                  Continue Streak
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-12">
          <NotesSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
