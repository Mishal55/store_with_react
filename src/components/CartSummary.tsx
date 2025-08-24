import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  cartItems: CartItem[];
  onClearCart: () => void; // 👈 New prop to clear cart
}

const CartSummary: React.FC<Props> = ({ cartItems, onClearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // You can replace this with navigate('/checkout') or any real handler
  };

  return (
    <div className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto border border-muted">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">🛒 Your Cart Summary</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted-foreground text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center text-sm">
              <span className="font-medium text-foreground">
                {item.name} × {item.quantity}
              </span>
              <span className="text-right text-muted-foreground">
                Rs {item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-4 border-muted" />

          <div className="flex justify-between items-center font-semibold text-lg">
            <span className="text-foreground">Total</span>
            <span className="text-primary">Rs {total}</span>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleCheckout}
              className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium tracking-wide"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={onClearCart}
              className="flex-1 bg-muted text-foreground py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium tracking-wide border border-muted"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
