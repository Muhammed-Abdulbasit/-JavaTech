// src/App.js

import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './App.css';

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
    { rank: 1, name: 'Player 1', score: 150 },
    { rank: 2, name: 'Player 2', score: 120 },
    { rank: 3, name: 'Player 3', score: 100 },
    // Add more entries as needed
  ];

  return (
    <div className="container">
      <h1 className="text">Hello, this is a simple text screen with charts and a leaderboard!</h1>
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
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr key={player.rank}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = `
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .text {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 16px;
  }

  .chart-container {
    margin-top: 16px;
  }

  .leaderboard-container {
    margin-top: 32px;
  }

  .leaderboard-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
  }

  .leaderboard-table th,
  .leaderboard-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default RepoScreen;
