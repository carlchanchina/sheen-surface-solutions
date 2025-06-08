
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('您的咨询已提交成功！我们将在24小时内与您联系。');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '联系电话',
      content: '400-123-4567',
      subContent: '7×24小时服务热线',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: '邮箱地址',
      content: 'info@plastictech.com',
      subContent: 'sales@plastictech.com',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '广东省深圳市宝安区',
      subContent: '工业园区A座8楼',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周六 8:00-18:00',
      subContent: '节假日预约服务',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            联系我们
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们随时为您提供专业的技术咨询和服务支持，
            期待与您建立长期稳定的合作关系
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                联系方式
              </h3>
              <p className="text-muted-foreground">
                多种联系方式，选择最便捷的沟通渠道
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="industrial-shadow hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <div className="space-y-3 pt-6">
              <Button className="w-full industrial-gradient group">
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                立即致电咨询
              </Button>
              <Button variant="outline" className="w-full group">
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                在线客服
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="industrial-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">在线咨询</CardTitle>
                <p className="text-muted-foreground">
                  请填写以下表单，我们将尽快与您联系
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        姓名 *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        公司名称
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="请输入公司名称"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        联系电话 *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="请输入联系电话"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        邮箱地址
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="请输入邮箱地址"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      感兴趣的服务
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">请选择服务类型</option>
                      <option value="喷涂工艺">喷涂工艺</option>
                      <option value="电镀处理">电镀处理</option>
                      <option value="丝印技术">丝印技术</option>
                      <option value="激光雕刻">激光雕刻</option>
                      <option value="表面抛光">表面抛光</option>
                      <option value="防护涂层">防护涂层</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      详细需求
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请详细描述您的需求，包括产品类型、数量、特殊要求等"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full industrial-gradient group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    提交咨询
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
