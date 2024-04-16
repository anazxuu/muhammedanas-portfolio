import React from "react";
import styled from "@emotion/styled";
import kevinRoan from "../assets/images/projects/kevinroan.png";
import adacodeSolutions from "../assets/images/projects/adacodesolutions.png";
import blogSite from "../assets/images/projects/blog-site.png";
import restoHub from "../assets/images/projects/restohub.png";
import educationSite from "../assets/images/projects/edu.png";
import keralaTours from "../assets/images/projects/keralaTours.png";
import ludanChats from "../assets/images/projects/ludanChats.png";
import hsatco from "../assets/images/projects/hsatco.png";
import softwareFirm from "../assets/images/projects/softwareFirm.png";

const Container = styled.div`
  background-color: #282c34;
`;
const HeaderStyled = styled.h1`
  color: #dbdee3;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  margin-bottom: 10px;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10vmax 3vmax 10vmax;
  margin: 0 auto;
  @media screen and (max-width: 850px) {
    padding: 0 3vmax;
    flex-direction: column;
  }
`;

const ProjectStyled = styled.div`
  min-height: 25vmax;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #dcdfe4;
  color: black;
  border: 1px solid white;
  border-radius: 10px;
  width: 20vmax;
  overflow: auto;
  display: flex;
  margin: 0.5vmax;
  flex-direction: column;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 0;
    margin-bottom: 1.5vmax;
  }
  date {
    font-size: 14px;
    font-family: "QuickSand";
    display: flex;
    justify-content: center;
  }

  imagecontainer {
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    img {
      border-radius: 10px;
    }
  }

  heading {
    padding: 1vmax;
    font-family: "QuickSand";
    display: flex;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 3;
  }
  content {
    padding: 10px;
    font-family: "QuickSand";
    text-align: center;
  }
  buttoncontainer {
    display: flex;
    justify-content: center;
    button {
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
      margin: 10px;
      font-family: "QuickSand";
      transition: all 0.5s;
      &:hover {
        background-color: #cddc39;
        color: black;
      }
    }
  }
`;

const projects = [
  {
    src: adacodeSolutions,
    name: "Adacode Solutions",
    date: " 2024-Jan to Present",
    desc: "Full Stack Website Leveraging firebase Razorpay and Next.js.",
    demo: "https://adacodesolutions.com",
    source: "https://github.com/kevin-roan/adacode.git",
  },
  {
    src: softwareFirm,
    name: "Software Firm Website",
    date: "2023 December",
    desc: "Next Js website for software developement firm.",
    demo: "https://software-firm-website-nextjs.vercel.app/",
    source: "https://github.com/kevin-roan/software-firm-website-nextjs",
  },
  {
    src: keralaTours,
    name: "Tourist Landing Page",
    date: "2023 November",
    desc: "React front-end website showcasing Kerala's tourism.",
    demo: "https://kerala-tours-landing-page.vercel.app/",
    source: "https://github.com/kevin-roan/kerala-tours-landing-page",
  },
  {
    src: restoHub,
    name: "RestoHub - Restaurant Website",
    date: "2023 August",
    desc: "Front-end for a restaurant, showcasing meals and booking portal",
    demo: "https://kevin-roan.github.io/restohub/",
    source: "https://github.com/kevin-roan/restohub",
  },
  {
    src: kevinRoan,
    name: "PortFolio",
    date: "2023 August",
    desc: "Personal portfolio website highlighting projects and skills.",
    demo: "https://kevinroan.vercel.app",
    source: "https://github.com/kevin-roan/kevinroan",
  },
  {
    src: blogSite,
    name: "Blog Site",
    date: "2023 July",
    desc: "Personal blog built with React , Typescript , Chakra UI , and Firebase on backend.",
    demo: "https://kevinroan-blogs.vercel.app",
    source: "https://github.com/kevin-roan/kevinroan-blogs.git",
  },
  {
    src: educationSite,
    name: "EduTech- React FrontEnd Website",
    date: "2023 June",
    desc: "Educational platform designed with React front-end.",
    demo: "https://education-website-react-murex.vercel.app/",
    source: "https://github.com/kevin-roan/education-website-react.git",
  },
  {
    src: ludanChats,
    name: "CHatR- Real time Chat App",
    date: "2023 June",
    desc: "Real-time chat application for seamless communication.",
    source: "https://github.com/kevin-roan/ludanchats",
    demo: "https://kevinroan.github.io/ludanchats/",
  },
  {
    src: hsatco,
    name: "HSATCO",
    date: "2022 December",
    desc: "Website for freelance client, showcasing services and business info.",
    demo: "https://hsatco.com/",
  },
];

export default function Projects() {
  return (
    <Container>
      <HeaderStyled>Projects</HeaderStyled>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project
            title={project.name}
            imageUrl={project.src}
            date={project.date}
            demo={project.demo}
            source={project.source}
            key={index}
            desc={project.desc}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
}

const Project = ({ title, imageUrl, date, demo, source, key, desc }) => {
  return (
    <ProjectStyled key={key}>
      <imagecontainer>
        <img src={imageUrl} alt="project screenshot" />
      </imagecontainer>
      <heading>{title}</heading>
      <date>{date}</date>
      <content>{desc}</content>
      <buttoncontainer>
        <a href={source}>
          <button>GitHub</button>
        </a>
        <a href={demo}>
          <button>Demo</button>
        </a>
      </buttoncontainer>
    </ProjectStyled>
  );
};
