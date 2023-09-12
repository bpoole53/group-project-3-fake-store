import '../App.css'

export default function ProductCard (props) {

  // const getProducts = [];
  console.log(props)
  function sendtoProductPage () {
    window.location.replace('/productpage')
  }
  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://dummyimage.com/250/ffffff/000000" alt="shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{props.product.name}</h2>
        <p className="card-price">${props.product.price}</p>
        <button className="btn btn-primary productBtn" onClick={sendtoProductPage}>Details</button>
      </div>
    </div>

    /* {getProducts.map( p => (
		<ProductCard product = {p}/>))} */

  )
}