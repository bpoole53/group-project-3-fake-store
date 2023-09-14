import React from "react";
import CartTotal from "../components/CartTotal";
import { useEffect, useState } from 'react';
import { useAppContext } from '../utils/AppContext';

export default function Cart() {
	const { userData } = useAppContext();
	const [ carts, setCarts ] = useState([])
	console.log(userData._id)

	useEffect(() => {
		fetch(`/api/cart/${userData._id}`, {
			method: "GET",
			headers: {
        "Content-Type": "application/json"
      }
		}) .then ((response) => {
			return response.json()
		}) .then (data => {
			setCarts([data.cart])
			console.log(data.cart)
			
		})
	}, []);

	return(
		<>

			<div className="flex flex-col w-full lg:flex-row">
				<div className="cart-card-holder grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
					{carts.map((cart) => (
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">{cart.product_name}</h2>
						<h3>{cart.quantity}</h3>
						<h3>${cart.productDetails}</h3>
					</div>
				</div>
					))}
				</div> 
				<div className="divider lg:divider-horizontal">OR</div> 
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><CartTotal/></div>
			</div>


		</>

	);

}
