import React, { useState } from 'react';

export const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${searchText}`);
      const repoData = await repoResponse.json();

      setSearchResults(repoData.items || []);
    } catch (error) {
      console.error('Failed to retrieve data from GitHub API:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #333333, #666666)',
      color: '#ffffff',
    },
    // ... (other styles remain unchanged)
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Search Screen</h1>
        <input
          type="text"
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      <div style={styles.resultsContainer}>
        <h2 style={styles.resultsTitle}>Search Results:</h2>
        {searchResults.map((result) => (
          <div key={result.id} style={styles.repositoryCard}>
            <h3 style={styles.repositoryName}>{result.name}</h3>
            <p style={styles.repositoryDescription}>
              {result.description || 'No description available'}
            </p>
            <a href={result.html_url} target="_blank" rel="noopener noreferrer" style={styles.viewButton}>
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
