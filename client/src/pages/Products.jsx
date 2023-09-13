import React from "react";
import ProductCardContainer from "../components/ProductCardContainer";
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
			setProducts(data.payload)
		})
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<>
		<div className="productPageContainer">
			<h1 className="productTitle">Products</h1>

			<ProductCardContainer>
					{products.map( (product) => (
					<ProductCard/>))}
			</ProductCardContainer>

		</div>
		</>
	)
		

}
