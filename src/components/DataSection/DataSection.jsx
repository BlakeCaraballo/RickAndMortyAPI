import React, { useState, useMemo } from 'react';
import Card from '../Card/Card'; 
import styles from './DataSection.module.css';

const DataSection = ({ characters }) => {
  const [sortOption, setSortOption] = useState('name'); // Default sort by name
  const [filterOption, setFilterOption] = useState('all'); // Default filter is 'all' statuses

  // Sorting Function
  const sortCharacters = (characters, sortOption) => {
    if (sortOption === 'name') {
      return [...characters].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'date') {
      return [...characters].sort((a, b) => new Date(b.created) - new Date(a.created)); // Newest to oldest
    } else {
      return characters; // No sorting
    }
  };

  // Filtering Function
  const filterCharacters = (characters, filterOption) => {
    if (filterOption === 'all') {
      return characters;
    } else {
      return characters.filter(character => character.status === filterOption);
    }
  };

  // Apply sorting and filtering
  const sortedAndFilteredCharacters = useMemo(() => {
    const filtered = filterCharacters(characters, filterOption);
    return sortCharacters(filtered, sortOption);
  }, [characters, sortOption, filterOption]);

  return (
    <section className={styles.dataSection}>
      <div className={styles.controls}>
        {/* Sorting Options */}
        <label>Sort by:</label>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="name">Name (A-Z)</option>
          <option value="date">Date Created (Newest)</option>
        </select>

        {/* Filtering Options */}
        <label>Filter by Status:</label>
        <select onChange={(e) => setFilterOption(e.target.value)} value={filterOption}>
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={styles.cards}>
        {sortedAndFilteredCharacters.length === 0 ? (
          <p>No characters found</p> // Message for no characters found
        ) : (
          sortedAndFilteredCharacters.map(character => (
            <Card key={character.id} character={character} />
          ))
        )}
      </div>
    </section>
  );
};

export default DataSection;