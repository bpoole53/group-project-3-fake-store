import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../utils/AppContext';

export default function ProductPage () {
  const params = useParams()
  const [ products, setProducts ] = useState([])
  const { userData } = useAppContext();

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


  

  const addToUserCart = (productId) => {
    fetch(`/api/cart/${userData.id}`, {
      method: "POST",
      body: {
        productId: productId,
        quantity: 1
      },
      headers: {
        "Content-Type": "application/json"
      }})
    .then ((response) => {
      console.log(response)
    })
  }



  return (
    <>
      <div className="product-page-container">
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full">
            <img src={products.photo} className="w-full" alt={products.name} />
          </div>
        </div>

        <div className="product-text-container">
          <h2 className="product-page-title">{products.name}</h2>
          <h3>${products.price}</h3>
          <p className="product-page-text">{products.description}</p>
          <button className="btn product-page-button" onClick={(e) => addToUserCart(e, products._id)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}