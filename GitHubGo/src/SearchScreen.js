import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import './SearchScreen.css';

export const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${searchText}`);
      const repoData = await repoResponse.json();

      // Limit to the first 10 repositories
      const first10Repos = repoData.items.slice(0, 1);

      // Fetch commit data for each repository
      const repositoriesWithCommits = await Promise.all(
        first10Repos.map(async (repo) => {
          const commitsResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`);
          const commitsData = await commitsResponse.json();

          // Group commits by author
          const commitsByAuthor = {};
          commitsData.forEach((commit) => {
            const authorLogin = commit.author ? commit.author.login : 'Unknown';
            commitsByAuthor[authorLogin] = (commitsByAuthor[authorLogin] || 0) + 1;
          });

          // Convert to an array of { author, commits } objects
          const leaderboard = Object.entries(commitsByAuthor).map(([author, commits]) => ({
            author,
            commits,
          }));

          return {
            ...repo,
            commits: leaderboard,
          };
        })
      );

      setSearchResults(repositoriesWithCommits);
    } catch (error) {
      console.error('Failed to retrieve data from GitHub API:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <h1 className="title">Search Screen</h1>
        <input
          id="inp"
          type="text"
          placeholder="Search for a repository"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>

        <div className="results-container">
          <h2 className="results-title">Search Results:</h2>
          {searchResults.map((result) => (
            <div key={result.id} className="repository-card">
              <h3 className="repository-name">{result.name}</h3>
              <p className="repository-description">
                {result.description || 'No description available'}
              </p>
              <h4>Commit Leaderboard:</h4>
              <ul>
                {result.commits.map((entry, index) => (
                  <li key={index}>
                    {entry.author}: {entry.commits} commits
                  </li>
                ))}
              </ul>
              <Link to="/RepoScreen" className="view-button">
                View Repository
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
