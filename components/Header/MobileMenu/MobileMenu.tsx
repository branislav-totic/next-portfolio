import React from "react";
import { Container, Wrapper } from "./MobileMenu.css";

type MobileMenuProps = {
  isHidden: boolean
}

const MobileMenu:React.FC<MobileMenuProps> = ({ isHidden }) => {
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
