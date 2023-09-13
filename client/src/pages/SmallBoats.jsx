import ProductCard from "../components/ProductCard"
import ProductCardContainer from "../components/ProductCardContainer"
import React, { useEffect, useState } from 'react';

export default function SmallBoats () {

  const [ products, setProducts ] = useState([])

	const fetchProducts = () => {
		fetch("/api/product/small-water-vessels")
		.then(response => {
			return response.json()
		}) .then (data => {
			setProducts(data)
			console.log(data)
		})
	}

	useEffect(() => {
		fetchProducts()
	}, [])

  return (
    <div className="productPageContainer">
      <h1>Small Watercraft</h1>
      {products.length > 0 && (
				<ProductCardContainer>
					{products.map( p => (
					<ProductCard product = {p}/>))}
				</ProductCardContainer>
			)}
    </div>
  )
}