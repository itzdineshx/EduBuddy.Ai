
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Search,
  ZoomIn,
  ZoomOut,
  Download,
  RotateCw,
  Send,
  MessageSquare
} from 'lucide-react';

const PdfViewerContent: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [zoom, setZoom] = useState(80);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(212);
  const [chatMessage, setChatMessage] = useState('');

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 25));

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your question has been sent to the AI assistant.",
    });
    setChatMessage('');
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
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
        
        <h1 className="text-xl font-semibold">Your Uploaded Document</h1>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* PDF Viewer */}
        <div className="flex-1 p-6">
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-4">
              Highlight any text in the PDF to open the <Badge className="bg-blue-600 text-white mx-1">Explain</Badge> or <Badge className="bg-purple-600 text-white mx-1">Chat</Badge> options.
            </p>
            
            {/* PDF Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    value={currentPage}
                    onChange={(e) => setCurrentPage(Number(e.target.value))}
                    className="w-16 bg-gray-800 border-gray-700 text-white text-center"
                  />
                  <span className="text-gray-400">/ {totalPages}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleZoomOut}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="text-gray-400 w-12 text-center">{zoom}%</span>
                  <Button variant="ghost" size="sm" onClick={handleZoomIn}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* PDF Content */}
            <div className="bg-white rounded p-8 text-black min-h-[600px]">
              <div className="text-right text-sm text-gray-600 mb-4">Page Tree.com</div>
              
              <h2 className="text-xl font-bold text-red-600 mb-4">INTRODUCTION TO MACHINE LEARNING</h2>
              <h3 className="text-lg font-bold text-red-500 mb-6">MACHINE LEARNING:</h3>
              
              <p className="text-blue-600 mb-4 leading-relaxed">
                Machine learning is said as a subset of artificial intelligence that is mainly concerned with the development of algorithms that allow a computer to learn from the past data experience on their own. The term machine learning was first introduced by Arthur Samuel in 1959.
              </p>
              
              <h4 className="font-bold mb-2">DEFINITION:</h4>
              <p className="mb-6 leading-relaxed">
                Machine learning enables a machine to automatically learn from data, improve performance from experiences and predict things without being explicitly programmed.
              </p>
              
              <div className="flex justify-center">
                <div className="border-2 border-gray-300 rounded p-4">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="border border-gray-400 rounded p-2 mb-2">Input Data</div>
                      <div className="text-sm">Training</div>
                    </div>
                    <div className="text-center">
                      <div className="border border-gray-400 rounded p-2 mb-2">Machine Learning Algorithm</div>
                    </div>
                    <div className="text-center">
                      <div className="border border-gray-400 rounded p-2 mb-2">Building Model</div>
                    </div>
                    <div className="text-center">
                      <div className="border border-gray-400 rounded p-2 mb-2">Output</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 border-l border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Ask me any question about your notes or content!</h3>
          
          <div className="bg-purple-600 text-white p-3 rounded-lg mb-4">
            <p className="text-sm">what is machine learning</p>
          </div>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg mb-6">
            <p className="text-sm leading-relaxed">
              Machine learning is a field where algorithms learn from data to make predictions or decisions without being explicitly programmed. The image provided in the notes illustrates this process, showing how machine learning systems use historical data to build predictive models. These models enable the system to predict outputs for new data.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
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
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a question here..."
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button
                onClick={handleSendMessage}
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

export default PdfViewerContent;
