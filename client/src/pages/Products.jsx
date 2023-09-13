import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from 'react'
import '../App.css'

export default function Products() {


	const [ products, setProducts ] = useState([])

	const fetchProducts = () => {
		fetch("/api/product/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}})
		.then(response => {
			return response.json()
		}) .then (data => {
			setProducts([data.payload.length])
		})
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<>
		<div className="productPageContainer">
			<h1 className="productTitle">Products</h1>

			<section className='productContainer'> 
			<section className='productCol'>
			 {products.map( (product) => (
			 <ProductCard />))}
			</section>
			</section>

		</div>
		</>
	)
		

}
