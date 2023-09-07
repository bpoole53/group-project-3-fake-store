import React from "react";
import ProductCard from "../components/ProductCard";
import '../App.css'
import CategoriesList from "../components/CategoriesList";

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