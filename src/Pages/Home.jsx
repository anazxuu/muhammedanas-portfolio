import React from "react";
import { ImageAnimation, TextTyper, NavBar, Footer } from "../components/";
import { Projects, Skills, AboutMe, Contact } from "../Pages/";

const DownloadCv = () => {
  const fileUrl = "/anas-cv.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "anas-cv.pdf";
  link.click();
};

const Home = () => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <TextTyper />
      </div>
      <div style={{ backgroundColor: "#DCDFE4" }}>
        <AboutMe downloadCv={DownloadCv} />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};
export default Home;
