import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import useFetch from '../../hooks/useFetch';
import SearchBar from '../SearchBar';
import Pagination from '../Pagination';
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

function Home() {
	const URL = 'https://gp-super-store-api.herokuapp.com/item/list';

	const { products, isLoading, setProducts } = useFetch(URL);

	//error displayed if there are no search results
	const [error, setError] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);

	//get current posts
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	const handleOnSearch = (searchQuery) => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setError(false);

				const filteredProducts = data.items.filter((product) => {
					return product.name.toLowerCase().includes(searchQuery.toLowerCase());
				});
				if (filteredProducts.length == 0) {
					setError(true);
				}
				setProducts(filteredProducts);
			});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	return (
		<>
			{isLoading ? (
				<Loading>LOADING...</Loading>
			) : (
				<MainBody>
					<SearchBar searchError={error} onSearch={handleOnSearch} />
					<MainContainer>
						{products && currentProducts.map((data) => <ItemCard {...data} />)}
					</MainContainer>
					{error ? (
						<h1 style={{ textAlign: 'center' }}>No results to display</h1>
					) : (
						<Pagination
							productsPerPage={productsPerPage}
							totalProducts={products.length}
							paginate={paginate}
						/>
					)}
				</MainBody>
			)}
		</>
	);
}

export default Home;
