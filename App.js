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

      {/* Display search results */}
      <div style={styles.resultsContainer}>
        <h2 style={styles.resultsTitle}>Search Results:</h2>
        {searchResults.map((result, index) => (
          <p key={index} style={styles.resultText}>
            {result}
          </p>
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
  resultText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
};

export default App;
