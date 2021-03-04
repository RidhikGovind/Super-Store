import React from 'react';
import styled from 'styled-components';
import Stars from '../Stars';
import useFetch from '../../hooks/useFetch';

const MainBody = styled.div``;

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
	gap: 1.5rem;
	padding: 1rem;
`;

const Loading = styled.div`
	text-align: center;
	padding-top: 4rem;
	font-size: 2rem;
`;

const ProductContainer = styled.div`
	// background: lightpink;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 300px;
	height: 300px;
  padding: 1rem;
`;

const Name = styled.div``;

const Rating = styled.div`
	display: flex;
	align-content: center;
	text-align: center;
`;

const RatingNum = styled.div`
	margin-left: 0.3rem;
`;

const Price = styled.div``;

const ViewItemBtn = styled.div`
	width: 0.5rem;
	height: 0.3rem;
`;

function Home() {
	const url =
		'https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc';

	const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

	const { products, setProducts, isLoading } = useFetch(URL);
	return (
		<>
			{isLoading ? (
				<Loading>LOADING...</Loading>
			) : (
				<MainBody>
					<MainContainer>
						{products.map(
							({ imageUrl, name, avgRating, price, isOnSale, _id }) => (
								<ProductContainer key={_id}>
									<Image src={imageUrl}></Image>
									<Name>{name}</Name>
									<Rating>
										<Stars rating={avgRating} id={_id}></Stars>
										<RatingNum>{avgRating}</RatingNum>
									</Rating>
									<Price>${price}</Price>
									<ViewItemBtn></ViewItemBtn>
								</ProductContainer>
							)
						)}
					</MainContainer>
				</MainBody>
			)}
		</>
	);
}

export default Home;
