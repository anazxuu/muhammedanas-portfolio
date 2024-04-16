import React from "react";
import styled from "@emotion/styled";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from "react-icons/di";
import {
  SiDocker,
  SiDwm,
  SiExpress,
  SiFirebase,
  SiLinux,
  SiNeovim,
  SiNextdotjs,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Github } from "../components";

const skills = [
  { icon: <SiTypescript />, title: "TypeScript" },
  { icon: <DiReact />, title: "React" },
  { icon: <DiNodejs />, title: "Nodejs" },
  { icon: <SiExpress />, title: "ExpressJs" },
  { icon: <DiMongodb />, title: "MongoDb" },
  { icon: <SiNextdotjs />, title: "NextJs" },
  { icon: <DiGit />, title: "Git" },
  { icon: <SiFirebase />, title: "FireBase" },
  { icon: <SiSocketdotio />, title: "Socket.io" },
  { icon: <DiReact />, title: "React Native" },
  { icon: <DiSass />, title: "Sass" },
  { icon: <SiTailwindcss />, title: "TailwindCSS" },
];

const tools = [
  { icon: <SiNeovim />, title: "NeoVim" },
  { icon: <SiLinux />, title: "Linux" },
  { icon: <SiDwm />, title: "Dwm" },
  { icon: <SiDocker />, title: "Docker" },
  { icon: <SiPostman />, title: "PostMan" },
];

const HeaderStyled = styled.h1`
  color: #23262d;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  @media screen and (max-width: 480px) {
    font-size: 6vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vmax;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    width: auto;
    padding: 5vmax;
    margin: auto;
    overflow: auto;
  }
`;

const SkillBox = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 8vmax;
  background-color: #23262d;
  margin: 5px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10px);
    color: limegreen;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    flex-direction: row;
  }
`;
const Icon = styled.div`
  font-size: 4vmax;
  padding: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillTitle = styled.div`
  color: white;
  font-size: 1vmax;
  overflow: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: auto;
  font-family: "QuickSand";
  @media screen and (max-width: 850px) {
    font-size: 2vmax;
  }
`;
const Wrapper = styled.div`
  background-color: #72757e;
  @media screen and (max-width: 850px) {
    height: auto;
  }
`;
const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Skills() {
  return (
    <Wrapper>
      <HeaderStyled>Skills</HeaderStyled>
      <Container>
        {skills.map((item, key) => (
          <SkillBox key={key}>
            <Icon>{item.icon}</Icon>
            <SkillTitle>{item.title}</SkillTitle>
          </SkillBox>
        ))}
      </Container>
      <ToolsContainer>
        <HeaderStyled>Tools</HeaderStyled>
        <Container>
          {tools.map((item, key) => (
            <SkillBox key={key}>
              <Icon>{item.icon}</Icon>
              <SkillTitle>{item.title}</SkillTitle>
            </SkillBox>
          ))}
        </Container>
      </ToolsContainer>
      <Github />
    </Wrapper>
  );
}
