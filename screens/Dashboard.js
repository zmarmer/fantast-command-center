import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const MOCK_LEAGUES = [
  {
    name: 'Sleeper Dynasty',
    yourTeam: 'The Blitzers',
    score: 108.4,
    proj: 132.9,
    oppTeam: 'Gridiron Gang',
    oppScore: 104.6,
    oppProj: 129.1,
    playing: 5,
    remaining: 3
  },
  {
    name: 'ESPN Redraft',
    yourTeam: 'Denver Dawgs',
    score: 96.2,
    proj: 115.7,
    oppTeam: 'Chubb Club',
    oppScore: 101.4,
    oppProj: 121.2,
    playing: 3,
    remaining: 5
  }
];

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projected Record: 1–1</Text>
      <Text style={styles.sub}>Best Performance: The Blitzers (108.4)</Text>
      <Text style={styles.sub}>Closest Matchup: Denver Dawgs vs Chubb Club</Text>

      {MOCK_LEAGUES.map((league, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.leagueName}>{league.name}</Text>
          <Text style={styles.score}>
            {league.yourTeam}: {league.score.toFixed(1)} ({league.proj.toFixed(1)})
          </Text>
          <Text style={styles.score}>
            {league.oppTeam}: {league.oppScore.toFixed(1)} ({league.oppProj.toFixed(1)})
          </Text>
          <Text style={styles.status}>
            Playing: {league.playing} | Yet to Play: {league.remaining}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },
  sub: {
    color: '#ccc',
    marginBottom: 6
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  leagueName: {
    color: '#00ff88',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6
  },
  score: {
    color: '#fff',
    fontSize: 14
  },
  status: {
    marginTop: 6,
    color: '#aaa',
    fontSize: 12
  }
});
