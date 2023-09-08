import '../App.css'

export default function ProductCard () {

  const getProducts = [];
  function sendtoProductPage () {
    window.location.replace('/productpage')
  }
  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://dummyimage.com/250/ffffff/000000" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="card-price">$300</p>
        <button className="btn btn-primary productBtn" onClick={sendtoProductPage}>Details</button>
      </div>
    </div>

    /* {getProducts.map( p => (
		<ProductCard product = {p}/>))} */

  )
}