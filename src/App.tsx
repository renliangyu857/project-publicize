import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ProjectDetailSection } from './sections/ProjectDetailSection';
import { LearningOutcomesSection } from './sections/LearningOutcomesSection';
import { SellingPointsSection } from './sections/SellingPointsSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { InterviewSection } from './sections/InterviewSection';
import { PricingSection } from './sections/PricingSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  const [selectedProject, setSelectedProject] = useState(0);

  const handleSelectProject = (index: number) => {
    setSelectedProject(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ProjectDetailSection selectedProject={selectedProject} />
        <LearningOutcomesSection />
        <SellingPointsSection selectedProject={selectedProject} />
        <HighlightsSection selectedProject={selectedProject} />
        <InterviewSection selectedProject={selectedProject} />
        <PricingSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
