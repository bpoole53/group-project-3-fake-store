import React from "react";


export default function Cart()
{
//get products from the mongodb cart call. Should be array
const currentProducts = []
return(
<>
<h1>Cart</h1>
	{/* <!-- We want a vertical flex. can Probably extract this into another component to use this logic in checkout as well. */}
	<div className="flex-v">
	{currentProducts.map( c =>  (<ProductCard product={c} />))}
	</div>

</>

);

}
