import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu/MobileMenu";
import {
  Container,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  Menu,
  ScrollBar,
  ScrollProgress,
  Wrapper,
} from "./Header.css";

const Header = ({ isDesktop }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const scrollRef = useRef()

  // block srolling site
  // useEffect(() => {
  //   if (isMobileOpen) {
  //     document.body.style.overflowY = `hidden`;
  //   } else {
  //     document.body.style.overflowY = `auto`;
  //   }
  // }, [isMobileOpen]);

  const indicateScrollBar = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const distanceFromPageTop = document.body.scrollTop || scrollTop;
    const height = scrollHeight - clientHeight;
    const scrolled = (distanceFromPageTop / height) * 100;
    scrollRef.current.style.width = `${scrolled}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", indicateScrollBar);
    return () => window.removeEventListener("scroll", indicateScrollBar);
  }, []);

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Menu>
          <Link href="/">{`< Branislav Totić />`}</Link>
          {!isDesktop && (
            <Hamburger onClick={handleMenuClick}>
              <HamburgerBox>
                <HamburgerInner isActive={!isMobileOpen} />
              </HamburgerBox>
            </Hamburger>
          )}
        </Menu>
        <ScrollBar>
          <ScrollProgress ref={scrollRef}/>
        </ScrollBar>
      </Wrapper>
      {!isDesktop && <MobileMenu isHidden={isMobileOpen} />}
    </Container>
  );
};

export default Header;
