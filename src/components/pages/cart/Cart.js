import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import styled from 'styled-components/macro';
import { mixins, theme } from '../../../styles';

const Container = styled.div``;
const Title = styled.div``;
const CartItemsContainer = styled.div``;

const CartItems = styled.div`
	${mixins.flexBetween}
	padding: 1.5rem 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 1rem;
	
`;
const Image = styled.img`
	height: 90px;
	width: 90px;
	object-fit: scale-down;
`;
const DetailsWrapper = styled.div`
	text-align: left;
`;
const Name = styled.div`
	font-size: 1.2rem;
`;

const Quantity = styled.div`
	${mixins.flexCenter}
`;

const Text = styled.span``;

const Number = styled.span`
	padding: 0.5rem 0.7rem;
	background: rgba(0, 0, 0, 0.1);
	margin: 0.5rem;
`;
const Increase = styled.div`
	background: rgba(0, 0, 0, 0.8);
	color: white;
	padding: 0.5rem 0.7rem;
	cursor: pointer;
	margin: 0 0.3rem;
	transition: ${theme.transition};
	&:hover {
		background: rgba(0, 0, 0, 0.6);
	}
`;
const Decrease = styled.div`
	background: rgba(255, 0, 0, 0.8);
	color: white;
	padding: 0.5rem 0.7rem;
	cursor: pointer;
	margin: 0 0.3rem;
	transition: ${theme.transition};
	&:hover {
		background: rgba(255, 0, 0, 0.4);
	}
`;
const Remove = styled.div`
	color: rgba(0, 0, 0, 0.8);
	text-decoration: 0.5px solid underline;
	cursor: pointer;
	transition: ${theme.transition};
	&:hover {
		color: black;
	}
`;
const Price = styled.div`
	font-size: 1.2rem;
	font-weight: bolder;
	margin-left: 1rem;
`;

const Wrapper = styled.div`
	${mixins.flexCenter}
	margin-top: 1rem;
`;

const LastContainer = styled.div`
	${mixins.flexBetween}
`;

const Checkout = styled.button`
	${mixins.yellowButton}
	margin: 1rem;
	transition: ${theme.transition};
`;
const Total = styled.div`
	margin: 1rem;
	font-size: 1.5rem;
	font-weight: bolder;
`;

function Cart() {
	const { cartItems, total, increase, decrease } = useContext(CartContext);


	return (
		<Container>
			<Title>Shopping Cart</Title>
			<CartItemsContainer>
				{cartItems.map((cartItem) => (
					<CartItems key={cartItem._id}>
						<Image src={cartItem.imageUrl} alt={name}></Image>

						<DetailsWrapper>
							<Name>{cartItem.name}</Name>
							<Wrapper>
								<Quantity>
									<Text>Quantity</Text>
									<Number>{cartItem.quantity}</Number>
									<Increase onClick={() => increase(cartItem)}>+</Increase>
									<Decrease onClick={() => decrease(cartItem)}>-</Decrease>
								</Quantity>

								<Remove>Remove</Remove>
								<Price>${cartItem.price}</Price>
							</Wrapper>
						</DetailsWrapper>
					</CartItems>
				))}
			</CartItemsContainer>
			<LastContainer>
				<Checkout>Checkout</Checkout>
				<Total>
					<span style={{ fontSize: '1.1rem', fontWeight: 'lighter' }}>
						Total:
					</span>{' '}
					${total}
				</Total>
			</LastContainer>
		</Container>
	);
}

export default Cart;
