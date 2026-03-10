import { Check, MessageCircle, Gift, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/projects';

export function PricingSection() {
  const { pricing, contact } = siteConfig;

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            价格方案
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            选择适合你的学习方案
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            每个项目都包含完整视频讲解、详细文档、架构图和面试题整理
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Single Project */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">单个项目</h3>
                <p className="text-white/60 text-sm">选择任意一个项目深入学习</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">¥{pricing.single.price}</span>
                <span className="text-white/40 line-through ml-2">¥{pricing.single.originalPrice}</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  完整视频讲解
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  详细技术文档
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  架构图/流程图
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  面试题整理
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  技术答疑支持
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Two Projects - Recommended */}
          <Card className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border-blue-400/50 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                <Star className="w-3 h-3 mr-1" />
                最受欢迎
              </Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">两个项目</h3>
                <p className="text-white/60 text-sm">组合学习，技术更全面</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">¥{pricing.bundle.price}</span>
                <span className="text-white/40 line-through ml-2">¥{pricing.bundle.originalPrice}</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  任选两个项目视频讲解
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  完整技术文档
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  全部架构图/流程图
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  面试题+答案整理
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  优先技术答疑
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Gift className="w-4 h-4 text-yellow-400" />
                  赠送简历优化指导
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* All Three Projects */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">全部三个项目</h3>
                <p className="text-white/60 text-sm">一站式掌握所有核心技术</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">¥{pricing.all.price}</span>
                <span className="text-white/40 line-through ml-2">¥{pricing.all.originalPrice}</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  全部三个项目视频讲解
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  完整技术文档
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  全部架构图/流程图
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  面试题+答案整理
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  1对1技术答疑
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Gift className="w-4 h-4 text-yellow-400" />
                  赠送简历优化+模拟面试
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">{contact.description}</p>
                  <p className="text-white font-bold text-lg">微信：{contact.wechat}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">购买后如何获取资料？</h4>
            <p className="text-white/60 text-sm">添加微信后，会发送网盘链接和详细的学习指南</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">是否提供技术支持？</h4>
            <p className="text-white/60 text-sm">提供技术答疑支持，遇到问题可以随时咨询</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">项目是否持续更新？</h4>
            <p className="text-white/60 text-sm">会持续更新技术文档和面试题，购买后免费获取</p>
          </div>
        </div>
      </div>
    </section>
  );
}
