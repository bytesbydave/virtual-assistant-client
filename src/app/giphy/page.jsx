'use client';
import SearchBar from '../components/searchbar/page';
import GiphyList from '../components/giphylist/page';

import giphy from '../apis/giphy';
import { useState, useRef, useEffect } from 'react';

const Giphy = () => {
  const [giphys, setGiphys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSearchSubmit = async (term) => {
    setIsLoading(true);
    try {
      const response = await giphy.get('/v1/gifs/search', {
        params: {
          q: term,
        },
      });
      setGiphys(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return (
    <div>
      <div>
        <SearchBar onSubmit={onSearchSubmit} />
        <GiphyList giphys={giphys} />
      </div>
    </div>
  );
};

export default Giphy;
