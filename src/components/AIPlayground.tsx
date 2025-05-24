
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Send, Sparkles, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AIPlayground = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTool, setSelectedTool] = useState('summarize');
  const { toast } = useToast();

  const tools = [
    { id: 'summarize', name: 'Summarize', description: 'Create concise summaries' },
    { id: 'explain', name: 'Explain', description: 'Get detailed explanations' },
    { id: 'quiz', name: 'Generate Quiz', description: 'Create Q&A from content' },
    { id: 'essay', name: 'Essay Help', description: 'Writing assistance' },
    { id: 'code', name: 'Code Review', description: 'Analyze and explain code' },
  ];

  const generateContent = async () => {
    if (!input.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to process.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const prompt = getPromptForTool(selectedTool, input);
      
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
                text: prompt
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
        const generatedText = data.candidates[0].content.parts[0].text;
        setOutput(generatedText);
        
        toast({
          title: "Content generated successfully!",
          description: "Your AI-powered content is ready.",
        });
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Generation failed",
        description: "There was an error generating your content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPromptForTool = (tool: string, content: string) => {
    const prompts = {
      summarize: `Please provide a concise summary of the following text: ${content}`,
      explain: `Please provide a detailed explanation of the following concept: ${content}`,
      quiz: `Create 5 multiple-choice questions based on the following content: ${content}`,
      essay: `Help me improve and expand on this essay draft: ${content}`,
      code: `Please explain this code and suggest improvements: ${content}`,
    };
    return prompts[tool as keyof typeof prompts] || prompts.summarize;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied to clipboard",
      description: "The generated content has been copied.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Learning Playground</h1>
        <p className="text-lg text-gray-600">
          Experiment with our AI-powered learning tools. Select a tool and enter your content to get started.
        </p>
      </div>

      {/* Tool Selection */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
            Choose Your AI Tool
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedTool === tool.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium text-sm">{tool.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Input
              <Badge variant="outline">
                {tools.find(t => t.id === selectedTool)?.name}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your text, questions, or content here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[300px] resize-none"
            />
            <Button
              onClick={generateContent}
              disabled={isLoading || !input.trim()}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Generate with AI
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              AI Generated Output
              {output && (
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-[300px] p-4 bg-gray-50 rounded-lg border">
              {output ? (
                <div className="whitespace-pre-wrap text-gray-900">{output}</div>
              ) : (
                <div className="text-gray-500 italic">
                  Your AI-generated content will appear here...
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIPlayground;
