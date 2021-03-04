import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				console.log(data.items);

				setProducts(data.items);
                setIsLoading(false)
			})
			.catch((err) => console.log('error fetching data', err));
	},[]);

    return {products, setProducts, isLoading}
};
export default useFetch;
