
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MoreHorizontal } from 'lucide-react';

interface NoteCardProps {
  id: number;
  title: string;
  createdAt: string;
  type: string;
}

const NoteCard = ({ id, title, createdAt, type }: NoteCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/note/${id}`);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle menu actions
    console.log('Menu clicked for note:', id);
  };

  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
      onClick={handleCardClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-purple-600 rounded-lg">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">Created on {createdAt}</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white"
            onClick={handleMenuClick}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
