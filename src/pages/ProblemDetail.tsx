import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Send, 
  Lightbulb, 
  Code2, 
  Clock, 
  Target,
  CheckCircle,
  XCircle,
  Star,
  MessageCircle
} from 'lucide-react';

const ProblemDetail = () => {
  const { id } = useParams();
  const [code, setCode] = useState('# Write your solution here\n\n');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Mock problem data
  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'easy',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    tags: ['Array', 'Hash Table'],
    likes: 1234,
    solved: false,
    submissions: 2456789,
    acceptance: 89.2
  };

  const languages = [
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Running...');
    
    // Simulate code execution
    setTimeout(() => {
      setOutput(`Sample Test Case 1: Passed ✓
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Expected: [0,1]

Sample Test Case 2: Passed ✓
Input: nums = [3,2,4], target = 6
Output: [1,2]
Expected: [1,2]

All test cases passed!`);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setOutput('Submitting...');
    
    // Simulate submission
    setTimeout(() => {
      setOutput(`Submission Result: Accepted ✓

Runtime: 52 ms (Beats 89.2% of submissions)
Memory: 15.1 MB (Beats 76.8% of submissions)

Test cases passed: 54/54
Time complexity: O(n)
Space complexity: O(n)`);
      setIsRunning(false);
    }, 3000);
  };

  const handleGetHint = () => {
    setOutput(`💡 AI Hint:

Think about what data structure would allow you to quickly check if a number exists and retrieve its position.

Consider this approach:
1. Use a hash map to store numbers and their indices
2. For each number, check if (target - number) exists in the hash map
3. If it exists, you've found your answer!

Would you like another hint?`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'badge-easy';
      case 'medium': return 'badge-medium';
      case 'hard': return 'badge-hard';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Description */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{problem.title}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>{problem.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Code2 className="w-4 h-4" />
                        <span>{problem.submissions.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Acceptance Rate</div>
                    <div className="text-lg font-semibold text-success">{problem.acceptance}%</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Description</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {problem.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {problem.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="constraints">Constraints</TabsTrigger>
              </TabsList>
              
              <TabsContent value="examples" className="space-y-4">
                {problem.examples.map((example, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Example {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <strong>Input:</strong> <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{example.input}</code>
                      </div>
                      <div>
                        <strong>Output:</strong> <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{example.output}</code>
                      </div>
                      <div>
                        <strong>Explanation:</strong> <span className="text-sm text-muted-foreground">{example.explanation}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="constraints">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Constraints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {problem.constraints.map((constraint, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <code className="bg-muted px-1 rounded font-mono">{constraint}</code>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Solution</CardTitle>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="code-editor min-h-[300px] resize-none font-mono text-sm"
                  placeholder="Write your solution here..."
                />
                
                <div className="flex space-x-2 mt-4">
                  <Button
                    variant="outline"
                    onClick={handleRun}
                    disabled={isRunning}
                    className="flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? 'Running...' : 'Run'}
                  </Button>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={isRunning}
                    className="btn-gradient-primary flex items-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isRunning ? 'Submitting...' : 'Submit'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleGetHint}
                    className="flex items-center"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Get Hint
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Output */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Output</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-editor-bg rounded-lg p-4 min-h-[200px] font-mono text-sm">
                  <pre className="whitespace-pre-wrap text-foreground">
                    {output || 'Run your code to see the output...'}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;