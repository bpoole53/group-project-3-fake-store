import ProductCard from "../components/ProductCard"
import ProductCardContainer from "../components/ProductCardContainer"
import React, { useEffect, useState } from 'react';

export default function SmallBoats () {

	const [ products, setProducts ] = useState([])

	const fetchProducts = () => {
		fetch("/api/product/large-water-vessels", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}})
		.then(response => {
			return response.json()
		}) .then (data => {
			setProducts(data.payload)
			console.log(data.payload)
		})
	}

	useEffect(() => {
		fetchProducts()
	}, [])

  return (
    <div className="productPageContainer">
      <h1 className="productTitle">Large Watercraft</h1>
      
      <section className='productContainer'>
      <div className='prodCol'>
            {products.map((product) => (
              <div className="card card-compact w-96 bg-base-100 shadow-xl" key={product.id}>
                <figure><img src={product.image} alt={product.name} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="card-price">${product.price.toLocaleString()}</p>
                  <button className="btn btn-primary productBtn">Details</button>
                </div>
              </div>
            ))}
      </div>
      </section>
    </div>
  )
}