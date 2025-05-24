
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface CreateNoteCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'purple' | 'red' | 'blue';
}

const CreateNoteCard = ({ icon: Icon, title, description, color }: CreateNoteCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'red':
        return 'bg-red-600 hover:bg-red-700';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${getColorClasses()}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateNoteCard;
