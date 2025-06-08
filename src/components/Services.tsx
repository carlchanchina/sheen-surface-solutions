
import { Car, Smartphone, Home, Gamepad2, Wrench, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: '汽车行业',
      description: '为汽车内外饰件提供高品质表面处理，包括仪表板、门板、装饰条等',
      applications: ['内饰件处理', '外观装饰', '功能性涂层'],
      color: 'industrial-gradient'
    },
    {
      icon: Smartphone,
      title: '电子消费品',
      description: '手机、平板、笔记本等电子产品外壳的精密表面处理服务',
      applications: ['外壳喷涂', '按键丝印', 'Logo标识'],
      color: 'bg-accent-cyan'
    },
    {
      icon: Home,
      title: '家电行业',
      description: '冰箱、洗衣机、空调等家用电器的表面美观和功能性处理',
      applications: ['外观美化', '防腐处理', '触控面板'],
      color: 'bg-green-500'
    },
    {
      icon: Gamepad2,
      title: '玩具制品',
      description: '儿童玩具、模型等产品的安全环保表面处理解决方案',
      applications: ['安全涂装', '色彩处理', '质感提升'],
      color: 'bg-pink-500'
    },
    {
      icon: Wrench,
      title: '工业设备',
      description: '工业机械、设备外壳的耐用性和美观性表面处理',
      applications: ['防护涂层', '标识印刷', '耐磨处理'],
      color: 'bg-orange-500'
    },
    {
      icon: Package,
      title: '包装容器',
      description: '各类包装容器的表面装饰和功能性处理服务',
      applications: ['装饰印刷', '防滑处理', '品牌标识'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            服务领域
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们的表面处理技术广泛应用于多个行业，
            为各行业客户提供专业的定制化解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 industrial-shadow"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">主要应用：</h4>
                    {service.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">{app}</span>
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

export default Services;
