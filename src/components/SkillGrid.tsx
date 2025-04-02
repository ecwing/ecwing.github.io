import React from "react";
import {
  GridContainer,
  SkillCard,
  SkillImage,
  SkillName,
} from "../styles/SkillsPage.ts";

const skills = [
  { name: "HTML", src: "../../logos/html-logo.png" },
  { name: "CSS", src: "../../logos/css-logo.png" },
  { name: "SASS", src: "../../logos/sass-logo.png" },
  {
    name: "styled-components",
    src: "../../logos/styled-components-logo.png",
  },
  { name: "JavaScript", src: "../../logos/js-logo.png" },
  { name: "TypeScript", src: "/../../logos/ts-logo.png" },
  { name: "React", src: "../../logos/reactjs-logo.png" },
  { name: "Redux", src: "../../logos/redux-logo.svg" },
  { name: "Node.js", src: "../../logos/nodejs-logo.png" },
  { name: "MongoDB", src: "../../logos/mongodb-logo.png" },
  { name: "Git", src: "../../logos/git-logo.png" },
];

const SkillGrid: React.FC = () => {
  return (
    <GridContainer>
      {skills.map((skill) => (
        <SkillCard key={skill.name} title={skill.name}>
          <SkillImage src={skill.src} alt={skill.name} />
          <SkillName>{skill.name}</SkillName>
        </SkillCard>
      ))}
    </GridContainer>
  );
};

export default SkillGrid;
