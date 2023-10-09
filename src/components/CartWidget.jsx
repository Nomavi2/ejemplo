// src/components/CartWidget.js

function CartWidget() {
  const cartCount = 0;

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
}

export default CartWidget;
