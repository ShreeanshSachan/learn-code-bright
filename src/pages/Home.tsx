import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-coding.jpg';
import { 
  Code2, 
  Zap, 
  Trophy, 
  Brain, 
  ArrowRight, 
  Sparkles, 
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Hints',
      description: 'Get intelligent hints when you are stuck without spoiling the solution',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Execution',
      description: 'Test your code instantly with our fast execution engine',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Global Leaderboard',
      description: 'Compete with programmers worldwide and climb the rankings',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Streak System',
      description: 'Build consistency with daily coding streaks and achievements',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Problems Solved', value: '1M+', icon: Code2 },
    { label: 'Success Rate', value: '87%', icon: TrendingUp },
    { label: 'Languages', value: '5+', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              🚀 New: AI-Powered Code Assistant
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Competitive
              <br />
              <span className="gradient-text">Programming</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sharpen your coding skills with our AI-powered platform. Solve problems, 
              compete globally, and accelerate your programming journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/problems">
                <Button size="lg" variant="gradient" className="px-8 py-6 text-lg">
                  Start Solving
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/leaderboard">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  View Leaderboard
                  <Trophy className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <img 
            src={heroImage}
            alt="Coding workspace"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">CodePlatform</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of competitive programming with our cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-hover group">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers improving their skills every day
            </p>
            <Link to="/problems">
              <Button size="lg" variant="gradient">
                Start Coding Now
                <Code2 className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;