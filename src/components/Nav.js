import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menuIcon from '../assets/menuIcon.png';
import closeIcon from '../assets/closeIcon.png';
import { menuItems } from '../utils/menuItems';
import { media, theme, mixins } from '../styles';
import NavItem from './NavItem';
import { CartContext } from '../context/CartContext';

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
	display: flex;

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

const CartTotal = styled.span`
	width: 30px;
	height: 30px;
	font-weight: bolder;
	font-size: 1.3rem;
	background: red;
	border-radius: 50%;
	padding: 0.1rem;
	${mixins.flexCenter}
`;

function Nav() {
	const [clicked, setClicked] = useState(false);

	const { itemCount } = useContext(CartContext);

	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<NavbarContainer>
			<StyledLink to='/' brand='true'>
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
							{menuItems.map((item) => (
								<NavlinksUnlisted key={item.id}>
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
				<NavItem to='/'>Home</NavItem>
				<NavItem to='/deals'>Deals</NavItem>
				<NavItem to='/cart'>Cart</NavItem>
				<CartTotal>{itemCount}</CartTotal>
			</DesktopView>
		</NavbarContainer>
	);
}

export default Nav;
