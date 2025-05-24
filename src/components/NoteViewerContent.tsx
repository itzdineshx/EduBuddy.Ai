
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Share2,
  Download,
  Edit,
  Trash2,
  Play,
  Pause,
  BookOpen,
  MessageSquare,
  Brain,
  Clock
} from 'lucide-react';

interface NoteViewerContentProps {
  noteId?: string;
}

const NoteViewerContent: React.FC<NoteViewerContentProps> = ({ noteId }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [note, setNote] = useState({
    id: noteId || '1',
    title: 'Supervised Learning and Model Evaluation',
    subject: 'Machine Learning',
    createdAt: '2024-01-15',
    duration: '45 min',
    source: 'Audio Recording',
    content: `
# Supervised Learning

Supervised learning is a type of machine learning where the algorithm learns from labeled training data. The goal is to learn a mapping from inputs to outputs based on example input-output pairs.

## Key Concepts

### Regression
- Regression helps find dependent and independent variables
- If the output consists of one or more continuous variables, the technique is called regression
- Regression algorithms help predict continuous values, such as house prices, market trends, weather patterns, or stock prices

### Classification
- Classification is used when the output variable is a category
- Examples include spam detection, image recognition, and medical diagnosis
- Common algorithms include logistic regression, decision trees, and support vector machines

## Model Evaluation

### Cross-Validation
Cross-validation is a technique used to assess how well a machine learning model will perform on unseen data.

### Metrics
- **Accuracy**: The ratio of correctly predicted instances to total instances
- **Precision**: The ratio of correctly predicted positive observations to total predicted positives
- **Recall**: The ratio of correctly predicted positive observations to total actual positives
- **F1-Score**: The weighted average of precision and recall

## Practical Applications

Supervised learning is widely used in:
- Email spam filtering
- Credit scoring
- Medical diagnosis
- Stock price prediction
- Weather forecasting
    `,
    tags: ['Machine Learning', 'AI', 'Data Science'],
    stats: {
      readTime: '8 min',
      views: 24,
      lastAccessed: '2 hours ago'
    }
  });

  const handleShare = () => {
    toast({
      title: "Note Shared",
      description: "Share link copied to clipboard!",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your note is being downloaded as PDF.",
    });
  };

  const handleEdit = () => {
    toast({
      title: "Edit Mode",
      description: "Edit functionality will be available soon!",
    });
  };

  const handleDelete = () => {
    toast({
      title: "Note Deleted",
      description: "Note has been moved to trash.",
      variant: "destructive",
    });
    navigate('/dashboard');
  };

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Audio Paused" : "Audio Playing",
      description: isPlaying ? "Audio playback paused." : "Playing generated audio version.",
    });
  };

  const handleGenerateFlashcards = () => {
    toast({
      title: "Generating Flashcards",
      description: "Creating flashcards from your note content...",
    });
  };

  const handleGenerateQuiz = () => {
    toast({
      title: "Generating Quiz",
      description: "Creating a quiz based on your note content...",
    });
  };

  const handleOpenChat = () => {
    navigate('/playground');
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
            Back to Dashboard
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleEdit}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            className="border-red-600 text-red-400 hover:bg-red-900/20"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Note Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-blue-600 text-white">{note.subject}</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                {note.source}
              </Badge>
              <span className="text-gray-400 text-sm">{note.createdAt}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">{note.title}</h1>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {note.stats.readTime}
              </div>
              <span>•</span>
              <span>{note.stats.views} views</span>
              <span>•</span>
              <span>Last accessed {note.stats.lastAccessed}</span>
            </div>
          </div>

          {/* Note Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/30 rounded-lg p-8 border border-gray-800">
              <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {note.content}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="w-80 border-l border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          
          <div className="space-y-3 mb-8">
            <Button
              onClick={handlePlayAudio}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white justify-start"
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? 'Pause Audio' : 'Play Audio'}
            </Button>
            
            <Button
              onClick={handleGenerateFlashcards}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white justify-start"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Generate Flashcards
            </Button>
            
            <Button
              onClick={handleGenerateQuiz}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white justify-start"
            >
              <Brain className="h-4 w-4 mr-2" />
              Generate Quiz
            </Button>
            
            <Button
              onClick={handleOpenChat}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white justify-start"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Ask AI Questions
            </Button>
          </div>

          {/* Note Stats */}
          <Card className="bg-gray-900/50 border-gray-800 p-4">
            <h4 className="font-semibold text-white mb-3">Note Statistics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Read Time:</span>
                <span className="text-white">{note.stats.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Views:</span>
                <span className="text-white">{note.stats.views}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">{note.duration}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NoteViewerContent;
