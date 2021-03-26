import React from 'react';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import Stars from '../Stars';
import { Link, NavLink } from 'react-router-dom';
import ItemCard from './../ItemCard';

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

function Deals() {
	const URL =
		'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true';

	const { products, isLoading } = useFetch(URL);
	return (
		<>
			{isLoading ? (
				<Loading>LOADING...</Loading>
			) : (
				<MainBody>
					<MainContainer>
						{products.map((data) => (
							//Note-1 (see below)
							<ItemCard {...data} />
						))}
					</MainContainer>
				</MainBody>
			)}
		</>
	);
}

export default Deals;

/* Note-1 - Here instead of extracting each object and passing it as props, something like this:

	DONT DO THIS !!!!!!!!
	```
	{products.map((imageUrl, name, avgRating, price, isOnSale, _id) => (
		<ItemCard name={name} imageUrl={imageUrl} and so on... />
	))}
	```

	WE CAN DO THIS: ->>>>>>>

	```
		{products.map((data) => (
			<ItemCard {...data} /> OR <ItemCard props={data} />
		))}	
	```  

	Then in ItemCard.js, destructure the prop passed to it.

*/
