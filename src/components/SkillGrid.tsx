import React from "react";
import {
  GridContainer,
  SkillCard,
  SkillImage,
  SkillName,
} from "../styles/SkillsPage.ts";

const skills = [
  { name: "HTML", src: "../public/logos/html-logo.png" },
  { name: "CSS", src: "../public/logos/css-logo.png" },
  { name: "SASS", src: "../public/logos/sass-logo.png" },
  {
    name: "styled-components",
    src: "../public/logos/styled-components-logo.png",
  },
  { name: "JavaScript", src: "../public/logos/js-logo.png" },
  { name: "TypeScript", src: "/../public/logos/ts-logo.png" },
  { name: "React", src: "../public/logos/reactjs-logo.png" },
  { name: "Redux", src: "../public/logos/redux-logo.svg" },
  { name: "Node.js", src: "../public/logos/nodejs-logo.png" },
  { name: "MongoDB", src: "../public/logos/mongodb-logo.png" },
  { name: "Git", src: "../public/logos/git-logo.png" },
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
