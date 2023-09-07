import '../App.css'

export default function ProductCard () {


  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="card-price">$300</p>
        <button className="btn btn-primary productBtn">Details</button>
      </div>
    </div>

    /* {getProducts.map( p => (
		<ProductCard product = {p}/>))} */

  )
}