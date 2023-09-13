import React, { useState, useEffect } from 'react'

export default function ProductPage () {

  const [ products, setProducts ] = useState([])

	const fetchProducts = () => {
		fetch("/api/product/:id")
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
    <>
      <div className="product-page-container">
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full">
            <img src="https://via.placeholder.com/500x700" className="w-full" alt="Tailwind CSS Carousel component" />
          </div> 
          <div className="carousel-item w-full">
            <img src="https://via.placeholder.com/500x700" className="w-full" alt="Tailwind CSS Carousel component" />
          </div> 
        </div>

        <div className="product-text-container">
          <h2 className="product-page-title">{products.title}</h2>
          <h3>${products.price}</h3>
          <p className="product-page-text">{products.description}</p>
          <button className="btn product-page-button">Add to Cart</button>
        </div>
      </div>
    </>
  )
}