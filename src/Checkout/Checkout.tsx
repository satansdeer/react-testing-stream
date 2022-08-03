import { CheckoutList } from "./CheckoutList"
import { useCartContext } from "../CartContext"
import { CheckoutForm } from "./CheckoutForm"
import { postCheckout } from "../utils/api"

export const Checkout = () => {
  const { products, totalPrice, clearCart } = useCartContext()

  const submitCheckout = async () => {
    const { orderId } = await postCheckout({
      products
    })
    clearCart()
    window.location.assign(`/order/?orderId=${orderId}`)
  }

  return (
    <section className="nes-container with-title">
      <h1 className="title">Checkout</h1>
      <div className="nes-container is-rounded checkout-list-wrapper">
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()} Zm</p>
      </div>
      <p>Enter your payment credentials:</p>
      <CheckoutForm submit={submitCheckout} />
    </section>
  )
}
