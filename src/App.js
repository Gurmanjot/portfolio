import { useRef } from "react";
import PortfolioBackground from "./FramerBackground";
import TitleSection from "./TitleSection";
import Menu from "./Menu";
import SkillsSection from "./SkillsSection";
import WorkWithMe from "./WorkWithMe";

const App = () => {
  const skillsSectionRef = useRef(null);
  const workWithMeRef = useRef(null);

  return (
    <div>
      <PortfolioBackground />
      <Menu skillsSectionRef={skillsSectionRef} workWithMeRef={workWithMeRef} />
      <TitleSection />
      <SkillsSection skillsSectionRef={skillsSectionRef} />
      <WorkWithMe workWithMeRef={workWithMeRef} />
    </div>
  );
};

export default App;
