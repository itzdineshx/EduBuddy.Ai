
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FolderPlus, MoreHorizontal, FileText } from 'lucide-react';
import NoteCard from '@/components/NoteCard';

const NotesSection = () => {
  const notes = [
    {
      id: 1,
      title: 'Supervised Learning and Model Evaluation',
      createdAt: 'Saturday, May 24th',
      type: 'document'
    },
    {
      id: 2,
      title: 'Introduction to Data Science Fundamentals',
      createdAt: 'Saturday, May 24th',
      type: 'document'
    }
  ];

  return (
    <div>
      {/* All Notes Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">All Notes</h2>
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
          <FolderPlus className="h-4 w-4 mr-2" />
          Create Folder
        </Button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            createdAt={note.createdAt}
            type={note.type}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesSection;
