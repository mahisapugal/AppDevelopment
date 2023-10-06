// Home.js
import React from 'react';
import Product from './Product';
import Cart from './Cart';
import './Home.css'; // Import the CSS file

const Home = () => {
  const backgroundImageUrl = 'i.jpg'; // Replace with the actual URL of your background image
  const products = [
    {
      id: 1,
      name: 'Diamond Cleaning',
      description: 'Specialized cleaning refers to tasks that require specific skills, equipment, or kn.',
      price: 10.0,
      image: 'https://www.example.com/product1.jpg', // Specify the image URL for Product 1
    },
    {
      id: 2,
      name: 'Gold cleaning',
      description: ' It includes tasks such as scrubbing, disinfecting, and cleaning hard-to-reach rio',
      price: 15.0,
      image: 'https://www.example.com/product2.jpg', // Specify the image URL for Product 2
    },
    {
      id: 3,
      name: 'Silver cleaning',
      description: ' Light cleaning involves basic and routine tasks to maintain cleanliness. It includ',
      price: 15.0,
      image: 'https://www.example.com/product3.jpg', // Specify the image URL for Product 3
    },
  ];

  // Group products by their ID
  const groupedProducts = {};
  products.forEach((product) => {
    if (!groupedProducts[product.id]) {
      groupedProducts[product.id] = [];
    }
    groupedProducts[product.id].push(product);
  });

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {Object.keys(groupedProducts).map((productId) => (
        <div className='p' key={productId}>
          <h1>category of cleaning {productId}</h1>
          <div className="product-container">
            {groupedProducts[productId].map((product) => (
              <Product
                key={product.id}
                product={product}
                image={product.image}
              />
            ))}
          </div>
        </div>
      ))}
      <Cart />
    </div>
  );
};

export default Home;