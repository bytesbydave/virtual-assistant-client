import Link from 'next/link';
import Image from 'next/image';

const GiphyList = ({ giphys }) => {
  const renderedGif = giphys.map((gif) => {
    return (
      <div className='image-container' key={gif.id}>
        <Link href={{ pathname: `/giphy/${gif.id}` }}>
          <Image
            alt={gif.title}
            src={gif.images.fixed_width.webp}
            width={gif.images.fixed_width.width}
            height={gif.images.fixed_width.height}
          />
        </Link>
      </div>
    );
  });
  return <div className='gif-grid'>{renderedGif}</div>;
};

export default GiphyList;
