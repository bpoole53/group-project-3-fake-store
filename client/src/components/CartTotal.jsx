
export default function CartTotal () {

  function sendToCheckout () {
    window.location.replace('/checkout')
  }

  return (
    <>
      <button className="btn" onClick={sendToCheckout}>Checkout</button>
    </>
  )
}