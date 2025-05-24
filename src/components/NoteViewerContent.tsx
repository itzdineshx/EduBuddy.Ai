
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Share,
  MoreHorizontal,
  Play,
  Pause
} from 'lucide-react';

interface NoteViewerContentProps {
  noteId?: string;
}

const NoteViewerContent = ({ noteId }: NoteViewerContentProps) => {
  const navigate = useNavigate();
  const [note, setNote] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Mock note data - replace with actual API call
    setNote({
      id: noteId,
      title: 'Supervised Learning and Model Evaluation',
      type: 'audio',
      createdAt: 'Saturday, May 24th',
      transcript: `Welcome to today's lesson on supervised learning and model evaluation. 

In supervised learning, we work with labeled datasets where both input features and target outputs are known. This allows us to train models that can make predictions on new, unseen data.

Key concepts we'll cover today:
1. Training and validation datasets
2. Cross-validation techniques
3. Performance metrics (accuracy, precision, recall, F1-score)
4. Overfitting and underfitting
5. Regularization methods

Let's start with understanding the difference between training and validation data...`,
      summary: [
        'Supervised learning uses labeled datasets for training',
        'Cross-validation helps assess model performance',
        'Key metrics include accuracy, precision, recall, and F1-score',
        'Overfitting occurs when models memorize training data',
        'Regularization techniques help prevent overfitting'
      ],
      tags: ['machine-learning', 'supervised-learning', 'data-science', 'validation'],
      audioUrl: '/audio/sample.mp3' // Mock audio URL
    });
  }, [noteId]);

  if (!note) {
    return (
      <div className="flex-1 bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">Loading note...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center">
          <SidebarTrigger className="text-white hover:bg-gray-800" />
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="ml-2 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Note Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-600 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{note.title}</h1>
              <p className="text-gray-400">Created on {note.createdAt}</p>
            </div>
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {note.type}
            </Badge>
          </div>

          {/* Audio Player (if audio note) */}
          {note.type === 'audio' && (
            <Card className="bg-gray-800 border-gray-700 mb-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-purple-400 hover:text-purple-300 hover:bg-gray-700"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <div className="flex-1">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">12:34 / 35:20</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="border-purple-600 text-purple-400">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Summary */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {note.summary.map((point: string, index: number) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Full Transcript */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Full Transcript</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                {note.transcript}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoteViewerContent;
