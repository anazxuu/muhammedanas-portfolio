import React from "react";
import { Button } from "@material-tailwind/react";
import styled from "@emotion/styled";

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 70px;
  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;
const NavBar = () => {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBarStyled>
        <div className="flex items-center gap-4">
          <Button
            variant="contained"
            color="pink"
            onClick={() => scrollToPosition(955)}
          >
            {" "}
            <i class="fa-solid fa-code"></i>
          </Button>
          <Button color="lime" onClick={() => scrollToPosition(1900)}>
            <i class="fa-solid fa-keyboard"></i>
          </Button>
          <Button color="amber" onClick={() => scrollToPosition(2900)}>
            <i class="fa-solid fa-gears"></i>
          </Button>
          <Button color="cyan" onClick={() => scrollToPosition(3800)}>
            <i class="fa-solid fa-comment"></i>
          </Button>
        </div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
