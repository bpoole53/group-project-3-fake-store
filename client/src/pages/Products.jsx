import React from "react";

export default function Products()
{

// call whatever is used to get the product data from mongo. Should return array anyways.
const getProducts = [];

	return(<>
		<h1>Products</h1>

		<div className="flex">
		{getProducts.map( p => (
		<ProductCard product = {p}/>

		)  )}
		</div>


		</>);

}
