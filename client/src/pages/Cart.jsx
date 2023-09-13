import React from "react";
import ProductCard from "../components/ProductCard";
import CartTotal from "../components/CartTotal";
import { useEffect, useState } from 'react';
import { useAppContext } from '../utils/AppContext';

export default function Cart() {
	const { userData } = useAppContext();
	const [ carts, setCarts ] = useState([])

	useEffect(() => {
		fetch(`/api/cart/${userData.id}`, {
			method: "GET",
			headers: {
        "Content-Type": "application/json"
      }
		}) .then ((response) => {
			return response.json()
		}) .then (data => {
			setCarts(data.payload)
			console.log(data.payload)
		})
	})

	return(
		<>

			<div className="flex flex-col w-full lg:flex-row">
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
					
				</div> 
				<div className="divider lg:divider-horizontal">OR</div> 
				<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><CartTotal/></div>
			</div>


		</>

	);

}
