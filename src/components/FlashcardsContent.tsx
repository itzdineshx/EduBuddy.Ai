
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const FlashcardsContent: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentCard, setCurrentCard] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const totalCards = 102;
  
  const flashcards = [
    {
      question: "How does LDA help in multi-class classification?",
      answer: "It increases feature space to better separate classes and reduce overlap."
    },
    {
      question: "What is the core idea behind Logistic Regression?",
      answer: "To predict the probability of a binary outcome using an algorithm that maps any real number to a value between 0 and 1."
    },
    {
      question: "What are the main components of supervised learning?",
      answer: "Training data with input-output pairs, a learning algorithm, and a model that can make predictions on new data."
    }
  ];

  const currentFlashcard = flashcards[(currentCard - 1) % flashcards.length];

  const handleNext = () => {
    if (currentCard < totalCards) {
      setCurrentCard(prev => prev + 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 1) {
      setCurrentCard(prev => prev - 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer);
  };

  const handleReset = () => {
    setCurrentCard(1);
    setShowAnswer(false);
    setIsFlipped(false);
    toast({
      title: "Flashcards Reset",
      description: "Starting from the beginning!",
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
        
        <Button
          variant="ghost"
          onClick={handleReset}
          className="text-gray-400 hover:text-white"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Content */}
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Flashcards</h1>
            <p className="text-gray-400">{totalCards} flashcards to study</p>
          </div>
        </div>

        {/* Main Flashcard */}
        <div className="mb-8">
          <Card 
            className="bg-gray-900 border-gray-800 min-h-[400px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-800"
            onClick={handleFlipCard}
          >
            <div className="p-12 text-center">
              {!showAnswer ? (
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6 leading-relaxed">
                    {currentFlashcard.question}
                  </h2>
                  <p className="text-gray-400">Click to reveal answer</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold text-gray-300 mb-6 leading-relaxed">
                    {currentFlashcard.answer}
                  </h2>
                  <p className="text-gray-400">Click to show question</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentCard === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Badge className="bg-purple-600 text-white text-lg px-4 py-2">
            {currentCard} / {totalCards}
          </Badge>
          
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentCard === totalCards}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview Cards */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border-gray-800 p-4">
            <h3 className="font-semibold text-white mb-2">What is the core idea behind Logistic Regression?</h3>
            <p className="text-gray-400 text-sm">To predict the probability of a binary outcome using an</p>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 p-4">
            <h3 className="font-semibold text-white mb-2">How does LDA help in multi-class classification?</h3>
            <p className="text-gray-400 text-sm">It increases feature space to better separate classes and reduce</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsContent;
