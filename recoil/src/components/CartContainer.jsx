import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useCartStoreSelector } from "../store/cart-store";


const CartContainer = () => {
  const cartItems = useCartStoreSelector.use.cartItems()
  const totalAmount = useCartStoreSelector.use.totalAmount()
  const setTotalAmount = useCartStoreSelector.use.setTotalAmount()
  const clearCart = useCartStoreSelector.use.clearCart()

  useEffect(() => {
    setTotalAmount()
  }, [cartItems, totalAmount])

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cartItems.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>Rs. {totalAmount.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={clearCart} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
