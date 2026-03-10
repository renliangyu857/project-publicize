import { TrendingUp, Shield, Zap, BarChart3, Lock, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

const highlightIcons = [
  <TrendingUp className="w-6 h-6" />,
  <Shield className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <BarChart3 className="w-6 h-6" />,
];

interface HighlightsSectionProps {
  selectedProject: number;
}

export function HighlightsSection({ selectedProject }: HighlightsSectionProps) {
  return (
    <section id="highlights" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            核心亮点
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            技术亮点与业务价值
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            每个项目都经过精心设计和生产验证，掌握这些核心技术点，让你在面试中脱颖而出
          </p>
        </div>

        {/* Project Selector Tabs */}
        <Tabs defaultValue={String(selectedProject)} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-white/10">
            {projects.map((p, i) => (
              <TabsTrigger 
                key={p.id} 
                value={String(i)}
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 text-white/70"
              >
                {p.title.split('').slice(0, 6).join('')}...
              </TabsTrigger>
            ))}
          </TabsList>
          
          {projects.map((p, i) => (
            <TabsContent key={p.id} value={String(i)}>
              <div className="mt-8 space-y-12">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {p.highlights.map((highlight, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          {highlight.metric}
                        </div>
                        <div className="text-sm text-white/80 font-medium mb-2">
                          {highlight.title}
                        </div>
                        <div className="text-xs text-white/60">
                          {highlight.description.slice(0, 30)}...
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tech Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">核心技术实现</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {p.highlights.map((highlight, index) => (
                      <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                              {highlightIcons[index % highlightIcons.length]}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {highlight.title}
                              </h4>
                              <p className="text-white/70 text-sm leading-relaxed">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Business Value */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">业务价值</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {p.businessValue.map((value, index) => (
                      <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <h4 className="font-semibold text-white">{value.title}</h4>
                          </div>
                          <p className="text-white/70 text-sm">{value.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Code Metrics */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-blue-500/30">
                    <CardContent className="p-6 text-center">
                      <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {p.codeMetrics.totalLines}
                      </div>
                      <div className="text-sm text-white/60">代码行数</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
                    <CardContent className="p-6 text-center">
                      <Lock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {p.codeMetrics.modules}
                      </div>
                      <div className="text-sm text-white/60">核心模块</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {p.codeMetrics.testCoverage}
                      </div>
                      <div className="text-sm text-white/60">测试覆盖率</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
