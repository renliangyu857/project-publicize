import { ChevronRight, Server, Database, Layers, Network, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

interface ArchitectureSectionProps {
  selectedProject: number;
}

export function ArchitectureSection({ selectedProject }: ArchitectureSectionProps) {
  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            技术架构
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            企业级架构设计
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            深入理解每个项目的架构设计思路，掌握高并发、高可用、高性能的系统设计方法
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
              <div className="mt-8">
                {/* Architecture Diagram */}
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {p.title} - 系统架构图
                    </h3>
                    
                    {/* Layered Architecture Visualization */}
                    <div className="space-y-4">
                      {p.architecture.layers.map((layer, layerIndex) => (
                        <div key={layerIndex} className="relative">
                          {/* Layer Card */}
                          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                            <div className="flex items-start gap-4">
                              {/* Layer Icon */}
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                {layerIndex === 0 && <Network className="w-6 h-6 text-white" />}
                                {layerIndex === 1 && <Layers className="w-6 h-6 text-white" />}
                                {layerIndex === 2 && <Server className="w-6 h-6 text-white" />}
                                {layerIndex === 3 && <Database className="w-6 h-6 text-white" />}
                              </div>
                              
                              {/* Layer Info */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="text-lg font-semibold text-gray-900">
                                    {layer.name}
                                  </h4>
                                  <Badge variant="outline" className="text-xs">
                                    Layer {layerIndex + 1}
                                  </Badge>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">
                                  {layer.description}
                                </p>
                                
                                {/* Components */}
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
                          
                          {/* Arrow Down (except for last layer) */}
                          {layerIndex < p.architecture.layers.length - 1 && (
                            <div className="flex justify-center py-2">
                              <ArrowDown className="w-5 h-5 text-slate-300" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Core Features */}
                <div className="grid md:grid-cols-3 gap-6">
                  {p.coreFeatures.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {featureIndex + 1}
                            </span>
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
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
