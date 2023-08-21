'use client';
// import SearchBar from '../components/searchbar/page';
// import GiphyList from '../components/giphylist/page';
// // import Loading from '../loading';
// // import Error from '../error';

import giphy from '../apis/giphy';
// import React, { useState, useEffect } from 'react';
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query';

// const queryClient = new QueryClient();
// const Giphy = () => {
// const all = useQuery(
//   ['giphys'], // Unique query key based on searchTerm
//   async () => {
//     // if (!searchTerm) return []; // Don't fetch if searchTerm is empty

//     const response = await giphy.get('/v1/gifs/search', {
//       params: {
//         q: searchTerm,
//       },
//     });
//     return response.data.data;
//   }
// );

//   console.log('hi', all);

//   // const onSearchSubmit = (term) => {
//   //   // Update the searchTerm and invalidate the query
//   //   setSearchTerm(term);
//   //   queryClient.invalidateQueries(['giphys', term]);
//   // };

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (isError) {
//   //   return <div>Error: {error.message}</div>;
//   // }

//   return (
//     <div>
//       <div>
//         {/* <SearchBar onSubmit={onSearchSubmit} />
//         <GiphyList giphys={giphys} /> */}
//       </div>
//     </div>
//   );
// };
// export default Giphy;

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Giphy() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['giphys'],
    queryFn: async () => {
      const response = await giphy.get('/v1/gifs/search', {
        params: {
          q: 'hello',
        },
      });
      return response.data.data;
    },
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
   
    </div>
  );
}
