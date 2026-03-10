import { useState } from 'react';
import { ChevronRight, Server, Database, Layers, Network, ArrowDown, HelpCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { projects } from '@/data/projects';

interface ProjectDetailSectionProps {
  selectedProject: number;
}

export function ProjectDetailSection({ selectedProject }: ProjectDetailSectionProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'flow' | 'sequence'>('overview');
  const project = projects[selectedProject];

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

  const sequenceImages = [
    '/images/sequence-ai-agent.png',
    '/images/sequence-outcall.png',
    '/images/sequence-iot.png',
  ];

  return (
    <section id="project-detail" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            项目详情
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h2>
          <p className="text-lg text-gray-600">{project.subtitle}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {[
              { key: 'overview', label: '项目介绍' },
              { key: 'architecture', label: '架构图' },
              { key: 'flow', label: '流程图' },
              { key: 'sequence', label: '时序图' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* What is it */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">这个项目是做什么的？</h3>
                      <p className="text-gray-600 leading-relaxed">{project.whatIsIt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why need it */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">为什么要学这个项目？</h3>
                      <p className="text-gray-600 leading-relaxed">{project.whyNeedIt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">核心技术栈</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Tech */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">进阶技术方案</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.advancedTech.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-gray-700 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Similar Projects */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">同类企业级项目</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.similarProjects.map((proj, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 flex items-center gap-1"
                      >
                        {proj}
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {project.coreFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Learning Outcomes */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">学完这个项目，你将掌握</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {project.title} - 系统架构图
                </h3>
                <div className="relative">
                  <img
                    src={architectureImages[selectedProject]}
                    alt={`${project.title} 架构图`}
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
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>{project.title} - 系统架构图</DialogTitle>
                      </DialogHeader>
                      <img
                        src={architectureImages[selectedProject]}
                        alt={`${project.title} 架构图`}
                        className="w-full"
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Architecture Layers */}
                <div className="mt-8 space-y-4">
                  {project.architecture.layers.map((layer, layerIndex) => (
                    <div key={layerIndex} className="relative">
                      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            {layerIndex === 0 && <Network className="w-6 h-6 text-white" />}
                            {layerIndex === 1 && <Layers className="w-6 h-6 text-white" />}
                            {layerIndex === 2 && <Server className="w-6 h-6 text-white" />}
                            {layerIndex === 3 && <Database className="w-6 h-6 text-white" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">{layer.name}</h4>
                              <Badge variant="outline" className="text-xs">Layer {layerIndex + 1}</Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{layer.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {layer.components.map((component) => (
                                <span
                                  key={component}
                                  className="px-3 py-1.5 text-sm rounded-md bg-white border border-slate-200 text-gray-700 shadow-sm"
                                >
                                  {component}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {layerIndex < project.architecture.layers.length - 1 && (
                        <div className="flex justify-center py-2">
                          <ArrowDown className="w-5 h-5 text-slate-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Flow Tab */}
          {activeTab === 'flow' && (
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {project.title} - 核心业务流程图
                </h3>
                <div className="relative">
                  <img
                    src={flowImages[selectedProject]}
                    alt={`${project.title} 流程图`}
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
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>{project.title} - 核心业务流程图</DialogTitle>
                      </DialogHeader>
                      <img
                        src={flowImages[selectedProject]}
                        alt={`${project.title} 流程图`}
                        className="w-full"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sequence Tab */}
          {activeTab === 'sequence' && (
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {project.title} - 组件交互时序图
                </h3>
                <div className="relative">
                  <img
                    src={sequenceImages[selectedProject]}
                    alt={`${project.title} 时序图`}
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
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>{project.title} - 组件交互时序图</DialogTitle>
                      </DialogHeader>
                      <img
                        src={sequenceImages[selectedProject]}
                        alt={`${project.title} 时序图`}
                        className="w-full"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
