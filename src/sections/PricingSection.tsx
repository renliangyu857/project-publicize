import { MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/projects';

export function PricingSection() {
  const { contact } = siteConfig;

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">联系咨询</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">添加微信获取项目资料</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            当前页面暂不展示价格信息，如需了解项目内容、学习方式或获取完整资料，可以直接添加微信咨询。
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardContent className="p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm mb-4">
                  <MessageCircle className="w-4 h-4" />
                  微信联系方式
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3">{contact.wechat}</div>
                <p className="text-white/70 leading-7 max-w-2xl">{contact.description}</p>
              </div>

              <div className="grid gap-3 text-sm text-white/80 min-w-[240px]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  咨询项目内容与适合人群
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  获取完整资料与学习说明
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  页面不展示价格，仅保留联系渠道
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
