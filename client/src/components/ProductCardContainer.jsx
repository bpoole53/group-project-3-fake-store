import React from "react";
// import ProductCard from "../components/ProductCard";
import '../App.css'
import ProductCard from "./ProductCard";

export default function ProductCardContainer () {


  return (

      <section className='productContainer'>
        <div className='prodCol' >
         {/* {getProducts.map( p => (
         <ProductCard product = {p}/>))} */}
           <ProductCard/>
        </div>
      </section>
  )
}