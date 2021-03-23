import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import styled from 'styled-components/macro';
import { mixins } from '../../../styles';

const Container = styled.div``;
const Title = styled.div``;
const CartItemsContainer = styled.div``;

const CartItems = styled.div`
${mixins.flexBetween}
padding: 1rem;
	border: 1px solid rgba(0,0,0,0.3)

`;
const Image = styled.img`
height: 200px;
width: 200px;
object-fit: scale-down;
`;
const DetailsWrapper = styled.div`
	text-align: center;
	${mixins.flexCenter}
	flex-direction: column;

`;
const Name = styled.div``;

const Quantity = styled.div``;
const Remove = styled.div``;
const Increase = styled.div``
const Decrease = styled.div``
const Price = styled.div``

const Wrapper = styled.div`
	display: flex;
`;
const Checkout = styled.button``;
const Total = styled.div``;

function Cart() {
	const { cartItems } = useContext(CartContext);

	// const { imageUrl, name, quantity,price} = cartItems;

	// console.log(imageUrl, name, quantity,price)

	return (
		<Container>
			<Title>Shopping Cart</Title>
			<CartItemsContainer>
				{cartItems.map(({ imageUrl, name, quantity, price, stockCount }) => (
					<CartItems>
						<Image src={imageUrl} alt={name}></Image>

						<DetailsWrapper>
							<Name>{name}</Name>
							<Wrapper>
								<Quantity>Quantity</Quantity>
								<Increase>+</Increase>
								<Decrease>-</Decrease>
								
								<Remove>Remove</Remove>
							</Wrapper>
						</DetailsWrapper>
							<Price>${price}</Price>
					</CartItems>
				))}
			</CartItemsContainer>
			<Wrapper>
				<Checkout>Check</Checkout>
				<Total>$9393</Total>
			</Wrapper>
		</Container>
	);
}

export default Cart;
