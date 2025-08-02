import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1; /* Occupy full width */
  margin-bottom: 0;

  @media (max-width: 640px) {
    margin-bottom: 0.5rem;
    width: 100%; /* Take full line on mobile */
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;

    &.active {
      color: ${({ theme }) => theme.button};
    }
  }
`;

const Dropdown = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
`;

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo>Multi-Theme App</Logo>
      <NavContainer>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        <Dropdown
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </Dropdown>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
