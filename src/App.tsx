import { useRef } from "react";
import SkillGrid from "./components/SkillGrid";
import ThemeToggle from "./components/ThemeToggle";
import LandingPage from "./pages/LandingPage";

function App() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {

    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <LandingPage handleScroll={handleScroll}/>

      <div ref={skillsRef}>
        <h2 style={{marginTop: '300px'}}>Skills</h2>
        <SkillGrid />
      </div>
      <ThemeToggle />
    </>
  );
}

export default App;
