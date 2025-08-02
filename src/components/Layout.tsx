import React, { useContext } from "react";
import type { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../context/ThemeContext";

const Main = styled.main<{ $isSidebar: boolean }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  padding-top: ${({ $isSidebar }) => ($isSidebar ? "0" : "60px")};
  min-height: 100vh;
  transition: all 0.3s ease;
  margin-left: ${({ $isSidebar }) => ($isSidebar ? "220px" : "0")};

  @media (max-width: 767px) {
    margin-left: 0; /* No margin on small screens */
  }
`;

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const isSidebar = theme === "theme2";

  return (
    <>
      {isSidebar ? <Sidebar /> : <Header />}
      <Main $isSidebar={isSidebar}>{children}</Main>
    </>
  );
};

export default Layout;
