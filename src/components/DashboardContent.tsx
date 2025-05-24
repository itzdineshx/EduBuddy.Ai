
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Mic, 
  Youtube, 
  FileText
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
    <div className="flex-1 bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center p-6 border-b border-gray-800">
        <SidebarTrigger className="text-white hover:bg-gray-800" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Create new notes</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Create Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CreateNoteCard
            icon={Mic}
            title="Record or upload audio"
            description="Upload an audio file"
            color="purple"
            onClick={handleAudioUpload}
          />
          <CreateNoteCard
            icon={Youtube}
            title="YouTube video"
            description="Paste a YouTube link"
            color="red"
            onClick={handleYouTubeUpload}
          />
          <CreateNoteCard
            icon={FileText}
            title="Document upload"
            description="Any PDF, DOC, PPT, etc!"
            color="blue"
            onClick={handleDocumentUpload}
          />
        </div>

        {/* Notes Section */}
        <NotesSection />
      </div>
    </div>
  );
};

export default DashboardContent;
