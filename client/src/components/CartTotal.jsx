
export default function CartTotal () {

  function sendToCheckout () {
    window.location.replace('/checkout')
  }

  return (
    <>
      <h1>Total: $</h1>
      <button className="btn" onClick={sendToCheckout}>Checkout</button>
    </>
  )
}