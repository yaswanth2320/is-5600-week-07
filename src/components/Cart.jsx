// Cart.js
import React, { useContext } from 'react';
import { useCart } from '../state/CartProvider';
import PurchaseForm from './PurchaseForm';

const Cart = () => {
@@ -7,61 +9,37 @@ const Cart = () => {
  const removeFromCart = () => {};
  const updateItemQuantity = () => {};
  const getCartTotal = () => {};
  const { cartItems, removeFromCart, updateItemQuantity, getCartTotal } = useCart();

  return (
    <div className="center mw7 mv4">
      <div className="bg-white pa3 mb3">
        <h2 className="f2 mb2">Cart</h2>
        <table className="w-100 ba pa2">
          <thead>
            <tr>
              <th className="tl pv2">Product</th>
              <th className="tr pv2">Quantity</th>
              <th className="tr pv2">Price</th>
              <th className="tr pv2">Action</th>
@@ -22,20 +20,20 @@ const Cart = () => {
            </tr>
          </thead>
          <tbody>
            {cartItems && cartItems.map((item) => (
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td className="tl pv2">{item.description}</td>
                <td className="tr pv2">
                  <a
                    className="pointer ba b--black-10 pv1 ph2 mr2"
                    onClick={() => updateItemQuantity(item._id, -1)}
                    onClick={() => updateItemQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </a>
                  {item.quantity}
                  <a
                    className="pointer ba b--black-10 pv1 ph2 ml2"
                    onClick={() => updateItemQuantity(item._id, 1)}
                    onClick={() => updateItemQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </a>
                </td>
                <td className="tr pv2">${item.price * item.quantity}</td>
                <td className="tr pv2">
                  <a
                    className="pointer ba b--black-10 pv1 ph2"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tr f4 mv3">
          Total: ${getCartTotal().toFixed(2)}
        </div>
      </div>
      <div className="flex justify-end pa3 mb3">
        <PurchaseForm />
      </div>
    </div>
@@ -64,4 +62,4 @@ const Cart = () => {
  );
};

export default Cart;
export default Cart;