import React from "react";
import styled from "@emotion/styled";
import dp from "../assets/images/dp.jpg";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const HeaderStyled = styled.h1`
  color: #23262d;
  font-size: 7vh;
  display: flex;
  justify-content: center;
  font-family: QuickSand;
  @media screen and (max-width: 850px) {
    font-size: 6vh;
    margin-bottom: 3vh;
  }
`;

const AboutContainer = styled.div`
  background-color: #dcdfe4;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  background-color: #23262d;
  border-radius: 9px;
  padding: 1.5vmax;
  border: 1px solid white;
  width: 50vw;
  height: auto;
  marign: auto;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: 90%;
  }
`;
const ImageContainer = styled.div`
  border: 4px solid white;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  width: 12vmax;
  margin: 10px;
  padding: 0.4vmax;
  border-radius: 20px;
  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3vmax auto;
    width: 24vmax;
  }
`;
const EducationContainer = styled.div`
  width: 100%;
  border: 2px solid orange;
  margin: auto;
  background-color: black;
  border-radius: 20px;
  padding: 10px;
`;
const EducationItem = styled.li`
  color: white;
  font-family: "QuickSand";
  font-weight: 12px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vmax;
`;
const Heading = styled.div`
  font-size: 2vmax;
  font-family: "QuickSand";
  color: #cddc39;
`;
const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.div`
  font-size: 1.2vmax;
  font-family: "QuickSand";
  color: white;
  margin: 0.4vmax;
  text-align: justify;
  @media screen and (max-width: 850px) {
    font-size: 2vmax;
  }
`;
const HighLight = styled.span`
  color: #e91e63;
`;
export default function AboutMe({ downloadCv }) {
  return (
    <>
      <HeaderStyled>About Me</HeaderStyled>
      <AboutContainer>
        <CardContainer>
          <LeftPane>
            <ImageContainer>
              <img
                src={dp}
                alt="Image of MUHAMMED ANAS"
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
              />
            </ImageContainer>
            <EducationContainer>
              <ul>
                <EducationItem>Bachelor of Computer Application </EducationItem>
                <EducationItem>English | Malayalam | Hindi</EducationItem>
                <EducationItem>TypeScript, React, Redux </EducationItem>
              </ul>
            </EducationContainer>
          </LeftPane>
          <ContentContainer>
            <Heading>MUHAMMED ANAS</Heading>
            <Paragraph>
              I am a 21 year old professional{" "}
              <HighLight>Web developer </HighLight>who earned a Bachelor of
              Computer Application -<HighLight> BCA </HighLight>degree in 2023.
              Since then, I've been working as a
              <HighLight> Freelance Web-Developer</HighLight>
            </Paragraph>
            <Paragraph>
              Most of my projects involve developing frontend applications using
              <HighLight> React</HighLight> and{" "}
              <HighLight>Typescript. </HighLight>I also enjoy designing my own
              projects and creating innovative web applications, all while
              continuing to learn and expand my skillset.
              <Button
                color="lime"
                className="flex items-center mt-4 gap-3 white"
                size="sm"
                onClick={() => downloadCv()}
              >
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download CV
              </Button>
            </Paragraph>
          </ContentContainer>
        </CardContainer>
      </AboutContainer>
    </>
  );
}
