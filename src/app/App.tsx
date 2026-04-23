import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { ProjectContext } from './components/ProjectContext';
import { ProjectOverview } from './components/ProjectOverview';
import { ProblemStatement } from './components/ProblemStatement';
import { UserResearch } from './components/UserResearch';
import { CompetitiveAnalysis } from './components/CompetitiveAnalysis';
import { UserPersonas } from './components/UserPersonas';
import { UserJourneyMaps } from './components/UserJourneyMaps';
import { InformationArchitecture } from './components/InformationArchitecture';
import { SolutionApproach } from './components/SolutionApproach';
import { DesignApproach } from './components/DesignApproach';
import { Wireframes } from './components/Wireframes';
import { UXStructure } from './components/UXStructure';
import { DesignDecision } from './components/DesignDecision';
import { DesignSystemSection } from './components/DesignSystemSection';
import { SystemComplexity } from './components/SystemComplexity';
import { InterfaceShowcase } from './components/InterfaceShowcase';
import { Challenges } from './components/Challenges';
import { KeyOutcome } from './components/KeyOutcome';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <HeroSection />
      <ProjectContext />
      <ProjectOverview />
      <ProblemStatement />
      <UserResearch />
      <CompetitiveAnalysis />
      <UserPersonas />
      <UserJourneyMaps />
      <InformationArchitecture />
      <SolutionApproach />
      <DesignApproach />
      <Wireframes />
      <UXStructure />
      <DesignDecision />
      <DesignSystemSection />
      <SystemComplexity />
      <InterfaceShowcase />
      <Challenges />
      <KeyOutcome />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}