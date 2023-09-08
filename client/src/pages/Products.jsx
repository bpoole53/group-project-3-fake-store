import React from "react";
import ProductCardContainer from "../components/ProductCardContainer";
import '../App.css'

export default function Products() {

	// call whatever is used to get the product data from mongo. Should return array anyways.
	const getProducts = [];

	return (
		<>
		<div className="productPageContainer">
		<h1 className="productTitle">Products</h1>
			<ProductCardContainer/>
			{getProducts.map( p => (
			<ProductCard product = {p}/>))}
		</div>
		</>
	)
		

}
