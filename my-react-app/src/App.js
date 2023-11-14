// App.js
import React, { useState } from 'react';
import SearchScreen from './SearchScreen';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchText) => {
    setSearchResults([searchText]);
  };

  return (
    <div style={styles.appContainer}>
      {/* Display SearchScreen and pass the handleSearch function */}
      <SearchScreen onSearch={handleSearch} />

      {/* Display search results in a GitHub repository format */}
      <div style={styles.resultsContainer}>
        <h2 style={styles.resultsTitle}>Search Results:</h2>
        {searchResults.map((result, index) => (
          <div key={index} style={styles.repositoryCard}>
            <h3 style={styles.repositoryName}>{result}</h3>
            <p style={styles.repositoryDescription}>
              This is a sample description for the repository.
            </p>
            <button style={styles.viewButton}>View Repository</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
  resultsContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  repositoryCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'left',
  },
  repositoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  repositoryDescription: {
    fontSize: 16,
    marginBottom: '8px',
    color: '#555',
  },
  viewButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;