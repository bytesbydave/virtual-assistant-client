'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import giphy from '../../apis/giphy';
import Loading from '../../loading';
import Error from '../../error';

const generateGiphyDetails = (gif) => {
  const giphyDetails = {
    avatar: gif.user?.avatar_url || '',
    displayName: gif.user?.display_name || 'N/A',
    profileUrl: gif.user?.profile_url || '',
    title: gif.title,
    url: gif.url,
    mp4: gif.images.original.mp4,
    width: gif.images.original.width,
    height: gif.images.original.height,
    frames: gif.images.original.frames,
  };
  return giphyDetails;
};

const GiphyDetail = ({ params }) => {
  const [giphyDetails, setGiphyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = params;

  useEffect(() => {
    async function fetchGiphyData() {
      setIsLoading(true);
      try {
        const response = await giphy.get('/v1/gifs', {
          params: {
            ids: id,
          },
        });
        setGiphyDetails(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchGiphyData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  if (giphyDetails.length > 0) {
    const details = generateGiphyDetails(giphyDetails[0]);
    const {
      avatar,
      displayName,
      profileUrl,
      title,
      url,
      mp4,
      width,
      height,
      frames,
    } = details;
    return (
      <div>
        <video width={width} height={height} autoPlay muted loop>
          <source src={mp4} type='video/mp4' />
        </video>
        <div>
          <Link href={url} target='_blank'>
            <p>{`Title: ${title}`}</p>
          </Link>
        </div>
        <div>
          <p>{`Height: ${height}, Width: ${width}, Frames: ${frames}`}</p>
        </div>

        <div>
          {avatar ? (
            <Image alt={displayName} src={avatar} width='100' height='100' />
          ) : (
            <p>{`No Avatar Available`}</p>
          )}
        </div>
        <div>
          {profileUrl ? (
            <Link href={profileUrl} target='_blank'>
              <p>{`User: ${displayName}`}</p>
            </Link>
          ) : (
            <p>{`User: ${displayName}`}</p>
          )}
        </div>
      </div>
    );
  }
  return <div>No gif available</div>;
};

export default GiphyDetail;
