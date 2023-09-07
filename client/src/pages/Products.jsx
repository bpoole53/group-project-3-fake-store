import React from "react";
import ProductCardContainer from "../components/ProductCardContainer";


export default function Products() {

	// call whatever is used to get the product data from mongo. Should return array anyways.
	const getProducts = [];

	return (

		<>
			<ProductCardContainer/>
			{/* {getProducts.map( p => (
			<ProductCard product = {p}/>))} */}
		</>

	)
		

}
