
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Mic, 
  Youtube, 
  FileText,
  Upload,
  Plus
} from 'lucide-react';
import CreateNoteCard from '@/components/CreateNoteCard';
import NotesSection from '@/components/NotesSection';

const DashboardContent = () => {
  const { toast } = useToast();

  const handleAudioUpload = () => {
    toast({
      title: "Audio Upload",
      description: "Audio upload feature coming soon!",
    });
  };

  const handleYouTubeUpload = () => {
    toast({
      title: "YouTube Video",
      description: "YouTube processing feature coming soon!",
    });
  };

  const handleDocumentUpload = () => {
    toast({
      title: "Document Upload",
      description: "Document upload feature coming soon!",
    });
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-gray-800">
        <div className="flex items-center">
          <SidebarTrigger className="text-white hover:bg-gray-800/50" />
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400 text-lg">Transform any content into learning materials</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Quick Actions Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">Create New Note</h2>
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

        {/* Notes Section */}
        <NotesSection />
      </div>
    </div>
  );
};

export default DashboardContent;
