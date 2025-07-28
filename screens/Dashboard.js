import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Fantasy Command Center</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highest Score</Text>
        <Text style={styles.score}>145.2 - Team Juggernaut</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Closest Matchup</Text>
        <Text style={styles.score}>112.8 vs 112.4 — Thanos vs Lucky Duck</Text>
      </View>

      <Text style={styles.subHeader}>Your Leagues</Text>

      <View style={styles.leagueCard}>
        <Text style={styles.leagueName}>Sleeper League</Text>
        <Text style={styles.matchup}>You: 108.6 (proj 125) vs Rival: 117.3 (proj 120)</Text>
        <Text style={styles.players}>Playing: 4 | Yet to Play: 3</Text>
      </View>

      <View style={styles.leagueCard}>
        <Text style={styles.leagueName}>Fantrax Dynasty</Text>
        <Text style={styles.matchup}>You: 92.3 (proj 105) vs Top Dog: 134.1 (proj 140)</Text>
        <Text style={styles.players}>Playing: 3 | Yet to Play: 5</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    flex: 1
  },
  header: {
    color: '#00ff88',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24
  },
  subHeader: {
    color: '#fff',
    fontSize: 20,
    marginTop: 32,
    marginBottom: 12
  },
  section: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  score: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 4
  },
  leagueCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  leagueName: {
    color: '#00ff88',
    fontSize: 18,
    fontWeight: 'bold'
  },
  matchup: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4
  },
  players: {
    color: '#888',
    fontSize: 14,
    marginTop: 2
  }
});

export default Dashboard;
