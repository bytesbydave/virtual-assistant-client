const ProductInfo = ({ name, rating, description }) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>{name}</h1>
      <div className='flex items-center mt-2'>
        <div className='flex items-center'>
          <span className='text-yellow-400 text-xl'>★</span>
          <span className='ml-1'>{rating}</span>
        </div>
      </div>
      <p className='text-gray-600 mt-4'>{description}</p>
    </div>
  );
};

export default ProductInfo;
