import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GitHub Go</Text>
        </View>
        <Card style={styles.programmerCard}>
          <Title>programmersyed</Title>
          <Paragraph>
            Programmersyed is a senior developer at Microsoft with years of experience in software development. He specializes in creating innovative solutions and is passionate about coding, problem-solving, and staying up-to-date with the latest technologies.
          </Paragraph>
        </Card>
        <Card style={styles.activityCard}>
          <Title>User Activity</Title>
          <Paragraph>
            Programmersyed committed 36 lines of code to Bing. Check out their recent activity on GitHub.
          </Paragraph>
          <Divider />
          <Paragraph>
            In their latest commit, Programmersyed made significant contributions, committing 100 lines of code to another repository.
          </Paragraph>
        </Card>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Change Description')}>
          Change Description
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Log Out')}>
          Log Out
        </Button>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    elevation: 4,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  programmerCard: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  activityCard: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    marginVertical: 10,
  },
});