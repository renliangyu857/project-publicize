import { Code2, Github, BookOpen, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/data/projects';

const footerLinks = {
  projects: [
    { label: '语音Agent测评平台', href: '#' },
    { label: '智能外呼调度系统', href: '#' },
    { label: '智慧农业物联网平台', href: '#' },
  ],
  resources: [
    { label: '项目文档', href: '#' },
    { label: '源码仓库', href: '#' },
    { label: '视频教程', href: '#' },
    { label: '面试题集', href: '#' },
  ],
  community: [
    { label: '技术交流群', href: '#' },
    { label: '问题反馈', href: '#' },
    { label: '更新日志', href: '#' },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">企业级项目实战</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              从架构设计到面试表达，打造你的技术竞争力。真实企业级项目，助你掌握核心技术。
            </p>
            <div className="bg-slate-800 rounded-lg p-4 mb-4">
              <p className="text-slate-400 text-xs mb-1">微信咨询</p>
              <p className="text-white font-bold">{siteConfig.contact.wechat}</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <BookOpen className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-lg mb-4">实战项目</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">学习资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4">社区</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 企业级项目实战平台. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">使用条款</a>
            <a href="#" className="hover:text-white transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
