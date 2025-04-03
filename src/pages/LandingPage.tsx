import React from "react";
import portfolio from "/portfolio.svg";

import { ScrollButton, Wrapper } from "../styles/LandingPage.ts";

interface LandingPageProps {
  handleScroll: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ handleScroll }) => {
  return (
    <Wrapper>
      <div>
        <img src={portfolio} className="logo" alt="Portfolio logo" />
      </div>
      <h1>Hi I'm Eric. A Frontend-specialized Software Engineer</h1>

      <ScrollButton onClick={handleScroll} style={{ cursor: "pointer" }}>
        View My Skills
      </ScrollButton>

      <div style={{ marginTop: "25px" }}>
        🚧 Site under active construction 🚧
      </div>
    </Wrapper>
  );
};

export default LandingPage;
