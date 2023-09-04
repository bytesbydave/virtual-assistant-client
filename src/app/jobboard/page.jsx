'use client';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 123732482,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjM3MzI0ODI=',
    name: 'redux-toolkit',
    full_name: 'reduxjs/redux-toolkit',
    private: false,
  },
  {
    id: 147279560,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDcyNzk1NjA=',
    name: 'react-redux-benchmarks',
    full_name: 'reduxjs/react-redux-benchmarks',
    private: false,
  },
  {
    id: 36535156,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNjUzNTE1Ng==',
    name: 'redux',
    full_name: 'reduxjs/redux',
    private: false,
  },
  {
    id: 38366638,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODM2NjYzOA==',
    name: 'reselect',
    full_name: 'reduxjs/reselect',
    private: false,
  },
  {
    id: 38565895,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODU2NTg5NQ==',
    name: 'redux-devtools',
    full_name: 'reduxjs/redux-devtools',
    private: false,
  },
  {
    id: 38934449,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODkzNDQ0OQ==',
    name: 'react-redux',
    full_name: 'reduxjs/react-redux',
    private: false,
  },
  {
    id: 39013909,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTAxMzkwOQ==',
    name: 'redux-thunk',
    full_name: 'reduxjs/redux-thunk',
    private: false,
  },
  {
    id: 40987432,
    node_id: 'MDEwOlJlcG9zaXRvcnk0MDk4NzQzMg==',
    name: 'd3-state-visualizer',
    full_name: 'reduxjs/d3-state-visualizer',
    private: false,
  },
  {
    id: 42887995,
    node_id: 'MDEwOlJlcG9zaXRvcnk0Mjg4Nzk5NQ==',
    name: 'redux-devtools-chart-monitor',
    full_name: 'reduxjs/redux-devtools-chart-monitor',
    private: false,
  },
  {
    id: 44984114,
    node_id: 'MDEwOlJlcG9zaXRvcnk0NDk4NDExNA==',
    name: 'redux-mock-store',
    full_name: 'reduxjs/redux-mock-store',
    private: false,
  },
];

const JobBoard = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://api.github.com/orgs/reduxjs/repos'
  //       );
  //       const json = await response.json();
  //       setFilteredData(json);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Sorting function
  const sortData = (property) => {
    const sorted = filteredData.sort((a, b) => a[property] - b[property]);
    setFilteredData(sorted);
    setSortBy(property);
  };

  // Filtering function
  const filterData = (criteria) => {
    const filtered = data.filter((item) => item.name === criteria);
    setFilteredData(filtered);
  };

  // Dropdown filter
  const handleDropdownChange = (e) => {
    const selectedCriteria = e.target.value;
    if (selectedCriteria === 'All') {
      setFilteredData(data);
    } else {
      filterData(selectedCriteria);
    }
  };

  return (
    <div>
      <label>
        Filter by name:
        <select onChange={handleDropdownChange}>
          <option value='All'>All</option>
          <option value='redux'>redux</option>
          <option value='reselect'>reselect</option>
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th onClick={() => sortData('id')}>
              ID {sortBy === 'id' ? '▲' : ''}
            </th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobBoard;
