import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import CartTotal from "../components/CartTotal";

export default function Checkout() {

	return(
		<>

			{/* <div className="flex-v">
			{currentItems.map( c =>  (<ProductCard product={c} />))}
			</div> */}
			<div className="flex flex-col w-full lg:flex-row">
				<div className="checkout-form-holder grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
					<CheckoutForm></CheckoutForm>
				</div> 
				<div className="divider lg:divider-horizontal"></div> 
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
					<h3>Total: $</h3>
				</div>
			</div>

		</>
	)

}
