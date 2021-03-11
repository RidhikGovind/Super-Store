import React from 'react';
import styled from 'styled-components/macro';
import Stars from './Stars';
import { mixins } from './../styles';
import { Link, NavLink } from 'react-router-dom';

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
	object-fit: scale-down;
`;

const Name = styled.div`
	font-size: 1.2rem;
	margin: 0.3rem 0.5rem;
`;

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

function ItemCard(props) {
	const { name, imageUrl, avgRating, price, isOnSale, _id } = props;
	return (
		<ProductContainer key={_id}>
			<Image src={imageUrl} alt={name}></Image>
			<Name>{name}</Name>
			<Rating>
				<Stars rating={avgRating} id={_id}></Stars>
				<RatingNum>{avgRating}</RatingNum>
			</Rating>
			<Price>
				${price}
				{isOnSale === true ? <OnSale>On Sale</OnSale> : ''}
			</Price>
			<Wrapper>
				<StyledLink to={`/item/${_id}`}>View Item</StyledLink>
			</Wrapper>
		</ProductContainer>
	);
}

export default ItemCard;
