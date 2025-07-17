import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Code2, 
  Clock, 
  CheckCircle, 
  XCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Find two numbers in an array that add up to a target sum.',
      difficulty: 'easy',
      tags: ['Array', 'Hash Table'],
      solved: true,
      likes: 1234,
      submissions: 2456789
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      description: 'Add two numbers represented as linked lists.',
      difficulty: 'medium',
      tags: ['Linked List', 'Math'],
      solved: false,
      likes: 987,
      submissions: 1543210
    },
    {
      id: 3,
      title: 'Merge K Sorted Lists',
      description: 'Merge k sorted linked lists and return as one sorted list.',
      difficulty: 'hard',
      tags: ['Linked List', 'Divide and Conquer', 'Heap'],
      solved: false,
      likes: 2345,
      submissions: 567890
    },
    {
      id: 4,
      title: 'Valid Parentheses',
      description: 'Determine if the input string has valid parentheses.',
      difficulty: 'easy',
      tags: ['String', 'Stack'],
      solved: true,
      likes: 1876,
      submissions: 2789012
    },
    {
      id: 5,
      title: 'Binary Tree Inorder Traversal',
      description: 'Return the inorder traversal of a binary tree.',
      difficulty: 'medium',
      tags: ['Tree', 'DFS', 'Stack'],
      solved: false,
      likes: 1456,
      submissions: 987654
    },
    {
      id: 6,
      title: 'Regular Expression Matching',
      description: 'Implement regular expression matching with support for . and *.',
      difficulty: 'hard',
      tags: ['String', 'Dynamic Programming'],
      solved: false,
      likes: 3421,
      submissions: 234567
    }
  ];

  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'badge-easy';
      case 'medium': return 'badge-medium';
      case 'hard': return 'badge-hard';
      default: return 'bg-muted';
    }
  };

  const getStatusIcon = (solved: boolean) => {
    return solved ? (
      <CheckCircle className="w-5 h-5 text-success" />
    ) : (
      <XCircle className="w-5 h-5 text-muted-foreground" />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Problems</h1>
          <p className="text-muted-foreground">
            Sharpen your coding skills with our curated collection of problems
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Difficulty Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Filter className="w-5 h-5 mr-2" />
                  Difficulty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty === 'all' ? 'All' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Easy</span>
                  <span className="text-sm font-medium">2/15</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '13%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Medium</span>
                  <span className="text-sm font-medium">0/25</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hard</span>
                  <span className="text-sm font-medium">0/20</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Problems List */}
          <div className="flex-1">
            <div className="grid gap-4">
              {filteredProblems.map((problem) => (
                <Card key={problem.id} className="hover-lift group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(problem.solved)}
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {problem.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {problem.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-wrap gap-1">
                          {problem.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{problem.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Code2 className="w-4 h-4" />
                          <span>{problem.submissions.toLocaleString()}</span>
                        </div>
                        <Link to={`/problem/${problem.id}`}>
                          <Button size="sm" className="ml-4">
                            Solve
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProblems.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No problems found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;