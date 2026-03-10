import { CheckCircle, Shield, Zap, TrendingUp, Cpu, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

interface SellingPointsSectionProps {
  selectedProject: number;
}

const dimensionIcons = [
  <Cpu className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <Shield className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
  <Lock className="w-6 h-6" />,
];

const architectureImages = [
  '/images/architecture-ai-agent-new.png',
  '/images/architecture-outcall.png',
  '/images/architecture-iot.png',
];

const flowImages = [
  '/images/flow-ai-agent-new.png',
  '/images/flow-outcall.png',
  '/images/flow-iot.png',
];

export function SellingPointsSection({ selectedProject }: SellingPointsSectionProps) {
  return (
    <section id="selling-points" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            核心卖点
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            企业级价值与技术差异化
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每个项目都具备企业级架构设计和技术壁垒，让你在面试中脱颖而出
          </p>
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
                {/* Selling Points Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {p.sellingPoints.map((sp, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            {dimensionIcons[index % dimensionIcons.length]}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              {sp.dimension}
                            </h3>
                            <ul className="space-y-2">
                              {sp.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Architecture Image */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {p.title} - 系统架构图
                    </h3>
                    <div className="relative">
                      <img
                        src={architectureImages[i]}
                        alt={`${p.title} 架构图`}
                        className="w-full rounded-lg border border-gray-200"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="absolute top-4 right-4"
                          >
                            查看大图
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl">
                          <DialogHeader>
                            <DialogTitle>{p.title} - 系统架构图</DialogTitle>
                          </DialogHeader>
                          <img
                            src={architectureImages[i]}
                            alt={`${p.title} 架构图`}
                            className="w-full"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>

                {/* Flow Image */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {p.title} - 核心业务流程图
                    </h3>
                    <div className="relative">
                      <img
                        src={flowImages[i]}
                        alt={`${p.title} 流程图`}
                        className="w-full rounded-lg border border-gray-200"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="absolute top-4 right-4"
                          >
                            查看大图
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl">
                          <DialogHeader>
                            <DialogTitle>{p.title} - 核心业务流程图</DialogTitle>
                          </DialogHeader>
                          <img
                            src={flowImages[i]}
                            alt={`${p.title} 流程图`}
                            className="w-full"
                          />
                        </DialogContent>
                      </Dialog>
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
