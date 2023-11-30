// UserDescription.js
import React from 'react';
import { Header } from './Header';

export const UserDescription = () => {
  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub Go</h1>
      <div style={styles.card}>
        <div style={styles.programmerCard}>
          <h2>programmersyed</h2>
          <p>
            Programmersyed is a senior developer at Microsoft with years of experience in software development. He specializes in creating innovative solutions and is passionate about coding, problem-solving, and staying up-to-date with the latest technologies.
          </p>
        </div>
        <div style={styles.activityCard}>
          <h2>User Activity</h2>
          <p>
            Programmersyed committed 36 lines of code to Bing. Check out their recent activity on GitHub.
          </p>
          <hr />
          <p>
            In their latest commit, Programmersyed made significant contributions, committing 100 lines of code to another repository.
          </p>
        </div>
        <button style={styles.button} onClick={() => console.log('Change Description')}>
          Change Description
        </button>
        <button style={styles.button} onClick={() => console.log('Log Out')}>
          Log Out
        </button>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    width: '80%',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  programmerCard: {
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    border: '1px solid black',
  },
  activityCard: {
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    border: '1px solid black',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
