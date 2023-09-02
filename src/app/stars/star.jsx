import './star.css';

const Star = ({ fill }) => {
  return (
    <label className='star'>
      <svg
        width='58'
        height='58'
        viewBox='0 0 24 24'
        fill={fill}
        stroke='#393939'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
      </svg>
    </label>
  );
};

export default Star;
