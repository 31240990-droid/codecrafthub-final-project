import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Money Plant', price: 299, image: 'https://via.placeholder.com/150', description: 'Air purifying indoor plant' },
  { id: 2, name: 'Snake Plant', price: 499, image: 'https://via.placeholder.com/150', description: 'Low maintenance plant' },
  { id: 3, name: 'Peace Lily', price: 399, image: 'https://via.placeholder.com/150', description: 'Beautiful flowering plant' },
  { id: 4, name: 'Aloe Vera', price: 249, image: 'https://via.placeholder.com/150', description: 'Medicinal succulent plant' },
  { id: 5, name: 'Spider Plant', price: 349, image: 'https://via.placeholder.com/150', description: 'Easy to grow hanging plant' },
  { id: 6, name: 'Areca Palm', price: 599, image: 'https://via.placeholder.com/150', description: 'Tropical indoor palm' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
