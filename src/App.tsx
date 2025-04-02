import portfolio from "/portfolio.svg";
import SkillGrid from "./components/SkillGrid";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <div>
        <img src={portfolio} className="logo" alt="Portfolio logo" />
      </div>
      <h1>Eric Wing's Portfolio Website!</h1>
      <h2>🚧 under construction 🚧</h2>
      <h2>Skills</h2>
      <SkillGrid />
      <ThemeToggle />
    </>
  );
}

export default App;
