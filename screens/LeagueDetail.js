import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LeagueDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>League Detail</Text>

      <View style={styles.matchupCard}>
        <Text style={styles.teamName}>You (Team Mayhem)</Text>
        <Text style={styles.score}>108.6 pts (Proj 125.2)</Text>
        <Text style={styles.players}>4 Playing | 3 Yet to Play</Text>
      </View>

      <View style={styles.matchupCard}>
        <Text style={styles.teamName}>Opponent (Gridiron Goats)</Text>
        <Text style={styles.score}>117.3 pts (Proj 120.8)</Text>
        <Text style={styles.players}>5 Playing | 2 Yet to Play</Text>
      </View>

      <Text style={styles.sectionTitle}>Top Performers</Text>
      <View style={styles.player}>
        <Text style={styles.playerName}>CeeDee Lamb</Text>
        <Text style={styles.playerPoints}>24.6 pts</Text>
      </View>
      <View style={styles.player}>
        <Text style={styles.playerName}>Josh Allen</Text>
        <Text style={styles.playerPoints}>22.1 pts</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ff88',
    marginBottom: 24
  },
  matchupCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  teamName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  score: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 4
  },
  players: {
    color: '#888',
    fontSize: 14,
    marginTop: 2
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 24,
    marginBottom: 8
  },
  player: {
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8
  },
  playerName: {
    color: '#00ff88',
    fontSize: 16
  },
  playerPoints: {
    color: '#fff',
    fontSize: 14
  }
});

export default LeagueDetail;
