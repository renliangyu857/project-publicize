import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/projects';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90">企业级实战项目 · 面试与进阶必备</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          从架构设计到
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            面试表达
          </span>
          <br />
          打造你的技术竞争力
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          {siteConfig.description}
        </p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
          {siteConfig.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
          >
            浏览项目
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            微信咨询
          </Button>
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <MessageCircle className="w-5 h-5 text-green-400" />
          <div className="text-left">
            <div className="text-white/60 text-sm">微信联系方式</div>
            <div className="text-green-400 font-bold text-lg">{siteConfig.contact.wechat}</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['Spring Boot', 'Redis', 'MySQL', 'LLM', 'WebSocket', '微服务'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
