import Link from 'next/link';

const GiphyList = ({ giphys }) => {
  const renderedGif = giphys.map((gif) => {
    console.log(gif);
    return (
      <div className='image-container' key={gif.id}>
        <Link href={{ pathname: `/giphy/${gif.id}`, query: gif }}>
          <img
            alt={gif.images.title}
            src={gif.images.fixed_height_downsampled.url}
          />
        </Link>
      </div>
    );
  });
  return <div className='gif-grid'>{renderedGif}</div>;
};

export default GiphyList;
