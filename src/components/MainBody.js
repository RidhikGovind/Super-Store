import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div``;

const ProductContainer = styled.div``;

const Image = styled.img`
	width: 300px;
	height: 300px;
`;

const Name = styled.div``;

const Rating = styled.div``

const Stars = styled.div``

const RatingNum = styled.div``

const Price = styled.div``

const ViewItemBtn = styled.div`
    width: 0.5rem;
    height: 0.3rem;
`


function MainBody() {
	const [products, setProducts] = useState([]);

	const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=desc';

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.items);

				setProducts(data.items);
			});
	}, []);
	return (
		<MainContainer>
			{products.map(({ imageUrl, name, avgRating, price, isOnSale, _id }) => (
				<ProductContainer key={_id}>
					<Image src={imageUrl}></Image>
					<Name>{name}</Name>
					<Rating>
						<Stars></Stars>
						<RatingNum>{avgRating}</RatingNum>
					</Rating>
					<Price>{price}</Price>
					<ViewItemBtn></ViewItemBtn>
				</ProductContainer>
			))}
		</MainContainer>
	);
}

export default MainBody;
