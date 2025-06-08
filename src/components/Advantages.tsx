
import { CheckCircle, Clock, Award, Users, Cog, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: '品质保证',
      description: 'ISO 9001质量管理体系认证，严格的质量控制流程，确保每个产品都达到最高标准',
      highlight: '100%质检'
    },
    {
      icon: Clock,
      title: '交付及时',
      description: '完善的生产计划管理，高效的生产流程，确保按时按质完成订单交付',
      highlight: '准时交付率98%'
    },
    {
      icon: Cog,
      title: '技术先进',
      description: '引进国际先进设备和工艺，持续技术创新，为客户提供最优质的表面处理方案',
      highlight: '国际先进技术'
    },
    {
      icon: Users,
      title: '专业团队',
      description: '拥有10年以上行业经验的技术团队，提供从设计到生产的全方位专业服务',
      highlight: '10年+经验'
    },
    {
      icon: Leaf,
      title: '环保理念',
      description: '采用环保材料和工艺，符合国际环保标准，为客户提供绿色可持续的解决方案',
      highlight: '绿色环保'
    },
    {
      icon: CheckCircle,
      title: '服务完善',
      description: '从前期咨询到售后服务的完整服务体系，7×24小时客户服务，快速响应客户需求',
      highlight: '7×24小时服务'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            核心优势
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            多年行业经验积累，专业技术团队支撑，完善的服务体系，
            是您值得信赖的塑料表面处理合作伙伴
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 industrial-shadow"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl industrial-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {advantage.title}
                        </h3>
                        <span className="text-xs font-medium text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-full">
                          {advantage.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">合作客户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000万+</div>
            <div className="text-sm text-muted-foreground">年产能(件)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">工艺种类</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
            <div className="text-sm text-muted-foreground">合格率</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
