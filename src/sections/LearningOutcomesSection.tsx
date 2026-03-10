import { FileText, MessageCircle, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/projects';

export function LearningOutcomesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            学完能获得什么
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            为什么学这些项目？
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            面向即将毕业、缺乏企业级项目经验的学生，这些项目能给你的求职之路带来什么改变
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.learningOutcomes.map((outcome, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                  {index === 0 && <FileText className="w-6 h-6 text-white" />}
                  {index === 1 && <MessageCircle className="w-6 h-6 text-white" />}
                  {index === 2 && <Briefcase className="w-6 h-6 text-white" />}
                  {index === 3 && <TrendingUp className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{outcome.title}</h3>
                <p className="text-white/70 text-sm">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">1</span>
                  简历差异化优势
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">当别人还在写商城、博客、管理系统时，你的AI Agent/高并发调度/物联网项目直接拉开差距</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">大厂HR和面试官对AI、物联网项目更感兴趣，简历通过率提升50%+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">项目复杂度对标阿里、腾讯、字节的生产系统，非玩具级Demo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm">2</span>
                  面试深度对话
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">每个技术点都足够深入，分布式锁、线程池、LLM Agent都能展开聊半小时</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">掌握STAR法则，学会如何清晰表达项目亮点和技术难点</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">准备高频面试题答案，应对面试官的深挖和追问</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm">3</span>
                  实际工作能力
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">企业正在大规模落地AI和物联网，现在学是为未来3-5年职业发展铺路</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">掌握三高系统设计能力（高并发、高可用、高性能），大厂必备技能</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">理解企业级项目的完整开发流程，从需求分析到架构设计到上线运维</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm">4</span>
                  技术栈补齐
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">Redis、Kafka、Elasticsearch、Docker等企业常用技术栈一网打尽</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">微服务架构、分布式系统、云原生等热门技术方向全覆盖</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">AI大模型应用开发能力，RAG、Agent、Prompt Engineering等前沿技术</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Salary Info */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30 inline-block">
            <CardContent className="p-6">
              <p className="text-white/80 text-sm mb-2">掌握这些企业级项目后，你的薪资预期</p>
              <p className="text-2xl font-bold text-white">
                根据学历 <span className="text-green-400">15-30K</span> · 
                1-3年 <span className="text-green-400">20-35K</span> · 
                3-5年 <span className="text-green-400">30-50K</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
