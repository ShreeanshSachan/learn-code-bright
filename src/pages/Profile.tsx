import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail, 
  Calendar, 
  Trophy, 
  Target, 
  Zap, 
  Code2, 
  TrendingUp,
  Star,
  Award,
  Clock,
  Edit,
  MapPin,
  Link2,
  Github,
  Linkedin,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'Alex Johnson',
    username: 'alexj_codes',
    email: 'alex.johnson@email.com',
    avatar: '/api/placeholder/100/100',
    location: 'San Francisco, CA',
    joinDate: 'March 2023',
    bio: 'Full-stack developer passionate about algorithms and competitive programming. Love solving complex problems and learning new technologies.',
    level: 'Expert',
    rank: 127,
    points: 1847,
    streak: 23,
    totalSolved: 89,
    easy: 45,
    medium: 32,
    hard: 12,
    github: 'alexj-codes',
    linkedin: 'alex-johnson-dev',
    website: 'alexjohnson.dev'
  };

  const achievements = [
    {
      title: 'Problem Solver',
      description: 'Solved 50+ problems',
      icon: Target,
      earned: true,
      date: '2 weeks ago'
    },
    {
      title: 'Streak Master',
      description: 'Maintained 30-day streak',
      icon: Zap,
      earned: true,
      date: '1 month ago'
    },
    {
      title: 'Algorithm Expert',
      description: 'Solved 10+ hard problems',
      icon: Code2,
      earned: true,
      date: '3 weeks ago'
    },
    {
      title: 'Speed Demon',
      description: 'Solved problem in under 5 minutes',
      icon: Clock,
      earned: false,
      date: 'Not earned'
    },
    {
      title: 'Consistent Performer',
      description: 'Solved problems for 7 consecutive days',
      icon: TrendingUp,
      earned: true,
      date: '1 week ago'
    },
    {
      title: 'Rising Star',
      description: 'Gained 500+ points in a month',
      icon: Star,
      earned: false,
      date: 'Not earned'
    }
  ];

  const recentActivity = [
    {
      type: 'solved',
      title: 'Two Sum',
      difficulty: 'easy',
      date: '2 hours ago',
      time: '12m 34s'
    },
    {
      type: 'attempted',
      title: 'Merge Intervals',
      difficulty: 'medium',
      date: '1 day ago',
      time: '45m 12s'
    },
    {
      type: 'solved',
      title: 'Valid Parentheses',
      difficulty: 'easy',
      date: '2 days ago',
      time: '8m 45s'
    },
    {
      type: 'solved',
      title: 'Binary Tree Traversal',
      difficulty: 'medium',
      date: '3 days ago',
      time: '23m 56s'
    },
    {
      type: 'attempted',
      title: 'Regular Expression Matching',
      difficulty: 'hard',
      date: '4 days ago',
      time: '1h 23m'
    }
  ];

  const skillsData = [
    { name: 'Arrays', solved: 25, total: 30, percentage: 83 },
    { name: 'Strings', solved: 18, total: 25, percentage: 72 },
    { name: 'Dynamic Programming', solved: 12, total: 20, percentage: 60 },
    { name: 'Trees', solved: 15, total: 22, percentage: 68 },
    { name: 'Graphs', solved: 8, total: 18, percentage: 44 },
    { name: 'Hash Tables', solved: 14, total: 16, percentage: 87 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-success';
      case 'medium': return 'text-warning';
      case 'hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getActivityIcon = (type: string) => {
    return type === 'solved' ? (
      <CheckCircle className="w-4 h-4 text-success" />
    ) : (
      <XCircle className="w-4 h-4 text-destructive" />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <Badge className="bg-primary text-primary-foreground">{user.level}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">@{user.username}</p>
                  <p className="text-sm text-muted-foreground max-w-2xl">{user.bio}</p>
                  
                  <div className="flex items-center space-x-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-4">
                    <a href={`https://github.com/${user.github}`} className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a href={`https://linkedin.com/in/${user.linkedin}`} className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a href={`https://${user.website}`} className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                      <Link2 className="w-4 h-4" />
                      <span className="text-sm">Website</span>
                    </a>
                  </div>
                </div>
                
                <Button variant="outline" className="flex items-center space-x-2">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">#{user.rank}</div>
              <div className="text-sm text-muted-foreground">Global Rank</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.points.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Points</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.totalSolved}</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Problem Solving Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Problem Solving Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Easy</span>
                    <span className="text-sm font-medium">{user.easy} solved</span>
                  </div>
                  <Progress value={(user.easy / 50) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Medium</span>
                    <span className="text-sm font-medium">{user.medium} solved</span>
                  </div>
                  <Progress value={(user.medium / 50) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Hard</span>
                    <span className="text-sm font-medium">{user.hard} solved</span>
                  </div>
                  <Progress value={(user.hard / 50) * 100} className="h-2" />
                </CardContent>
              </Card>
              
              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.slice(0, 3).map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            achievement.earned ? 'bg-primary/10' : 'bg-muted'
                          }`}>
                            <Icon className={`w-5 h-5 ${
                              achievement.earned ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{achievement.title}</h4>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className={`hover-lift ${
                    achievement.earned ? 'border-primary/50' : 'border-muted'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.earned ? 'bg-primary/10' : 'bg-muted'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            achievement.earned ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-medium">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.earned ? `Earned ${achievement.date}` : achievement.date}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your coding activity over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{activity.title}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getDifficultyColor(activity.difficulty)}`}
                          >
                            {activity.difficulty}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {activity.type === 'solved' ? 'Solved' : 'Attempted'} • {activity.time}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills Progress</CardTitle>
                <CardDescription>Your progress across different topic areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.solved}/{skill.total} ({skill.percentage}%)
                        </span>
                      </div>
                      <Progress value={skill.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;