import React, { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Container, Menu, Wrapper } from "./Header.css";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Menu onClick={() => setIsMobileOpen(!isMobileOpen)}>{`< Branislav Totic />`}</Menu>
        <MobileMenu isHidden={isMobileOpen} />
      </Wrapper>
    </Container>
  );
};

export default Header;
