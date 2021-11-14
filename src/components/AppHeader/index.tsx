import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GoVeganLogo from './img/logo.png';
import HeaderBackground from './img/header-background.jpg';
import { Link } from 'react-router-dom';

const Header = styled.header`
  color: #fff;
  background-image: url(${HeaderBackground});
  position: relative;
  background-position: 50% 30%;
  height: 70vh;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
`;

const UpperLayer = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
`;

const Nav = styled.nav`
  width: 80%;
  margin: 0 auto;
  min-height: 10vh;
  padding: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  max-width: 10vw;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & > li {
    margin: 0 1vw;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Punchline = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

interface INavLinks {
  to: string;
  linkText: string;
}

const navLinks: INavLinks[] = [
  { to: '/home', linkText: 'HOME' },
  { to: '/about-us', linkText: 'ABOUT US' },
  { to: '/add-restaurant', linkText: 'ADD RESTAURANT' },
];

const AppHeader = (): ReactElement => (
  <Header>
    <UpperLayer>
      <Nav>
        <Logo src={GoVeganLogo} />
        <List>
          {navLinks.map((navLink) => (
            <li key={navLink.to}>
              <Link to={navLink.to}>{navLink.linkText}</Link>
            </li>
          ))}
        </List>
      </Nav>
      <Punchline>Discover the best vegan food in India</Punchline>
    </UpperLayer>
  </Header>
);

export default AppHeader;
