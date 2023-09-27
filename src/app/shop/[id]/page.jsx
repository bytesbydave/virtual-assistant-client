'use client';

import { useState } from 'react';
import ProductImageCarousel from './productImageCarousel';
import ProductInfo from './productInfo';
import ColorOptions from './colorOptions';
import SizeOptions from './sizeOptions';
import AddToCartButton from './addToCartButton';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  // Dummy data
  const product = {
    name: 'Product Name',
    rating: 4.5,
    description: 'Product description goes here',
  };

  const colors = ['red', 'black', 'green']; // Add your colors
  const sizes = ['Small', 'Medium', 'Large']; // Add your sizes

  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ProductImageCarousel
          imageSrc={
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
          }
        />
        <div>
          <ProductInfo {...product} />
          <ColorOptions
            colors={colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
          <SizeOptions
            sizes={sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
          <AddToCartButton onClick={() => alert('Added to cart')} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
