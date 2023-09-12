import React, { useEffect, useState } from "react";
import ProductCardContainer from "../components/ProductCardContainer";
import '../App.css'
import ProductCard from "../components/ProductCard";
export default function Products() {

	const ogProductData = [];
	const [productData, setProductData] = useState(ogProductData);
	useEffect(() => {
        getProducts()
    }, [])
	// call get route of controller
	const getProducts = async () => {
        const query = await fetch('/api/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await query.json()
		console.log(result)
		setProductData(result.payload)
		return result;
        // implement logic for success or fail

	};

	// getProducts();
	return (
		<>
		<div className="productPageContainer">
		<h1 className="productTitle">Products</h1>
			<ProductCardContainer/>
			{productData.map( p => (<ProductCard product={p}/>))}
		</div>
		</>
	)
		

}
