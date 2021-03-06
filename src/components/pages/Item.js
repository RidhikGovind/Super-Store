import React from 'react';
import styled from 'styled-components/macro';
import Stars from '../Stars';
import useFetch from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { mixins } from '../../styles';

const MainContainer = styled.div``;

const Loading = styled.div`
	text-align: center;
	padding-top: 4rem;
	font-size: 2rem;
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	border: 1px solid rgba(0, 0, 0, 0.3);
	padding: 1rem;
`;

const Image = styled.img`
	width: 300px;
	height: 300px;
	padding: 1rem;
`;

const Name = styled.div`
	font-size: 1.2rem;
	margin: 0.3rem 0.5rem;
`;

const Details = styled.div``;
const Description = styled.div``;

const Rating = styled.div`
	display: flex;
	align-content: center;
	text-align: center;
	margin: 0.3rem 0.5rem;
`;

const RatingNum = styled.div`
	margin: 0.5rem;
	font-size: 1.1rem;
`;

const Price = styled.div`
	margin: 0.3rem 0.5rem;
	font-size: 1.3rem;
	font-weight: bold;
`;

const OnSale = styled.span`
	height: 1rem;
	width: 2rem;
	background: #d22b2b;
	color: white;
	padding: 0.2rem 0.2rem;
	margin-left: 0.5rem;
	border-radius: 3px;
`;

const Wrapper = styled.div`
	${mixins.flexCenter};
`;

const StyledLink = styled(Link)`
	${mixins.yellowButton};
`;

const Quantity = styled.div``


function Item() {
	const { itemId } = useParams();

	const URL = `https://gp-super-store-api.herokuapp.com/item/${itemId}`;

	const {singleProduct, isLoading } = useFetch(URL);
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
	return (
		<>
			{isLoading ? (
				<Loading>LOADING...</Loading>
			) : (
				<MainContainer>
					<ProductContainer>
						<Image src={imageUrl}></Image>
						<Details>
							<Name>{name}</Name>
							<Description>{description}</Description>
							<Rating>
								<Stars rating={avgRating} id={_id}></Stars>
								<RatingNum>{avgRating}</RatingNum>
							</Rating>
							<Price>
								${price}
								{isOnSale === true ? <OnSale>On Sale</OnSale> : ''}
							</Price>
                            <Quantity>Quantity:</Quantity>
							<Wrapper>
								<StyledLink to={`/item/${_id}`}>Add to Cart</StyledLink>
							</Wrapper>
						</Details>
					</ProductContainer>
				</MainContainer>
			)}
		</>
	);
}

export default Item;
