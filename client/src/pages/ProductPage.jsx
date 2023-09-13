import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage ({ product }) {
  const params = useParams()
  const [ products, setProducts ] = useState([])

	const fetchProduct = () => {
		fetch(`/api/product/${params.id}`)
		.then(response => {
			return response.json()
		}) .then (data => {
			setProducts(data.payload)
			console.log(data)
		})
	}

	useEffect(() => {
    console.log("params", params)
		fetchProduct()
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
          <h2 className="product-page-title">{products.name}</h2>
          <h3>${products.price}</h3>
          <p className="product-page-text">{products.description}</p>
          <button className="btn product-page-button">Add to Cart</button>
        </div>
      </div>
    </>
  )
}