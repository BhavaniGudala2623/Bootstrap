import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { BsFillPersonFill } from "react-icons/bs";



const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10; 
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {




  return (
    <>
      <nav class="navbar navbar-light bg-dark " height="40">
        <div class="container-fluid">
          <span class="navbar-brand mb-1 text-white h4">HRM Portal</span>
          <a class="navbar-brand" href="#">
            <img src="./images/logo.jpg.jpg" alt="" width="60" height="60" ></img>
            <span class="navbar-brand mb-1 text-white h4">Arshaa Technologies</span>
          </a>
        </div>
      </nav>
      <card>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav >
          <SidebarWrap>
            <NavIcon to='#'>
              <BsFillPersonFill />
              <h4 class="fw-bold" text-white>HR</h4>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      </card>
    </>
  );
};

export default Sidebar;
