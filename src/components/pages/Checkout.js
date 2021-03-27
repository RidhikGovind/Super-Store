import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {mixins} from '../../styles'

const Container = styled.div`
${mixins.flexCenter}
flex-direction: column;
margin-top: 5rem;

`;
const Message = styled.div`
font-size: 2rem;
margin-bottom: 3rem;

`;
const HomeButton = styled.div`
    ${mixins.yellowButton}
`;

function Checkout() {
	return (
		<Container>
			<Message>Thank you for shopping with us.</Message>
			<Link to={'/'}>
				<HomeButton>Return Home</HomeButton>
			</Link>
		</Container>
	);
}

export default Checkout;
