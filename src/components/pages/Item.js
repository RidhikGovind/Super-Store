import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Stars from '../Stars';
import useFetch from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { mixins, media } from '../../styles';

const MainContainer = styled.div``;

const Loading = styled.div`
	text-align: center;
	padding-top: 4rem;
	font-size: 2rem;
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 1rem;
	height: 100%;
	@media (min-width: ${media.netbook}px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 3vw;
	}
`;

const Image = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	padding: 1rem;
`;

const Name = styled.div`
	font-size: 1.2rem;
	margin: 0.3rem 0.5rem;
`;

const Details = styled.div``;

const Description = styled.div`
	padding: 1rem;
	line-height: 23px;
`;

const Rating = styled.div`
	${mixins.flexCenter};
	text-align: center;
	margin: 1rem 0.5rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid black;
`;

const RatingNum = styled.div`
	margin: 0.5rem;
	font-size: 1.1rem;
`;

const Price = styled.div`
	margin: 0.3rem 0.5rem;
	font-size: 1.3rem;
	font-weight: bold;
	padding: 1rem;
`;

const OnSale = styled.span`
	height: 1rem;
	width: 2rem;
	background: #d22b2b;
	color: white;
	padding: 0.2rem 0.2rem;
	margin-left: 1rem;
	border-radius: 3px;
`;

const Wrapper = styled.div`
	${mixins.flexCenter};
`;

const StyledLink = styled(Link)`
	${mixins.yellowButton};
`;

const Quantity = styled.div`
	${mixins.flexCenter}
	flex-direction: column;
`;

const ImageGrid = styled.div``;

const DetailsGrid = styled.div``;

const StockInput = styled.input`
	height: 30px;
	width: 50px;
	font-size: 1.2rem;
	margin: 0.5rem;
`;

const ErrorMessageBox = styled.div`
	background: #23d1d6;
	border-radius: 6px;
	padding: ${(props) => (props.visible ? '0.3rem 0.4rem' : '0')};
	margin: 1rem 0;
	width: 80%;


	@media (max-width: ${media.phablet}px) {
		display: block;
	}
`;
const StockLeft = styled.div`
	font-size: 1.1rem;
	font-weight: bolder;
`;
function Item() {
	const { itemId } = useParams();

	const URL = `https://gp-super-store-api.herokuapp.com/item/${itemId}`;

	const { singleProduct, isLoading } = useFetch(URL);
	const {
		name,
		imageUrl,
		description,
		stockCount,
		avgRating,
		price,
		isOnSale,
		_id,
	} = singleProduct;

	const [stock, setStock] = useState(1);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		handleAddToCart();
	}, [stock]);

	const handleStockChange = ({ target }) => {
		setStock(target.value);
	};

	const handleAddToCart = () => {
		if (stock == 0) {
			setErrorMessage(`Don't be this cheap. Minimum 1 item is needed`);
		} else if (stock < 0) {
			setErrorMessage('How can you be so negative ?');
		} else if (stock > stockCount) {
			setErrorMessage(`Aiming pretty high huh ? Not enough products.`);
		} else {
			setErrorMessage(null);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loading>LOADING...</Loading>
			) : (
				<MainContainer>
					<ProductContainer>
						<ImageGrid>
							<Image src={imageUrl}></Image>
						</ImageGrid>
						<DetailsGrid>
							<Name>{name}</Name>
							<Rating>
								<Stars rating={avgRating} id={_id}></Stars>
								<RatingNum>{avgRating}</RatingNum>
							</Rating>
							<Description>{description}</Description>
							<Price>
								${price}
								{isOnSale === true ? <OnSale>On Sale</OnSale> : ''}
							</Price>
							<Quantity>
								Quantity:
								<StockInput
									type='number'
									min='1'
									onChange={handleStockChange}
									max={stockCount}
								></StockInput>
								<ErrorMessageBox visible={errorMessage ? true : false}>
									{errorMessage}
								</ErrorMessageBox>
								<StockLeft>Remaining Stock: {stockCount}</StockLeft>
							</Quantity>
							<Wrapper>
								<StyledLink to={`item/${_id}`}>Add to Cart</StyledLink>
							</Wrapper>
						</DetailsGrid>
					</ProductContainer>
				</MainContainer>
			)}
		</>
	);
}

export default Item;
