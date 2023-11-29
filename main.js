const fetch = require('node-fetch');
const GITHUB_TOKEN = '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'; // Replace with your GitHub token
const username = 'farsoomrohan';

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`
};

async function fetchData() {
  try {
    // Fetch user repositories
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
    const repoData = await repoResponse.json();
    
    console.log('User Repositories:', repoData);

    for (const repo of repoData) {
      const repoName = repo.name;
      const repoUrl = `https://api.github.com/repos/${username}/${repoName}`;

      // Print repository name and URL
      console.log(`Repository: ${repoName}`);
      console.log(`API URL: ${repoUrl}`);

      // Fetch and print raw commit history data
      const commitResponse = await fetch(repoUrl, { headers });
      if (commitResponse.ok) {
        const commitData = await commitResponse.json();
        console.log(`Commit history for ${repoName}:\n`, commitData);
      } else {
        console.log(`Failed to retrieve commit history for repo: ${repoName}`);
      }

      console.log('-'.repeat(50)); // Separator between repositories
    }
  } catch (error) {
    console.error('Failed to retrieve data from GitHub API:', error);
  }
}

fetchData();
