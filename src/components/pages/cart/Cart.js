import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import styled from 'styled-components/macro';
import { mixins, theme, media } from '../../../styles';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
	margin: 0rem 10rem;

	@media (max-width: ${media.netbook}px) {
		margin: 0rem 2rem;
	}
	@media (max-width: ${media.phablet}px) {
		margin: 0rem;
	}
`;
const Title = styled.div`
	font-size: 2rem;
	margin: 1rem;
	text-align: center;
`;
const CartItemsContainer = styled.div``;

const CartItems = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem 2rem;
	margin: 1rem;

	@media (max-width: ${media.phablet}px) {
		padding: 1rem;
	}
`;
const Image = styled.img`
	height: 90px;
	width: 90px;
	object-fit: scale-down;
`;
const DetailsWrapper = styled.div`
	display: flex;
	justify-content: start;
	flex-direction: column;
	flex-wrap: wrap;

	@media (max-width: ${media.phablet}px) {
		flex-direction: row;
	}
`;
const Name = styled.div`
	font-size: 1.2rem;
`;

const Quantity = styled.div`
	${mixins.flexCenter}
	flex-wrap: wrap;
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

const PriceField = styled.div`
	${mixins.flexCenter}
`;

const Price = styled.div`
	font-size: 1.2rem;
	font-weight: bolder;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
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
const EmptyCartContainer = styled.div`
	text-align: center;
`;
const EmptyCart = styled.div`
	font-size: 1.4rem;
	margin-top: 2rem;
	font-style: italic;
`;

const BuyProducts = styled.div`
	${mixins.yellowButton}
`;

function Cart() {
	const { cartItems, total, increase, decrease, checkout, remove } = useContext(
		CartContext
	);

	const sucessNotify = (itemName) =>
		toast(` ${itemName} removed from cart`, {
			icon: '\u{1F4E6}',
		});

	return (
		<Container>
			<div>
				<Toaster />
			</div>
			<Title>Shopping Cart</Title>
			<CartItemsContainer>
				{cartItems.map((cartItem) => (
					<CartItems key={cartItem._id}>
						<Image src={cartItem.imageUrl} alt={cartItem.name}></Image>

						<DetailsWrapper>
							<Name>{cartItem.name}</Name>
							<Wrapper>
								<Quantity>
									<Text>Quantity</Text>
									<Number>{cartItem.quantity}</Number>

									<Increase onClick={() => increase(cartItem)}>+</Increase>
									<Decrease onClick={() => decrease(cartItem)}>-</Decrease>

									<Remove
										onClick={() => {
											sucessNotify(cartItem.name);
											remove(cartItem);
										}}
									>
										Remove
									</Remove>
								</Quantity>
							</Wrapper>
						</DetailsWrapper>

						<PriceField>
							<Price>${cartItem.price}</Price>
						</PriceField>
					</CartItems>
				))}
			</CartItemsContainer>

			{cartItems.length > 0 ? (
				<LastContainer>
					<Link to={'/checkout'}>
						<Checkout onClick={() => checkout()}>Checkout</Checkout>
					</Link>
					<Total>
						<span style={{ fontSize: '1.1rem', fontWeight: 'lighter' }}>
							Total:
						</span>{' '}
						${total}
					</Total>
				</LastContainer>
			) : (
				<EmptyCartContainer>
					<EmptyCart>Your cart is empty..</EmptyCart>

					<Link to={'/'}>
						<BuyProducts>Browse Products</BuyProducts>
					</Link>
				</EmptyCartContainer>
			)}
		</Container>
	);
}

export default Cart;
