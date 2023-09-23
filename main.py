import requests
from config import GITHUB_TOKEN

headers = {
    'Authorization' : f'{GITHUB_TOKEN}'
}
username = 'daredevilx616'

response = requests.get(f'https://api.github.com/users/{username}/repos', headers=headers)
if response.status_code == 200:
    data = response.json()
    for repo in data:
        print(repo['name'])
else:
    print('Failed to retrieve data from GitHub API')