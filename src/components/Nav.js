import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";
import {menuItems} from "./menuItems";
import media from '../styles/media'

const tablet = media.tablet;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #013d55;
  color: white;
  padding: 0.5rem 1rem;
`;

const MobileView = styled.div`
display: none;
  
@media (max-width:${tablet}px) {
  display: block;
}
`;

const DesktopView = styled.div`
display: block;
  
@media (max-width:${tablet}px) {
  display: none;
}
`;

const MenuIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Brand = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
`;
const NavlinksUnlisted = styled.ul`
  display: flex;
  justify-content: center;
`;
const NavlinksListed = styled.li`
  padding: 0 0.5rem;
  list-style-type: none;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

const SideMenu = styled.div``;

const Slider = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  text-align: right;
  padding: 1rem;
`;

const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1.6rem 0;

  &:hover {
    color: whitesmoke;
    transform: scale(1.1);
  }
`;

function Nav() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(media.tablet)
  },[])

  const handleClick = () => {
    setClicked(!clicked);
  };



  return (
    <NavbarContainer>
      <Brand>Super Store</Brand>
      <MobileView>
        <MenuIcon
          src={clicked ? "" : menuIcon}
          onClick={handleClick}
        ></MenuIcon>

        <SideMenu>
          {clicked ? (
            <Slider>
              <CloseIcon
                src={clicked ? closeIcon : ""}
                onClick={handleClick}
              ></CloseIcon>
              {menuItems.map((item, index) => (
                <NavlinksUnlisted>
                  <NavlinksListed>
                    <StyledLink to={item.path}>{item.title}</StyledLink>
                  </NavlinksListed>
                </NavlinksUnlisted>
              ))}
            </Slider>
          ) : (
            " "
          )}
        </SideMenu>

      </MobileView>
      <DesktopView>

        <NavlinksUnlisted>
        {menuItems.map((item, index) => (
                <NavlinksUnlisted>
                  <NavlinksListed>
                    <StyledLink to={item.path}>{item.title}</StyledLink>
                  </NavlinksListed>
                </NavlinksUnlisted>
              ))}
        </NavlinksUnlisted>
      </DesktopView>
    </NavbarContainer>
  );
}

export default Nav;
