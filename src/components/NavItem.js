import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavLinkWrapper = styled.li`

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
}`;

function NavItem({ to, children }) {
	return (
		<NavLinkWrapper>
			<NavLink to={to} exact activeClassName='current'>
				<li>{children}</li>
			</NavLink>
		</NavLinkWrapper>
	);
}

export default NavItem;
