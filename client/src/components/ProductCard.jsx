import React, { useEffect, useState } from 'react';
import '../App.css';
      
export default function ProductCard() {
  const [products, setProducts] = useState([]);
      
  useEffect(() => {
    fetch('/api/product/')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.payload); 
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
      });
    }, []);

    // function sendToDetails () {
    //   localStorage.setItem ("key", JSON.stringify(this.product.id))
    //   window.location.replace('/productpage')
    //   console.log("key")
    // }
      
  return (
    <div>
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
        );
 }