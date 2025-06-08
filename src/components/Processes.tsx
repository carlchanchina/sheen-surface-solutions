
import { Palette, Zap, Layers, Settings, Sparkles, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Processes = () => {
  const processes = [
    {
      icon: Palette,
      title: '喷涂工艺',
      description: '包括静电喷涂、液体喷涂等多种工艺，提供优质的表面涂装效果',
      features: ['环保材料', '色彩丰富', '持久耐用'],
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: '电镀处理',
      description: '精密电镀工艺，提供金属质感表面，增强产品档次和耐用性',
      features: ['金属质感', '耐腐蚀性', '导电性能'],
      color: 'bg-yellow-500'
    },
    {
      icon: Layers,
      title: '丝印技术',
      description: '高精度丝网印刷，实现复杂图案和文字的精确印制',
      features: ['高精度', '图案清晰', '批量生产'],
      color: 'bg-green-500'
    },
    {
      icon: Settings,
      title: '激光雕刻',
      description: '先进激光技术，实现精密雕刻和标记，满足个性化需求',
      features: ['精密雕刻', '永久标记', '个性定制'],
      color: 'bg-purple-500'
    },
    {
      icon: Sparkles,
      title: '表面抛光',
      description: '专业抛光工艺，提升表面光泽度和触感，增强产品美观性',
      features: ['镜面效果', '光泽持久', '手感顺滑'],
      color: 'bg-pink-500'
    },
    {
      icon: Shield,
      title: '防护涂层',
      description: '特殊防护涂层处理，增强产品的耐候性和使用寿命',
      features: ['防腐防锈', '抗UV', '长期防护'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="processes" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            工艺种类
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们拥有完整的塑料表面处理工艺体系，从传统工艺到先进技术，
            为不同需求提供最适合的解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 industrial-shadow"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${process.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{process.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Processes;
