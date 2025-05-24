import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PdfViewerContent from './PdfViewerContent';
import PodcastContent from './PodcastContent';
import FlashcardsContent from './FlashcardsContent';
import QuizContent from './QuizContent';
import SettingsContent from './SettingsContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Mic, 
  FileText, 
  BookOpen, 
  HelpCircle,
  X,
  Send,
  Loader2,
  Sparkles,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PlaygroundContent = () => {
  const location = useLocation();
  const [selectedTool, setSelectedTool] = useState('notes');
  const [currentNote, setCurrentNote] = useState('Supervised Learning and Model Evaluation');
  const [chatMessage, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'assistant',
      content: 'Ask me any question about your notes or content!'
    }
  ]);
  const { toast } = useToast();

  // Handle tool selection from navigation state
  useEffect(() => {
    if (location.state?.tool) {
      setSelectedTool(location.state.tool);
    }
  }, [location.state]);

  // Render different components based on selected tool
  if (selectedTool === 'notes') {
    return <PdfViewerContent />;
  }
  
  if (selectedTool === 'podcast') {
    return <PodcastContent />;
  }
  
  if (selectedTool === 'flashcards') {
    return <FlashcardsContent />;
  }
  
  if (selectedTool === 'quiz') {
    return <QuizContent />;
  }

  if (selectedTool === 'settings') {
    return <SettingsContent />;
  }

  const tools = [
    { id: 'notes', name: 'Notes', icon: FileText },
    { id: 'chat', name: 'Chat Bot', icon: MessageSquare },
    { id: 'podcast', name: 'Podcast', icon: Mic },
    { id: 'flashcards', name: 'Flashcards', icon: BookOpen },
    { id: 'quiz', name: 'Quiz', icon: HelpCircle },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const quickActions = [
    { 
      id: 'quiz', 
      name: 'Quiz', 
      description: 'Test your knowledge',
      icon: '🎯',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      id: 'flashcards', 
      name: 'Flashcards', 
      description: 'Study the content',
      icon: '📚',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      id: 'podcast', 
      name: 'Podcast', 
      description: 'Listen to your notes',
      icon: '🎧',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const handleSendMessage = async () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage;
    setMessage('');
    setChatHistory(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBp_pWhRL7CulKzFLG7Vlg2ByT_Tv4eoGc',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Based on the note about "${currentNote}" and the content about Supervised Learning and Regression, please answer: ${userMessage}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.8,
              maxOutputTokens: 1024,
            }
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setChatHistory(prev => [...prev, { type: 'assistant', content: aiResponse }]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error:', error);
      setChatHistory(prev => [...prev, { 
        type: 'assistant', 
        content: 'Sorry, I encountered an error processing your request. Please try again.' 
      }]);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
          <h1 className="text-lg font-semibold">{currentNote}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            Close Chat
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {quickActions.map((action) => (
              <Card 
                key={action.id}
                className="bg-gray-900 border-gray-800 p-4 cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => setSelectedTool(action.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center text-white text-lg`}>
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{action.name}</h3>
                    <p className="text-sm text-gray-400">{action.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Note Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Supervised Learning</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Regression</h3>
              
              <p className="text-gray-300 leading-relaxed">
                Regression helps find dependent and independent variables. If the output 
                consists of one or more continuous variables, the technique is called regression. 
                Regression algorithms help predict continuous values, such as house prices, 
                market trends, weather patterns, or stock prices.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Regression analysis is a set of statistical methods used for the estimation of 
                relationships between a dependent variable and one or more independent 
                variables.
              </p>

              <div className="border-l-4 border-purple-500 pl-4 py-2 bg-gray-900/50 rounded-r">
                <p className="text-gray-300 italic">
                  "Regression is a statistical method to summarize the average relationship 
                  between two continuous quantitative variables."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 border-l border-gray-800 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-800">
            <h3 className="font-semibold text-white mb-2">Ask me any question about your notes or content!</h3>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-200'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-200 p-3 rounded-lg">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                id="proMode"
                className="rounded border-gray-600 bg-gray-800"
              />
              <label htmlFor="proMode" className="text-sm text-gray-400 italic">
                Pro Mode
              </label>
            </div>
            <div className="flex space-x-2">
              <Input
                value={chatMessage}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a question here..."
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !chatMessage.trim()}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundContent;
