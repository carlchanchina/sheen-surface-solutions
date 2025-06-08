
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cases = () => {
  const cases = [
    {
      title: '知名汽车品牌内饰件项目',
      client: '某知名汽车制造商',
      date: '2024年3月',
      description: '为该汽车品牌提供内饰件表面喷涂服务，包括仪表板、门板等关键部件的表面处理',
      technologies: ['静电喷涂', '表面抛光', '质感处理'],
      results: ['提升产品档次', '增强耐用性', '客户满意度95%'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
    },
    {
      title: '消费电子产品外壳处理',
      client: '知名手机品牌',
      date: '2024年1月',
      description: '为新款手机提供外壳表面处理，实现金属质感效果，提升产品美观度和手感',
      technologies: ['电镀处理', '激光雕刻', '防指纹涂层'],
      results: ['金属质感优异', '防指纹效果好', '通过严格测试'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop'
    },
    {
      title: '家电外观美化项目',
      client: '大型家电制造商',
      date: '2023年11月',
      description: '为冰箱、洗衣机等家电产品提供外观美化处理，提升产品市场竞争力',
      technologies: ['喷涂工艺', '丝印技术', '防腐处理'],
      results: ['外观质量提升', '成本有效控制', '批量生产稳定'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop'
    },
    {
      title: '工业设备防护涂层',
      client: '机械设备制造商',
      date: '2023年9月',
      description: '为工业设备提供专业防护涂层，增强设备在恶劣环境下的使用寿命',
      technologies: ['防护涂层', '耐候处理', '标识印刷'],
      results: ['耐用性显著提升', '维护成本降低', '设备寿命延长'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
    },
    {
      title: '高端玩具表面处理',
      client: '知名玩具品牌',
      date: '2023年8月',
      description: '为高端儿童玩具提供安全环保的表面处理，确保产品安全性和美观性',
      technologies: ['环保喷涂', '安全认证', '色彩处理'],
      results: ['通过安全检测', '色彩鲜艳持久', '获得市场好评'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    },
    {
      title: '包装容器装饰项目',
      client: '化妆品包装公司',
      date: '2023年6月',
      description: '为高端化妆品包装容器提供装饰性表面处理，提升品牌形象和产品价值',
      technologies: ['丝印技术', '烫金工艺', '表面抛光'],
      results: ['品牌形象提升', '产品档次增加', '客户复购率高'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            客户案例展示
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            多年来我们为众多知名企业提供了专业的表面处理服务，
            积累了丰富的项目经验和良好的客户口碑
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 industrial-shadow"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary">
                  {caseItem.client}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {caseItem.title}
                  </h3>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {caseItem.date}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {caseItem.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">采用技术:</h4>
                    <div className="flex flex-wrap gap-1">
                      {caseItem.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">项目成果:</h4>
                    <div className="space-y-1">
                      {caseItem.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-2"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  查看详情
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="industrial-gradient">
            查看更多案例
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
