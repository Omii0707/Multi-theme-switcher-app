import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
  width: 220px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-230px")};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
  z-index: 999;

  @media (min-width: 768px) {
    left: 0;
  }
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const NavLinkStyled = styled(NavLink)`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  &.active {
    color: ${({ theme }) => theme.button};
  }

  &:hover {
    color: ${({ theme }) => theme.button};
  }
`;

const Dropdown = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: auto;
`;

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerButton>

      <SidebarWrapper isOpen={isOpen}>
        <Logo>Multi-Theme App</Logo>
        <NavLinkStyled to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLinkStyled>
        <NavLinkStyled to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLinkStyled>

        <Dropdown
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </Dropdown>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
