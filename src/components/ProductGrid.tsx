import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewStars from '@/components/ReviewStars';

type ProductGridProps = {
  addToCart: (product: { id: number; name: string; price: number; quantity: number }) => void;
};

const products = [
  {
    id: 1,
    name: "Silk Midi Dress",
    price: 299,
    image: "/silk-midi-dress.jpg",
    category: "Dresses",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Cashmere Sweater",
    price: 189,
    image: "/cashmere-sweater.jpg",
    category: "Knitwear",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 449,
    image: "/leather-handbag.jpg",
    category: "Accessories",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 4,
    name: "Men's clothes",
    price: 499,
    image: "/wool-blazer.jpg",
    category: "Dresses",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 5,
    name: "Pearl neckless",
    price: 149,
    image: "/gold-necklace.jpg",
    category: "Jewelry",
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 6,
    name: "Suede Chelsea Boots",
    price: 259,
    image: "/designer-sneakers.jpg",
    category: "Footwear",
    rating: 4.7,
    reviews: 112,
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({ addToCart }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-muted mb-2">{product.category}</p>

            <ReviewStars rating={product.rating} reviewCount={0} />
            <p className="text-xs text-muted-foreground mb-4">{product.reviews} reviews</p>

            <Button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                })
              }
              className="w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
