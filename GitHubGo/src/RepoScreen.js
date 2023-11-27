import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import AssetExample from './components/AssetExample';

export default function App() {
  // Sample data for the leaderboard
  const leaderboardData = [
    { rank: 1, name: 'Player 1', score: 150 },
    { rank: 2, name: 'Player 2', score: 120 },
    { rank: 3, name: 'Player 3', score: 100 },
    // Add more entries as needed
  ];

  // Sample data for the charts
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };    

  // Function to render each item in the leaderboard
  const renderLeaderboardItem = ({ item }) => (
    <View style={styles.leaderboardItem}>
      <Text style={styles.leaderboardRank}>{item.rank}</Text>
      <Text style={styles.leaderboardName}>{item.name}</Text>
      <Text style={styles.leaderboardScore}>{item.score}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Leaderboard Title */}
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>

        {/* Leaderboard List */}
        <FlatList
          data={leaderboardData}
          renderItem={renderLeaderboardItem}
          keyExtractor={(item) => item.rank.toString()}
        />
      </View>

      {/* Repository Section */}
      <View style={styles.rightContainer}>
        {/* Repository Name */}
        <Text style={styles.repositoryTitle}>Repository Name</Text>

        {/* First Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Chart 1</Text>
          <BarChart
            data={chartData}
            width={300}
            height={200}
            yAxisLabel="Value"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>

        {/* Second Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Chart 2</Text>
          <BarChart
            data={chartData}
            width={300}
            height={200}
            yAxisLabel="Value"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
  rightContainer: {
    flex: 2,
    padding: 8,
    backgroundColor: '#ecf0f1',
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leaderboardRank: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaderboardName: {
    flex: 1,
    marginLeft: 8,
  },
  leaderboardScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repositoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
