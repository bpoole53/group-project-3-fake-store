import React from "react";
import ProductCard from "../components/ProductCard";
import CartTotal from "../components/CartTotal";


export default function Cart() {
	//get products from the mongodb cart call. Should be array
	const currentProducts = []
	return(
		<>
			{/* <!-- We want a vertical flex. can Probably extract this into another component to use this logic in checkout as well. */}
			{/* <div className="flex-v">
			{currentProducts.map( c =>  (<ProductCard product={c} />))}
			</div> */}

			<div className="flex flex-col w-full lg:flex-row">
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">{currentProducts.map( c =>  (<ProductCard product={c} />))}</div> 
				<div className="divider lg:divider-horizontal">OR</div> 
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><CartTotal/></div>
			</div>


		</>

	);

}
