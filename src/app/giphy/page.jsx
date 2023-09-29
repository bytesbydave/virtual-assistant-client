'use client';

import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const GifItem = ({ gif }) => {
  console.log(gif);
  return (
    <div>
      <img src={gif.images.original.url} alt={gif.title} />
    </div>
  );
};

const GifList = ({ gifs }) => {
  return (
    <div>
      {gifs.map((gif) => {
        return <GifItem key={gif.id} gif={gif} />;
      })}
    </div>
  );
};

const Giphys = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGifs = async (query) => {
    const apiKey = process.env.GIPHY_API_KEY;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Giphy Search</h1>
      <SearchBar onSearch={fetchGifs} />
      {loading ? <p>Loading</p> : <GifList gifs={gifs} />}
    </div>
  );
};

export default Giphys;
