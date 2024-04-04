import React from "react";
import { useCartStoreSelector } from "../store/cart-store";

const CartItem = ({ img, title, id, price, amount }) => {
  const increment = useCartStoreSelector.use.increment()
  const decrement = useCartStoreSelector.use.decrement()
  const removeItem = useCartStoreSelector.use.removeItem()
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">Rs. {price}</h4>
        {/* remove button */}
        <button onClick={() => removeItem(id)} className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button onClick={() => increment(id)} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button onClick={() => decrement(id)} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
