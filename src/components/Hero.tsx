
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-metal-light/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              专业塑料
              <span className="text-transparent bg-clip-text industrial-gradient block">
                表面处理
              </span>
              解决方案提供商
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              致力于为客户提供高品质的塑料表面处理服务，包括喷涂、电镀、丝印等多种工艺，
              满足不同行业的表面处理需求。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="industrial-gradient group">
                立即咨询
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">年行业经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">客户满意度</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 industrial-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg industrial-gradient flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">质量保证</h3>
              </div>
              <p className="text-muted-foreground">
                严格的质量控制体系，确保每个产品都达到最高标准
              </p>
            </Card>

            <Card className="p-6 industrial-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-cyan flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">快速交付</h3>
              </div>
              <p className="text-muted-foreground">
                高效的生产流程，保证按时交付，满足客户需求
              </p>
            </Card>

            <Card className="p-6 industrial-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-metal-gray flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">专业团队</h3>
              </div>
              <p className="text-muted-foreground">
                经验丰富的技术团队，提供专业的技术支持和服务
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
