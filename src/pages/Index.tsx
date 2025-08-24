import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';
import CartSummary from '@/components/CartSummary';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Navigation cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <Hero />
        <ProductGrid addToCart={addToCart} />
       <CartSummary
  cartItems={cartItems}
  onClearCart={() => setCartItems([])} // 👈 Clears the cart
/>

        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
