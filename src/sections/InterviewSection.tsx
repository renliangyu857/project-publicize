import { useState } from 'react';
import { MessageSquare, CheckCircle, Star, ArrowRight, Lightbulb, Target, GraduationCap, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, siteConfig } from '@/data/projects';

interface InterviewSectionProps {
  selectedProject: number;
}

export function InterviewSection({ selectedProject }: InterviewSectionProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  return (
    <section id="interview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            面试价值
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            面试高频考点与应对策略
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每个项目都整理了面试高频问题，帮助你掌握STAR法则，在面试中清晰表达项目亮点
          </p>
        </div>

        {/* Target Audience */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.targetAudience.map((audience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                  {index === 0 && <GraduationCap className="w-6 h-6 text-white" />}
                  {index === 1 && <Code className="w-6 h-6 text-white" />}
                  {index === 2 && <Rocket className="w-6 h-6 text-white" />}
                  {index === 3 && <Target className="w-6 h-6 text-white" />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Selector Tabs */}
        <Tabs defaultValue={String(selectedProject)} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            {projects.map((p, i) => (
              <TabsTrigger key={p.id} value={String(i)}>
                {p.title.split('').slice(0, 6).join('')}...
              </TabsTrigger>
            ))}
          </TabsList>
          
          {projects.map((p, i) => (
            <TabsContent key={p.id} value={String(i)}>
              <div className="mt-8 space-y-8">
                {/* Interview Value Proposition */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">简历差异化</h4>
                      <p className="text-sm text-gray-600">
                        当别人还在写CRUD项目时，你的企业级AI/高并发/物联网项目直接拉开差距
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <MessageSquare className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">面试有东西聊</h4>
                      <p className="text-sm text-gray-600">
                        每个技术点都足够深入，分布式锁、线程池、LLM Agent都能展开聊半小时
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Lightbulb className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">实际工作用得上</h4>
                      <p className="text-sm text-gray-600">
                        企业正在大规模落地AI和物联网，现在学是为未来3-5年职业发展铺路
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Interview Questions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    高频面试题精选
                  </h3>
                  <div className="space-y-4">
                    {p.interviewPoints.map((question, index) => (
                      <Card 
                        key={index} 
                        className={`cursor-pointer transition-all ${
                          expandedQuestion === index ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                        }`}
                        onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{question}</h4>
                              {expandedQuestion === index && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-medium text-gray-700">回答要点：</span>
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        这个问题考察的是{p.title.split('').slice(0, 10).join('')}...的核心设计思路。
                                        建议从架构设计、技术选型、问题解决三个维度展开，
                                        结合项目中具体的实现细节和量化成果进行回答。
                                      </p>
                                      <Button variant="link" size="sm" className="mt-2 p-0">
                                        查看完整答案
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* STAR Method */}
                <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">STAR法则项目介绍模板</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                          <span className="font-bold">S</span>
                        </div>
                        <h4 className="font-semibold mb-2">Situation 背景</h4>
                        <p className="text-sm text-white/70">
                          描述项目背景和业务痛点，为什么需要做这个项目
                        </p>
                      </div>
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                          <span className="font-bold">T</span>
                        </div>
                        <h4 className="font-semibold mb-2">Task 任务</h4>
                        <p className="text-sm text-white/70">
                          你在项目中承担什么角色，负责哪些模块
                        </p>
                      </div>
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                          <span className="font-bold">A</span>
                        </div>
                        <h4 className="font-semibold mb-2">Action 行动</h4>
                        <p className="text-sm text-white/70">
                          具体做了什么，用了什么技术，解决了什么问题
                        </p>
                      </div>
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                          <span className="font-bold">R</span>
                        </div>
                        <h4 className="font-semibold mb-2">Result 结果</h4>
                        <p className="text-sm text-white/70">
                          量化成果，性能提升多少，效率提升多少
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
