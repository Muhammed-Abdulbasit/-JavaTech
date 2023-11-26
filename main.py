import requests
import matplotlib.pyplot as plt
from config import GITHUB_TOKEN

headers = {
    'Authorization': f'{GITHUB_TOKEN}'
}

def fetch_commit_history(username, repo_name):
    response = requests.get(f'https://api.github.com/repos/{username}/{repo_name}/commits', headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data  # Return the commit data
    else:
        print(f'Failed to retrieve commit history for repo: {repo_name}')
        return []

def main():
    username = 'daredevilx616'

    response = requests.get(f'https://api.github.com/users/{username}/repos', headers=headers)
    if response.status_code == 200:
        data = response.json()

        total_commits_over_time = {}  # Accumulate total commits over time
        commits_per_repo = {}  # Accumulate total commits per repository

        for repo in data:
            repo_name = repo['name']
            commit_data = fetch_commit_history(username, repo_name)

            # Count total commits over time
            for commit in commit_data:
                commit_date = commit['commit']['author']['date']
                commit_date = commit_date[:10]  # Extract the date part

                if commit_date in total_commits_over_time:
                    total_commits_over_time[commit_date] += 1
                else:
                    total_commits_over_time[commit_date] = 1

            # Count total commits per repository
            commits_per_repo[repo_name] = len(commit_data)

        # Graph 1: Total Commits over Time
        sorted_data = dict(sorted(total_commits_over_time.items()))
        x = list(sorted_data.keys())
        y = list(sorted_data.values())

        plt.figure(figsize=(10, 6))
        plt.subplot(2, 1, 1)  # Two rows, one column, first plot
        plt.plot(x, y, marker='o', linestyle='-')
        plt.xlabel('Date')
        plt.ylabel('Total Commits')
        plt.title(f'Total Commit History for {username}')
        plt.xticks(rotation=45)

        # Graph 2: Commits per Repository
        repo_names = list(commits_per_repo.keys())
        commit_counts = list(commits_per_repo.values())

        plt.subplot(2, 1, 2)  # Two rows, one column, second plot
        plt.bar(repo_names, commit_counts)
        plt.xlabel('Repository')
        plt.ylabel('Total Commits')
        plt.title('Commits per Repository')
        plt.xticks(rotation=45)

        plt.tight_layout()
        plt.show()

    else:
        print('Failed to retrieve data from GitHub API' + response.text)

if __name__ == '__main__':
    main()
