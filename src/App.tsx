import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ProjectDetailSection } from './sections/ProjectDetailSection';
import { KeywordTargetSection } from './sections/KeywordTargetSection';
import { LearningOutcomesSection } from './sections/LearningOutcomesSection';
import { SellingPointsSection } from './sections/SellingPointsSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { InterviewSection } from './sections/InterviewSection';
import { FaqSection } from './sections/FaqSection';
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
        <KeywordTargetSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ProjectDetailSection selectedProject={selectedProject} />
        <LearningOutcomesSection />
        <SellingPointsSection selectedProject={selectedProject} />
        <HighlightsSection selectedProject={selectedProject} />
        <InterviewSection selectedProject={selectedProject} />
        <FaqSection />
        <PricingSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
