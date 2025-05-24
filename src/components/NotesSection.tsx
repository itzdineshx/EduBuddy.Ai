
import React from 'react';
import { Button } from '@/components/ui/button';
import { FolderPlus, FileText, Calendar, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotesSection = () => {
  const navigate = useNavigate();

  const notes = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      createdAt: 'Today, 2:30 PM',
      type: 'audio',
      tags: ['AI', 'ML', 'Data Science'],
      duration: '45 min'
    },
    {
      id: 2,
      title: 'React Best Practices',
      createdAt: 'Yesterday, 4:15 PM',
      type: 'document',
      tags: ['React', 'JavaScript', 'Frontend'],
      pages: '12 pages'
    },
    {
      id: 3,
      title: 'Introduction to Quantum Computing',
      createdAt: 'May 22, 2024',
      type: 'youtube',
      tags: ['Quantum', 'Physics', 'Computing'],
      duration: '1h 23min'
    }
  ];

  const getIconByType = (type: string) => {
    switch (type) {
      case 'audio':
        return <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>;
      case 'youtube':
        return <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>;
      default:
        return <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <FileText className="h-6 w-6 text-white" />
        </div>;
    }
  };

  return (
    <div>
      {/* All Notes Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Recent Notes</h2>
          <p className="text-gray-400">Your AI-generated study materials</p>
        </div>
        <Button 
          variant="outline" 
          className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-purple-500/50 rounded-xl px-6 py-3"
        >
          <FolderPlus className="h-5 w-5 mr-2" />
          Create Folder
        </Button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => navigate(`/note/${note.id}`)}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:bg-gray-900/80"
          >
            <div className="flex items-start justify-between mb-4">
              {getIconByType(note.type)}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle more options
                }}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
              {note.title}
            </h3>
            
            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {note.createdAt}
              {note.duration && (
                <>
                  <span className="mx-2">•</span>
                  <span>{note.duration}</span>
                </>
              )}
              {note.pages && (
                <>
                  <span className="mx-2">•</span>
                  <span>{note.pages}</span>
                </>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {notes.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="h-12 w-12 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No notes yet</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Upload your first audio, video, or document to start creating AI-powered study materials.
          </p>
          <Button
            onClick={() => {/* Scroll to top or focus upload */}}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl"
          >
            Create Your First Note
          </Button>
        </div>
      )}
    </div>
  );
};

export default NotesSection;
