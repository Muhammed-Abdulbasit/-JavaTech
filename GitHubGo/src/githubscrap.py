
import requests

def get_total_commits(user, repo, token):
    url = f"https://api.github.com/repos/{user}/{repo}/contributors"
    headers = {'Authorization': f'token {token}'}
    response = requests.get(url, headers=headers)
    data = response.json()
    commits_by_user = {contributor['login']: contributor['contributions'] for contributor in data}
    return commits_by_user
commits_by_user = get_total_commits('CSC-4350-FL2023', '-JavaTech', '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')
for user, commits in commits_by_user.items():
    print(f"{user}: {commits} commits")
