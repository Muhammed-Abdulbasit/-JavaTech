import React, { useState } from 'react';

export const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setSearchResults([searchText]);
  };

  return (
    <div style={styles.appContainer}>
      {/* Display SearchScreen and pass the handleSearch function */}
      <div style={styles.container}>
        <h1 style={styles.title}>Search Screen</h1>
        <input
          type="text"
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

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
    background: 'linear-gradient(to bottom, #333333, #666666)',
    color: '#ffffff', // Text color for better visibility on the gradient background
  },
  resultsContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007BFF', // Title color changed to the same blue as the button
  },
  repositoryCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'left',
    background: '#444444', // Adjusted card background color
  },
  repositoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  repositoryDescription: {
    fontSize: 16,
    marginBottom: '8px',
  },
  viewButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  container: {
    textAlign: 'center',
    paddingTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3399FF',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

