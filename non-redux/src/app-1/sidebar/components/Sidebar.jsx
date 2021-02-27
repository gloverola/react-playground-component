import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'
import Submenu from "./Submenu";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        return setSidebar(!sidebar)
    }
  return (
    <>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {
              SidebarData.map((item, index) => (
                  <Submenu item={item} key={index} />
              ))
          }
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

const Nav = styled.div`
  background: #2690e7;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color: #fff;
`;

const SidebarNav = styled.div`
background: #2690e7;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 300ms ease-in-out;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`
