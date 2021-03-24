import React from "react";
import { Container, Wrapper } from "./MobileMenu.css";

const MobileMenu = ({ isHidden }) => {
  return (
    <Container isHidden={isHidden}>
      <Wrapper>
        <div>bane</div>
        <div>bane</div>
        <div>bane</div>
        <div>bane</div>
        <div>bane</div>
      </Wrapper>
    </Container>
  );
};

export default MobileMenu;
