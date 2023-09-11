import React from "react";
import ProductCard from "../components/ProductCard";

export default function Checkout()
{
const currentItems = [];
return(
<>
<h1>Checkout</h1>

	<div className="flex-v">
	{currentItems.map( c =>  (<ProductCard product={c} />))}
	</div>

</>

);

}
