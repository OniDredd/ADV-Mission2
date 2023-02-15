import React, { useState } from 'react';
import axios from 'axios';
import styles from './BingSearch.module.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/search?q=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.form_container}>
      <h1 className={styles.search_heading}>Search Turners Cars down below.</h1>
      <form onSubmit={handleSubmit}>
        <input className={styles.search} type="text" value={searchTerm} placeholder='Write search in here' onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <a href={result.url}>{result.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Search;