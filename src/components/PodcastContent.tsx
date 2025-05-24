
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Sparkles } from 'lucide-react';

const PodcastContent: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedLength, setSelectedLength] = useState('short');
  const [selectedVoices, setSelectedVoices] = useState(['bella', 'michael']);
  const [instructions, setInstructions] = useState('');

  const voices = [
    { id: 'bella', name: 'Bella', avatar: '/lovable-uploads/05655bcf-af95-4253-af7e-d8c0edd6dd80.png' },
    { id: 'michael', name: 'Michael', avatar: '/lovable-uploads/4714c0fa-f00d-446b-891a-9ccbb3f939bc.png' }
  ];

  const handleGeneratePodcast = () => {
    toast({
      title: "Generating Podcast",
      description: "Your podcast is being generated with the selected settings.",
    });
  };

  const toggleVoiceSelection = (voiceId: string) => {
    setSelectedVoices(prev => 
      prev.includes(voiceId) 
        ? prev.filter(id => id !== voiceId)
        : [...prev, voiceId]
    );
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
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <h1 className="text-4xl font-bold">Welcome to Podcasts</h1>
            <Sparkles className="h-8 w-8 text-yellow-400" />
          </div>
          <p className="text-gray-400 text-lg">Listen to your notes and bring them to life.</p>
        </div>

        <div className="space-y-8">
          {/* Language Selection */}
          <div>
            <label className="block text-lg font-semibold mb-3">Podcast Language:</label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Voice Selection */}
          <div>
            <label className="block text-lg font-semibold mb-4">Select Voices:</label>
            <div className="grid grid-cols-2 gap-6">
              {voices.map((voice) => (
                <Card 
                  key={voice.id}
                  className={`bg-gray-900 border-2 cursor-pointer transition-all duration-200 ${
                    selectedVoices.includes(voice.id) 
                      ? 'border-purple-500 bg-purple-900/20' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => toggleVoiceSelection(voice.id)}
                >
                  <div className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{voice.name[0]}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{voice.name}</h3>
                    {selectedVoices.includes(voice.id) && (
                      <Badge className="bg-purple-600 text-white mt-2">Selected</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div>
            <label className="block text-lg font-semibold mb-3">Podcast Length:</label>
            <Select value={selectedLength} onValueChange={setSelectedLength}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="short">Short (5-15 minutes)</SelectItem>
                <SelectItem value="medium">Medium (15-30 minutes)</SelectItem>
                <SelectItem value="long">Long (30+ minutes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-lg font-semibold mb-3">Special Instructions (Optional)</label>
            <Textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Describe what you want your podcast to focus on, or leave blank to cover the full notes..."
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 min-h-[100px]"
            />
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGeneratePodcast}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 text-lg"
          >
            Generate Podcast
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PodcastContent;
