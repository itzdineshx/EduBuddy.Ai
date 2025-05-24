
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Settings } from 'lucide-react';

const SettingsContent: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDeleteNotes = () => {
    toast({
      title: "Delete Notes",
      description: "This action cannot be undone.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-white hover:bg-gray-800/50" />
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <Settings className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold">Note Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Notes Title */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Notes Title</h3>
                <p className="text-gray-400 text-sm">This title is visible to others when notes are public</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Supervised Learning and Model Evaluation</p>
              </div>
            </div>
          </Card>

          {/* Notes Publicly Shared */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Notes Publicly Shared</h3>
                <p className="text-gray-400 text-sm">Whether the notes are available to everyone</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-green-600" />
            </div>
          </Card>

          {/* Date Uploaded */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Date Uploaded</h3>
                <p className="text-gray-400 text-sm">The date the lecture was uploaded</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">2025-05-24</p>
              </div>
            </div>
          </Card>

          {/* Class Subject */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Class Subject</h3>
                <p className="text-gray-400 text-sm">The subject selected on upload</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Computer Science</p>
              </div>
            </div>
          </Card>

          {/* Delete Notes */}
          <Card className="bg-gray-900 border-red-800/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-1">Delete Notes</h3>
                <p className="text-gray-400 text-sm">This action cannot be undone.</p>
              </div>
              <Button
                onClick={handleDeleteNotes}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                Delete Notes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
