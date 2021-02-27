import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menuIcon from '../assets/menuIcon.png';
import closeIcon from '../assets/closeIcon.png';
import { menuItems } from './menuItems';
import { media, theme } from '../styles';

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #013d55;
	color: white;
	padding: 0.3rem 1rem;
`;

const MobileView = styled.div`
	display: none;

	@media (max-width: ${media.tablet}px) {
		display: block;
	}
`;

const DesktopView = styled.div`
	display: block;

	@media (max-width: ${media.tablet}px) {
		display: none;
	}
`;

const MenuIcon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
`;

const NavlinksUnlisted = styled.ul`
	display: flex;
	justify-content: center;
`;
const NavlinksListed = styled.li`
	padding: 0 4rem;
	list-style-type: none;
	font-weight: 500;
	display: flex;
	justify-content: center;

	// .selected{
	//   border-bottom: 1.5px solid white;
	//   color: #e1e1e1;
	// }
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
	width: 1.2rem;
	height: 1.2rem;
	cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1.6rem 0;
  transition: props.brand ? '' : ${theme.transition};

  
  &:hover {
    color: whitesmoke;
    transform: props.brand ? '' : scale(1.1);
  }

`;

const Navlinknew = styled.ul`
	li {
		margin: 0 0.8rem;
		text-decoration: none;
		font-size: 1.3rem;
		position: relative;
	}

	.current {
		li::after {
			content: '';
			position: absolute;
			width: 8px;
			height: 8px;
			bottom: -9px;
			left: 50%;
			background: white;
			border-radius: 50%;
		}

		li {
			color: #d3d3d3;
		}
	}
`;

function Nav() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<NavbarContainer>
			<StyledLink to='/' brand>
				Super Store
			</StyledLink>
			<MobileView>
				<MenuIcon
					src={clicked ? '' : menuIcon}
					onClick={handleClick}
				></MenuIcon>

				<SideMenu>
					{clicked ? (
						<Slider>
							<CloseIcon
								src={clicked ? closeIcon : ''}
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
						' '
					)}
				</SideMenu>
			</MobileView>

			<DesktopView>
				<Navlinknew>
					{menuItems.map((item, index) => (
						<NavLink exact to={item.path} activeClassName='current'>
							<li>{item.title}</li>
						</NavLink>
					))}
				</Navlinknew>
			</DesktopView>
		</NavbarContainer>
	);
}

export default Nav;
