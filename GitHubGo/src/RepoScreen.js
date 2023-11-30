// RepoScreen.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Header } from './Header';
import './RepoScreen.css'; // Import the CSS file

export const RepoScreen = () => {
  useEffect(() => {
    // Data for the charts
    const chartData1 = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [4, 6, 5, 7, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    const chartData2 = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Dataset 2',
          data: [2, 1, 3, 2, 1],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Options for the charts
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Get the chart canvas elements
    const chartCanvas1 = document.getElementById('myChart1');
    const chartCanvas2 = document.getElementById('myChart2');

    // Create two new charts
    const myChart1 = new Chart(chartCanvas1, {
      type: 'line',
      data: chartData1,
      options: options,
    });

    const myChart2 = new Chart(chartCanvas2, {
      type: 'line',
      data: chartData2,
      options: options,
    });

    // Cleanup the charts when the component is unmounted
    return () => {
      myChart1.destroy();
      myChart2.destroy();
    };
  }, []);

  // Leaderboard data
  const leaderboardData = [
    { rank: 1, name: 'Contributor 1', Commits: 20 },
    { rank: 2, name: 'Contributor 2', Commits: 17 },
    { rank: 3, name: 'Contributor 3', Commits: 8 },
    // Add more entries as needed
  ];

  return (
    <div>
      <Header />
      <div className="repoContainer">
        <h1 className="text">Commit chart</h1>
        <div className="chart-container">
          <canvas id="myChart1" width="400" height="200"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="myChart2" width="400" height="200"></canvas>
        </div>
        <div className="leaderboard-container">
          <h2>Leaderboard</h2>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Commits</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr key={player.rank}>
                  <td>{player.rank}</td>
                  <td>{player.name}</td>
                  <td>{player.Commits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/SearchScreen" className="search-again-button">Search Again</Link>
      </div>
    </div>
  );
};

export default RepoScreen;
