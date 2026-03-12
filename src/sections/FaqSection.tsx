import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { faqItems } from '@/data/seo';

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            常见问题
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            大模型项目、Agent项目与高并发项目常见问题
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            这一组 FAQ 既服务用户理解页面内容，也能让搜索引擎更清楚页面与大模型应用开发项目、企业级项目、
            Agent项目和高并发项目等主题的相关性。
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <Card key={item.question} className="border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-7">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
