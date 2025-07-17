import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Bot, 
  User, 
  Code2, 
  Lightbulb, 
  BookOpen, 
  Zap,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  codeBlock?: string;
  language?: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI coding assistant. I can help you with:\n\n• Debugging code\n• Algorithm explanations\n• Code optimization\n• Problem-solving strategies\n• Data structure recommendations\n\nWhat would you like to work on today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    {
      icon: Code2,
      title: 'Debug Code',
      description: 'Help me find bugs in my code',
      query: 'Can you help me debug this code?'
    },
    {
      icon: Lightbulb,
      title: 'Algorithm Hint',
      description: 'Get hints for solving problems',
      query: 'I need a hint for solving this algorithm problem'
    },
    {
      icon: BookOpen,
      title: 'Explain Concept',
      description: 'Explain programming concepts',
      query: 'Can you explain this programming concept?'
    },
    {
      icon: Zap,
      title: 'Optimize Code',
      description: 'Help improve code performance',
      query: 'How can I optimize this code for better performance?'
    }
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: `I'd be happy to help you with that! Let me analyze your request and provide you with a detailed solution.

Here's what I suggest:

1. **First, let's break down the problem**: Understanding the core issue is crucial for finding the right approach.

2. **Consider the time complexity**: We want to aim for an optimal solution that scales well.

3. **Think about edge cases**: What happens with empty inputs, single elements, or extreme values?

Would you like me to elaborate on any of these points or do you have specific code you'd like me to review?`,
          codeBlock: `def example_solution(arr):
    # Your optimized solution here
    if not arr:
        return []
    
    # Process the array efficiently
    result = []
    for item in arr:
        # Add your logic here
        result.append(item)
    
    return result`,
          language: 'python'
        },
        {
          content: `Great question! This is a common challenge in competitive programming. Let me walk you through the approach step by step:

**Algorithm Strategy:**
• Use a hash map for O(1) lookups
• Two-pointer technique for sorted arrays
• Consider sliding window for substring problems

**Code Pattern:**
The key insight here is to use the right data structure. For this type of problem, I recommend starting with a hash map approach.

**Time Complexity:** O(n)
**Space Complexity:** O(n)

Would you like me to explain any specific part in more detail?`,
          codeBlock: `// Example implementation
function solve(input) {
    const map = new Map();
    
    for (let i = 0; i < input.length; i++) {
        if (map.has(input[i])) {
            // Found duplicate or target
            return [map.get(input[i]), i];
        }
        map.set(input[i], i);
    }
    
    return [-1, -1];
}`,
          language: 'javascript'
        }
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse.content,
        timestamp: new Date(),
        codeBlock: randomResponse.codeBlock,
        language: randomResponse.language
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">AI Assistant</h1>
          <p className="text-muted-foreground">
            Your personal coding mentor powered by advanced AI
          </p>
        </div>

        {/* Quick Actions */}
        {messages.length <= 1 && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={index} 
                  className="cursor-pointer hover-lift"
                  onClick={() => handleQuickAction(action.query)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {action.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        )}

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            {/* Messages */}
            <ScrollArea className="flex-1 pr-4 mb-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        {message.type === 'assistant' ? (
                          <Bot className="w-4 h-4 text-primary" />
                        ) : (
                          <User className="w-4 h-4 text-secondary" />
                        )}
                        <span className="text-sm font-medium">
                          {message.type === 'assistant' ? 'AI Assistant' : 'You'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                        
                        {message.codeBlock && (
                          <div className="mt-3 p-3 bg-editor-bg rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {message.language}
                              </Badge>
                            </div>
                            <pre className="text-xs font-mono text-foreground overflow-x-auto">
                              <code>{message.codeBlock}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">AI Assistant</span>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about coding..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputMessage);
                  }
                }}
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim() || isTyping}
                className="btn-gradient-primary"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;