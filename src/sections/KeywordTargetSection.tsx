import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { targetKeywords } from '@/data/seo';

export function KeywordTargetSection() {
  return (
    <section id="seo-topics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            搜索主题优化
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            这个站点重点覆盖哪些项目关键词
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            如果你希望通过搜索找到大模型项目、大模型应用开发项目、Agent项目、企业级项目、高并发项目相关案例，
            下面这些专题内容会直接对应你的搜索意图。
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {targetKeywords.map((item) => (
            <Card key={item.keyword} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                  {item.keyword}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-7">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
