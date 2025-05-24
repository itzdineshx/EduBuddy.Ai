
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, HelpCircle, ArrowRight } from 'lucide-react';

const QuizContent: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState(false);
  
  const totalQuestions = 2;
  const progress = 0; // 0% mastery
  
  const topics = [
    { name: "Regression Analysis", mastery: 0, correct: 0, color: "border-orange-500 bg-orange-500/10" },
    { name: "Bayesian Methods", mastery: 0, correct: 0, color: "border-yellow-500 bg-yellow-500/10" },
    { name: "Gradient Descent Optim...", mastery: 0, correct: 0, color: "border-blue-500 bg-blue-500/10" },
    { name: "Linear Discriminant Anal...", mastery: 0, correct: 0, color: "border-green-500 bg-green-500/10" },
    { name: "Support Vector Machine ...", mastery: 0, correct: 0, color: "border-purple-500 bg-purple-500/10" }
  ];

  const questions = [
    {
      question: "When evaluating a binary classification model using a confusion matrix, which metric measures the proportion of actual positive cases that were correctly identified?",
      options: [
        { id: 'A', text: 'Precision (TP/(TP + FP))', formula: true },
        { id: 'B', text: 'Accuracy ((TP + TN)/Total)', formula: true },
        { id: 'C', text: 'Recall (TP/(TP + FN))', formula: true },
        { id: 'D', text: 'F-measure (2×(Precision×Recall)/(Precision + Recall))', formula: true, highlight: true }
      ],
      correctAnswer: 'C',
      hint: "Think about which metric focuses on finding all actual positive cases."
    }
  ];

  const currentQuestionData = questions[0]; // Using first question for demo

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      toast({
        title: "Please select an answer",
        description: "Choose an option before proceeding.",
        variant: "destructive",
      });
      return;
    }
    
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;
    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: isCorrect ? "Well done!" : `The correct answer is ${currentQuestionData.correctAnswer}`,
      variant: isCorrect ? "default" : "destructive",
    });
    
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer('');
    setShowHint(false);
  };

  const handleShowHint = () => {
    setShowHint(true);
    toast({
      title: "Hint revealed",
      description: currentQuestionData.hint,
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

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-800 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2">Your Progress</h2>
            <p className="text-gray-400 mb-4">Overall Mastery</p>
            <div className="bg-purple-600 h-2 rounded-full mb-2">
              <div 
                className="bg-purple-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-2xl font-bold text-white">{progress}%</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Topics</h3>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs">
                Deselect All
              </Button>
            </div>
            
            <div className="space-y-3">
              {topics.map((topic, index) => (
                <Card key={index} className={`p-4 cursor-pointer transition-all duration-200 ${topic.color} border-l-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm">{topic.name}</h4>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{topic.mastery}% Mastery</span>
                    <span>{topic.correct} correct</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Turbo Quizzes</h1>
              <Badge className="bg-red-600 text-white">Regression Analysis</Badge>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-purple-600 text-white text-lg px-3 py-1">
                  Question {currentQuestion} / {totalQuestions}
                </Badge>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-8 leading-relaxed">
                {currentQuestionData.question}
              </h2>

              <div className="space-y-4 mb-8">
                {currentQuestionData.options.map((option) => (
                  <Card
                    key={option.id}
                    className={`p-4 cursor-pointer transition-all duration-200 border-2 ${
                      selectedAnswer === option.id
                        ? 'border-purple-500 bg-purple-900/20'
                        : 'border-gray-700 hover:border-gray-600 bg-gray-900/50'
                    } ${option.highlight ? 'border-red-500/50' : ''}`}
                    onClick={() => handleAnswerSelect(option.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-white text-lg">{option.id}</span>
                      <span className={`text-white ${option.formula ? 'font-mono' : ''}`}>
                        {option.text}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handleShowHint}
                  className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Show Hint
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {showHint && (
                <Card className="bg-blue-900/20 border-blue-600 p-4 mt-4">
                  <p className="text-blue-300">{currentQuestionData.hint}</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
