import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  @media screen and (max-width: 850px) {
    max-width: 90%;
    overflow: auto;
    margin: auto;
  }
`;

const styles = {
  display: "block",
  color: "#fff",
  backgroundColor: "#282C34",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid white",
  fontFamily: "Quick Sand",
  cursor: "pointer",
};
const stylesmobile = {
  display: "block",
  color: "#fff",
  backgroundColor: "#282C34",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  fontFamily: "Quick Sand",
  width: "100%",
};

export default function Github() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 850);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <GitHubCalendar
          username="anazxuu"
          blockSize={10}
          blockMargin={2}
          color="#c084f5"
          fontSize={10}
          colorScheme="dark"
          style={stylesmobile}
        />
      ) : (
        <a href="https://github.com/anazxuu">
          <GitHubCalendar
            username="anazxuu"
            blockSize={10}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
            colorScheme="dark"
            style={styles}
          />
        </a>
      )}
    </Container>
  );
}
