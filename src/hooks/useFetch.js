import {useState,useEffect} from 'react';

const useFetch = (url) => {
	const [products, setProducts] = useState([]);
	const [singleProduct, setSingleProduct] = useState([]);
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
				console.log(data);

				setProducts(data.items);
				setSingleProduct(data)
                setIsLoading(false)
				
				
			})
			.catch((err) => console.log('error fetching data', err));
	},[]);


    return { isLoading ,products, setProducts, singleProduct}
};
export default useFetch;
