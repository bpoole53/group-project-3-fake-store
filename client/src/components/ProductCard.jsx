import '../App.css'
import data from "../utils/data";
export default function ProductCard () {

  const getProducts = [];

  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.description}!</h2>
        <p className="card-price">{data.price}</p>
        <button className="btn btn-primary productBtn">Details</button>
      </div>
    </div>

    /* {getProducts.map( p => (
		<ProductCard product = {p}/>))} */

  )
}