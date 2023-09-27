'use client';

import { useState } from 'react';
import ProductImageCarousel from './ProductImageCarousel';
import ProductInfo from './ProductInfo';
import ColorOptions from './ColorOptions';
import SizeOptions from './SizeOptions';
import AddToCartButton from './AddToCartButton';

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
