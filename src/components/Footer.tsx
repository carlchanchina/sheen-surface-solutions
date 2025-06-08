
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '工艺种类', href: '#processes' },
    { name: '服务领域', href: '#services' },
    { name: '核心优势', href: '#advantages' },
    { name: '客户案例', href: '#cases' },
    { name: '联系我们', href: '#contact' },
  ];

  const services = [
    '喷涂工艺',
    '电镀处理',
    '丝印技术',
    '激光雕刻',
    '表面抛光',
    '防护涂层'
  ];

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">塑面科技</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              专业塑料表面处理解决方案提供商，致力于为客户提供高品质的表面处理服务，
              包括喷涂、电镀、丝印等多种工艺。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">微</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">企</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">邮</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">主要服务</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <div>
                  <div className="text-white">400-123-4567</div>
                  <div className="text-sm text-gray-400">服务热线</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <div>
                  <div className="text-white">info@plastictech.com</div>
                  <div className="text-sm text-gray-400">邮箱地址</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <div>
                  <div className="text-white">苏州市吴中区</div>
                  <div className="text-sm text-gray-400">木椟区A座8楼</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 海活科技有限公司. 保留所有权利. | 苏ICP备12345678号
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            回到顶部
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
