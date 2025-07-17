import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Medal, 
  Award, 
  Crown, 
  TrendingUp, 
  Star, 
  Clock,
  Target,
  Zap,
  Users
} from 'lucide-react';

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  const leaderboardData = [
    {
      rank: 1,
      username: 'CodeMaster2024',
      avatar: '/api/placeholder/32/32',
      points: 2847,
      problemsSolved: 234,
      streak: 45,
      country: 'US',
      level: 'Grandmaster',
      badges: ['🏆', '🔥', '⚡'],
      weeklyChange: '+12'
    },
    {
      rank: 2,
      username: 'AlgorithmNinja',
      avatar: '/api/placeholder/32/32',
      points: 2653,
      problemsSolved: 198,
      streak: 32,
      country: 'IN',
      level: 'Master',
      badges: ['🥈', '🎯', '💎'],
      weeklyChange: '+8'
    },
    {
      rank: 3,
      username: 'DataStructureQueen',
      avatar: '/api/placeholder/32/32',
      points: 2456,
      problemsSolved: 176,
      streak: 28,
      country: 'CN',
      level: 'Master',
      badges: ['🥉', '🌟', '🚀'],
      weeklyChange: '+5'
    },
    {
      rank: 4,
      username: 'BinarySearcher',
      avatar: '/api/placeholder/32/32',
      points: 2234,
      problemsSolved: 145,
      streak: 23,
      country: 'DE',
      level: 'Expert',
      badges: ['🎨', '🔧', '⭐'],
      weeklyChange: '+3'
    },
    {
      rank: 5,
      username: 'RecursiveGenius',
      avatar: '/api/placeholder/32/32',
      points: 2098,
      problemsSolved: 132,
      streak: 19,
      country: 'JP',
      level: 'Expert',
      badges: ['🧠', '🏅', '💡'],
      weeklyChange: '+2'
    },
    {
      rank: 6,
      username: 'GraphTraverser',
      avatar: '/api/placeholder/32/32',
      points: 1987,
      problemsSolved: 125,
      streak: 16,
      country: 'KR',
      level: 'Expert',
      badges: ['🌐', '🔍', '⚙️'],
      weeklyChange: '+1'
    },
    {
      rank: 7,
      username: 'DynamicProgrammer',
      avatar: '/api/placeholder/32/32',
      points: 1856,
      problemsSolved: 118,
      streak: 14,
      country: 'CA',
      level: 'Advanced',
      badges: ['📊', '🎯', '🔥'],
      weeklyChange: '0'
    },
    {
      rank: 8,
      username: 'SortingWizard',
      avatar: '/api/placeholder/32/32',
      points: 1743,
      problemsSolved: 109,
      streak: 12,
      country: 'AU',
      level: 'Advanced',
      badges: ['🧙', '⚡', '🏆'],
      weeklyChange: '-1'
    }
  ];

  const topPerformers = [
    {
      title: 'Most Problems Solved',
      user: 'CodeMaster2024',
      value: '234 problems',
      icon: Target,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Longest Streak',
      user: 'AlgorithmNinja',
      value: '45 days',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Rising Star',
      user: 'DataStructureQueen',
      value: '+156 points',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">#{rank}</span>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Grandmaster':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'Master':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'Expert':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">
            Compete with the best programmers around the world
          </p>
        </div>

        {/* Top Performers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topPerformers.map((performer, index) => {
            const Icon = performer.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${performer.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground">
                        {performer.title}
                      </h3>
                      <p className="text-lg font-bold">{performer.user}</p>
                      <p className="text-sm text-primary font-medium">{performer.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Global Rankings
                </CardTitle>
                <CardDescription>
                  Top performers ranked by points and achievements
                </CardDescription>
              </div>
              
              <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="alltime">All Time</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.map((user, index) => (
                <div
                  key={user.rank}
                  className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors ${
                    user.rank <= 3 ? 'bg-muted/30' : ''
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-10 h-10">
                    {getRankIcon(user.rank)}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{user.username}</span>
                        <span className="text-xs text-muted-foreground">
                          {user.country}
                        </span>
                        <div className="flex space-x-1">
                          {user.badges.map((badge, i) => (
                            <span key={i} className="text-sm">{badge}</span>
                          ))}
                        </div>
                      </div>
                      <Badge className={`text-xs ${getLevelColor(user.level)}`}>
                        {user.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{user.points.toLocaleString()}</div>
                      <div className="text-muted-foreground">Points</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="font-semibold">{user.problemsSolved}</div>
                      <div className="text-muted-foreground">Solved</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold">{user.streak}</span>
                      </div>
                      <div className="text-muted-foreground">Streak</div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`font-semibold ${
                        user.weeklyChange.startsWith('+') ? 'text-success' : 
                        user.weeklyChange.startsWith('-') ? 'text-destructive' : 
                        'text-muted-foreground'
                      }`}>
                        {user.weeklyChange}
                      </div>
                      <div className="text-muted-foreground">Change</div>
                    </div>
                  </div>

                  {/* Mobile Stats */}
                  <div className="md:hidden text-right">
                    <div className="font-semibold">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{user.problemsSolved} solved</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Your Rank */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Your Current Rank</h3>
                  <p className="text-sm text-muted-foreground">Keep solving to climb higher!</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">#127</div>
                <div className="text-sm text-muted-foreground">out of 10,247</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;