const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className='w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
      onClick={onClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
