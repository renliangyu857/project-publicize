import { useState } from 'react';
import { ArrowRight, Layers, Cpu, Database, Zap, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const projectIcons = [
  <Cpu className="w-8 h-8" />,
  <Layers className="w-8 h-8" />,
  <Database className="w-8 h-8" />,
];

const projectColors = [
  'from-blue-500 to-cyan-500',
  'from-indigo-500 to-purple-500',
  'from-emerald-500 to-teal-500',
];

interface ProjectsSectionProps {
  onSelectProject: (index: number) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleViewDetails = (index: number) => {
    onSelectProject(index);
    const element = document.querySelector('#project-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            实战项目
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            企业级项目实战
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每个项目都经过生产环境验证，涵盖AI大模型、高并发调度、物联网等热门领域，
            助你掌握核心技术，提升面试竞争力
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${projectColors[index]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 text-white">
                  {projectIcons[index]}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/80 line-clamp-1">{project.subtitle}</p>
                </div>
                {/* Animated Pattern */}
                <div 
                  className={`absolute inset-0 opacity-20 transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>

              <CardContent className="p-6">
                {/* What is it */}
                <div className="flex items-start gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.whatIsIt}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight.title}</span>
                      {highlight.metric && (
                        <span className="text-xs text-blue-600 font-medium">{highlight.metric}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Code Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {project.codeMetrics.totalLines}
                    </span>
                    <span>{project.codeMetrics.modules}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => handleViewDetails(index)}
                  >
                    查看详情
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            所有项目均提供完整源码、详细文档和面试题整理
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              查看完整项目列表
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
