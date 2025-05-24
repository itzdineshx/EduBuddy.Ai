
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  Youtube, 
  FileText,
  Upload,
  Plus,
  Clock,
  TrendingUp,
  BookOpen,
  Brain
} from 'lucide-react';
import CreateNoteCard from '@/components/CreateNoteCard';
import NotesSection from '@/components/NotesSection';

const DashboardContent = () => {
  const { toast } = useToast();
  const [recentActivity] = useState([
    { id: 1, type: 'note', title: 'Machine Learning Basics', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'quiz', title: 'Python Fundamentals Quiz', time: '1 day ago', status: 'in-progress' },
    { id: 3, type: 'podcast', title: 'Data Science Overview', time: '3 days ago', status: 'completed' }
  ]);

  const [stats] = useState({
    totalNotes: 24,
    totalQuizzes: 12,
    studyTime: '48h',
    streak: 7
  });

  const handleAudioUpload = () => {
    toast({
      title: "Audio Upload",
      description: "Audio upload feature is ready to use!",
    });
  };

  const handleYouTubeUpload = () => {
    toast({
      title: "YouTube Video",
      description: "YouTube processing feature is ready to use!",
    });
  };

  const handleDocumentUpload = () => {
    toast({
      title: "Document Upload",
      description: "Document upload feature is ready to use!",
    });
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-gray-800">
        <div className="flex items-center">
          <SidebarTrigger className="text-white hover:bg-gray-800/50 mr-4" />
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome back!</h1>
            <p className="text-gray-400 text-lg">Transform any content into learning materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Badge className="bg-purple-600 text-white px-3 py-1">
            {stats.streak} day streak 🔥
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Notes</p>
                <p className="text-2xl font-bold text-white">{stats.totalNotes}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Quizzes Taken</p>
                <p className="text-2xl font-bold text-white">{stats.totalQuizzes}</p>
              </div>
              <Brain className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Study Time</p>
                <p className="text-2xl font-bold text-white">{stats.studyTime}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Performance</p>
                <p className="text-2xl font-bold text-white">+12%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </Card>
        </div>

        {/* Quick Actions Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">Create New Content</h2>
          <p className="text-gray-400">Upload content and let AI generate study materials for you</p>
        </div>

        {/* Create Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={handleAudioUpload}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:bg-gray-900/80"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Record or Upload Audio</h3>
            <p className="text-gray-400 leading-relaxed">
              Upload lectures, podcasts, or record live. Get transcriptions and AI-generated notes.
            </p>
            <div className="mt-6 flex items-center text-purple-400 font-medium">
              <Upload className="h-4 w-4 mr-2" />
              Upload audio file
            </div>
          </div>

          <div 
            onClick={handleYouTubeUpload}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 cursor-pointer hover:bg-gray-900/80"
          >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Youtube className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">YouTube Video</h3>
            <p className="text-gray-400 leading-relaxed">
              Paste any YouTube link and get comprehensive summaries with timestamps.
            </p>
            <div className="mt-6 flex items-center text-red-400 font-medium">
              <Plus className="h-4 w-4 mr-2" />
              Paste YouTube URL
            </div>
          </div>

          <div 
            onClick={handleDocumentUpload}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:bg-gray-900/80"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Document Upload</h3>
            <p className="text-gray-400 leading-relaxed">
              Upload PDFs, PowerPoints, or any document. Extract key concepts instantly.
            </p>
            <div className="mt-6 flex items-center text-blue-400 font-medium">
              <Upload className="h-4 w-4 mr-2" />
              Upload document
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <Card key={item.id} className="bg-gray-900/50 border-gray-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.type === 'note' ? 'bg-blue-500' :
                        item.type === 'quiz' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {item.type === 'note' ? <FileText className="h-5 w-5 text-white" /> :
                         item.type === 'quiz' ? <Brain className="h-5 w-5 text-white" /> :
                         <Mic className="h-5 w-5 text-white" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.time}</p>
                      </div>
                    </div>
                    <Badge 
                      className={`${
                        item.status === 'completed' ? 'bg-green-600' : 'bg-orange-600'
                      } text-white`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Generate Flashcards
              </Button>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white justify-start">
                <Brain className="h-4 w-4 mr-2" />
                Take a Quiz
              </Button>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white justify-start">
                <Mic className="h-4 w-4 mr-2" />
                Create Podcast
              </Button>
            </div>
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
